// pages/dome1/dome1.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		arr: [{
			moveImg: '../../image/dayu.jpg',
			moveName: "大鱼海棠",
			moveScore: 8.9,
			dataMoveId:0
		}, {
			moveImg: '../../image/timg.jpg',
			moveName: "千与千寻",
			moveScore: 8.2,
			dataMoveId:1
		}, {
			moveImg: '../../image/xaio.jpg',
			moveName: "小时代",
			moveScore: 8.3,
			dataMoveId:2
		}],
		// 热门
		hot: [{
			moveImg: '../../image/dayu.jpg',
			moveName: "唐顿庄园",
			moveScore: 8.9,
			dataMoveId:0
		}, {
			moveImg: '../../image/timg.jpg',
			moveName: "1/2的魔法",
			moveScore: 8.2,
			dataMoveId:1
		}, {
			moveImg: '../../image/xaio.jpg',
			moveName: "沉睡魔咒",
			moveScore: 8.3,
			dataMoveId:2
		}],
		// 近期热门
		NearTerm: [{
			moveImg: '../../image/dayu.jpg',
			moveName: "二十不惑",
			moveScore: 9.3,
			dataMoveId:0
		}, {
			moveImg: '../../image/xaio.jpg',
			moveName: "三十而已",
			moveScore: 8.0,
			dataMoveId:1
		}, {
			moveImg: '../../image/timg.jpg',
			moveName: "锦绣南歌",
			moveScore: 9.2,
			dataMoveId:2
		}]

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

  },
    //去往查看更多页面
    moreMove:function(e){
			// console.log(e.target.dataset.type)
      wx.redirectTo({
         url: '../dome4/dome4?type='+e.target.dataset.type
       }) 
		},
		
		//去往详情页面
		goMove:function(e){
			// console.log(e.currentTarget.dataset.moveId)
			wx.redirectTo({
				url: '../detail/detail?moveId='+e.currentTarget.dataset.moveId
			}) 
		},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
