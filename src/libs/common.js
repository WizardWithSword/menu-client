var CryptoJS = require('crypto-js')

var dataLocal = {
  get: function (key) {
    return JSON.parse(window.localStorage.getItem(key))
  },
  set: function (key, value) {
    return window.localStorage.setItem(key, JSON.stringify(value))
  }
}
var S = {
  enc: function (obj, key) {
    return CryptoJS.AES.encrypt(JSON.stringify(obj), key).toString()
  },
  dec: function (str, key) {
    return JSON.parse(CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8))
  }
}
var com = {}
com.localData = dataLocal
com.s = S
export const common = com
