// pages/myrefund/myrefund.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        refundorder:[{
            id:1
         },
         {
           id:2
        },{
          id:3
        }
       ],
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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getSystemInfo({
            success: function (res) {
              console.log(res);
              var query = wx.createSelectorQuery();
              query.exec(function (q) {
                console.log(q);
                  that.setData({
                    swiperheight2: res.windowHeight
                  });
              })
            },
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