<style lang="less" scoped>
@import "./explain.less";
</style>

<template>
    <div class="explain">
        <Row>
            <Col span="24" class="yz-col24">
            <h1>采集说明</h1>
            </Col>
            <Col span="24" class="yz-left">

            <Alert show-icon>
                
                <template slot="desc">
                    <img src="https://img.shields.io/github/package-json/v/yiruanwang/Maccms-api-caiji.svg" alt="" srcset="">
                    <img src="https://img.shields.io/github/languages/code-size/yiruanwang/Maccms-api-caiji.svg" alt="" srcset="">
                    <br>
                   本地资源库： 首先说下为什么要用到本地数据库，原因很简单，不说也知道了，<br>
                    云端资源库： 为了共享资源而已。当然希望大家多多提交接口，共同将免费影视进行到底！
                     <br>
                    33uu采集,?s=collect/api&ac=list&xt=1&ct=&rday=&cjflag=33uudycom&cjurl=http://www.33uudy.com/inc/api.php <br>
                    测试33uu采集?s=collect/api&ac=cjday&xt=1&ct=&rday=98&cjflag=33uudycom&cjurl=http://www.33uudy.com/inc/api.php <br>
                    本来想写个说明的。我想大家看下就会懂了不需要写了吧！
                    <br> 例如 : 自己测试资源,?m=collect-list-ac2--hour--xt-1-ct--group--flag-yazhi-apiurl-http://zhizhu.yiruan.wang/inc/api.php<br> 名称就是：自己的测试资源（这个可以随意写） <br> 自定义采集时间最好设置成24小时。好多资源站好像超过24小时出问题！ <br> 自定采集地址：yazhi-apiurl-http://zhizhu.yiruan.wang/inc/api.php （这部分）<br> 绑定采集地址：?m=collect-list-ac2--hour--xt-1-ct--group--flag-yazhi-apiurl-http://zhizhu.yiruan.wang/inc/api.php（这部分）
                    <br>
                </template>

            </Alert>
            </Col>
        </Row>

    </div>
</template>

<script>
export default {
  name: "explain"
};
</script>
