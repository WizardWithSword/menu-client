<template>
  <div class="restaurant-wrap">
    <template v-for="item in rids">
      <div v-bind:key="item.rid" class="one-rest">
        <div class="left" @click="clickOneRest(item)">
          <Icon type="ios-home-outline"  size="40" />
          <span>{{item.name}}</span>
        </div>
        <div class="opporate">
           <Button @click="setRestMenu(item)" :size="setButtonSize" icon="ios-build-outline" type="primary">{{trans['btnMenuSet']}}</Button>
           <Button @click="setRestDesk(item)" :size="setButtonSize" icon="ios-build-outline" type="primary">{{trans['btnDeskSet']}}</Button>
        </div>
      </div>
    </template>
    <label v-if="rids.length < 1">
      <Icon class="icon-add" size="40" type="md-add" @click="goAddRestaurant"/>
      <span>{{trans['labelAdd']}}</span>
    </label>
    <Modal
        v-model="addDialog"
        :title="trans['dialogTitleAddRest']"
        @on-ok="addDialogOk"
        @on-cancel="addDialogCancel">
        <div>
          {{trans['inputTitleRestName']}}:
          <Input v-model="restName" :placeholder="trans['inputPlaceholderRestName']" style="width: 70%" />
        </div>
    </Modal>
  </div>
</template>
<script>
import {api} from '@/libs/api.js'
// import {common} from '@/libs/common.js'
var that
export default {
  name: '',
  data: function () {
    return {
      setButtonSize: 'large',
      restName: '', // 新增的餐厅名字
      addDialog: false, // 添加餐厅对话框
      rids: [], // 餐厅列表
      msg: 'restaurant'
    }
  },
  mounted () {
    that = this
    var obj = {}
    api.restList(obj).then(function (res) {
      console.log('获取到的餐厅列表', res)
      if (res.code === 200) {
        var ridsList = res.result.rids || []
        if (ridsList.length === 0) {
          that.$Message.warning(that.trans['tipNoRestaurant'], 4)
        } else {
          var obj = {
            rid: ridsList[0]
          }
          api.restDetail(obj).then(function (res2) {
            if (res2.code === 200) {
              that.rids.push(res2.result)
            } else {
              that.$Message.warning(res2.message, 4)
            }
          })
        }
      } else {
        that.$Message.warning(res.message, 4)
      }
    })
  },
  methods: {
    // 设置餐厅的菜单信息
    setRestMenu: function (rest) {},
    // 设置餐厅的桌号信息
    setRestDesk: function (rest) {
      var url = '/user/desk/rid/' + rest.rid
      this.$router.push(url)
    },
    // 用户点击某个餐厅
    clickOneRest: function (rest) {},
    // 用户点击添加餐厅
    goAddRestaurant: function () {
      this.addDialog = true
    },
    // 添加餐厅的餐出口的确认事件
    addDialogOk: function () {
      if (this.restName) {
        var obj = {
          name: this.restName
        }
        api.restAdd(obj).then(function (res) {
          if (res.code === 200) {
            var obj = res.result
            this.rids.push(obj)
          } else {
            that.$Message.warning(res.message, 4)
          }
        })
      } else {
        this.$Message.warning(this.trans['inputPlaceholderRestName'], 4)
      }
    },
    // 添加餐厅的餐出口的取消事件
    addDialogCancel: function () {
      this.addDialog = false
    }
  }
}
</script>
<style type="text/css" lang="scss">
.restaurant-wrap{
  text-align: left;
  .icon-add{
    margin: 30px;
    cursor: pointer;
    font-size: 36px;
    border: 1px solid #ccc;
  }
}
.one-rest{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .left{
    cursor: pointer;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    border: 1px solid #ccc;
    margin: 30px;
  }
}
</style>
