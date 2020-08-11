// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: true, //购物车是否有数据
    totalMoney: 0, //总金额
    selectAllStatus: false, //是否全选
    uid: 0, //用户ID
    totalCount: 0, //数量
    deleteAllStatus: false,
    carts: [{

      imgurl: '../images/classification/fenlei_17.jpg',
      goods_name: '中秋送礼信阳毛尖',
      price: 290,
      num: 1
    }, {

      imgurl: '../images/classification/fenlei_17.jpg',
      goods_name: '中秋送礼信阳毛尖',
      price: 30,
      num: 1
    }],
    // carts:[],
  },
  jiesuan: function (e) {
    wx.showModal({
      title: '提示',
      content: '确定要结算吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          sessionStorage.removeItem('shops');
          wx.navigateTo({
            url: '../pay/pay',
          })
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
      }
    })

  },
  bindIptCartNum: function (e) {
    var index = e.currentTarget.dataset.index;
    var num = e.detail.value;
    var carts = this.data.carts;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
  },

  /* 点击减号 */
  bindMinus: function (e) {
    var index = e.currentTarget.dataset.index;
    var carts = this.data.carts;
    var num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /* 点击加号 */
  bindPlus: function (e) {
    var index = e.currentTarget.dataset.index;
    var carts = this.data.carts;
    var num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  getTotalPrice() {
    var carts = this.data.carts;
    var total = 0;
    var num = 0;
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].isSelect) {
        total += carts[i].num * carts[i].price * 1; // 所有价格加起来
        num += carts[i].num * 1;
      }
    }
    this.setData({
      carts: carts,
      totalCount: num,
      totalMoney: total.toFixed(2)
    });
  },

  bindCheckbox: function (e) {
    var that = this;
    var idx = e.currentTarget.dataset.index;
    var carts = that.data.carts;
    var isSelect1 = carts[idx].isSelect;
    let _deleteAllStatus = false;
    carts[idx].isSelect = !isSelect1;
    var result = that.data.carts.every(function (item) {
      return item.isSelect
    })
    carts.find(item => {
      if (item.isSelect === true) {
        _deleteAllStatus = true
      }
    })
    that.setData({
      carts: carts,
      selectAllStatus: result,
      deleteAllStatus: _deleteAllStatus
    });
    that.getTotalPrice();
  },
  delectsuccess: function (e) {
    var that = this;
    if (!that.data.selectAllStatus) {
      that.data.carts.find(item => {
        var isSelect = item.isSelect
        that.data.carts = that.data.carts.filter(({
          isSelect
        }) => isSelect !== true);
        that.setData({
          carts: that.data.carts
        })
      })
    } else {
      that.setData({
        carts: [],
        selectAllStatus: !that.data.selectAllStatus,
        deleteAllStatus: !that.data.deleteAllStatus,
      })
    }
    that.getTotalPrice();
  },
  delectfalse: function (e) {
    wx.showToast({
      title: '删除时选中不可为空',
      icon: "none",
      mask: true
    })
    return;
  },
  bindSelectAll: function (e) {
    var that = this;
    var _deleteAllStatus="";
    that.data.selectAllStatus = !that.data.selectAllStatus;
    that.data.carts.forEach(function (item) {
      item.isSelect = that.data.selectAllStatus;
    });
    that.data.carts.find(item => {
      if (item.isSelect === true) {
        _deleteAllStatus = true
      }
    })
    that.setData({
      carts: that.data.carts,
      selectAllStatus: that.data.selectAllStatus,
      deleteAllStatus: _deleteAllStatus
    });

    that.getTotalPrice();
  },
  bindjiesuan: function () {
    var that = this;
    var carts = that.data.carts;
    var jscart = [];
    var j = 0
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].isSelect) {
        jscart[j] = carts[i];
        j++;
      }
    }
    if (jscart.length <= 0) {
      wx.showToast({
        title: '未选择商品',
        icon: 'success',
        duration: 1000
      })
      return;
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.data.carts.forEach(function (item) {
      item.isSelect = false;
    })
    that.setData({
      carts: that.data.carts,
    });
    console.log(that.data.carts);

    //远程传数据时可用
    // var _carts=[...wx.getStorageSync('shops')]
    // console.log(_carts);
    // if(_carts.length==0||_carts==" "||_carts==null){
    // _carts.forEach(function (item) {
    //   item.isSelect = false;
    // })
    // that.setData({
    //   carts: _carts,
    // });
    // }
  },


  /**
   * 生命周期函数--监听页面加载
   */


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