<template>
	<view class="content">

		<scroll-view scroll-x="true" class="scroll">
			<view style="display: flex;">
				<view class="big" v-for="item in peopleList" :key="index">
					<view class="title">
						<view class="box" />
						<text>{{item.name}}</text>
					</view>
					<view class="body">
						<view class="left">
							<view class="item">
								<image src="../../../static/images/indicator1.png" />
								<view class="item-right">
									<text>呼吸</text>
									<text class="content">{{item.huxi}}</text>
								</view>
							</view>

							<view class="item">
								<image src="../../../static/images/indicator2.png" />
								<view class="item-right">
									<text>脉搏</text>
									<text class="content">{{item.maibo}}</text>
								</view>
							</view>
							<view class="item">
								<image src="../../../static/images/indicator3.png" />
								<view class="item-right">
									<text>血压</text>
									<text class="content">{{item.xueya}}</text>
								</view>
							</view>
							<view class="item">
								<image src="../../../static/images/indicator4.png" />
								<view class="item-right">
									<text>饮食</text>
									<text class="content">{{item.yinshi}}</text>
								</view>
							</view>
							<view class="item">
								<image src="../../../static/images/indicator5.png" />
								<view class="item-right">
									<text>排尿</text>
									<text class="content">{{item.painiao}}</text>
								</view>
							</view>
							<view class="item">
								<image src="../../../static/images/indicator5.png" />
								<view class="item-right">
									<text>排便</text>
									<text class="content">{{item.paibian}}</text>
								</view>
							</view>
						</view>
						<view class="right">
							<image class="people" src="../../../static/images/people.png" />
						</view>
					</view>
				</view>

			</view>


		</scroll-view>
		<view class="title1">
			<view class="box" />
			<text>各项指标雷达图</text>
		</view>
		<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts"></canvas>
		<view class="title2">
			<view class="box" />
			<text>系统评分</text>
		</view>
		<view class="score">
			<view class="up">
				<text>健康分数：</text>
				<text class="num">85</text>
			</view>
			<text class="health">身体大致健康，注意隐藏疾病！</text>
		</view>
		<view class="btns">
			<view class="btn">
				<text>推荐补品</text>
			</view>
			<view class="btn" @click="gotoFood()">
				<text>查看膳食</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaRadar = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				peopleList: [{
						id: 0,
						name: '钱玉',
						huxi: '15次/min',
						maibo: '150mm/Hg',
						xueya: '180/120',
						yinshi: '220g',
						painiao: '正常',
						paibian: '正常'
					},
					{
						id: 1,
						name: '郑西华',
						huxi: '15次/min',
						maibo: '150mm/Hg',
						xueya: '180/120',
						yinshi: '220g',
						painiao: '正常',
						paibian: '正常'
					}
				]
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData() {
				let Radar = {
					categories: ['呼吸', '脉搏', '血压', '饮食', '排尿', '排便'],
					series: [{
						name: '李卓恬',
						data: [180, 160, 175, 175, 150, 170]
					}]
				}
				_self.showRadar("canvasRadar", Radar);
				/* uni.request({
					url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
					data: {},
					success: function(res) {
						console.log(res.data.data)
						let Radar = {
							categories: [],
							series: []
						};
						Radar.categories = res.data.data.Radar.categories;
						Radar.series = res.data.data.Radar.series;
						_self.showRadar("canvasRadar", Radar);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				}); */

			},
			showRadar(canvasId, chartData) {
				canvaRadar = new uCharts({
					context: uni.createCanvasContext(canvasId, _self),
					$this: _self,
					canvasId: canvasId,
					type: 'radar',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					dataLabel: true,
					categories: chartData.categories,
					series: chartData.series,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						radar: {
							max: 200 //雷达数值的最大值
						}
					}
				});
			},
			gotoFood(){
				uni.navigateTo({
					url:'food/food',
					
				})
				console.log('11')
			}
		}

	}
</script>

<style lang="less">
	page {
		background-color: #f7f8f9;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	.title {
		display: flex;
		font-size: large;
		align-items: center;
		color: #000000;
		background-color: #ffffff;
		width: 750rpx;

		.box {
			width: 35rpx;
			height: 35rpx;
			background-color: rgb(39, 172, 163);
			margin: 30rpx 20rpx 20rpx 20rpx;
		}
	}

	.title1 {
		display: flex;
		font-size: large;
		align-items: center;
		margin-top: 30rpx;
		color: #1d988e;
		background-color: #ffffff;
		width: 750rpx;

		.box {
			width: 35rpx;
			height: 35rpx;
			background-color: rgb(39, 172, 163);
			margin: 30rpx 20rpx 20rpx 20rpx;
		}
	}

	.title2 {
		display: flex;
		font-size: large;
		align-items: center;
		width: 750rpx;
		margin-top: 30rpx;
		background-color: #ffffff;
		color: #1d988e;

		.box {
			width: 35rpx;
			height: 35rpx;
			background-color: rgb(39, 172, 163);
			margin: 30rpx 20rpx 20rpx 20rpx;
		}
	}

	.body {
		display: flex;
		background-color: #ffffff;
	}

	.left {
		flex-direction: column;
		width: 400rpx;
		margin-top: 40rpx;
		padding-left: 40rpx;

		image {
			width: 50rpx;
			height: 50rpx;
			margin-right: 25rpx;
		}
	}

	.item {
		display: flex;
		width: 320rpx;
		height: 100rpx;

		.item-right {
			display: flex;

		}

		.content {
			margin-left: 30rpx;

		}
	}

	.people {
		width: 340rpx;
		height: 650rpx;
	}

	.charts {
		width: 748upx;
		height: 498upx;
		background-color: #FFFFFF;

	}

	.score {
		display: flex;
		flex-direction: column;
		width: 750rpx;
		padding: 0rpx 25rpx 0rpx 25rpx;
		background-color: #ffffff;
		justify-content: flex-start;

		.up {
			display: flex;
			align-items: center;
			margin-bottom: 30rpx;
		}

		.num {
			font-size: x-large;

		}

		.health {
			color: #888888;
		}
	}

	.btns {
		background-color: #ffffff;
		display: flex;
		width: 740rpx;
		padding: 30rpx 0rpx 40rpx 0rpx;
		justify-content: space-around;



		.btn {
			width: 320rpx;

			height: 80rpx;
			border-radius: 5rpx;
			background-color: rgb(255, 250, 232);
			color: rgb(39, 172, 163);
			border: 1rpx solid rgb(39, 172, 163);
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.scroll {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		flex-direction: row;

		/* .item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 150rpx;
			height: 165rpx;
			justify-content: space-around;
		} */
	}
</style>
