var en = require('./english.js')
var zh = require('./zh.js')
console.log(en, zh)
var lang = window.navigator.language.toLowerCase()
var file
switch (lang) {
  case 'zh':
  case 'zh-cn':
    file = zh
    break
  case 'en':
    file = en
    break
  default:
    file = zh
    break
}

module.exports.install = function (Vue, options) {
  Vue.prototype.trans = file.la
}
