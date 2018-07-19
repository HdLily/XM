// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex: 0,
    toView: "xinpin",
    category: [
      { name: "新品", id: "xinpin"},
      { name: "手机", id: "phone" },
      { name: "电视", id: "vedio" },
      { name: "电脑", id: "computer" },
      { name: "家电", id: "jiadian" },
      { name: "家装", id: "jiazhuang" },
      { name: "路由", id: "luyou" },
      { name: "智能", id: "zhineng" },
      { name: "儿童", id: "children" },
      { name: "电源", id: "dianyuan" },
      { name: "耳机", id: "earring" },
      { name: "音箱", id: "yinxiang" },
      { name: "礼品", id: "gift" },
      { name: "生活", id: "life" },
      { name: "米粉卡", id: "mifenka" }
    ]
    
  
  },
  switchCategory(e) {
    // 先判断是否有 e.target.dataset
    // console.log(e.currentTarget.dataset.index);
    this.setData({
      toView: e.currentTarget.dataset.id,
      curIndex: 
      e.currentTarget.dataset.index ? 
      e.currentTarget.dataset.index : 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b1a639c927ffb7b34769090/xiaomi/xiaomi#!method=get',
      success: (res) => {
        this.setData({
          detail: res.data.detail
        })
      }
    })
    
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