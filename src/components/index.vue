<!-- 雅致便利采集插件首页 -->
<template>
  <div id="index">
    <img src="../assets/img/yzLogo2.png" alt="易软雅致">
  </div>

</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted: function() {
    var id = this.$route.query.id;
    console.log(id);
    var name = this.$route.query.name;
    console.log(name);
    var type = this.$route.query.type;
    console.log(type);

    console.log("_____________________________________________");
    /** */
    var demo = Yz.demo();
    console.log(demo);
    var demo1 = Yzjs.demo();
    console.log(demo1);

    var demo2 = yz.demo();
    console.log(demo2);

    var demo3 = yzjs.demo();
    console.log(demo3);

    var demo4 = $.demo();
    console.log(demo4);

    var demo5 = $$app.demo();
    console.log(demo5);

    console.log("_____________________________________________");
    console.log(this.$route);
  },
  methods: {
    ceshi: function() {
      var height = "100px";
      // console.log(height);
      console.log(height);
    },
    ceshi2() {
      var w = "ceshi2";
      console.log(w);
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
  // margin-left: -100px;
  // margin-top: -100px;
  pointer-events: none;
  // transform: translateX(-50%);
  transform: translateY(-50%);
  z-index: 2000;
}
</style>