/*
 * @Author: supbose 
 * @Date: 2018-03-19 13:45:11 
 * @Last Modified by: yiruan.wang Team
 * @Last Modified time: 2018-03-19 15:54:54
 */

<style lang="less" scoped>
  @import "./admin.less";
  .ad {
    float: right;
  }
</style>
<template>
  <div class="cloud">
    <Card span="24">
      <p slot="title">
        <i class="ivu-icon ivu-icon-ios-cloud-outline">云端采集资源数据库</i>
      </p>
      <a href="#" slot="extra" @click.prevent="addcloud">
        <Icon type="ios-cloud-upload"></Icon>
      </a>
      <div>
        <Row>
          <Col span="24" class="yz-left demo-spin-col">
          <Spin fix class="ivu-spin-fix" size="large" v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>数据加载中...</div>
          </Spin>
          <Table height="500" border :columns="cloudtable" no-data-text=" " :data="Serverdata">
          </Table>
          </Col>
        </Row>
      </div>
    </Card>
  </div>
</template>

<script>
  import expandRow from "./cloud-expand.vue";
  export default {
    name: "cloud",
    components: {
      expandRow
    },
    data() {
      this.$Message.config({
        top: 300,
        duration: 2
      });
      return {
        spinShow: true,
        cloudtable: [{
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
            title: "查看此资源",
            type: "expand",
            width: 100,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              });
            }
          },
          {
            title: "操作",
            width: 110,
            // fixed: "right",
            render: (h, params) => {
              return h("div", [
                h(
                  "Poptip", {
                    props: {
                      confirm: true,
                      title: "您确定要获取这条云数据到本地吗?",
                      transfer: true
                    },
                    on: {
                      "on-ok": () => {
                        this.obtain(params.index);
                      }
                    }
                  }, [
                    h(
                      "Button", {
                        style: {
                          // marginRight: "5px"
                        },
                        props: {
                          type: "warning",
                          size: "small",
                          placement: "top"
                        }
                      },
                      "获取此资源"
                    )
                  ]
                )
              ]);
            }
          }
        ],
        Serverdata: [],
        CloudService: {
          all: this.$store.state.config.cloud.all,
          obtain: this.$store.state.config.cloud.obtain
        },
        LocalService: {
          obtain: this.$store.state.config.local.url
        }
      };
    },
    mounted() {
      this.all();
    },
    methods: {
      obtain(index) {
        var cloudid = this.Serverdata[index].id;
        console.log("cloudid:" + cloudid);
        var _this = this;
        _this.spinShow = true;
        var params = new URLSearchParams();
        params.append("token", this.$store.state.config.cloud.token);
        params.append("id", cloudid);
        setTimeout(function() {
          _this.$axios
            .post(_this.CloudService.obtain, params, {
              withCredentials: false
            })
            .then(function(res) {
              console.log("res:" + JSON.stringify(res.data));
              if (res.data.state === "Success") {
                console.log("获取成功");
                _this.addlocaldata(res.data.data);
                // _this.spinShow = false;
              } else {
                _this.$Message.error("数据获取失败");
              }
            })
            .catch(function(error) {
              _this.$Message.error("网络链接失败");
              console.log(error);
            });
        }, 1000);
      },
      addlocaldata(obj) {
        var _this = this;
        console.log("开始添加");
        console.log(obj);
        console.log(obj[0].name);
        var params = new URLSearchParams();
        params.append("type", "add");
        params.append("name", obj[0].name);
        params.append("url", obj[0].url);
        params.append("urlsetup", obj[0].urlsetup);
        params.append("time", obj[0].time);
        params.append("content", obj[0].content);
        // console.log("params:" + params);
        // return;
        setTimeout(function() {
          _this.$axios
            .post(_this.LocalService.obtain, params, {
              withCredentials: false
            })
            .then(res => {
              // console.log("res:" + JSON.stringify(res));
              // _this.spinShow = false;
              if (res.data == "addNO") {
                _this.$Message.error("数据已经存在，不需要重复添加！");
                _this.spinShow = false;
              } else if (res.data == "okadd") {
                _this.$Message.success(
                  "成功从云端获取采集资源数据，并成功加入到本地资源库内！"
                );
                _this.spinShow = false;
              } else {
                _this.$Message.error("采集资源数据失败！");
                _this.spinShow = false;
              }
            })
            .catch(function(error) {
              _this.$Message.error("网络链接失败");
              _this.spinShow = false;
              console.log(error);
            });
        }, 2000);
      },
      addcloud() {
        console.log("添加云资源");
        this.$router.push({
          name: "cloudadd_index"
        });
      },
      all() {
        // console.log(this.$store.state.config.cloud.all);
        var _this = this;
        _this.spinShow = true;
        var params = new URLSearchParams();
        params.append("token", _this.$store.state.config.cloud.token);
        setTimeout(function() {
          _this.$axios
            .post(_this.CloudService.all, params, {
              withCredentials: false
            })
            .then(function(res) {
              // console.log("res:" + JSON.stringify(res.data));
              if (res.data.state === "Success") {
                _this.Serverdata = res.data.data;
                _this.spinShow = false;
              } else {
                _this.$Message.error("数据获取失败");
              }
            })
            .catch(function(error) {
              _this.$Message.error("网络链接失败");
              console.log(error);
            });
        }, 1000);
      }
    }
  };
</script>