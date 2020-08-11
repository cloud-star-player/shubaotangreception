// pages/ceshi/ceshi.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    code: 0,
  
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  
  
  onLoad: function (options) {    //通过接口进行数据渲染
    wx.request({
      url: 'https://www.yinzepeng.site:8080/listUser',
      method: 'POST',
      success(res) {
        console.log(res)
      }
  })
  },
//picker确认选择地区
 
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

  },
  // 获取用户授权信息
  getUserInfo: function (e) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) { // 判断获取用户信息是否授权

          wx.getUserInfo({ // 获取用户信息
              success: res => {
                console.log("encryptedData: "+res.encryptedData)
                console.log("iv:"+ res.iv)
                console.log("头像：" + res.userInfo.avatarUrl)
                console.log("昵称：" + res.userInfo.nickName)
                console.log("性别：" + res.userInfo.gender)
              },
            }),
            wx.login({
              success(res) {
                if (res.code) {
                  // 发起网络请求
                  wx.request({
                    url: '提交的接口url',
                    data: {
                      code: res.code // 提交code
                    }
                  })
                  console.log(res.code);
                } else {
                  console.log('登录失败！' + res.errMsg)
                }
              }
            })

        } else {
          console.log("没有授权")
        }
      }
    });
  }

})