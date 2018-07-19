// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    isEmpty: false,
    seletAllStatus: true,
    totalPrice: 0

  
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
      url: 'https://www.easy-mock.com/mock/5b1bd681403771427cce086d/cart/start#!method=get',
      success: (res) => {
        this.setData({
         carts:res.data.data.carts
        });
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
  
  },
  goTo() {
    wx.switchTab({
      url: '/pages/index/index'

    })
  },
  selectList: function (e) {
    let counts = 0;
    let selectAllStatus = this.data.selectAllStatus;
    let carts = this.data.carts;
    const index = e.currentTarget.dataset.index;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    for(let i = 0; i<carts.length; i++) {
      if(carts[i].selected) {
        counts++;
      }
    }
    if(counts === carts.length) {
      selectAllStatus = true;
    } else {
      selectAllStatus = false;
    }
    this.setData({
      carts,
      selectAllStatus

    });
    this.getTotalPrice()
  },
  minusCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if(num<=1) return false;
    num--;
    carts[index].num = num;
    this.setData({
      carts
    })
    this.getTotalPrice()

  },
  addCount: function (e) {
    let carts = this.data.carts;
    let index = e.currentTarget.dataset.index;
    let num = carts[index].num;
    num++;
    carts[index].num = num;
    this.setData({
      carts
    })
    this.getTotalPrice()
  },
  payAll: function (e) {
    // let payBox = this.data.payBox;
    let carts = this.data.carts;
    let index = e.currentTarget.dataset.index;
    let number = carts[index].number;
    number++;
    carts[index].number = number;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = number;
    }
    this.setData({
      carts,
      selectAllStatus,
     number
    })
    this.getTotalPrice()

  },

  
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for(let i = 0; i<carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      carts,
      selectAllStatus
    })
    this.getTotalPrice()

  },

  getTotalPrice: function(e) {
    let carts = this.data.carts;
    let total = 0;
    for(let i = 0; i<carts.length; i++) {
      if(carts[i].selected) {
        total += carts[i].num * carts[i].price;
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)
    })
  }
  

})