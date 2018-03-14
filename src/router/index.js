// 路由配置
import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index' //首页
import Page1 from '@/components/Demo/Page1'
import Page2 from '@/components/Demo/Page2'
import Page3 from '@/components/Demo/Page3'
// 采集插件
import collectionExplain from '@/components/collection/Explain'
import collectionadmin from '@/components/collection/admin'
import collectionauto from '@/components/collection/auto'
import collectionbinding from '@/components/collection/binding'
import collectionCustom from '@/components/collection/Custom'




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
            path: '/collection/Explain',
            component: collectionExplain,
            name: 'collectionExplain',
            meta: { title: '采集说明' }
        }, {
            path: '/collection/admin',
            component: collectionadmin,
            name: 'collectionadmin',
            meta: { title: '管理采集' }
        },
        {
            path: '/collection/binding',
            component: collectionbinding,
            name: 'collectionbinding',
            meta: { title: '绑定采集' }
        },
        {
            path: '/collection/Custom',
            component: collectionCustom,
            name: 'collectionCustom',
            meta: { title: '自定采集' }
        },
        {
            path: '/collection/auto',
            component: collectionauto,
            name: 'collectionauto',
            meta: { title: '自动采集' }
        },





        {
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