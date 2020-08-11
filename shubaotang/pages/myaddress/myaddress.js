// pages/myaddress/myaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
  },
  onLoad: function (options) {
    var that = this;
    var _carts = wx.getStorageSync('addlist');
    if (_carts!=null){
      _carts.forEach(function (item) {
      item.isSelect = false;
    })
    
    that.setData({
      carts: _carts,
    });
    }
  },

  delete: function (e) {
    var that=this;
    var idx = e.currentTarget.dataset.index;
    var _carts=that.data.carts;
    console.log(idx);
    _carts = _carts.filter(({ id }) => id !== idx);
    that.setData({
      carts: _carts,
    });
    wx.setStorageSync("addlist", _carts);
    console.log(_carts);
  },
  select: function (e) {

    var that = this;
    var idx = e.currentTarget.dataset.index;
    var carts = that.data.carts;
    that.data.carts.forEach(function (item) {
      item.isSelect = false;
    })
    var isSelect1 = carts[idx].isSelect;
    carts[idx].isSelect = !isSelect1;
    var result = that.data.carts.every(function (item) {
      return item.isSelect
    })
    that.setData({
      carts: carts,
    });
  },
  add: function (e) {
    wx.navigateTo({
      url: '../myaddaddress/myaddaddress',
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