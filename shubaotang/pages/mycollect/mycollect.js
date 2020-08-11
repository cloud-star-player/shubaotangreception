var app = getApp();//调用app变量
Page({

    /**
     * 页面的初始数据
     */
    data: {
      isSelect:1,  //收藏商品选中
      select:1,    //管理选中
      jnobj: app.globalData.jnobj,
      scrollHeight: app.globalData.scrollHeight,
        shoplist:[{
            id:1,
            image:"../images/classgoodslist/classgoodslist1.jpg",
            title:"[拼团] DIA迪亚天天麦芽糖醇牛奶巧克力100克/块1",
            price:12,
            num:12,
         },
         {
           id:1,
           image:"../images/classgoodslist/classgoodslist1.jpg",
           title:"[拼团] DIA迪亚天天麦芽糖醇牛奶巧克力100克/块1",
           price:12,
           num:12,
        },
         {
           id:2,
           image:"../images/classgoodslist/classgoodslist1.jpg",
           title:"[拼团] DIA迪亚天天麦芽糖醇牛奶巧克力100克/块2",
           price:12,
           num:12,
         },
         {
           id:3,
           image:"../images/classgoodslist/classgoodslist1.jpg",
           title:"[拼团] DIA迪亚天天麦芽糖醇牛奶巧克力100克/块3",
           price:12,
           num:12,
         },
       ]
    },
    fanhui:function(e){
      wx.reLaunch({
        url: '../my/my',
      })
    },
    quxiao:function(e){
       var that=this;
      that.setData({
        select: !that.data.select,
      });
    },
    delete:function(e){
      var that=this;
      that.setData({
        select: !that.data.select,
      });
    },
    guanli:function(e){
       var that=this;
      that.setData({
        select: !that.data.select,
      });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that=this;
      that.setData({
        jnobj: app.globalData.jnobj,
        scrollHeight: app.globalData.scrollHeight
      });
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