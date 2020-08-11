// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        search_hot: ['1', '123', '123', '123', '123', '123'], //商品热搜
        title: "", //文本框内容
        search_text: [], //历史记录
        shoplist: [], //商品集合
        shoplists: [{
                imgurl: "../images/classgoodslist/classgoodslist1.jpg",
                text: "安溪铁观音浓香型特级秋茶",
                price: "￥299.00"
            }, {
                imgurl: "../images/classgoodslist/classgoodslist1.jpg",
                text: "安溪铁观音浓香型特级秋茶",
                price: "￥199.00"
            }, {
                imgurl: "../images/classgoodslist/classgoodslist1.jpg",
                text: "铁观音茶叶浓香型",
                price: "￥129.00"
            }, {
                imgurl: "../images/classgoodslist/classgoodslist1.jpg",
                text: "2019年中山白叶乌龙茶叶",
                price: "￥180.00"
            },
            {
                imgurl: "../images/classgoodslist/classgoodslist1.jpg",
                text: "安溪铁观音浓香型特级秋茶",
                price: "￥299.00"
            }, {
                imgurl: "../images/classgoodslist/classgoodslist1.jpg",
                text: "安溪铁观音浓香型特级秋茶",
                price: "￥199.00"
            }, {
                imgurl: "../images/classgoodslist/classgoodslist1.jpg",
                text: "铁观音茶叶浓香型",
                price: "￥129.00"
            }, {
                imgurl: "../images/classgoodslist/classgoodslist1.jpg",
                text: "2019年中山白叶乌龙茶叶",
                price: "￥180.00"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.classsearch)
        if (options.classsearch != null && options.classsearch != '') {
            var that =this;
            var _search_text = wx.getStorageSync('search_text')
            console.log(options.classsearch)
            that.setData({
                title: options.classsearch
            });
            
            let _search_texts = [..._search_text];
            let _len = _search_text.length + 1;
            let _index = _search_text.length + 1;
            let _search_text = filterByName(_search_texts)
            console.log(_search_text)

            function filterByName(_search_text) {
                return _search_text.filter(item => item.title != that.data.title)
            }
            _search_text.splice(_index + 1, 0, {
                'id': _len,
                'title': that.data.title
            })
            that.setData({
                len: _len,
                search_text: _search_text.reverse()
            })
            console.log(that.data.search_text)
            that.setData({
                shoplist: that.data.shoplists
            })
            wx.setStorageSync("search_text", that.data.search_text.reverse());
        } else {
            var _search_text = wx.getStorageSync('search_text')
            var that = this;
            if (_search_text != null || _search_text != " ") {
                that.setData({
                    search_text: _search_text
                })
            }
        }
    },
    search: function (e) {
        var that = this;
        that.setData({
                title: e.detail.value
            }),
            console.log(e.detail.value)
        if (e.detail.value.length == 0 || e.detail.value == null || e.detail.value == " ") {
            that.setData({
                shoplist: []
            })
        }
    },

    searchs: function (e) {
        var that = this;
        console.log(this.data.title)
        if (this.data.title == null || this.data.title == " ") {
            wx.showToast({
                title: '搜索不可为空',
                icon: "none",
                mask: true
            })
            return;
        }
        if (this.data.title.length > 20) {
            wx.showToast({
                title: '搜索过长',
                icon: "none",
                mask: true
            })
            return;
        }
        if (that.data.search_text.length <= 20) {
            let _search_texts = [...that.data.search_text];
            let _len = that.data.search_text.length + 1;
            let _index = that.data.search_text.length + 1;
            let _search_text = filterByName(_search_texts)
            console.log(_search_text)

            function filterByName(_search_text) {
                return _search_text.filter(item => item.title != that.data.title)
            }
            _search_text.splice(_index + 1, 0, {
                'id': _len,
                'title': that.data.title
            })
            that.setData({
                len: _len,
                search_text: _search_text.reverse()
            })
            console.log(that.data.search_text)
            that.setData({
                shoplist: that.data.shoplists
            })
        }
        wx.setStorageSync("search_text", that.data.search_text.reverse());
    },
    search_delete: function (e) {
        var that = this;
        var idx = e.currentTarget.dataset.index;
        var _search_text = that.data.search_text;
        console.log(idx);
        wx.showModal({
            title: '提示',
            content: '确定要删除此记录吗？',
            success: function (res) {
                if (res.confirm) {
                    console.log('点击确定了');
                    _search_text = _search_text.filter(({
                        id
                    }) => id !== idx);
                    that.setData({
                        search_text: _search_text,
                    });
                    wx.setStorageSync("search_text", _search_text);
                    console.log(_search_text);
                } else if (res.cancel) {
                    console.log('点击取消了');
                    return false;
                }
            }
        })

    },
    search_deleteall: function (e) {
        var that = this;
        wx.showModal({
            title: '提示',
            content: '确定要删除所有记录吗？',
            success: function (res) {
                if (res.confirm) {
                    console.log('点击确定了');
                    that.setData({
                        search_text: [],
                    })
                    wx.setStorageSync("search_text", that.data.search_text);
                } else if (res.cancel) {
                    console.log('点击取消了');
                    return false;
                }
            }
        })
    },
    hot_click: function (e) {
        var that = this;
        var hotshop = e.currentTarget.dataset.index;
        that.setData({
            title: hotshop
        })
        let _search_texts = [...that.data.search_text];
        let _len = that.data.search_text.length + 1;
        let _index = that.data.search_text.length + 1;
        let _search_text = filterByName(_search_texts)
        console.log(_search_text)

        function filterByName(_search_text) {
            return _search_text.filter(item => item.title != that.data.title)
        }
        _search_text.splice(_index + 1, 0, {
            'id': _len,
            'title': that.data.title
        })
        that.setData({
            len: _len,
            search_text: _search_text.reverse()
        })
        console.log(that.data.search_text)
        that.setData({
            shoplist: that.data.shoplists
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