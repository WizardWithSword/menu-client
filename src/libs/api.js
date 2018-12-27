import {common} from './common.js'
// ajax 请求
var Apixhr = function (method, url, params) {
  return this._init(method, url, params)
}
Apixhr.prototype.done = function (res) {
}
Apixhr.prototype.fail = function (res) {
  console.log('请求失败', res)
}
Apixhr.prototype._init = function (method, url, params) {
  var that = this
  var xhr = new XMLHttpRequest()
  params = params === undefined ? '' : params
  if (method === 'GET') {
    var urlparams = '?'
    Object.keys(params).map(function (key) {
      var tmp = key + '=' + params[key]
      urlparams += tmp
      urlparams += '&'
    })
    urlparams = urlparams.replace(/&$/, '')
    url = url + urlparams
  }
  xhr.open(method, url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  var token = common.localData.get('tk') || 'undefined'
  xhr.setRequestHeader('token', token)
  var uinfo = common.localData.get('userinfo')
  if (uinfo) {
    xhr.setRequestHeader('auth', uinfo.uid)
  }
  var promise = new Promise(function (resolve, reject) {
    xhr.onreadystatechange = function () {
      switch (xhr.readyState) {
        case 1: // OPENED
          // do something
          break
        case 2: // HEADERS_RECEIVED
          // do something
          break
        case 3: // LOADING
          // do something
          break
        case 4:// DONE
          // do something
          if (this.status === 200) {
            that.done(JSON.parse(this.response))
            resolve(JSON.parse(this.response))
          } else {
            that.fail(this)
            reject(new Error(this))
          }
          break
      }
    }
    var body = typeof params === 'string' ? params : JSON.stringify(params)
    var secbodyobj = {}
    secbodyobj.s = common.s.enc(body, token)
    var secbody = JSON.stringify(secbodyobj)
    xhr.send(secbody)
  })
  return promise
}

var allApi = {
  reg: function (params) {
    return (new Apixhr('POST', '/api/shop/user/reg', params)).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  login: function (params) {
    return new Apixhr('POST', '/api/shop/user/login', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  uinfoDetail: function (params) {
    return new Apixhr('GET', '/api/shop/user/detail', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  uinfoEdit: function (params) {
    return new Apixhr('POST', '/api/shop/user/edit', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  restAdd: function (params) {
    return new Apixhr('POST', '/api/shop/restaurants/add', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  restList: function (params) {
    return new Apixhr('POST', '/api/shop/restaurants/list', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  restDetail: function (params) {
    return new Apixhr('GET', '/api/shop/restaurants/detail', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  restEdit: function (params) {
    return new Apixhr('POST', '/api/shop/restaurants/edit', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  menuDetail: function (params) {
    return new Apixhr('GET', '/api/shop/menu/list', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  menuEdit: function (params) {
    return new Apixhr('POST', '/api/shop/menu/edit', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  deskDetail: function (params) {
    return new Apixhr('GET', '/api/shop/desk/list', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  deskEdit: function (params) {
    return new Apixhr('POST', '/api/shop/desk/edit', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  orderEndDetail: function (params) {
    return new Apixhr('POST', '/api/shop/order/list/end', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  orderIngDetail: function (params) {
    return new Apixhr('POST', '/api/shop/order/list/ing', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  },
  orderEdit: function (params) {
    return new Apixhr('POST', '/api/shop/order/edit/status', params).then(function (res) {
      var resjson = common.s.dec(res.s, common.localData.get('tk') || 'undefined')
      console.log('请求返回值：', resjson)
      return resjson
    })
  }
}
export const api = allApi
