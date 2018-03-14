<!-- 下拉刷新组件 -->
<template>
  <div id="mescroll" class="mescroll">
      <h3 v-html="msg"></h3>
      <div  id="dataList" class="data-list">
                <ul v-for="item in pdlist">
                    {{item.name}}
                </ul>
            </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import MeScroll from "../assets/libs/mescroll/mescroll.min.js";
// import "../assets/libs/mescroll/mescroll.min.css";
import MeScroll from 'mescroll.js'
import 'mescroll.js/mescroll.min.css'
var count = 0;
export default {
  data() {
    return {
      msg: "mescroll",
      pdlist: [],
      busy: false,
      loading: false
    };
  },
  mounted: function () {
     var self = this;
      self.mescroll = new MeScroll("mescroll", { //第一个参数"mescroll"对应上面布局结构div的id
        up: {
            callback: self.upCallback, //上拉加载回调
            page:{size:10}, //可配置每页8条数据,默认10
            htmlNodata:'<p class="upwarp-nodata">-- 没有更多了 --</p>',
            isBounce:true,
            toTop: { //配置回到顶部按钮
                //src: "../../js/mescroll/img/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
                //offset : 1000
            }, 
            empty: { //配置列表无任何数据的提示
                    warpId: "dataList",
                    //icon: "../../js/mescrollimg/mescroll-empty.png",
                    tip : "亲,暂无相关数据哦~" , 
                     
                }
        }, 
        down:{
            use: true,
            auto: false,
            isLock: false,
            //htmlContent: '&nbsp;', 
            callback:()=>{
                 this.mescroll.resetUpScroll(); 
            },
        }
    });
  },
  methods: {
    upCallback: function(page) {
            console.log("page.num==" + page.num + ", page.size==" + page.size);
            //联网加载数据
            var self = this;
            this.loadMore(page.num, page.size, function(data) {
                //                      data=[]; //打开本行注释,可演示列表无任何数据empty的配置

                //如果是第一页需手动制空列表
                if(page.num == 1) self.pdlist = [];

                //更新列表数据
                self.pdlist = self.pdlist.concat(data);
                console.log("self.pdlist.length==" + self.pdlist.length);

                //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
                //传参:数据的总数; mescroll会自动判断列表是否有无下一页数据,如果数据不满一页则提示无更多数据;
                self.mescroll.endSuccess(data.length);

            }, function() {
                //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                self.mescroll.endErr();
            });
           
        },
    loadMore:function(page,size,okBack,errBack) {
        // ... the code you wanna run to fetch data
        var list = [];
        setTimeout(() => {
            for (var i = 0, j = 10; i < j; i++) {
              list.push({ name: count++ });
            }
            okBack(list);
          }, 2000);
      },
  }
}
</script>
<style lang='less'>

</style>