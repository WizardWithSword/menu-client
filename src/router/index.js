import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import Reg from '@/pages/reg.vue'
import Userinfo from '@/pages/userinfo'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: '/index',
        name: 'index2',
        component: Index
      }]
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/reg',
      name: 'reg',
      component: Reg
    }, {
      path: '/user',
      name: 'user',
      component: Userinfo
    }, {
      path: '/user/set',
      name: 'userSet',
      component: Userinfo
    }, {
      path: '/user/restaurant',
      name: 'userRestaurant',
      component: Login
    }, {
      path: '/user/menu',
      name: 'userMenuList',
      component: Login,
      children: [{
        path: '/user/menu/edit/rid/:rid',
        name: 'userMenuEdit',
        component: Login
      }]
    }, {
      path: '/user/desk/rid/:rid',
      name: 'userDeskList',
      component: Login,
      children: [{
        path: '/user/desk/edit/rid/:rid',
        name: 'userDeskEdit',
        component: Login
      }]
    }, {
      path: '/user/order/rid/:rid',
      name: 'userOrderList',
      component: Login,
      children: [{
        path: '/user/order/ing/rid/:rid',
        name: 'userOrderListIng',
        component: Login
      }, {
        path: '/user/order/ing/edit/rid/:rid/did/:did',
        name: 'userOrderListIngEdit',
        component: Login
      }, {
        path: '/user/order/end/rid/:rid',
        name: 'userOrderListEnd',
        component: Login
      }]
    }
  ]
})
