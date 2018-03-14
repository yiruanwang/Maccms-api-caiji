<!-- 雅致便利采集插件管理页 -->
<template>
  <div class="admin">
    <div style="height: 100%;">
      <yd-flexbox direction="vertical">
        <div>
          <h1 style="font-size: 25px;">采集插件说明</h1>
          <br><br><br><br><br>
        </div>
        <yd-flexbox-item>
          <div>
            <yd-grids-group :rows="4" title="等分3列">
              <yd-grids-item v-for="n in 400">
                <span slot="text">grids-3</span>
              </yd-grids-item>
            </yd-grids-group>
          </div>

        </yd-flexbox-item>

        <div>div</div>

      </yd-flexbox>
    </div>

  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      serverUrl: "http://mac.home.yazhi.tv/admin/yazhicaiji/db.php",
      Admindata: [],
      loading2: true
    };
  },
  // http://mac.home.yazhi.tv/admin/yazhicaiji/db.php
  components: {},
  computed: {},
  mounted() {
    var _this = this;
    _this.AdselectJson();
  },
  methods: {
    handleClick(row) {
      console.log(row);
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