<!-- 雅致便利采集插件管理页 -->
<template>
  <div class="admin">
    <div style="height: 100%;">
      <yd-flexbox direction="vertical">
        <div>
          <br><br>
          <h1 style="font-size: 25px;">管理采集资源</h1>
          <br><br>
        </div>
        <div>
          <el-button plain>添加本地资源</el-button>
          <el-button plain>云端索取资源</el-button>
        </div>
        <br><br>
        <yd-flexbox-item>
          <div>
            <el-table max-height="600" v-loading="loading2" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" :data="Admindata" style="width: 100%">
              <el-table-column prop="id" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="url" label="地址">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                  <el-button @click.native.prevent="deleteRow(scope.$index, Admindata)" type="text" size="small">
                    删除下
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="" width="120">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini" icon="el-icon-upload">推崇到云端</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

        </yd-flexbox-item>

        <div></div>

      </yd-flexbox>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="updateform">
        <el-form-item label="id" :label-width="formLabelWidth">
          <el-input v-model="updateform.id" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="updateform.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="updateform.url" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>

      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      serverUrl: "http://mac.home.yazhi.tv/admin/yazhicaiji/db.php",
      Admindata: [],
      loading2: true,
      dialogFormVisible: false,
      updateform: {
        id: "",
        name: "",
        url: ""
      },
      formLabelWidth: "120px"
    };
  },
  components: {},
  computed: {},
  mounted() {
    var _this = this;
    _this.AdselectJson();
  },
  methods: {
    // 删除
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleClick(row) {
      // 编辑
      this.dialogFormVisible = true;
      // console.log(row.id);
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
            console.log("res:" + JSON.stringify(res.data));
            _this.Admindata = res.data;
            _this.loading2 = false;
          })
          .catch(function(error) {
            console.log(error);
          });
      }, 1000);
    }
  }
};
</script>
<style lang='less' scoped>

</style>