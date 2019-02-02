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


  // sizeList: [10, 20, 30, 40],
  // typeList: ['success', 'success_no_circle', 'safe_success', 'success_circle', 'info', 'info_circle', 'waiting', 'waiting_circle', 'warn', 'saft_warn', 'circle', 'download', 'cancel', 'search', 'clear'],
  // colorList: ['green', 'rgb(139,101,8)']

  // content: '内容\n内容\t内容'
  // percent: 0

  // radios: [
  //   { value: '1', text: '选项1', checked: false },
  //   { value: '2', text: '选项2', checked: true },
  //   { value: '3', text: '选项3', checked: false },
  //   { value: '4', text: '选项4', checked: false }
  // ]

// countrys: [
//   { name: '中', value: '1', checked: false, disabled: false },
//   { name: '美', value: '2', checked: true, disabled: false },
//   { name: '日', value: '3', checked: false, disabled: false },
//   { name: '韩', value: '4', checked: false, disabled: false },
//   { name: '俄', value: '5', checked: true, disabled: false }
// ]

// switches: [
//   {
//     name: 'switch1',
//     checked: false,
//     type: 'switch',
//     changeEventName: 'change'
//   },
//   {
//     name: 'switch2',
//     checked: true,
//     type: 'checkbox',
//     changeEventName: 'change'
//   },
// ]

  },

// checkboxchange: function(e) {
//   console.log(e.detail.value);
// },


// change: function(e) {
//   var name = e.currentTarget.dataset.name,
//       switches = this.data.switches,
//       i,
//       s;

//   for (i = 0; s = switches[i]; ++i)
//   {
//     if (s.name == name)
//     {
//       s.checked = e.detail.value;
//       break;
//     }
//   }
//   console.log(name + '的选中状态为: ' + e.detail.value);
// }, 

  // checkboxChange: function(e) {
  //   console.log('选中的选项有: ' + e.detail.value);
  // },

// changeChoosed: function(e) {
//   console.log('你选中了: ' + e.detail.value);
// },

  // click: function() {
  //   this.setData({
  //     percent: this.data.percent + 1
  //   });
  // },

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