// pages/classification/classification.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        theight: "",
        currentTab: 0,
        currenttext: "",
        bannerimage: "",
        arr: [{
                id: 1,
                tab: "笔",
                bannerimage: "../images/classification/fenlei_03.jpg"
            },
            {
                id: 2,
                tab: "墨",
                bannerimage: "../images/classification/fenlei_03.jpg"
            },
            {
                id: 3,
                tab: "纸",
                bannerimage: "../images/classification/fenlei_03.jpg"
            },
            {
                id: 4,
                tab: "砚",
                bannerimage: "../images/classification/fenlei_03.jpg"
            },

        ],
        types: [{
                imgurl: "../images/classification/fenlei_07.jpg",
                text: "笔1",
                type: "1" //type1代表笔，2代表墨依此类推
            }, {
                imgurl: "../images/classification/fenlei_09.jpg",
                text: "笔2",
                type: "1"
            }, {
                imgurl: "../images/classification/fenlei_11.jpg",
                text: "笔3",
                type: "1"
            }, {
                imgurl: "../images/classification/fenlei_07.jpg",
                text: "笔1",
                type: "1" //type1代表笔，2代表墨依此类推
            }, {
                imgurl: "../images/classification/fenlei_09.jpg",
                text: "笔2",
                type: "1"
            }, {
                imgurl: "../images/classification/fenlei_11.jpg",
                text: "笔3",
                type: "1"
            }, 
            {
                imgurl: "../images/classification/fenlei_07.jpg",
                text: "笔1",
                type: "1" //type1代表笔，2代表墨依此类推
            }, {
                imgurl: "../images/classification/fenlei_09.jpg",
                text: "笔2",
                type: "1"
            }, {
                imgurl: "../images/classification/fenlei_11.jpg",
                text: "笔3",
                type: "1"
            }, 
            {
                imgurl: "../images/classification/fenlei_07.jpg",
                text: "笔1",
                type: "1" //type1代表笔，2代表墨依此类推
            }, {
                imgurl: "../images/classification/fenlei_09.jpg",
                text: "笔2",
                type: "1"
            }, {
                imgurl: "../images/classification/fenlei_11.jpg",
                text: "笔3",
                type: "1"
            }, 
            {
                imgurl: "../images/classification/fenlei_07.jpg",
                text: "笔1",
                type: "1" //type1代表笔，2代表墨依此类推
            }, {
                imgurl: "../images/classification/fenlei_09.jpg",
                text: "笔2",
                type: "1"
            }, {
                imgurl: "../images/classification/fenlei_11.jpg",
                text: "笔3",
                type: "1"
            }, 
            {
                imgurl: "../images/classification/fenlei_07.jpg",
                text: "笔1",
                type: "1" //type1代表笔，2代表墨依此类推
            }, {
                imgurl: "../images/classification/fenlei_09.jpg",
                text: "笔2",
                type: "1"
            }, {
                imgurl: "../images/classification/fenlei_11.jpg",
                text: "笔3",
                type: "1"
            }, 
            {
                imgurl: "../images/classification/fenlei_16.jpg",
                text: "墨1",
                type: "2"
            }, {
                imgurl: "../images/classification/fenlei_17.jpg",
                text: "墨2",
                type: "2"
            }, {
                imgurl: "../images/classification/fenlei_19.jpg",
                text: "墨",
                type: "2"
            }, {
                imgurl: "../images/classification/fenlei_23.jpg",
                text: "墨",
                type: "2"
            }, {
                imgurl: "../images/classification/fenlei_25.jpg",
                text: "纸",
                type: "3"
            }, {
                imgurl: "../images/classification/fenlei_09.jpg",
                text: "纸",
                type: "3"
            }, {
                imgurl: "../images/classification/fenlei_11.jpg",
                text: "纸",
                type: "3"
            }, {
                imgurl: "../images/classification/fenlei_16.jpg",
                text: "纸",
                type: "3"
            }, {
                imgurl: "../images/classification/fenlei_17.jpg",
                text: "研",
                type: "4"
            }, {
                imgurl: "../images/classification/fenlei_19.jpg",
                text: "研",
                type: "4"
            }, {
                imgurl: "../images/classification/fenlei_23.jpg",
                text: "研",
                type: "4"
            }, {
                imgurl: "../images/classification/fenlei_25.jpg",
                text: "研",
                type: "4"
            }
        ]
    },
  tosearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  toclasssearch: function (e) {
      console.log(e.currentTarget.dataset.classsearch)
    wx.navigateTo({
      url: '../search/search?'+'classsearch=' +e.currentTarget.dataset.classsearch,
    })
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                console.log(res)
                var query = wx.createSelectorQuery();
                query.select('.top').boundingClientRect();
                query.exec(function (q) {
                    that.setData({
                        theight: res.windowHeight - q[0].height,
                    });
                    console.log(that.data.theight);
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

    },
    swichNav: function (e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current,
            })
        }
    },
    swiperChange: function (e) {
        var that = this;
        this.setData({
            bannerimage: that.data.arr[that.data.currentTab].bannerimage,
            currentTab: e.detail.current,
            currenttext: that.data.arr[that.data.currentTab].tab
        })

    },
    loadMore() {
        console.log("更多")
    }
})