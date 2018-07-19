// pages/discovery/discovery.js
var _animation;
var _animationIndex;
const _ANIMATION_TIME = 500;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      animation: ''
    
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
  onShow: function () {
    _animation = wx.createAnimation({
      duration: _ANIMATION_TIME,
      timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '50% 50% 0'
    })
  },

  /**
    * 实现image旋转动画，每次旋转 120*n度
    */
  rotateAni: function (n) {
    _animation.rotate(120 * (n)).step()
    this.setData({
      animation: _animation.export()
    })
  },

  /**
    * 开始旋转
    */
  startAnimationInterval: function () {
    var that = this;
    that.rotateAni(++_loadImagePathIndex); // 进行一次旋转
    _animationIntervalId = setInterval(function () {
      that.rotateAni(++_loadImagePathIndex);
    }, _ANIMATION_TIME); // 没间隔_ANIMATION_TIME进行一次旋转
  },

  /**
    * 停止旋转
    */
  stopAnimationInterval: function () {
    if (_animationIntervalId > 0) {
      clearInterval(_animationIntervalId);
      _animationIntervalId = 0;
    }
  }
  
})