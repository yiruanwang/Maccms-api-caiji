<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/">首页</router-link>
            <router-link to="/home"></router-link>
            <router-link to="/news">news</router-link>
            <router-link to="/video">video</router-link>
            <router-link to="/mescroll">mescroll</router-link>
            <router-link to="/zepto">zepto</router-link>
            <router-link to="/video">video</router-link>   
            <router-link to="/cjindex">采集</router-link> -->
    <!-- <el-button type="primary">主要按钮</el-button> -->
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {}
};
var d = new Date();
var updatetime = d.toISOString();
console.log(
  "%c 易软2018.0309.0254 " + updatetime + "%c http://www.yiruan.wang/ ",
  "width:200px; color: #fadfa3; background: #030307; padding:5px 0;",
  "background: #fadfa3; padding:5px 0;"
);
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; // margin-top: 1px;
  .celess {
    background: @color;
  }
  @color: #c508f5;
}

.container {
  display: flex;
}

.demo-flat-button {
  margin: 12px;
}
</style>
