<template>
  <div class="userinfo-wrap">
    <p>
      <label>用户id：</label>
      <label>{{userinfo.uid}}</label>
    </p>
  </div>
</template>
<script type="text/javascript">
import {common} from '../libs/common.js'
export default {
  mounted () {
    var u = common.localData.get('userinfo') || ''
    console.log('userinfo :', u)
    this.userinfo = u
  },
  data () {
    return {
      userinfo: {}
    }
  }
}
</script>
<style type="text/css"></style>
