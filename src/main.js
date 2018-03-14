// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import VueWechatTitle from 'vue-wechat-title'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
// import 'vue-ydui/dist/ydui.px.css';
// import zjs from '@/components/javascript/zjs'
import zjs from 'yzjs'

Vue.use(YDUI);
Vue.use(VueWechatTitle)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/error.png'),
    loading: require('./assets/loading.png'),
    attempt: 1,
    //listenEvents: ['scroll', 'mousewheel']
});
// 路由跳转
new Vue({
    el: '#app',
    render: h => h(App),
    router
})