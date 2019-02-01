// mypages/index/index.js

// var app = getApp();
// var pages = getCurrentPages();
// var currentPage = pages[pages.length - 1];


// var myMod = require('mod.js');

Page({

  /**
   * Page initial data
   */
  data: {
  //   count: 0
  // toView: 'item-3',
  // scrollTop: 100

  // autoplay: true,
  // sliderList: [
  //   { className: 'bg-red', name: 'slider1' },
  //   { className: 'bg-blue', name: 'slider2' },
  //   { className: 'bg-green', name: 'slider3' }
  // ]
  // sliderList: [
  //   { selected: true, imageSource: '../../images/a.jpg' },
  //   { selected: false, imageSource: '../../images/a.jpg' },
  //   { selected: false, imageSource: '../../images/a.jpg' }
  // ]
  },

// switchTab: function(e) {
//   var _sliderList = this.data.sliderList;
//   var i = 1;
//   var item = _sliderList[0];
//   for (i = 0; item = _sliderList[i]; ++i)
//   {
//     item.selected = e.detail.current == i;
//     console.log(e.detail.current);
//   }
//   console.log(_sliderList);
//   this.setData({
//     sliderList: _sliderList
//   });
// },

  // play: function() {
  //   this.setData({
  //     autoplay: !this.data.autoplay
  //   });
  // },

  // change: function() {
  //   console.log('执行切换')
  // },

  // scrollToUpper: function() {
  //   console.log('触发滚动到顶部事件');
  // }, 

  // scrollToLower: function () {
  //   console.log('触发滚动到底部事件');
  // }, 

  // scroll: function () {
  //   console.log('触发滚动事件');
  // }, 

  // scrollToTop: function () {
  //   this.setData({
  //     scrollTop: '0'
  //   });
  // }, 

  // countClick: function() {
  //   this.setData({
  //     count: this.data.count + 1
  //   });
  // },

  onPullDownRefresh: function() {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // console.log(getApp().bbbb.dddd.eeee);

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // myMod.run('zhangsan');
    // myMod.walk('lisi');
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})