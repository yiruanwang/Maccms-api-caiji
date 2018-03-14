<template>
  <div class="Nav">
    <el-container class="yz-container">
      <el-header class="Nav-top">
        <span class="logo">
          <h1>雅致苹果插件</h1>
        </span>
      </el-header>
      <el-aside class="yz-aside">
        <el-menu default-active="0" class="yz-el-menu" @open="handleOpen" @close="handleClose" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>系统首页</el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>采集插件</span>
            </template>
            <el-menu-item index="1-1">采集文档</el-menu-item>
            <el-menu-item index="1-2">管理采集</el-menu-item>
            <el-menu-item index="1-3">绑定采集</el-menu-item>
            <el-menu-item index="1-4">自定采集</el-menu-item>
            <el-menu-item index="1-5">自动采集</el-menu-item>
          </el-submenu>

          <!-- <el-menu-item index="2">
            <i class="el-icon-message"></i>导航一</el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>导航三</el-menu-item> -->

        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="yz-el-main">
          <div class="yz-content">
            <keep-alive>
              <router-view v-wechat-title="$route.meta.title"></router-view>
            </keep-alive>
          </div>
        </el-main>
      </el-container>
      <el-footer class="yz-el-footer" style="height:20px;">
        <img src="../../assets/font/footer-font-400width.png" alt="易软雅致">
      </el-footer>

    </el-container>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "Nav",
  data() {
    return {
      searchCriteria: ""
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case "0":
          this.$router.push("/");
          break;
        case "1":
          this.$router.push("/");
          break;
        case "1-1":
          this.$router.push("/collection/Explain");
          break;
        case "1-2":
          this.$router.push("/collection/admin");
          break;
        case "1-3":
          this.$router.push("/collection/binding");
          break;
        case "1-4":
          this.$router.push("/collection/Custom");
          break;
        case "1-5":
          this.$router.push("/collection/auto");
          break;
        case "2":
          this.$router.push("/Page1");
          break;
        case "3":
          this.$router.push("/Page2");
          break;
        case "4":
          this.$router.push("/Page3");
          break;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.yz-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.yz-aside {
  position: absolute;
  width: 201px;
  height: 100%;
  padding-top: 60px;
  .yz-el-menu {
    width: 201px;
    height: 100%;
    border-top: 3px solid #ffd04b;
  }
}
.Nav-top {
  position: fixed;
  width: 100%;
  background-color: #545c64;
  overflow: hidden;
  height: 50px;
  line-height: 50px;
  z-index: 99999;
  .logo {
    float: left;
    color: white;
    margin-left: 1%;
    font-size: 25px;
  }
}
.yz-el-main {
  // position: absolute;
  padding-left: 205px;
  padding-top: 65px;
  padding-bottom: 5px;
  padding-right: 5px;
  .yz-content {
    // background: red;
    width: 100%;
    height: 100%;
  }
}
.yz-el-footer {
  position: fixed;
  width: 100%;
  padding: 0px;
  bottom: 0px;
  // height: 20px;
  line-height: 20px;
  text-align: center;
  color: aliceblue;
  background: #545c64;
  font-size: 9px;
}
</style>
