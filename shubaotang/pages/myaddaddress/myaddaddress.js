// pages/myaddaddress/myaddaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province_list: null,
    province_name: null,
    city_list: null,
    city_name: null,
    area_list: null,
    area_name: null,
    addressCity: null,
    multiArray: [], // 三维数组数据
    multiIndex: [0, 0, 0], // 默认的下标,
    selectProvinceId: null,
    selectCityId: null,
    selectAreaId: null,
    addlist:[],

    // addlist: [],
    len: 0
  },
  onLoad: function (options) { //通过接口进行数据渲染
    var addlists=wx.getStorageSync('addlist')
    var that=this;
    if(addlists!=null||addlists!=" "){
      that.setData({
        addlist:addlists
      })   
    }
    this.getProvince()
  },
  getProvince: function () {
    let that = this
    wx.request({
      url: 'https://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/100000_province.json',

      success(res) {
        let provinceList = [...res.data.rows] //放到一个数组里面
        let provinceArr = res.data.rows.map((item) => {
          return item.name
        }) //获取名称
        that.setData({
          multiArray: [provinceArr, [],
            []
          ], //更新三维数组  更新完为[['广东','北京'],[],[]]
          province_list: provinceList, //省级原始数据
          province_name: provinceArr, //省级全部名称
        })
        let defaultCode = provinceList[1].adcode //使用第一项当作参数获取市级数据
        console.log(defaultCode);
        if (defaultCode || defaultCode != " " || defaultCode != undefined) {
          that.setData({
            currnetProvinceId: defaultCode //保存当前省份id
          })
          that.getCity(defaultCode) //获取市区数据
        }
      }
    })
  },
  //根据省份id获取城市
  getCity: function (id) {
    console.log(id + "省份id")
    let that = this
    that.setData({
      currnetProvinceId: id
    })
    wx.request({
      url: 'https://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/' + id + '_city.json',
      data: {
        provinceid: id
      },
      success(res) {
        console.log(res.data.rows)
        if (res.data.rows.length != 0) {
          let cityArr = res.data.rows.map((item) => {
            return item.name
          }) //返回城市名称
          let cityList = [...res.data.rows]
          console.log(cityList + "城市")
          that.setData({
            multiArray: [that.data.province_name, cityArr, []], //更新后[['广东','北京'],['潮州'，'汕头','揭阳'],[]]
            city_list: cityList, //保持市级数据
            city_name: cityArr //市级名称
          })
          let defaultCode = cityList[0].adcode //获取第一个市的区级数据
          console.log(defaultCode);
          if (defaultCode) {
            that.setData({
              currentCityId: defaultCode //保存当下市id
            })
            that.getArea(defaultCode) //获取区域数据
          }
        }else{
          let cityArr = res.data.rows.map((item) => {
            return item.name
          }) //返回城市名称
          let cityList = [...res.data.rows]
          console.log(cityList + "城市")
          that.setData({
            multiArray: [that.data.province_name, cityArr, []], //更新后[['广东','北京'],['潮州'，'汕头','揭阳'],[]]
            city_list: cityList, //保持市级数据
            city_name: cityArr, //市级名称
            area_list: null, //区列表
            area_name: null //区名字
          })
        }
      }
    })

  },
  //获取区域
  getArea: function (id) {
    let that = this
    console.log(id + "城市id")
    that.setData({
      currentCityId: id //保存当前选择市
    })
    wx.request({
      url: 'https://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/' + id + '_district.json',
      data: {
        cityid: id
      },
      success(res) {

        // let areaList = [...res.data.rows]
        let areaList = filterByName(res.data.rows)
        console.log(areaList)

        function filterByName(areaArr) {
          return areaArr.filter(item => item.adcode.substring(0, 4) == id.substring(0, 4))
        }
        let areaArr = areaList.map((item) => {
          return item.name
        })

        console.log(areaArr)

        // let areaArr = res.data.rows.map((item) => {
        //   return item.name
        // }) //区域名
        that.setData({
          multiArray: [that.data.province_name, that.data.city_name, areaArr],
          area_list: areaList, //区列表
          area_name: areaArr //区名字
        })

      }
    })
  },
  //picker确认选择地区
  bindRegionChange: function (e) {
    // 因为在获取省中 北京只有一个选项，导致获取不了北京》北京》第一个
    if (e.detail.value[1] == null || e.detail.value[2] == null) { //如果只滚动了第一列则选取第一列的第一数据
      this.setData({
        multiIndex: e.detail.value, //更新下标
        addressCity: [this.data.province_list[e.detail.value[0]].name, this.data.city_list[0].name, this.data.area_list[0].name],
        selectProvinceId: this.data.province_list[e.detail.value[0]].adcode,
        selectCityId: this.data.city_list[0].adcode,
        selectAreaId: this.data.area_list[0].adcode
      })
    } else {
      console.log(e.detail.value)
      this.setData({
        multiIndex: e.detail.value, //更新下标
        addressCity: [this.data.province_list[e.detail.value[0]].name, this.data.city_list[e.detail.value[1]].name, this.data.area_list[e.detail.value[2]].name],
        selectProvinceId: this.data.province_list[e.detail.value[0]].adcode,
        selectCityId: this.data.city_list[e.detail.value[1]].adcode,
        selectAreaId: this.data.area_list[e.detail.value[2]].adcode
      })
    }
    // console.log(this.data.selectProvinceId,this.data.selectCityId,this.data.selectAreaId)
  },
  //滑动地区组件
  bindRegionColumnChange: function (e) {
    let that = this
    let column = e.detail.column //当前改变的列
    let data = {
      multiIndex: JSON.parse(JSON.stringify(that.data.multiIndex)),
      multiArray: JSON.parse(JSON.stringify(that.data.multiArray))
    }
    data.multiIndex[column] = e.detail.value //第几列改变了就是对应multiIndex的第几个，更新他
    let provinceList = [...that.data.province_list]
    let cityList = [...that.data.city_list]
    switch (column) {
      case 0: //第一列改变，省级改变
        let currentProvinceId = provinceList[e.detail.value].adcode
        if (currentProvinceId != that.data.currentProvinceId) { //判断当前id是不是更新了
          that.getCity(currentProvinceId) //获取当前id下的市级数据
        }
        data.multiIndex[1] = 0 //将市默认选择第一个
        break
      case 1: //第二列改变，市级改变
        let currentCityId = cityList[e.detail.value].adcode
        console.log(currentCityId);
        if (currentCityId != that.data.currentCityId) {
          that.getArea(currentCityId) //获取区域
        }
        data.multiIndex[2] = 0 //区域默认第一个
        break
    }
    that.setData(data) //更新数据
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
  addsubmit: function (e) {
    var that = this;
    if (e.detail.value.consignee == "") {
      wx.showToast({
        title: '收货人没填写',
        icon: "none",
        mask: true
      })
      return;
    } else if (e.detail.value.phonenumber.length != 11||isNaN(e.detail.value.phonenumber)) {
      wx.showToast({
        title: '手机号错误',
        icon: "none",
        mask: true
      })
      return;
    } else if (that.data.addressCity == null) {
      wx.showToast({
        title: '所在区域没选择',
        icon: "none",
        mask: true
      })
      return;
    } else if (e.detail.value.detailedregion == "") {
      wx.showToast({
        title: '详情地址没填写',
        icon: "none",
        mask: true
      })
      return;
    } else {
      var that = this;
      console.log(that.data.addlist.length);
      let _addlist = [...that.data.addlist];
      let _len = that.data.addlist.length + 1;
      let _index = that.data.addlist.length + 1;
      _addlist.splice(_index + 1, 0, {
        'id': _len,
        "consignee": e.detail.value.consignee,
        "detailedregion":e.detail.value.location+" "+ e.detail.value.detailedregion,
        "location": e.detail.value.location,
        "phonenumber": e.detail.value.phonenumber,
        "isSelect": false
      })
      that.setData({
        len: _len,
        addlist: _addlist
      })
      wx.setStorageSync("addlist", that.data.addlist);
      wx.showToast({
        title: '添加地址成功',
        icon: "success",
        mask: true
      })
      console.log(that.data.addlist);

      wx.reLaunch({
        url: '../my/my',
      })

    }
  }
})