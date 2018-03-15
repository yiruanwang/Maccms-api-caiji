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

    </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
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
          width: 200,
          // fixed: "right",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
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
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.Adremove(params.index);
                    }
                  }
                },
                "删除"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
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
      serverUrl: "http://mac.home.yazhi.tv/admin/yazhicaiji/db.php",
      Admindata: [],
      spinShow: true
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
            _this.spinHide();
          })
          .catch(function(error) {
            console.log(error);
          });
      }, 1000);
    },
    Adupdate(index) {
      console.log({
        title: "User Info",
        content: `id：${this.Admindata[index].id}name：${
          this.Admindata[index].name
        }url：${this.Admindata[index].url}`
      });
      var id = `${this.Admindata[index].id}`;
      console.log(id);
    },
    Adremove(index) {
      var sid = this.Admindata[index].id;
      this.Admindata.splice(index, 1);
      console.log(sid);
    },
    Adtuichong(index) {
      var sid = this.Admindata[index].id;
      // this.Admindata.splice(index, 1);
      console.log(sid);
    },
    Adcloud() {
      this.$router.push({ name: "cloud_index" });
      console.log("Adcloud");
    },
    Adadd() {
      this.$router.push({ name: "add_index" });
      console.log("add");
    }
  }
};
</script>
