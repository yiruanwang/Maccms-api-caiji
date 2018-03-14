<!--  -->
<template>
  <div id="videos">
      <h3 v-html="msg"></h3>
      
     <button type="default" @click="axiosbu">default</button>
      
      </div>
</template>
<script>
export default {
  name: "videos",
  data() {
    return {
      msg: "videos axios demo!"
    };
  },methods:{
       axiosbu(){
           this.$axios.get("https://api.github.com/users/supbose")
           .then((res) => {
               console.log(res.data);
           })
       }
  }
};
</script>
<style lang="less" scoped>

</style>


