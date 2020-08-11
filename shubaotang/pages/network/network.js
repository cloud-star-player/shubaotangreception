// pages/wangluo/wangluo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
  
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onload: function (options) {
      wx.onNetworkStatusChange(function (res) {
        console.log(res);
        if (res.networkType == 'wifi') {
  
          wx.navigateBack({
  
            delta: 1
  
          })
        } else if (res.networkType == '4g') {
  
          wx.navigateBack({
  
            delta: 1
  
          })
        } else if (res.networkType == '3g' || res.networkType == '2g') {
  
          wx.navigateBack({
  
            delta: 1
  
          })
        } else {
          
        }
      })
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