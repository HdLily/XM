//index.js
//获取应用实例
// import util from '../../utils/detailData1';
// console.log(util);
const app = getApp()
// var indexGlobalData = {},             // 首页中可视界面数据
//   refreshGlobalData = []            // 需要动态加载的变量
Page({
  data: {
  
    indexNavData: [
      {
        title: "手机",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/phone.png"
      },
      {
        title: "电视",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/tv.png"
      },
      {
        title: "电脑",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/computer.png"
      },
      {
        title: "智能",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/router.png"
      },
      {
        title: "新品",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/news.png"
      }
    ],
    isLazyLoad: true,
    goods: []
   
  },
  toDetailTap:function(e){
    var index = e.currentTarget.dataset.index;
    var detail = this.data.goods[index];
    app.globalData.detail = detail;
    // console.log(app.globalData.detail);
    this.setData({
      detail:detail
    });
    wx.navigateTo({
      url:'../detail/detail'
    })
  },
  navigateTap(){
    wx.showToast({
      title:"该功能尚未上线",
      icon:"none",
      duration:1000
    })
  },
  onLoad: function () {
    // 获得网络状态
    new Promise((resolve, reject) => {
      let req = wx.getNetworkType({
        success: function (res) {
          // 返回网络类型, 有效值：
          // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
          var networkType = res.networkType
          if (networkType == "none") {
            resolve(false);
          } else {
            resolve(true);
          }
        },
        fail: function (res) {
          reject(false);
        }
      })
    }).then(function (res) {
      if (!res) {
        wx.reLaunch({
          url: '/pages/error/error',
        })
      }
    });
  },

  /**
   * 上拉加载
   */
  onReachBottom: function () {
    // 删除并返回数组的第一个
    var temp = refreshGlobalData.shift();
    if (temp) {
      // 存放截取的数据
      indexGlobalData.data.push(temp);
      // 替换数据
      this.setData({
        indexData: indexGlobalData
      });
    }

  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b17e2714a94cc1567ae66ce/hll/start#!method=get',
      success: (res) => {
        this.setData ({
          goods: res.data.data.detail
        });
      }
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  // 跳转到搜索商品页面
  moveToSearch: function () {
    wx.navigateTo({
      url: '/pages/subPages/search/search',
    })
  },
  test1: function (e) {
    console.log(e);
    wx.previewImage({
      urls: [e.currentTarget.dataset.img],
    })
  }
})