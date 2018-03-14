<!-- 雅致便利采集插件说明页 -->
<template>
  <div class="Explain">
    <div style="height: 100%;">
      <yd-flexbox direction="vertical">
        <div>
          <br><br>
          <h1 style="font-size: 25px;">采集插件说明</h1>
          <br><br><br><br><br>
        </div>

        <yd-flexbox-item>

          <p style="font-size: 18px;">
            本来想写个说明的。我想大家看下就会懂了不需要写了吧！<br> 例如： 自己测试资源,?m=collect-list-ac2--hour--xt-1-ct--group--flag-yazhi-apiurl-http://zhizhu.yiruan.wang/inc/api.php<br> 名称就是：自己的测试资源（这个可以随意写）
            <br> 自定义采集时间最好设置成24小时。好多资源站好像超过24小时出问题！
            <br> 自定采集地址：yazhi-apiurl-http://zhizhu.yiruan.wang/inc/api.php （这部分）<br> 绑定采集地址：?m=collect-list-ac2--hour--xt-1-ct--group--flag-yazhi-apiurl-http://zhizhu.yiruan.wang/inc/api.php（这部分）
            <br>

          </p>

        </yd-flexbox-item>

      </yd-flexbox>
    </div>

  </div>
</template>

<script>
export default {
  name: "Explain",
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>

</style>