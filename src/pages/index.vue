<template>
  <div class="index-wrap">
    <p>{{welcome}}</p>
  </div>
</template>
<script>
export default {
  name: 'index',
  data: function () {
    return {
      welcome: '欢迎来到点餐管理后台\n1、添加一个餐厅。\n2、添加菜单\n3、配置桌号\n4、将桌号页面的二维码打印贴到桌面供客户使用\n 5、在进行中的订单中查看用户的点餐。\n6、在已结账的订单中查看历史订单。'
    }
  },
  methods: {
  }
}
</script>
<style type="text/css">
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
