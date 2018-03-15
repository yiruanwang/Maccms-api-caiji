<style lang="less" scoped>
@import "./admin.less";
</style>
<template>
    <div class="add">
        <Card span="24">
            <p slot="title">
                <Icon type="ios-plus-outline"></Icon>
                添加采集资源
            </p>
            <div>
                <Form :model="add" ref="add" :rules="addrules" :label-width="150">
                    <FormItem label="填写资源名称" prop="name">
                        <Input v-model="add.name" clearable placeholder="百万云"></Input>
                    </FormItem>
                    <FormItem label="自定义采集地址" prop="url">
                        <Input v-model="add.url" clearable placeholder="bwyun-apiurl-http://www.baiwanzy.com/inc/api.php"></Input>
                    </FormItem>
                    <FormItem label="绑定采集地址" prop="urlsetup">
                        <Input v-model="add.urlsetup" clearable placeholder="?m=collect-list-ac2--hour--xt-1-ct--group--flag-bwyun-apiurl-http://www.baiwanzy.com/inc/api.php"></Input>
                    </FormItem>
                    <FormItem label="定义采集时间" prop="time">
                        <Input v-model="add.time" clearable placeholder="定义采集时间"></Input>
                    </FormItem>
                    <FormItem label="采集资源备注" prop="content">
                        <Input v-model="add.content" clearable placeholder="资源备注、说明等信息"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" :loading="loadingadd" icon="android-add-circle" @click="handleSubmit('add')">
                            <span v-if="!loadingadd">确认添加</span>
                            <span v-else>Loading...</span>
                        </Button>
                        <Button type="ghost" @click="handleReset('add')" style="margin-left: 8px">清除信息</Button>
                        <Button type="ghost" icon="chevron-left" @click="goback()" style="margin-left: 20px">返回</Button>
                    </FormItem>
                </Form>
            </div>
        </Card>
    </div>
</template>

<script>
export default {
  name: "add",
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
    this.$Message.config({
      top: 300,
      duration: 2
    });
    return {
      add: {
        name: "",
        url: "",
        urlsetup: "",
        time: "24",
        content: ""
      },
      addrules: {
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
      serverUrl: "http://mac.home.yazhi.tv/admin/yazhicaiji/db.php",
      loadingadd: false
    };
  },
  methods: {
    handleSubmit(name) {
        
      this.$refs[name].validate(valid => {
          var _this = this;
          _this.loadingadd = true;
        if (valid) {          
          var params = new URLSearchParams();
          params.append("type", "add");
          params.append("name", _this.add.name);
          params.append("url", _this.add.url);
          params.append("urlsetup", _this.add.urlsetup);
          params.append("time", _this.add.time);
          params.append("content", _this.add.content);
          setTimeout(function() {
            _this.$axios
              .post(_this.serverUrl, params, {
                withCredentials: false
              })
              .then(res => {
                // console.log("res:" + JSON.stringify(res.data));
                if (res.data == "okadd") {
                  _this.$Message.success("采集资源数据成功！");
                  _this.loadingadd = false;
                  _this.$refs[name].resetFields();
                } else {
                  _this.$Message.error("采集资源数据失败！");
                  _this.loadingadd = false;
                }
              })
              .catch(function(error) {
                _this.$Message.error("操作失败");
                _this.loadingadd = false;
                console.log(error);
              });
          }, 2000);
        } else {
          this.$Message.error("操作失败");
          _this.loadingadd = false;
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    goback() {
      this.$router.push({
        name: "admin"
      });
    }
  }
};
</script>
