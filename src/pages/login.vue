<template>
  <div class="login-wrap">
    <div class="login-box">
      <p class="login-title">Login</p>
      <i-form :model="formItem" :label-width="80">
        <form-item :label="trans['labelUsername']">
          <i-input v-model="formItem.name" placeholder=""></i-input>
        </form-item>
        <form-item :label="trans['labelPassword']">
          <i-input type="password" v-model="formItem.password" placeholder=""></i-input>
        </form-item>
        <!-- <form-item> -->
          <Button type="primary" @click="handleSubmit('formValidate')">{{trans['btnLoginSubmit']}}</Button>
          <Button @click="handleReg('formValidate')" style="margin-left: 8px">{{trans['labelLoginRegeist']}}</Button>
        <!-- </form-item> -->
      </i-form>
    </div>
  </div>
</template>
<script>
import {api} from '../libs/api.js'
import {common} from '../libs/common.js'
export default {
  name: '',
  data: function () {
    return {
      formItem: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit: function () {
      console.log('login', this.formItem.name, api)
      var obj = {
        username: 'testname', // 测试账号
        password: 'testpwd' // 测试密码
      }
      obj.username = this.formItem.name
      obj.password = this.formItem.password
      // var that = this
      api.login(obj).then(function (obj) {
        console.log('请求返回值：', obj)
        if (obj.code === 200) {
          var token = obj.result.token
          console.log('登录成功， token是：', token)
          common.localData.set('tk', token)
          common.localData.set('userinfo', obj.result)
          // that.$router.push('/')
          window.location.href = '/'
        } else {
          window.alert(obj.message)
        }
      })
    },
    handleReg: function () {
      this.$router.push('/reg')
    }
  }
}
</script>
<style type="text/css">
  .login-wrap{
    margin-bottom: 200px;
    /*height: 100%;*/
    /*background: linear-gradient(180deg, #c9ffbf 0%, #ffafbd 100%);*/
  }
  .login-box{
    width: 400px;
    margin: 0px auto;
    padding-top: 100px;
  }
  .login-title{
    margin-bottom: 50px;
  }
</style>
