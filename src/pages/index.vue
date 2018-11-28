<template>
  <div class="">
    {{welcome}}
  </div>
</template>
<script>
import {common} from '../libs/common.js'
export default {
  name: 'index',
  created () {
    console.log('判断是否登录')
    var u = common.localData.get('userinfo') || ''
    if (!u) {
      console.log('检测到当前用户未登录')
      this.$router.push('login')
    } else {

    }
  },
  data: function () {
    return {
      welcome: '欢迎来到管理后台'
    }
  }
}
</script>
<style type="text/css">
</style>
