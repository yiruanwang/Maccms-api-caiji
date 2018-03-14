// 路由配置
import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index' //首页
import Page1 from '@/components/Demo/Page1'
import Page2 from '@/components/Demo/Page2'
import Page3 from '@/components/Demo/Page3'
// import Nav from '@/components/Nav/Nav'


Vue.use(Router)
export default new Router({
    // mode: 'history',//去掉/#访问
    routes: [
        {
            path: '/',
            component: index,
            name: 'index',
            meta: { title: '雅致采集插件首页' }
        }, {
            path: '/Page1',
            component: Page1,
            name: 'Page1',
            meta: { title: '测试页面1' }
        }, {
            path: '/Page2',
            component: Page2,
            name: 'Page2',
            meta: { title: '测试页面2' }
        }, {
            path: '/Page3',
            component: Page3,
            name: 'Page3',
            meta: { title: '测试页面3' }
        }]
})