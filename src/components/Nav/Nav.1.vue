<template>
    <div style="background-color: #fff;min-height:800px">
        <div class="Nav-top">
            <span class="demonstration logo">
                <h1>雅致苹果插件</h1>
            </span>
        </div>
        <div>
            <el-row :gutter="0">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <div style="min-width: 201px; max-width:201px; height:100%">                      
                        <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect" background-color="#545c64" text-color="#fff"  style=" height:100% ;min-height:800px" active-text-color="#ffd04b">
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

                            <el-menu-item index="2">
                                <i class="el-icon-message"></i>导航一</el-menu-item>
                            <el-menu-item index="3">
                                <i class="el-icon-menu"></i>导航二</el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>导航三</el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                    <div style="margin:10px">
                        <keep-alive>
                            <router-view v-wechat-title="$route.meta.title"></router-view>
                        </keep-alive>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      searchCriteria: ""
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
#index {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  // margin-top: -100px;
  pointer-events: none;
  // transform: translateX(-50%);
  transform: translateY(-50%);
  z-index: 2000;
}
.Nav-top {
  width: 100%;
  background-color: #545c64;
  overflow: hidden;
  height: 50px;
  border-bottom: 1px solid rgb(245, 241, 241);
  .logo {
    float: left;
    // padding-top: 10px;
    color: white;
    margin-left: 1%;
    font-size: 25px;
    line-height: 50px;
  }
}
</style>
