<template>
  <div class="nav-wrap">
              <Menu theme="light">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" ></Icon>
                        个人中心管理
                    </template>
                    <MenuItem name="1-1" to="/user">个人信息</MenuItem>
                    <!-- <MenuItem name="1-2">餐厅管理</MenuItem> -->
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-paper" ></Icon>
                        当前餐厅管理
                    </template>
                    <MenuItem name="2-1">餐厅设置</MenuItem>
                    <MenuItem name="2-2">桌号设置</MenuItem>
                    <MenuItem name="2-3">菜单设置</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-paper" ></Icon>
                        餐厅订单管理
                    </template>
                    <MenuItem name="4-1">进行中的订单</MenuItem>
                    <MenuItem name="4-2">已结账的订单</MenuItem>
                </Submenu>
              </Menu>
  </div>
</template>
<script type="text/javascript">
export default {
  data: function () {
    return {
      welcome: '欢迎来到点餐管理后台'
    }
  }
}
</script>
<style type="text/css">
  .header-wrap{

  }
</style>
