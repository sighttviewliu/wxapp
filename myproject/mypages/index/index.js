// mypages/index/index.js

// var app = getApp();
// var pages = getCurrentPages();
// var currentPage = pages[pages.length - 1];


// var myMod = require('mod.js');

// var _fn;
// _fn = {
//   drawLine: function(canvasContext, start, end) {
//     canvasContext.beginPath();
//     canvasContext.moveTo(start[0],start[1]);
//     canvasContext.lineTo(end[0],end[1]);
//     canvasContext.stroke();
//   },

//   drawAngle: function(canvasContext, beginPoint) {
//     canvasContext.beginPath();
//     canvasContext.moveTo(beginPoint[0], beginPoint[1]);
//     canvasContext.lineTo(beginPoint[0] + 40, beginPoint[1] + 20);
//     canvasContext.lineTo(beginPoint[0], beginPoint[1] + 40);
//     canvasContext.stroke();
//   },

//   drawTrianglePath: function(canvasContext, beginPos) {
//     canvasContext.moveTo(beginPos[0],beginPos[1]);
//     canvasContext.beginPath();
//     canvasContext.lineTo(beginPos[0] + 30, beginPos[1] - 50);
//     canvasContext.lineTo(beginPos[0] + 60, beginPos[1]);
//     canvasContext.lineTo(beginPos[0], beginPos[1]);
//     canvasContext.closePath();
//   },

//   drawSectorPath: function(canvasContext, beginPos, radius, startAngle, endAngle) {
//     canvasContext.moveTo(beginPos[0], beginPos[1]);
//     canvasContext.beginPath();
//     canvasContext.lineTo(beginPos[0] + radius, beginPos[1]);
//     canvasContext.arc(beginPos[0], beginPos[1], radius, startAngle*Math.PI/180, endAngle*Math.PI/180);
//     canvasContext.lineTo(beginPos[0] + radius, beginPos[1]);
//     canvasContext.closePath();
//   },

//   drawQuadraticCurve: function(canvasContext, startPoint, controlPoint, endPoint) {
//     canvasContext.beginPath();
//     canvasContext.moveTo(startPoint[0], startPoint[1]);
//     canvasContext.quadraticCurveTo(controlPoint[0], controlPoint[1], endPoint[0], endPoint[1]);
//     //这里不需要关闭路径，我们不需要让这个曲线首尾相连闭合
//   },

//   drawBezierCurve: function(canvasContext, startPoint, controlPoint1, controlPoint2, endPoint) {
//     canvasContext.beginPath();
//     canvasContext.moveTo(startPoint[0], startPoint[1]);
//     canvasContext.bezierCurveTo(controlPoint1[0], controlPoint1[1], controlPoint2[0], controlPoint2[1], endPoint[0], endPoint[1]);
//     //这里不需要关闭路径，我们不需要让这个曲线首尾相连闭合
//   },
// }

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

// src: '',
// info: '',
// tempPath: ''
// status: '',
// event_status: ''


    // audioSrc: 'http://ra01.sycdn.kuwo.cn/resource/n3/32/56/3260586875.mp3',
    // coverSrc: 'http://wx4.sinaimg.cn/mw690/6a04b428gy1fvi7c6c0rpg20aa08cwhf.gif'

// tempFilePath: ''





// status: []

// mydata: '',
// x: 0,
// y: 0,
// z: 0

// animData: {}

code: '',
status: '',
check: '',
result: ''

},

login: function() {
  var self = this;
  wx.login({
    success: function(res) {
      if (!res.code) 
      {
        return;
      }
      console.log(res.code);
      self.setData({
        code: res.code
      });
      wx.request({
        url: 'https://michaellaoliu.applinzi.com',
        data: {
          code: res.code
        },
        success: function(info) {
          self.setData({
            status: info.data
          });
        },
        fail: function(info) {

        },
        complete: function() {

        }
      });
    },
    fail: function(res) {

    },
    complete: function(res) {

    }
  });

  wx.checkSession({
    success: function(res) {
      console.log('成功');
      self.setData({
        check: '成功'
      });
    },
    fail: function(res) {
      console.log('失败');
      self.setData({
        check: '失败'
      });
    },
    complete: function() {
    }
  });

  wx.getUserInfo({
    success: function(res) { 
      console.log(res); 
      self.setData({
        result: res
      });
    },
    fail: function(res) {
      console.log(res);
      self.setData({
        result: res
      });
    },
    complete: function() {}
  });


  wx.requestPayment({
    timeStamp: '',
    nonceStr: '',
    package: '',
    signType: '',
    paySign: '',
    success: function(res) {
      console.log(res);
    },
    fail: function(res) {
      console.log(res);
    },
    complete: function() {

    }
  });
},

// canvasContext: null,

// save: function() {
// var self = this;

// var canvasContext = wx.createCanvasContext('myCanvas', self);
// var linearGrandient, circularGrandient, colorStop; //这就是变换对象的引用
//---------------------------------------------------------------
  // canvasContext.setFillStyle('red');
  // canvasContext.fillRect(10, 10, 110, 110);
//---------------------------------------------------------------
  // canvasContext.setFillStyle('red');
  // canvasContext.fillRect(10, 10, 50, 50);

  // canvasContext.setStrokeStyle('#0000ff');
  // canvasContext.strokeRect(70, 10, 50, 50);

  // canvasContext.setShadow(10, 10, 50, 'rgb(0,255,0)');
  // canvasContext.fillRect(130, 10, 50, 50);
//---------------------------------------------------------------
  // linearGrandient = canvasContext.createLinearGradient(0,0,100,0);
  // linearGrandient.addColorStop(0,'black');
  // linearGrandient.addColorStop(1,'red');

  // canvasContext.setFillStyle(linearGrandient);
  // canvasContext.fillRect(10,10,100,100);

  // circularGrandient = canvasContext.createCircularGradient(170,60,50);
  // circularGrandient.addColorStop(0,'red');
  // circularGrandient.addColorStop(0.16, 'orange');
  // circularGrandient.addColorStop(0.33, 'yellow');
  // circularGrandient.addColorStop(0.5, 'green');
  // circularGrandient.addColorStop(0.66, 'cyan');
  // circularGrandient.addColorStop(0.83, 'blue');
  // circularGrandient.addColorStop(1, 'purple');

  // canvasContext.setFillStyle(circularGrandient);
  // canvasContext.fillRect(120,10,100,100);
//---------------------------------------------------------------
// canvasContext.setLineWidth(10);
// canvasContext.setLineCap('square');
// _fn.drawLine(canvasContext,[10,20],[150,20]);
// canvasContext.setLineCap('butt');
// _fn.drawLine(canvasContext,[10,40],[150,40]);
// canvasContext.setLineCap('round');
// _fn.drawLine(canvasContext,[10,60],[150,60]);

// canvasContext.setLineCap('square');
// canvasContext.setLineJoin('bevel');
// _fn.drawAngle(canvasContext,[10,80]);
// canvasContext.setLineJoin('round');
// _fn.drawAngle(canvasContext, [50, 80]);
// canvasContext.setLineJoin('miter');
// _fn.drawAngle(canvasContext, [90, 80]);

// canvasContext.setLineJoin('miter');
// canvasContext.setMiterLimit(1);
// _fn.drawAngle(canvasContext, [10,140]);
// canvasContext.setMiterLimit(2);
// _fn.drawAngle(canvasContext, [50,140]);
// canvasContext.setMiterLimit(3);
// _fn.drawAngle(canvasContext, [90,140]);
//---------------------------------------------------------------
// canvasContext.rect(10,10,30,30);
// canvasContext.stroke();
// canvasContext.draw();

// canvasContext.rect(50,10,30,30);
// canvasContext.fill();
// canvasContext.draw(true);

// canvasContext.fillRect(10,50,30,30);
// canvasContext.draw(true);

// canvasContext.strokeRect(50,50,30,30);
// canvasContext.draw(true);

// canvasContext.clearRect(25,25,40,40);
// canvasContext.draw(true);
//---------------------------------------------------------------
// _fn.drawTrianglePath(canvasContext, [10,60]);
// canvasContext.stroke();
// canvasContext.draw();

// _fn.drawSectorPath(canvasContext, [60,10],55,0,60);
// canvasContext.setStrokeStyle('black');
// canvasContext.setLineWidth(5);
// canvasContext.setFillStyle('gray');
// canvasContext.stroke();
// canvasContext.fill();
// canvasContext.draw(true);

// canvasContext.setLineWidth(1);
// _fn.drawQuadraticCurve(canvasContext,[10,70],[10,170],[100,70]);
// canvasContext.stroke();
// canvasContext.draw(true);

// _fn.drawBezierCurve(canvasContext,[110,70],[110,150],[210,150],[210,70]);
// canvasContext.stroke();
// canvasContext.draw(true);
//---------------------------------------------------------------
// canvasContext.fillText('中文',10,20);
// canvasContext.setFontSize(24);
// canvasContext.setFillStyle('red');
// canvasContext.fillText('English', 100, 20);
// canvasContext.draw();
//---------------------------------------------------------------
// canvasContext.setFillStyle('blue');
// canvasContext.fillRect(10,10,100,100);
// canvasContext.save();
// canvasContext.setGlobalAlpha(0.2);
// canvasContext.fillRect(50,50,100,100);
// canvasContext.restore();
// canvasContext.drawImage('http://wx4.sinaimg.cn/mw690/6a04b428gy1fvi7c6c0rpg20aa08cwhf.gif',100,100,200,200);
// canvasContext.draw();
//---------------------------------------------------------------
//---------------------------------------------------------------
// canvasContext.draw();

// wx.canvasToTempFilePath({
//   canvasId: 'myCanvas',
//   success: function(res) {
//     console.log('path = ' + res.tempFilePath);
//   },
//   fail: function(res) {
//   },
//   complete: function() {
//   }
// });

// },

// translate: function() {
//   this.canvasContext.translate(10,10);
// },

// rotate: function() {
//   this.canvasContext.rotate(30*Math.PI/180);
// },

// scale: function() {
//   this.canvasContext.scale(2,2);
// },

// drawRect: function() {
//   var context = this.canvasContext;
//   context.restore();
//   context.rect(0,0,15,15);
//   context.stroke();
//   context.draw(true);
// },








// rotateAndMove: function() {
//   var anim = wx.createAnimation({
//     duration: 5*1000,
//     timingFunction: 'ease',
//     //transformOrigin: '0 0',
//     //delay: 10*1000,
//     success: function(res) {
//       console.log('创建动画实例成功');
//     },
//     fail: function(res) {
//     },
//     complete: function() {
//     }
//   });

//   anim.translateY(100).rotate(720).step();
//   this.setData({
//     animData: anim.export()
//   });
// },

// rotateThenMove: function() {
//   var anim = wx.createAnimation({
//     duration: 10*1000,
//     timingFunction: 'ease',
//     // transformOrigin: '0 0',
//     // delay: 10*1000,
//     success: function (res) {
//       console.log('创建动画实例成功');
//     },
//     fail: function (res) {
//     },
//     complete: function () {
//     }
//   });

//   anim.rotate(720).step({
//     duration: 5*100,
//   });

//   anim.translateX(100).step({
//     duration: 5 * 100,
//   });

//   anim.translateY(100).step({
//     duration: 5 * 100,
//   });

//   this.setData({
//     animData: anim.export()
//   });
// },






// ccc:function(event) {
//   var self = this,
//       type = event.target.dataset.type;
  
//   switch (type) {
//     case 'a1':
//     wx.showToast({
//       title: '内容',
//       icon: 'success',
//       duration: 10*1000,
//       mask: false,
//       success: function(res) {
//         console.log('成功');
//       },
//       fail: function(res) {
//       },
//       complete: function() {
//       }
//     });
//     break;
//     case 'a2':
//     wx.hideToast({
//       success: function(res) {
//         console.log('-成功');
//       },
//       fail: function(res) {

//       },
//       complete: function() {

//       }
//     });
//     break;
//     case 'a3':
//     wx.showModal({
//       title: '张三',
//       content: '张三袜子里有钱',
//       success: function(res) {
//         if (!res.confirm) {
//           console.log('取消');
//           return;
//         } 
//         console.log('确认');
//       },
//       fail: function(res) {

//       },
//       complete: function() {

//       }
//     });
//     break;
//     case 'a4':
//     var arr = ['张三', '李四', '王五', '陈六', '朱七', '何八'];
//     wx.showActionSheet({
//       itemList: arr,
//       success: function(res) {
//         if (!res.cancel) {
//           console.log(arr[res.tapIndex]);
//           return;
//         }
//         console.log('取消');
//       },
//       fail: function(res) {
//       },
//       complete: function() {
//       }
//     });
//     break;
//     case 'a5':
//     wx.setNavigationBarTitle({
//       title: '更新页面的导航的标题',
//       success: function(res) {
//         console.log(res.errMsg);
//       },
//       fail: function(res) {

//       },
//       complete: function() {

//       }
//     });
//     break;
//     case 'a6':
//     wx.showNavigationBarLoading();
//     break;
//     case 'a7':
//     wx.hideNavigationBarLoading();
//     break;
//     case 'a8':
//     wx.navigateTo({
//       url: '../here/here?key1=value1&key2=value2',
//       success: function(res) {
//       },
//       fail: function(res) {
//       },
//       complete: function() {
//       }
//     });
//     break;
//     case 'a9':
//     wx.redirectTo({
//       url: './index?key1=value1&key2=value2',
//       success: function (res) {
//       },
//       fail: function (res) {
//       },
//       complete: function () {
//       }
//     });
//     break;
//     case 'a10':
//     wx.navigateBack({
//       delta: 10
//     });
//     break;
//     case 'a11':
//     var animation = wx.createAnimation({
//       transformOrigin: '0 0', //左上角为中心
//       duration: 10*1000,
//       timingFunction: 'ease-in',
//       delay: 1*1000
//     });
//     break;

//   }
// },

// info: function() {
//   var self = this;

  // wx.getSystemInfo({
  //   success: function(res) {
  //     self.setData({
  //       mydata: res.model + ',' + 
  //               res.pixelRatio + ',' + 
  //               res.windowHeight + ',' + 
  //               res.windowWidth + ',' + 
  //               res.language + ',' + 
  //               res.system + ',' + 
  //               res.platform
  //     });
  //   },
  //   fail: function(res) {

  //   },
  //   complete: function() {

  //   }
  // });

  // console.log(wx.getSystemInfoSync());

  // wx.getNetworkType({
  //   success: function(res) {
  //     console.log(res.networkType);
  //   },
  //   fail: function(res) {

  //   },
  //   complete: function() {

  //   }
  // });

  // var self = this;
  // wx.onAccelerometerChange(function (res) {
  //   self.setData({
  //     // x:res.x,
  //     // y:res.y,
  //     // z:res.z
  //     mydata: res.x + ',\n' + res.y + ',\n' + res.z
  //   });
  //   console.log(res.x + ',' + res.y + ',' + res.z);
  // });

  // wx.onCompassChange(function(res){
  //   self.setData({
  //     mydata: res.direction
  //   });
  // });

  // wx.makePhoneCall({
  //   phoneNumber: '15389299664',
  // });

  // wx.scanCode({
  //   success: function(res) {
  //     self.setData({
  //       mydata: res.result + ',' +
  //               res.scanType + ',' + 
  //               res.charSet + ',' +
  //               res.path
  //     });
  //   },
  //   fail: function(res) {

  //   },
  //   complete: function() {

  //   }
  // });

// },

// location: function() {
//   var self = this;

//   wx.getLocation({
//     // type: 'wgs84',
//     type: 'gcj02',
//     success: function(res) {
//       console.log(res);
//       self.setData({
//         mydata: res.errMsg + ',' +
//                 res.accuracy + ',' +
//                 res.horizontalAccuracy + ',' + 
//                 res.latitude + ',' + 
//                 res.longitude + ',' + 
//                 res.speed + ',' + 
//                 res.verticalAccuracy
//       });
//       wx.openLocation({
//         // latitude: res.latitude,
//         // longitude: res.longitude,
//         latitude: 34.2594667,
//         longitude: 108.944831
//       });
//     },
//     fail: function(res) {

//     },
//     complete: function() {

//     }
//   });

  // wx.chooseLocation({
  //   success: function(res) {
  //     self.setData({
  //       mydata: res.name + ',' +
  //               res.address
  //     });
  //   },
  //   fail: function(res) {

  //   },
  //   complete: function() {

  //   }
  // });

// },


// cacheData: function() {

  // wx.setStorageSync('zhangsan', 'my name is zhangsan');

  // wx.setStorage({
  //   key: 'zhangsan',
  //   data: 'my name is zhangsan',
  // });

  // wx.getStorage({
  //   key: 'zhangsan',
  //   success: function(res) {
  //     console.log(res.data);
  //   },
  //   fail: function(res) {

  //   },
  //   complete: function() {

  //   }
  // });

  // var ret = wx.getStorageSync('zhangsan');
  // console.log(ret);

  // wx.getStorageInfo({
  //   success: function(res) {
  //     console.log(res.keys);
  //     for (var p in res.keys) {
  //       console.log(p + ':' + wx.getStorageSync(res.keys[p]));
  //     }
  //     console.log(res.currentSize); //1
  //     console.log(res.limitSize);//10240B
  //   },
  //   fail: function(res) {

  //   },
  //   complete: function() {

  //   }
  // });

  // var ind, info = wx.getStorageInfoSync();
  // console.log(ind);
  // console.log(info);
  // for (ind in info.keys) {
  //   console.log(ind + ':' + wx.getStorageSync(info.keys[ind]));
  // }

  // wx.removeStorage({
  //   key: 'zhangsan',
  //   success: function(res) {
  //     console.log(res.data);
  //   },
  // });

//   var rett = wx.removeStorageSync('zhangsan');
//   console.log(rett);

//   wx.clearStorage();
//   wx.clearStorageSync();

// },



// openFile: function() {
//   var self = this;
//   wx.downloadFile({
//     url: 'https://michaellaoliu.applinzi.com/',
//     success: function(res) {
//       var filePath = res.filePath;
//       wx.openDocument({
//         filePath: filePath,
//       });
//     },
//     fail: function(res) {

//     },
//     complete: function() {

//     }
//   });
// },


// save: function() {
//   var self = this;
  // wx.startRecord({
  //   success: function(res) {
  //     var tempFilePath = res.tempFilePath;
  //     console.log(tempFilePath);
  //     self.data.status[0] = tempFilePath;
  //     self.setData(self.data);
  //     wx.saveFile({
  //       tempFilePath: tempFilePath,
  //       success: function(res) {
  //         var savedFilePath = res.savedFilePath;
  //         console.log(savedFilePath);
  //         self.data.status[1] = savedFilePath;
  //         self.setData(self.data);
  //       },
  //       fail: function(res) {
  //         console.log('...');
  //       },
  //       complete: function() {

  //       }
  //     })
  //   },
  //   fail: function(res) {
  //     console.log('+++');
  //   },
  //   complete: function() {

  //   }
  // });
  // setTimeout(function () {  
  //   wx.stopRecord();
  // }, 1*1000);

  // wx.getSavedFileList({
  //   success: function(res) {
  //     for (var i = 0, file; file = res.fileList[i]; ++i)
  //     {

  //       wx.removeSavedFile({
  //         filePath: file.filePath,
  //       });
  //       wx.getSavedFileInfo({
  //         filePath: file.filePath,
  //         success: function(res) {
  //           console.log('文件大小: ' + res.size);
  //         },
  //         fail: function(res) {

  //         },
  //         complete: function() {

  //         }
  //       });
  //       console.log('第' + i + '文件本地地址: ' + file.filePath);
  //     }
  //     self.data.status = res.fileList;
  //     self.setData(self.data);
  //   },
  //   fail: function(res) {

  //   },
  //   complete: function() {

  //   }
  // });
// },



// choose: function() {
//   var self = this;
//   wx.chooseVideo({
//     sourceType: ['album', 'camera'],
//     camera: ['front', 'back'],
//     success: function(res) {
//       console.log(res.tempFilePath);
//       //self.data.tempFilePath = res.tempFilePath;
//       self.setData({
//         tempFilePath: res.tempFilePath
//       });
//     }
//   });
// },

  // regbgAudioEvent: function() {
  //   var self = this;
  //   wx.onBackgroundAudioPause(function() {
  //     self.setData({
  //       event_status: '事件-暂停'
  //     });
  //   });
  //   wx.onBackgroundAudioPlay(function () {
  //     self.setData({
  //       event_status: '事件-播放'
  //     });
  //   });
  //   wx.onBackgroundAudioStop(function () {
  //     self.setData({
  //       event_status: '事件-停止'
  //     });
  //   });
  // },

  // playbgAudio: function() {
  //   var self = this;
  //   wx.playBackgroundAudio({
  //     dataUrl: 'http://ra01.sycdn.kuwo.cn/resource/n3/32/56/3260586875.mp3',
  //     title: '我的音乐',
  //     coverImgUrl: 'http://wx4.sinaimg.cn/mw690/6a04b428gy1fvi7c6c0rpg20aa08cwhf.gif',
  //     success: function(res) {
  //       self.setData({
  //         status: '播放-成功'
  //       });
  //     },
  //     fail: function(res) {
  //       self.setData({
  //         status: '播放-失败'
  //       });
  //     },
  //     complete: function() {
  //       console.log('...');
  //     }
  //   });
  // },

  // pausebgAudio: function() {
  //   var self = this;
  //   // wx.pauseBackgroundAudio();
  //   // self.setData({
  //   //   status: '暂停-成功'
  //   // });
  //   wx.pauseBackgroundAudio({
  //     success: function (res) {
  //       self.setData({
  //         status: '暂停-成功'
  //       });
  //     },
  //     fail: function (res) {
  //       self.setData({
  //         status: '暂停-失败'
  //       });
  //     },
  //     complete: function () {
  //     }
  //   });
  // },

  // forwardbgAudio: function() {
  //   var self = this;
  //   wx.getBackgroundAudioPlayerState({
  //     success: function (res) {
  //       var currentPosition = res.currentPosition;
  //       wx.seekBackgroundAudio({
  //         position: currentPosition + 10
  //       });
  //       self.setData({
  //         status: '快进-成功 现在位置: ' + '[' + currentPosition + ']'
  //       });
  //     },
  //     fail: function (res) {
  //       self.setData({
  //         status: '快进-失败'
  //       });
  //     },
  //     complete: function () {
  //     }
  //   });
  // },

  // backbgAudio: function () {
  //   var self = this;
  //   wx.getBackgroundAudioPlayerState({
  //     success: function (res) {
  //       var currentPosition = res.currentPosition;
  //       wx.seekBackgroundAudio({
  //         position: currentPosition - 10
  //       });
  //       self.setData({
  //         status: '后退-成功 现在位置: ' + '[' + currentPosition + ']'
  //       });
  //     },
  //     fail: function (res) {
  //       self.setData({
  //         status: '后退-失败'
  //       });
  //     },
  //     complete: function () {
  //     }
  //   });
  // },

  // stopbgAudio: function () {
  //   var self = this;
  //   wx.stopBackgroundAudio({
  //     success: function (res) {
  //       self.setData({
  //         status: '停止-成功'
  //       });
  //     },
  //     fail: function (res) {
  //       self.setData({
  //         status: '停止-失败'
  //       });
  //     },
  //     complete: function () {
  //     }
  //   });
  // },

// getAudio: function() {
//   var self = this;
//   console.log('+++++');
//   wx.getBackgroundAudioPlayerState({
//     success: function(res) {
//       var statusText = {
//         2: '没有播放任何音乐',
//         1: '播放中',
//         0: '暂停'
//       }
//       console.log(statusText[res.status]);
//       console.log('-----');
//       self.setData({
//         status: statusText[res.status]
//       });
//     },
//     fail: function(res) {
//       console.log(res.errMsg);
//     },
//     complete: function() {
//       console.log('Any called');
//     }
//   });
// },

// startRecord: function() {
//   var self = this;
//   wx.startRecord({
//     success: function(res) {
//       self.setData({
//         tempPath: res.tempFilePath
//       });
//       wx.playVoice({
//         filePath: res.tempFilePath
//       });
//     },
//     fail: function(res) {
//       self.setData({
//         tempPath: '错误'
//       });
//     },
//     complete: function() {
//       console.log('无论如何都会执行');
//     }
//   });
//   setTimeout(function() {
//     //wx.stopRecord();
//     wx.pauseVoice();
//   }, 5*1000);
// },

// chooseImage: function() {
//   var self = this;
//   wx.chooseImage({
//     count: 1,
//     sizeType: ['original', 'compressed'],
//     sourceType: ['album', 'camera'],
//     success: function(res) {
//       console.log(res.tempFilePaths);
//       wx.getImageInfo({
//         src: res.tempFilePaths[0],
//         success: function(info) {
//           console.log(info);
//           self.setData({
//             info: 'height=' + info.height + ',\n' + 
//                   'width=' + info.width + ',\n' + 
//                   'type=' + info.type + ',\n' + 
//                   'path=' + info.path

//           });
//         }
//       })
//       self.setData({
//         src: res.tempFilePaths
//       });
//     }
//   });
// },

// prevImage: function() {
//   wx.previewImage({
//     current: 'http://wx4.sinaimg.cn/mw690/6a04b428gy1fvi7c6c0rpg20aa08cwhf.gif',
//     urls: [
//       'http://wx4.sinaimg.cn/mw690/6a04b428gy1fvi7c6c0rpg20aa08cwhf.gif',
//       'http://wx4.sinaimg.cn/mw690/6a04b428gy1fvi7c5yt60g20aa06u0vy.gif'
//     ],
//   })
// },

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
    console.log(options);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function (e) {
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

    // this.audioContext = wx.createAudioContext('myAudio', this);
    // this.audioContext.setSrc(this.data.audioSrc);

    // this.videoContext =wx.createVideoContext('myVideo', this);

    // this.mapContext = wx.createMapContext('mymap', this);


    // var self = this;
    // wx.onAccelerometerChange(function(res){
    //   self.setData({
    //     // x:res.x,
    //     // y:res.y,
    //     // z:res.z
    //     mydata: res.x + ',\n' + res.y + ',\n' + res.z
    //   });
    //   console.log(res.x + ',' + res.y + ',' + res.z);
    // });


    // var canvasContext = wx.createCanvasContext('myCanvas', this);

    // canvasContext.setFillStyle('red');
    // canvasContext.fillRect(10, 10, 110, 110);

    // canvasContext.draw();

    // this.canvasContext = wx.createCanvasContext('myCanvas', self);

  },


  // action: function(e) {
  //   var type = e.target.dataset.type,
  //       mapContext = this.mapContext;

  //   switch (type) {
  //     case 'g':
  //     mapContext.getCenterLocation({
  //       success: function(res) {
  //         console.log(res.latitude + ',' + res.longitude);
  //       }
  //     });
  //     break;
  //     case 'l':
  //     mapContext.moveToLocation();
  //     break;
  //   }
  // },

  // play: function() {
  //   this.videoContext.play();
  // },
  // pause: function() {
  //   this.videoContext.pause();
  // },
  // restart: function() {
  //   this.videoContext.seek(0);
  // },
  // sendDanmu: function() {
  //   this.videoContext.sendDanmu({
  //     text: '弹幕文案',
  //     color: '#ff0000'
  //   });
  // },

  // action: function(e) {
  //   var type = e.target.dataset.type,
  //       audioContext = this.audioContext;
  //   switch (type){
  //     case 'play':
  //     audioContext.play();
  //     break;
  //     case 'pause':
  //     audioContext.pause();
  //     break;
  //     case 'seek':
  //     audioContext.seek(30*1);
  //     break;
  //     case 'reset':
  //     audioContext.seek(0);
  //     break;
  //     default:
  //     audioContext.stop();
  //     break;
  //   }
  // },

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
    return {
      title: '标题',
      desc: '描述',
      path: '/here/here?key=value'
    }
  }
})