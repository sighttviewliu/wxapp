// otherpages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    text: "normal data",
    object: {
      subObject: {
        objectText: "object data"
      }
    },
    array: [
      {
        arrayText: "array data"
      }
    ]
  },

  changeText: function() {
    this.setData({
      text: "new normal data"
    });
  },

  changeObjectText: function() {
    this.setData({
      "object.subObject.objectText": "new object data"
    });
  },

  changeArrayText: function() {
    this.setData({
      "array[0].arrayText": "new array data"
    });
  },

  addNewData: function() {
    this.setData({
      "newField.newFieldText": "add new data"
    });
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
    console.log(this.data.aaaa);
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ffffff',
    });
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
    setTimeout((function callback() {
    }).bind(this), 2*1000);
    wx.stopPullDownRefresh();
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