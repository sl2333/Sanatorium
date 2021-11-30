<template>
	<view>
	<!-- 家属端 -->
	<view class="content" v-if="change===0">
		<view class="top">
			<picker mode="date" :value="date" :start="startDate" :end="endDate" fields="month" @change="bindDateChange">
				<view class="date">
					{{date}}
				</view>
			</picker>
		</view>
		<view class="title">
			<view class="box" />
			<text>护工1</text>
		</view>
		<view class="qiun-charts">
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
		</view>
		<view class="title">
			<view class="box" />
			<text>收入详解</text>
		</view>
		<view class="items">
			<view class="item" v-for="item in moneyList" :key="index">
				<view class="box" :style="{'background':item.color}"/>
				<text>{{item.name}}</text>
				<text class="price">{{item.price}}</text>
			</view>
		</view>
	</view> 
	
	
	<!-- 护工端 -->
	<view class="content" v-if="change===1">
		<view class="top">
			<picker mode="date" :value="date" :start="startDate" :end="endDate" fields="month" @change="bindDateChange">
				<view class="date">
					{{date}}
				</view>
			</picker>
		</view>
		<view class="title">
			<view class="box" />
			<text>护工1</text>
		</view>
		<view class="qiun-charts">
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
		</view>
		<view class="title">
			<view class="box" />
			<text>收入详解</text>
		</view>
		<view class="items">
			<view class="item" v-for="item in moneyList" :key="index">
				<view class="box" :style="{'background':item.color}"/>
				<text>{{item.name}}</text>
				<text class="price">{{item.price}}</text>
			</view>
		</view>
	</view> 
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaRing = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
				date: '2021-11',
				moneyList:[],
				change: 1, //0为家属端，1为护工端
			}

		},
		onLoad() {
			this.change = uni.getStorageSync('change')
			console.log(this.change)
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
			

		},
		methods: {
			getServerData() {
				let Ring = {
					"series": [{
						data: [{
								name: "钱玉",
								price: '1500.00¥',
								value:1500
							},
							{
								name: "郑西华",
								price: '3000.00¥',
								value:3000
							},
							{
								name: "王桂花",
								price: '2000.00¥',
								value:2000
							},
							{
								name: "张国强",
								price: '1800.00¥',
								value:1800
							},
							{
								name: "陈阿华",
								price: '3000.00¥',
								value:3000
							}
						]
					}]
				}
				_self.showRing("canvasRing", Ring);
				let color=['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc']
				for(var s in Ring){
					Ring[s].color = color[s]
				}
				console.log('测试',Ring)
				this.moneyList = Ring.series[0].data
				console.log(this.moneyList)
				/* uni.request({
					url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
					data: {},
					success: function(res) {
						console.log(res.data.data)
						let Ring = {
							series: []
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Ring.series = res.data.data.Ring.series;
						_self.showRing("canvasRing", Ring);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				}); */
			},
			showRing(canvasId, chartData) {
				canvaRing = new uCharts({
					$this: _self,
					canvasId: canvasId,
					context: uni.createCanvasContext(canvasId, _self),
					type: 'ring',
					fontSize: 11,
					legend: true,
					subtitle: {
						name: '该月收入',
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
						offsetY: 5 * _self.pixelRatio,
					},
					title: {
						name: '11300',
						color: '#7cb5ec',
						fontSize: 25 * _self.pixelRatio,
						offsetY: -5 * _self.pixelRatio,
					},
					extra: {
						/* 	pie: {
								offsetAngle: -45,
								ringWidth: 40 * _self.pixelRatio,
								lableWidth: 15
							} */
						ring: {
							lableWidth: 15,
							rightWidth: 40 * _self.pixelRatio,
							offsetAngle: 0
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					disablePieStroke: true,
					dataLabel: true,
				});
			},
			touchRing(e) {
				canvaRing.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
			},
			bindDateChange(e) {
				this.date = e.target.value;
				this.page = 1;
				// this.getData();
			},
		},
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.top {
		width: 750rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
		box-shadow: 0px 2px 3px 0px #dcdcdc;
		// background-color: #f7f8f9;
		position: -webkit-sticky;
		position: sticky;
		top: var(--window-top);
		z-index: 99;
		
		.date{
			font-size: 35rpx;
		}
	}

	.title {
		width: 700rpx;
		display: flex;
		margin-top: 20rpx;
		font-size: large;
		align-items: center;

		.box {
			width: 20rpx;
			height: 40rpx;
			background-color: rgb(39, 172, 163);
			margin-right: 10rpx;
		}
	}

	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	.items{
		width: 700rpx;
		display: flex;
		flex-direction: column;
		margin-bottom: 50rpx;
		.item{
			width: 100%;
			height: 75rpx;
			box-shadow: 0px 2px 3px 0px #dcdcdc;
			display: flex;
			align-items: center;
			border: 1rpx solid #eaeaea;
			margin-top: 30rpx;
			
			.box {
				width: 10rpx;
				height: 100%;
				background-color: rgb(39, 172, 163);
				margin-right: 20rpx;
			}
			.price{
				position: absolute;
				right: 45rpx;
				color: #7cb5ec;
				font-size: large;
			}
		}
	}
</style>
