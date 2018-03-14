<!-- 雅致便利采集插件首页 -->
<template>
  <div id="index">
    <el-container class="is-vertical yz-el-container">
      <el-main class="yz-el-main">
        <img class="img" src="../assets/img/yzLogo2.png" alt="易软雅致">

      </el-main>
    </el-container>
  </div>

</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted: function() {},
  methods: {}
};
</script>
<style lang='less' scoped>
#index {
  .yz-el-container {
    position: fixed;
    width: 100%;
    height: 100%;
    .yz-el-main {
      width: 100%;
      height: 100%;
      .img {
        width: 200px;
        height: 200px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin: -100px 0 0 0;
      }
    }
  }
}
</style>