//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scrollHeight: "",
    jnobj: {},
    banner_list: ['../images/index/index_02.jpg', '../images/index/index_02.jpg', '../images/index/index_02.jpg', '../images/index/index_02.jpg'],
    recommend:['../images/index/index_18.jpg','../images/index/index_18.jpg','../images/index/index_18.jpg']
  },
  //事件处理函数

  onLoad: function () {
    var that = this;
    that.setData({
      jnobj: app.globalData.jnobj,
      scrollHeight: app.globalData.scrollHeight
    });
  },
  tosearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  }
})
