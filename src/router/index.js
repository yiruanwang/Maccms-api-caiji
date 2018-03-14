// 路由配置
import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index' //首页

import home from '@/components/demo/Home'
import news from '@/components/demo/News'
import video from '@/components/demo/Video'
import mescroll from '@/components/demo/mescroll'
import zepto from '@/components/demo/zepto'
import yduidemo from '@/components/demo/yduidemo'
//雅致便利采集插件项目
import cjindex from '@/components/caiji/cjindex'


Vue.use(Router)
export default new Router({
    // mode: 'history',//去掉/#访问
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: { title: '易软雅致' }
        },
        // 采集区域设置开始
        {
            path: '/caiji',
            name: 'cjindex',
            component: cjindex,
            meta: { title: '雅致便利采集助手' }
        },
        //采集区域设置结束
        {
            path: '/ydui',
            name: 'yduidemo',
            component: yduidemo,
            meta: { title: 'yduiDemo' }
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: { title: '主页' }
        }, {
            path: '/news',
            name: 'news',
            component: news,
            meta: { title: '新闻' }
        }, {
            path: '/video',
            name: 'video',
            component: video,
            meta: { title: '影视' }
        }, {
            path: '/mescroll',
            name: 'mescroll',
            component: mescroll,
            meta: { title: '下拉加载' }
        }, {
            path: '/zepto',
            name: 'zepto',
            component: zepto,
            meta: { title: 'zepto测试' }
        },]
})