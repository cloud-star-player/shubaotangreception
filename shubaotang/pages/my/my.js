// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  call: function () {
    wx.showModal({
      title: '茶都服务中心',
      content: '致力于为您提供贴心服务,服务电话：123456789,电话接待时间：9：00~15：00,点击确定即可拨打',
      success(res) {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: "123456789",
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  mylogistics:function(e) {
    var currentTab=e.currentTarget.dataset.currenttab;
    wx.navigateTo({
      url: '../mylogistics/mylogistics?'+'currentTab=' + currentTab,
    })
  },
  myaddress:function(e) {
    wx.navigateTo({
      url: '../myaddress/myaddress',
    })
  },
  myrefund:function(e) {
    wx.navigateTo({
      url: '../myrefund/myrefund',
    })
  },
  mycollect:function(e) {
    wx.navigateTo({
      url: '../mycollect/mycollect',
    })
  },
  myrefund:function(e) {
    wx.navigateTo({
      url: '../myrefund/myrefund',
    })
  },
  myhistory:function(e) {
    wx.navigateTo({
      url: '../myhistory/myhistory',
    })
  },
  myaboutus:function(e){
    wx.navigateTo({
      url: '../myaboutus/myaboutus',
    })
  },
  myJoinus:function(e) {
    wx.navigateTo({
      url: '../myJoinus/myJoinus',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})