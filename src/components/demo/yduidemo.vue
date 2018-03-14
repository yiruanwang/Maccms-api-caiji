<!-- yduiDemo测试首页 -->
<template>
  <div>
    <yd-button size="large" @click="but1" type="primary">button</yd-button>
    <yd-button size="large" @click.native="but1" type="primary" shape="circle">shape="circle"</yd-button>
    <button type="default" @click="but1">default</button>
    <yd-button-group>
      <yd-button size="large" type="primary" @click.native="but1">{{msg}} Block Button1</yd-button>
    </yd-button-group>
    <yd-button-group>
      <yd-button size="large" @click.native="handleClick" type="danger">Bind Click</yd-button>
    </yd-button-group>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">手机号：</span>
        <input slot="right" type="number" placeholder="请输入手机号">
      </yd-cell-item>
      <yd-cell-item arrow type="label">
        <select slot="right">
          <option value="">支付方式</option>
          <option value="0">支付宝</option>
          <option value="2">微信</option>
          <option value="3">财付通</option>
        </select>
      </yd-cell-item>
      <yd-cell-item arrow type="label">
        <span slot="left">性别：</span>
        <select slot="right">
          <option value="">请选择性别</option>
          <option value="1">男</option>
          <option value="2">女</option>
          <option value="3">未知</option>
        </select>
      </yd-cell-item>
    </yd-cell-group>
    <yd-flexbox direction="vertical">
      <yd-flexbox-item>yd-flexbox-item</yd-flexbox-item>
      <yd-flexbox-item>yd-flexbox-item</yd-flexbox-item>
      <yd-flexbox-item>yd-flexbox-item</yd-flexbox-item>
    </yd-flexbox>
    <div style="height: 300px;">
      <yd-flexbox direction="vertical">
        <div>div1</div>
        <yd-flexbox-item>yd-flexbox-item</yd-flexbox-item>
        <div>div2</div>
      </yd-flexbox>
    </div>
    <yd-cell-group title="文本域">
      <yd-cell-item>
        <yd-textarea slot="right" placeholder="请输入您的银行卡卡号和密码" maxlength="100"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>



<script>
export default {
  name: "ydui",
  data() {
    return {
      msg: "测试vue语法www实时"
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    but1() {
      console.log("1");
    },
    handleClick() {
      // alert("yudidemo.vue")
      console.log("yudidemo.vue");
    }
  }
};
</script>
<style lang='less' scoped>

</style>