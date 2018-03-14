<!--  -->
<template>
<div class="home">
  <div>这是home{{msg}}</div>
 <!-- <mt-input type="text" v-model="msg"> -->
     <mt-field  placeholder="请输入用户名" v-model="msg"></mt-field>
     <input type="text" v-model="msg">
    </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style lang="less" scoped>

</style>


