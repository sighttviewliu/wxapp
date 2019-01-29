// mypages/page2/mypagefilename.js
Page({

  /**
   * Page initial data
   */
  // data: {
  //   border: 'solid 1px #000',
  //   id: 1,
  //   content: '内容',
  //   showContent: true
  // },
data: {
  content: 123123123123,
  showContent: false,
  num1: 1,
  num2: 2,
  num3: 3,
  name: 'weixin',
  myObject: {
    age: 2
  },
  myArray: ['arr1', 'arr2'],
  mmmm: [
    {name: 1},
    {name: 2}
  ],
  mxmx: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  whichtemp: "zhangsan"
},

  countClick: function () {
    console.log("我的苍天");
  },

tap1: function() {
  console.log("-----------tap1");
},

  tap2: function () {
    console.log("-----------tap2");
  },

  tap3: function (e) {
    console.log("-----------tap3");
    console.log(e.target.dataset);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(getApp().bbbb.dddd.eeee);
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