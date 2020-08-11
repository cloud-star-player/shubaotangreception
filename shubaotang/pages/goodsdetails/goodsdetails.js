// pages/fenleidetails/fenleidetails.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
      banner_list: ['../images/goodsdetails/fenleidetails_02.jpg', '../images/goodsdetails/fenleidetails_02.jpg', '../images/goodsdetails/fenleidetails_02.jpg', '../images/goodsdetails/fenleidetails_02.jpg'],
      shoucang:0,
      showPop: false,
      animationData: {},  
      shop: {
        name: "店铺名称",
        imgurl: "../images/goodsdetails/fenleidetails_02.jpg",
        goods_name: "园茗园 安溪特级铁观音茶叶浓香型2019新茶春茶铁观音500g礼盒装",
        price: 299.00,
        num: 1
      },
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
    }, 
    // 收藏
    shoucang:function(e){
      var that=this;
      if(that.data.shoucang==0){
        this.setData({
          shoucang: 1
        });
      }else{
        this.setData({
          shoucang: 0
        });
      }
     
      console.log(that.data.shoucang)
    },
    toshopping:function(e){
      wx.navigateTo({
        url: '../fenleishopping/fenleishopping'
      })
    },
    toshoppings: function (e) {
      wx.reLaunch({
        url: '../shopping/shopping'
      })
    },
    addshopping: function (e) {
      var that = this;
      let _shops = that.data.shops;
      let shop = that.data.shop;
      let _index = that.data.shops.length + 1;
      _shops.splice(_index + 1, 0, shop);
      that.setData({
        shops: _shops
      })
      wx.setStorageSync("shops", that.data.shops);
      wx.showToast({
        title: '添加购物车成功',
        icon: "success",
        mask: true
      })
      console.log(that.data.shops);
    },
    bindMinus: function (e) {
      var shop = this.data.shop;
      var num = shop.num;
      if (num <= 1) {
        return false;
      }
      num = num - 1;
      shop.num = num;
      this.setData({
        shop: shop
      });
    },

    showModal: function() {
      var _this = this;
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
        delay: 0
      })
      _this.animation = animation
      animation.translateY(300).step()
      _this.setData({
        animationData: animation.export(),
        showPop: true
      })
      setTimeout(function() {
        animation.translateY(0).step()
        _this.setData({
          animationData: animation.export()
        })
      }.bind(_this), 50)
    },
    // 隐藏底部弹层
    hideModal: function() {
      var _this = this;
      // 隐藏遮罩层
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: "ease",
        delay: 0
      })
      _this.animation = animation
      animation.translateY(300).step()
      _this.setData({
        animationData: animation.export(),
      })
      setTimeout(function() {
        animation.translateY(0).step()
        _this.setData({
          animationData: animation.export(),
          showPop: false
        })
      }.bind(this), 200)
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