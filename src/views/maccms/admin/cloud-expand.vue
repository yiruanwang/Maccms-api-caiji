<style lang="less" scoped>
// td.ivu-table-expanded-cell{
//   padding: 0px!important;
// }
.cloud-exp {
  padding: 8px;
  // margin: 8px;
  // border: 1px solid #e9eaec;
 
 background:  rgba(199, 198, 198, 0.205);
  border-radius: 3px;
  box-shadow: 0px 0px 0px 1px rgba(199, 198, 198, 0.505);
  overflow: auto;
  td.ivu-table-expanded-cell{
  padding: 0px!important;
}
}
.yz-row-left {
  transition: background-color 0.2s ease-in-out;
  min-width: 0;
  height: 48px;
  line-height: 48px;
  box-sizing: border-box;
  padding-right: 18px;
  text-align: right;
  text-overflow: ellipsis;
  vertical-align: middle;
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
  box-sizing: border-box;
  margin-top: 8px;
}
.yz-row-right {
  margin-top: 8px;

  border: 1px solid #e9eaec;
  background-color: #fff;
  transition: background-color 0.2s ease-in-out;
  min-width: 0;
  height: 48px;
  line-height: 48px;
  box-sizing: border-box;
  text-align: left;
  text-overflow: ellipsis;
  vertical-align: middle;
  padding-left: 18px;
  padding-right: 18px;
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
  box-sizing: border-box;
}
</style>
<template>
    <div class="cloud-exp" >
        <Row>
            <Col span="2" class="yz-row-left">资源接口名称:</Col>
            <Col span="22" class="yz-row-right">{{ row.name }}</Col>
        </Row>
        <Row>
            <Col span="2" class="yz-row-left">资源接口网站:</Col>
            <Col span="22" class="yz-row-right">
            <a target="_blank" :href="row.page">{{ row.page | capitalize}}</a>
            </Col>
        </Row>
        <Row>
            <Col span="2" class="yz-row-left">自定采集地址:</Col>
            <Col span="22" class="yz-row-right">{{ row.url }}</Col>
        </Row>
        <Row>
            <Col span="2" class="yz-row-left">绑定采集地址:</Col>
            <Col span="22" class="yz-row-right">{{ row.urlsetup }}</Col>
        </Row>
        <Row>
            <Col span="2" class="yz-row-left">资源备注说明:</Col>
            <Col span="22" class="yz-row-right" style="margin-bottom: 8px;">{{ row.content }}</Col>
        </Row>

    </div>
</template>
<script>
export default {
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      var strvalue = value;
      value = value.toString();
      if (value == "http://www.yazhi.tv") {
        strvalue = value + "    [ 本资源来之用户推送给云资源库 ]";
      }
      return strvalue;
    }
  },
  props: {
    row: Object
  }
};
</script>