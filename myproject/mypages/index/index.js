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

    // array: [{
    //   mode: 'scaleToFill',
    //   text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    // }, {
    //   mode: 'aspectFit',
    //   text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    // }, {
    //   mode: 'aspectFill',
    //   text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    // }, {
    //   mode: 'top',
    //   text: 'top：不缩放图片，只显示图片的顶部区域'
    // }, {
    //   mode: 'bottom',
    //   text: 'bottom：不缩放图片，只显示图片的底部区域'
    // }, {
    //   mode: 'center',
    //   text: 'center：不缩放图片，只显示图片的中间区域'
    // }, {
    //   mode: 'left',
    //   text: 'left：不缩放图片，只显示图片的左边区域'
    // }, {
    //   mode: 'right',
    //   text: 'right：不缩放图片，只显示图片的右边边区域'
    // }, {
    //   mode: 'top left',
    //   text: 'top left：不缩放图片，只显示图片的左上边区域'
    // }, {
    //   mode: 'top right',
    //   text: 'top right：不缩放图片，只显示图片的右上边区域'
    // }, {
    //   mode: 'bottom left',
    //   text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    // }, {
    //   mode: 'bottom right',
    //   text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    // }],
    // src: '../../images/a.jpg'

    // myaudio: {
    //   src: '../../audios/abc.mp3',
    //   poster: '../../images/a.jpg',
    //   name: 'hula',
    //   author: 'jake'
    // }

    // src: '../../videos/xyz.mp4',
    // danmu: [
    //   {
    //     text: '第1秒出现的弹幕',
    //     color: '#ff0000',
    //     time: 1
    //   },
    //   {
    //     text: '第2秒出现的弹幕',
    //     color: '#00ff00',
    //     time: 2
    //   }
    // ],
    // danmuText: '',
    // maxDuration: 0
// latitude: 30.5491861989,
// longitude: 104.0680165911,
// scale: 5,
// marker: [
//   {
//     iconPath: '../../images/a.jpg',
//     id: 0,
//     latitude: 30.5491861989,
//     longitude: 104.0680165911,
//     width: 30,
//     height: 30
//   },
//   {
//     iconPath: '../../images/a.jpg',
//     id: 1,
//     latitude: 30.5468832268,
//     longitude: 104.0568588833,
//     width: 30,
//     height: 30
//   },
// ],
// polyline: [{
//   points: [
//   {
//     latitude: 30.5491861989,
//     longitude: 104.0680165911
//   },
//   {
//     latitude: 30.5468832268,
//     longitude: 104.0568588833,
//   },
//   {
//     latitude: 30.5470634483,
//     longitude: 104.0688698344,
//   },
//   {
//     latitude: 30.5468832268,
//     longitude: 104.0568588833,
//   }
// ],
// color: '#0000ffdd',
// width: 2,
// dottedLine: true
// }],
// controls:[
//   {
//     id: 1,
//     iconPath: '../../images/a.jpg',
//     position: {
//       left: 0,
//       top: 250,
//       width: 30,
//       height: 30
//     },
//     clickable: true
//   }
// ]

// content: ''


},

// myrequest: function() {

//   var socketOpen = false;
//   var socketMsgQueue = [];

//   wx.connectSocket({
//     url: 'wss://michaellaoliu.applinzi.com',
//     data: {
//       myData: 'data'
//     },
//     header: {
//       'Content-Type': 'application/json'
//     },
//     method: 'GET'
//   });

//   wx.onSocketOpen(function(res) {
//     console.log('连接已开');
//     socketOpen = true;
//     for (var i = 0, msg; msg = socketMsgQueue[i]; ++i)
//     {
//       sendMsg(msg);
//     }
//     socketMsgQueue = [];
//   });

//   wx.onSocketError(function (res) {
//     console.log('连接开启失败');
//   });

//   function sendMsg(msg) {
//     if (!socketOpen) {
//       socketMsgQueue.push(msg);
//       return;
//     }
//     wx.sendSocketMessage({
//       data: msg,
//     });
//   }

//   sendMsg({myName: 'weixin'});

//   wx.onSocketMessage(function(res){
//     console.log('收到服务器内容: ' + res.data);
//   });
  
//   wx.closeSocket();

//   wx.onSocketClose(function(){
//     console.log('ws已经关闭');
//   });
// },

// myrequest: function() {
//   var self = this;
//   wx.downloadFile({
//     url: 'https://michaellaoliu.applinzi.com',
//     success: function(res) {
//       wx.getImageInfo({
//         src: res.tempFilePaths[0],
//         success: function(info){
//           console.log(info.width + ',' + info.height);
//           self.setData({
//             content: info.width + ',' + info.height
//           });
//         }
//       });
//     }
//   });
// },

  // myrequest: function () {
  //   var self = this;

  //   wx.chooseImage({
  //     success: function(res) {
  //       var tempFilePaths = res.tempFilePaths;
  //       wx.uploadFile({
  //         url: 'https://michaellaoliu.applinzi.com',
  //         filePath: tempFilePaths[0],
  //         name: 'myFile',
  //         formData: {
  //           'k': 'v'
  //         },
  //         success: function(response) {
  //           console.log(response);
  //           self.setData({
  //             content: '成功' + response + 'file: ' + tempFilePaths[0]
  //           });
  //         },
  //         fail: function(response) {
  //           console.log(response);
  //           self.setData({
  //             content: '失败' + response
  //           });
  //         },
  //         complete: function() {
  //           console.log('无论成功失败都会执行');
  //         }
  //       })
  //     },
  //   });
  // },

// myrequest: function() {
// var self = this;
// wx.request({
//   url: 'https://michaellaoliu.applinzi.com',
//   header: {
//     'Content-Type': 'application/json'
//   },
//   success: function(e) {
//     console.log('成功后执行:' + e);
//     self.setData({
//       content: '成功后执行[' + e.errMsg + ']|[' + e.data + ']'
//     });
//   },
//   fail: function(e) {
//     console.log('失败后执行' + e);
//     self.setData({
//       content: '失败后执行[' + e.errMsg + ']|[' + e.data + ']'
//     });
//   },
//   complete: function() {
//     console.log('无论成功失败都会执行');
//   }
// });
// },

// regionchange(e) {
//   console.log(e.type);
// },

//   markertap(e) {
//     console.log(e.markerId);
//   },

//   controltap(e) {
//     console.log(e.controlId);
//   },

  // imageError: function (e) {
  //   console.log(e.detail.errMsg);
  // },

  // imageLoad: function(e) {
  //   console.log(e.detail.height);
  //   console.log(e.detail.width);
  // },

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
    // this.videoContext = wx.createVideoContext('myVideo', this);

    // var context = wx.createContext();
    // context.setStrokeStyle('#0000ff');
    // context.setLineWidth(5);
    // context.rect(3,2,150,200);
    // context.stroke();
    // wx.drawCanvas({
    //   canvasId: 'myCanvas',
    //   actions: context.getActions()
    // });
    // console.log('....');
  },

  // getVideo: function() {
  //   var self = this;
  //   wx.chooseVideo({
  //     success: function(res) {
  //       self.setData({
  //         maxDuration: 60,
  //         src: res.tempFilePath
  //       });
  //     }
  //   });
  // },

  // setInputValue: function(e) {
  //   this.setData({
  //     danmuText: e.detail.value
  //   });
  // },

  // sendDanmu: function() {
  //   var danmuText = this.data.danmuText;
  //   console.log(this.videoContext);
  //   this.videoContext.sendDanmu({
  //     text: danmuText,
  //     color: '#ff0000'
  //   });
  //   this.setData({
  //     danmuText: ''
  //   });
  // },

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