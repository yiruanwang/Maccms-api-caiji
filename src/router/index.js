// 路由配置
import Vue from 'vue'
import Router from 'vue-router'

// import index from '@/components/index' //首页

import Page1 from '@/components/Demo/Page1'
import Page2 from '@/components/Demo/Page2'
import Page3 from '@/components/Demo/Page3'


Vue.use(Router)
export default new Router({
    // mode: 'history',//去掉/#访问
    routes: [{
        path: '/Page1', component: Page1
    }, {
        path: '/Page2', component: Page2
    }, {
        path: '/Page3', component: Page3
    }]
})