<template>
  <div class="reg-wrap">
    <div class="reg-box">
      <p class="reg-title">Register</p>
      <i-form :model="formItem" :label-width="80">
        <form-item :label="trans['labelUsername']">
          <i-input v-model="formItem.name" placeholder=""></i-input>
        </form-item>
        <form-item :label="trans['labelPassword']">
          <i-input type="password" v-model="formItem.password" placeholder=""></i-input>
        </form-item>
        <!-- <form-item> -->
          <i-button @click="handleReg">{{trans['btnRegeist']}}</i-button>
        <!-- </form-item> -->
      </i-form>
    </div>
  </div>
</template>
<script>
import {api} from '../libs/api.js'
// import {common} from '../libs/common.js'
export default {
  name: '',
  data: function () {
    return {
      msg: 'welcome',
      showRegSuccess: false,
      regSuccessTip: 'success! login now~',
      formItem: {
        name: '',
        password: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    handleReg: function () {
      console.log('reg', this.formItem.name)
      var obj = {
        username: 'testname', // 测试账号
        password: 'testpwd' // 测试密码
      }
      obj.username = this.formItem.name
      obj.password = this.formItem.password
      var that = this
      api.reg(obj).then(function (obj) {
        if (obj.code === 200) {
          that.$Message.success(obj.message, 4)
          console.log('注册成功,前往登录')
          that.$router.push('/login')
        } else {
          that.$Message.warning(obj.message, 4)
          // window.alert(obj.message)
        }
      })
    }
  }
}
</script>
<style type="text/css">
  .reg-wrap{
    margin-bottom: 200px;
    /*height: 100%;*/
    /*background: linear-gradient(180deg, #c9ffbf 0%, #ffafbd 100%);*/
  }
  .reg-box{
    width: 400px;
    margin: 0px auto;
    padding-top: 100px;
  }
  .reg-title{
    margin-bottom: 50px;
    /*margin-left: 80px;*/
  }
</style>
