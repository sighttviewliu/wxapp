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
// icon: {
//   size: 20,
//   opacity: 8
// }
// list: [
//   '值1',
//   '值2',
//   '值3'
// ],
// selectedIndex: 0
// startTime: '00: 00',
// endTime: '24:00',
// selectTime: '11:30'
// startDate: '1970-01-01',
// endDate: '2099-12-31',
// selectDate: '2019-02-02'

// list: [
//   {
//     date: '12月27日',
//     selected: true,
//     times: [{time: '19:00'}, {time: '19:30'}, {time: '20:00'}, {time: '20:30'}, {time: '21:00'}]
//   },
//   {
//     date: '12月28日',
//     selected: false,
//     times: [{ time: '9:00' }, { time: '9:30' }, { time: '10:00' }, { time: '10:30' }, { time: '11:00' }]
//   },
//   {
//     date: '12月29日',
//     selected: false,
//     times: [{ time: '12:00' }, { time: '12:30' }, { time: '13:00' }, { time: '14:30' }, { time: '15:00' }]
//   }
// ]

// times:[
// '20:00', '20:30', '21:00', '21:30', '22:00'
// ],
// index: 3
// query: {}

  },


// changePicker: function(e) {
//   console.log(e.detail.value);
//   this.setData({
//     index: e.detail.value
//   });
// },

// submit: function(e) {
//   console.log(e.detail.value);
// }, 

// reset: function(e) {
//   console.log(e.detail.value);
//   console.log('重置');
// },





// getValue: function(e) {
//   console.log(e.detail.value);
// },

//   lineChange: function (e) {
    
//     console.log(e.detail.height);
//     console.log(e.detail.heightRpx);
//     console.log(e.detail.lineCount);
//   },


  // changeValue: function(e) {
  //   console.log(e.detail);
  //   var value = e.detail.value,
  //       pos = e.detail.cursor,
  //       left;
  //   if (pos != 1) {
  //     left = value.slice(0,pos);
  //     pos = left.replace(/123/g,'2').length;
  //   }
  //   return {
  //     value: e.detail.value.replace(/123/g,'2'),
  //     cursor: pos
  //   }
  // },

  // hideKeyboard: function(e) {
  //   if (e.detail.value.length >= 3) {
  //     wx.hideKeyboard();

  //   }
  // },

  // changeTime: function(e) {
  //   console.log('.. .. .. .. .. .. .. .. ..');
  //   var index = e.detail.value[0],
  //       list  = this.data.list,
  //       i,
  //       d;
  //   for (i = 0; d = list[i]; ++i) {
  //     d.selected = i == index ? true : false;
  //   }
  //   this.setData(this.data);
  // },

  // change: function (e) {
  //   console.log('... ... ... ... ... ... ...');
  //   this.setData({
  //     selectDate: e.detail.value
  //   });
  // },

  // change: function (e) {
  //   console.log('... ... ... ... ... ... ...');
  //   this.setData({
  //     selectTime: e.detail.value
  //   });
  // },

// change: function(e) {
//   console.log('... ... ... ... ... ... ...');
//   this.setData({
//     selectedIndex: e.detail.value
//   });
// },

  // changeSize: function(e) {
  //   this.data.icon.size = e.detail.value;
  //   this.setData(
  //     this.data
  //   );
  // },

  // changeOpacity: function(e) {
  //   this.data.icon.opacity = e.detail.value;
  //   this.setData(
  //     this.data
  //   );
  // },

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
    // this.data.query = options;
    // this.setData(this.data);
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