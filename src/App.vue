<template>
  <div id="app">
    <Layout>
        <Header>
          <headertop></headertop>
        </Header>
        <Layout>
          <Sider v-if="isLogin" hide-trigger width="300">
            <Menu width="auto" @on-select="gothere">
              <MenuItem name="0" to="/index">
                  <Icon type="ios-paper" ></Icon>
                  首页
              </MenuItem>
              <Submenu name="1">
                  <template slot="title">
                      <Icon type="ios-paper" ></Icon>
                      个人中心管理
                  </template>
                  <MenuItem name="1-1" to="/user">个人信息</MenuItem>
              </Submenu>
              <Submenu name="2">
                  <template slot="title">
                      <Icon type="ios-paper" ></Icon>
                      当前餐厅管理
                  </template>
                  <MenuItem name="2-1">餐厅设置</MenuItem>
                  <MenuItem name="2-2">菜单设置</MenuItem>
                  <MenuItem name="2-3">桌号设置</MenuItem>
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
          </Sider>
          <Content>
            <router-view/>
          </Content>
        </Layout>
        <Footer>copyright 2019</Footer>
    </Layout>
  </div>
</template>

<script>
import {common} from './libs/common.js'
import headertop from './components/header'
export default {
  name: 'App',
  components: {
    headertop
  },
  created () {
    this._checklogin()
  },
  data () {
    return {
      isLogin: false
    }
  },
  mounted () {
    console.log('App mounted')
    // var key = this.trans['language']
    // console.log('here', this, key)
  },
  methods: {
    gothere: function (name) {
      console.log('there', name)
      switch (name) {
        case '2-1':
          this.$router.push({name: 'userRestaurant'})
          break
        case '2-2':
          this.$router.push({name: 'userMenuList'})
          break
        case '2-3':
          this.$router.push({name: 'userDeskList'})
          break
      }
    },
    _checklogin: function () {
      var u = common.localData.get('userinfo') || ''
      console.log('判断是否登录, 用户信息', u)
      if (!u) {
        console.log('检测到当前用户未登录')
        this.$router.push('login')
      } else {
        console.log('已登录，显示管理台')
        this.isLogin = true
      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
