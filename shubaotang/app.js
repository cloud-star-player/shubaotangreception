//app.js
App({
  //网络检测
  network:function(){
    wx.onNetworkStatusChange(function (res) {
      console.log(res);
      if (res.networkType == 'wifi') {
        wx.showToast({
          title: '您已切回wifi',
          mask: true
        })
      } else if (res.networkType == '4g') {
        wx.showToast({
          title: '您正在使用4g',
          mask: true
        })
      } else if (res.networkType == '3g' || res.networkType == '2g') {
        wx.showToast({
          title: '您正在使用3g或2g',
          mask: true
        })
      } else {
        wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的
          url: "../network/network",
        })
      }
    })
  },

  onLaunch: function () {
    
    wx.onNetworkStatusChange(function (res) {
      console.log(res);
      if (res.networkType == 'wifi') {
        wx.showToast({
          title: '您已切回wifi',
          mask: true
        })
      } else if (res.networkType == '4g') {
        wx.showToast({
          title: '您正在使用4g',
          mask: true
        })
      } else if (res.networkType == '3g' || res.networkType == '2g') {
        wx.showToast({
          title: '您现在网络不佳',
          mask: true
        })
      } else {
        wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的
          url: "../network/network",
        })
      }
    })


    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 胶囊高度
    var that = this;
    var jn = wx.getMenuButtonBoundingClientRect();
    that.globalData.srollHeight = wx.getSystemInfoSync().windowHeight - jn.bottom;
    that.globalData.jnobj = jn;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    jnobj: {},
    scrollHeight: "", //胶囊高
    height: "",
  }
})