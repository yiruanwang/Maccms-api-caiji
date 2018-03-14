<!--  -->
<template>
<div class="news">
      <!-- {{msg}} -->
      <h3 v-html="title"></h3>
<hr>
<ul>
    <li v-for="item in list">
    <img v-lazy="item" width="300" height="300">   
    <!-- <img v-lazy="item.src">  -->
    </li>
   
</ul>
</div>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
      msg: "vuex news",
      title: "图片懒加载实例",
      list: [
        'http://photocdn.sohu.com/20130817/Img384391700.jpg',
        'http://photocdn.sohu.com/20130817/Img384391700.jpg',
        'http://photocdn.sohu.com/20130817/Img384391700.jpg',
        'http://photocdn.sohu.com/20130817/Img384391700.jpg',
        'http://photocdn.sohu.com/20130817/Img384391700.jpg',
        
      ]
    };
  }
};
</script>
<style lang="less" >
// image[lazy=loading] {
// //   width: 40px;
// //   height: 300px;
//   margin: auto;
// }
// image[lazy=error] {
//   //  background: url('./assets/error.gif')
//   width: 40px;
//   height: 300px;
//   margin: auto;
// }
</style>



