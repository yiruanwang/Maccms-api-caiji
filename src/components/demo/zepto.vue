<!-- zepto -->
<template>
  <div>

      <h3>zepto</h3>
<button type="danger" @click="zeptobut">测试Zepto</button>    
      <div id="zeptocs">
        默认内容
      </div>
  </div>
</template>

<script>
// npm i -D script-loader exports-loader (需要安装依赖库)
// webpack.config.js配置
//http://blog.csdn.net/xdongll/article/details/75504365
// {
//       test: require.resolve('zepto'),
//       loader: 'exports-loader?window.Zepto!script-loader'
//     }
import zepto from "zepto";
export default {
  data() {
    return {};
  },
  methods: {
    zeptobut() {
      zepto('#zeptocs').html("执行zepto完成")
      zepto('#zeptocs').addClass("active");
      // alert("zepto");
    }
  }

  //   components: {},

  //   computed: {},

  //   mounted: {},

  //   methods: {}
};
</script>
<style lang='less' scoped>
.active{
  background: violet;
}
</style>