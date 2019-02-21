<template>
  <div class="desk-wrap">
    <template v-for="item in desks">
      <Card class="one-desk-card" :key="item" style="">
        <p slot="title">
            {{trans['deskTitle']}}
        </p>
        <a href="#" slot="extra" @click="goDelDesk(item)">
          <Icon size="26" type="ios-close" />
        </a>
        {{item}}
      </Card>
    </template>
    <p>
      <label>
        <Icon class="icon-add" size="40" type="md-add" @click="goAddDesk"/>
        <span>{{trans['labelAdd']}}</span>
      </label>
    </p>
    <Modal
        v-model="addDialog"
        :title="trans['dialogTitleAddDesk']"
        :ok-text="trans['dialogOK']"
        :cancel-text="trans['dialogCancel']"
        @on-ok="addDialogOk"
        @on-cancel="addDialogCancel">
        <div>
          {{trans['inputTitleDeskName']}}:
          <Input v-model="deskName" :placeholder="trans['inputPlaceholderDeskName']" style="width: 70%" />
        </div>
    </Modal>
  </div>
</template>
<script>
import {api} from '@/libs/api.js'
var that
export default {
  name: '',
  data: function () {
    return {
      deskName: '', // 即将新增的桌号代号
      addDialog: false, // 添加桌号的弹框
      rid: '',
      desks: ['A2', 'A3'],
      msg: 'desk'
    }
  },
  mounted () {
    that = this
    var params = this.$route.params
    this.rid = params.rid
    this._getDesks()
    console.log('desk params', params)
  },
  methods: {
    // 检查str 是否已存在于arr中
    _checkName: function (str, arr) {
      var res = false
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
          res = true
          break
        }
      }
      return res
    },
    // 添加桌号的弹框的确认事件
    addDialogOk: function () {
      var newName = this.deskName
      var reg = /^[0-9a-zA-Z]*$/g
      var re = new RegExp(reg)
      if (!re.test(newName)) {
        this.$Message.warning(this.trans['inputPlaceholderDeskName'], 4)
        return false
      }
      if (newName) {
        var checkRepeat = this._checkName(newName, this.desks)
        if (checkRepeat) { // 如果有重复
          that.$Message.warning(this.trans['tipDeskRepeated'] + ':' + newName, 4)
        } else {
          this.desks.push(newName)
          this._saveDesks() // 保存桌号
        }
      } else {
        this.$Message.warning(this.trans['inputPlaceholderDeskName'], 4)
      }
    },
    // 添加桌号的弹框的取消事件
    addDialogCancel: function () {
      this.addDialog = false
    },
    // 添加桌号。
    goAddDesk: function () {
      this.addDialog = true
    },
    // 删除桌号
    goDelDesk: function (item) {
      var index = this.desks.indexOf(item)
      if (index !== -1) {
        this.desks.splice(index, 1)
        this._saveDesks()
      }
    },
    _saveDesks: function () {
      var obj = {
        rid: this.rid,
        deskids: this.desks
      }
      api.deskEdit(obj).then(function (res) {
        if (res.code === 200) {
          that.$Message.success('success', 4)
        } else {
          that.$Message.warning(res.message, 4)
          that._getDesks()
        }
      })
    },
    // 获取所有的桌号信息
    _getDesks: function () {
      var obj = {
        rid: this.rid
      }
      api.deskDetail(obj).then(function (res) {
        if (res.code === 200) {
          that.desks = res.result
        } else {
          that.$Message.warning(res.message, 4)
        }
      })
    }
  }
}
</script>
<style type="text/css">
  .one-desk-card{
    width:350px;
    display: inline-block;
    margin: 20px;
  }
</style>
<style type="text/css" lang="scss">
.desk-wrap{
  .icon-add{
    margin: 30px;
    cursor: pointer;
    font-size: 36px;
    border: 1px solid #ccc;
  }
}
</style>
