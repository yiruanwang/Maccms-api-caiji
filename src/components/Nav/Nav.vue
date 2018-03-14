<template>
    <div style="background-color: #EBEBEB;min-height:800px">
        <div style="width:100%;background-color: #636363; overflow: hidden;height:50px;">
            <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
                <h1>雅致采集插件</h1>
            </span>
        </div>
        <div style="margin-top:5px;">
            <el-row :gutter="0">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <div style="width: 150px">
                        <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">
                            <el-menu-item index="1">
                                <i class="el-icon-menu"></i>系统首页</el-menu-item>
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
                        <!-- <router-view>
                            zhuye
                        </router-view> -->
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
    handleIconClick(ev) {
      console.log(ev);
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case "1":
          this.$router.push("/");
          //   this.breadcrumbItems = ["导航一"];
          break;
        case "2":
          this.$router.push("/Page1");
          //   this.breadcrumbItems = ["导航一"];
          break;
        case "3":
          this.$router.push("/Page2");
          //   this.breadcrumbItems = ["导航二"];
          break;
        case "4":
          this.$router.push("/Page3");
          //   this.breadcrumbItems = ["导航三"];
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
</style>
