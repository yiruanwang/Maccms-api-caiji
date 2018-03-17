<style lang="less" scoped>
@import "./admin.less";
</style>

<template>
  <div class="admin">
    <Row>
      <Col span="24" class="yz-col24">
      <h1>管理采集</h1>
      </Col>
      <Col span="24" class="yz-col24">
      <ButtonGroup>
        <Button type="ghost" icon="ios-plus-outline" @click="Adadd">添加本地库</Button>
        <Button type="ghost" icon="ios-cloud-outline" @click="Adcloud">从云端获取</Button>
      </ButtonGroup>
      </Col>
      <Col span="24" class="yz-left demo-spin-col">
      <Spin fix class="ivu-spin-fix" size="large" v-if="spinShow">
        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
        <div>数据加载中...</div>
      </Spin>
      <Table height="500" border :columns="columns1" no-data-text=" " :data="Admindata">
      </Table>
      </Col>
    </Row>
    <div>
      <modal v-model="modalshowview" width="560">
        <p slot="header" style="color:#f60;text-align:center">
          <span>{{showmodel.name}}</span>
        </p>
        <div style="text-align:left">
          <Form :model="showmodel" ref="showmodel" :rules="showmodelupdate" :label-width="85">
            <FormItem label="采集资源名称" prop="name">
              <Input type="text" v-model="showmodel.name" :disabled='isDisabled' placeholder="采集资源名称..."></Input>
            </FormItem>
            <FormItem label="自定采集地址" prop="url">
              <Input type="text" v-model="showmodel.url" :disabled='isDisabled' placeholder="自定采集地址..."></Input>
            </FormItem>
            <FormItem label="绑定采集地址" prop="urlsetup">
              <Input type="text" v-model="showmodel.urlsetup" :disabled='isDisabled' placeholder="绑定采集地址..."></Input>
            </FormItem>
            <FormItem label="定义采集时间" prop="time">
              <Input type="text" v-model="showmodel.time" :disabled='isDisabled' placeholder="定义采集时间..."></Input>
            </FormItem>
            <FormItem label="采集资源备注" prop="content">
              <Input type="textarea" :rows="4" v-model="showmodel.content" :disabled='isDisabled' placeholder="填写采集资源备注、说明..."></Input>
            </FormItem>
            <FormItem label="是否修改数据">
              <i-Switch size="large" v-model="switch1" @on-change="switch1change">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
              </i-Switch>
            </FormItem>
          </Form>
        </div>
        <div slot="footer">
          <div v-if="modelif">
            <i-button type="success" size="large" @click="modelsuccess">确定</i-button>
          </div>
          <div v-else>
            <Button type="primary" :loading="loadingupdate" icon="android-add-circle" @click="modelupdate('showmodel')">
              <span v-if="!loadingupdate">确认修改</span>
              <span v-else>Loading...</span>
            </Button>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    const validatename = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      }
      callback();
    };
    const validateurl = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      }
      callback();
    };
    const validateurlsetup = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      }
      callback();
    };
    const validatetime = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      }
      callback();
    };
    return {
      modalshowview: false,
      isDisabled: true,
      switch1: false,
      modelif: true,
      adname: "api资源名称",
      columns1: [
        {
          title: "资源ID",
          key: "id",
          width: 100
          // fixed: "left"
        },
        {
          title: "资源名",
          key: "name",
          width: 200
        },
        {
          title: "资源地址",
          key: "url"
        },
        {
          title: "操作",
          width: 238,
          // fixed: "right",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.adshow(params.index);
                    }
                  }
                },
                "详细"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.Adupdate(params.index);
                    }
                  }
                },
                "修改"
              ),

              h(
                "Poptip",
                {
                  props: {
                    confirm: true,
                    title: "您确定要删除这条数据吗?",
                    transfer: true
                  },
                  on: {
                    "on-ok": () => {
                      this.Adremove(params.index);
                    }
                  }
                },
                [
                  h(
                    "Button",
                    {
                      style: {
                        marginRight: "5px"
                      },
                      props: {
                        type: "warning",
                        size: "small",
                        placement: "top"
                      }
                    },
                    "删除"
                  )
                ]
              ),
              h(
                "Button",
                {
                  props: {
                    type: "info",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.Adtuichong(params.index);
                    }
                  }
                },
                "推崇到云"
              )
            ]);
          }
        }
      ],
      serverUrl: this.$store.state.config.local.url,
      Admindata: [],
      spinShow: true,
      showmodel: {
        id: "",
        name: "",
        url: "",
        urlsetup: "",
        time: "",
        conten: ""
        // switch: true
      },
      showmodelupdate: {
        name: [
          {
            validator: validatename,
            trigger: "blur"
          }
        ],
        url: [
          {
            validator: validateurl,
            trigger: "blur"
          }
        ],
        urlsetup: [
          {
            validator: validateurlsetup,
            trigger: "blur"
          }
        ],
        time: [
          {
            validator: validatetime,
            trigger: "blur"
          }
        ]
      },
      loadingupdate: false
    };
  },
  mounted() {
    // this.handleSpinCustom();
    this.AdselectJson();
  },
  methods: {
    spinHide() {
      this.spinShow = !this.spinShow;
    },
    AdselectJson: function() {
      var _this = this;
      _this.spinShow = true;
      var params = new URLSearchParams();
      params.append("type", "select");
      setTimeout(function() {
        _this.$axios
          .post(_this.serverUrl, params, {
            withCredentials: false
          })
          .then(function(res) {
            // console.log("res:" + JSON.stringify(res.data));
            _this.Admindata = res.data;
            _this.spinShow = false;
          })
          .catch(function(error) {
            _this.$Message.error("网络链接失败");
            console.log(error);
          });
      }, 1000);
    },
    modelsuccess() {
      this.modalshowview = false;
    },
    switch1change(status) {
      this.isDisabled = !this.isDisabled;
      this.modelif = !this.modelif;
      // this.$Message.info("开关状态：" + status);
    },
    modelupdate(name) {
      // console.log("修改模式");
      this.$refs[name].validate(valid => {
        var _this = this;
        _this.loadingupdate = true;
        if (valid) {
          var params = new URLSearchParams();
          params.append("type", "update");
          params.append("id", _this.showmodel.id);
          params.append("name", _this.showmodel.name);
          params.append("url", _this.showmodel.url);
          params.append("urlsetup", _this.showmodel.urlsetup);
          params.append("time", _this.showmodel.time);
          params.append("content", _this.showmodel.content);
          setTimeout(function() {
            _this.$axios
              .post(_this.serverUrl, params, {
                withCredentials: false
              })
              .then(res => {
                console.log("res:" + JSON.stringify(res.data));
                if (res.data == "okupdate") {
                  _this.AdselectJson();
                  _this.$Message.success("修改采集资源数据成功！");
                  _this.loadingupdate = false;
                  _this.modalshowview = false;
                  // _this.$refs[name].resetFields();
                } else {
                  _this.$Message.error("修改采集资源数据失败！");
                  _this.loadingupdate = false;
                }
              })
              .catch(function(error) {
                _this.$Message.error("网络链接失败");
                _this.loadingupdate = false;
                console.log(error);
              });
          }, 2000);
        } else {
          _this.$Message.error("操作失败");
          _this.loadingupdate = false;
        }
        // this.modalshowview = false;
      });
    },
    adshow(index) {
      var _this = this;
      console.log("浏览模式");
      this.modalshowview = true;
      _this.isDisabled = true;
      _this.modelif = true;
      _this.switch1 = true;
      this.showmodel.id = this.Admindata[index].id;
      this.showmodel.name = this.Admindata[index].name;
      this.showmodel.url = this.Admindata[index].url;
      this.showmodel.urlsetup = this.Admindata[index].urlsetup;
      this.showmodel.time = this.Admindata[index].time;
      this.showmodel.content = this.Admindata[index].content;
    },
    Adupdate(index) {
      var _this = this;
      console.log("修改模式");
      this.modalshowview = true;
      _this.isDisabled = false;
      _this.modelif = false;
      _this.switch1 = false;
      this.showmodel.id = this.Admindata[index].id;
      this.showmodel.name = this.Admindata[index].name;
      this.showmodel.url = this.Admindata[index].url;
      this.showmodel.urlsetup = this.Admindata[index].urlsetup;
      this.showmodel.time = this.Admindata[index].time;
      this.showmodel.content = this.Admindata[index].content;
    },
    Adremove(index) {
      var sid = this.Admindata[index].id;
      this.Admindata.splice(index, 1);
      console.log(sid);
      console.log("删除数据");
    },
    Adtuichong(index) {
      var sid = this.Admindata[index].id;
      // this.Admindata.splice(index, 1);
      console.log(sid);
    },
    Adcloud() {
      this.$router.push({
        name: "cloud_index"
      });
      console.log("Adcloud");
    },
    Adadd() {
      this.$router.push({
        name: "add_index"
      });
      console.log("add");
    }
  }
};
</script>
