<template>
	<view>
		<!-- 家属端 -->
		<view class="content" v-if="change===0">
			<view class="up">
				<view class="title">
					<text class="elder">查看老人</text>
					<text class="all">查看全部</text>
					<image class="icon" src="../../static/images/mine3.png" />
				</view>
				<scroll-view scroll-x="true" class="scroll">
					<view style="display: flex;">
						<view class="item" v-for="item in list" :key="index">
							<view class="box">
								<image :src="item.imgUrl" />
							</view>
							<text class="all">{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="mid">
				<image src="../../static/images/tv.png" />
				<text>实时监控</text>
			</view>
			<view class="down">
				<view class="down-item" v-for="item in downList" :key="index">
					<image :src="item.imgUrl" />
					<text class="item-up">{{item.name}}</text>
					<text class="item-down">{{item.add}}</text>
				</view>
			</view>
		</view>

		<!-- 护工端 -->
		<view class="content" v-if="change===1">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						id: 0,
						imgUrl: '../../static/images/sqr.png',
						name: '老人1'
					},
					{
						id: 1,
						imgUrl: '../../static/images/sqr.png',
						name: '老人1'
					},
					{
						id: 2,
						imgUrl: '../../static/images/sqr.png',
						name: '老人1'
					},
					{
						id: 3,
						imgUrl: '../../static/images/sqr.png',
						name: '老人1'
					},
					{
						id: 4,
						imgUrl: '../../static/images/sqr.png',
						name: '老人1'
					},
					{
						id: 5,
						imgUrl: '../../static/images/sqr.png',
						name: '老人1'
					}
				],
				downList: [{
						id: 0,
						imgUrl: '../../static/images/zhibo.png',
						name: '老人1',
						add: '1楼101'
					},
					{
						id: 1,
						imgUrl: '../../static/images/zhibo.png',
						name: '老人1',
						add: '1楼101'
					},
					{
						id: 2,
						imgUrl: '../../static/images/zhibo.png',
						name: '老人1',
						add: '1楼101'
					},
					{
						id: 3,
						imgUrl: '../../static/images/zhibo.png',
						name: '老人1',
						add: '1楼101'
					}
				],
				change: 0, //0为家属端，1为护工端
			}
		},
		onLoad() {

			this.change = uni.getStorageSync('change')
			console.log(this.change)
			if (this.change === 1) {
				uni.setTabBarItem({
					index: 1,
					text: '任务',
					iconPath: 'static/images/task5.png',
					selectedIconPath: 'static/images/task4.png'
				})
			}
		},
		methods: {

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
		justify-content: center;

	}

	.up {
		width: 750rpx;
		height: 230rpx;
		background-color: #ffffff;
		padding: 10rpx;
		border: 1rpx solid#dededf;
	}

	.icon {
		width: 25rpx;
		height: 25rpx;

	}

	.elder {
		color: #333333;
		font-size: 30rpx;
		font-weight: 550;
		margin-right: 450rpx;


	}

	.all {
		color: #898989;
		font-weight: 500;
		font-size: 27rpx;
		margin-right: 8rpx;

	}



	.scroll {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		flex-direction: row;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 150rpx;
			height: 165rpx;
			justify-content: space-around;
		}
	}

	.box {
		display: inline-block;
		width: 100rpx;
		height: 100rpx;
		border: 6rpx solid #27ACA3;
		border-radius: 50%;
		margin-top: 20rpx;
		margin-right: 35rpx;
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.box image {
		width: 85rpx;
		height: 85rpx;
	}

	.box:last-child {
		margin-right: 0;
	}

	.mid {
		width: 700rpx;
		display: flex;
		margin-top: 40rpx;
		font-weight: 550;

		image {
			width: 38rpx;
			height: 38rpx;
			margin-right: 20rpx;
		}
	}

	.down {
		width: 740rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 20rpx;

	}

	.down-item {
		width: 355rpx;
		height: 320rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		border: 1rpx solid#BBBBBB;
		display: flex;
		flex-direction: column;
		margin-top: 10rpx;

		image {
			width: 352rpx;
			height: 241rpx;
		}
	}

	.item-up {
		margin: 5rpx 0rpx 5rpx 10rpx;
	}

	.item-down {
		text-align: right;
		margin-right: 8rpx;
		color: #898989;
		margin-bottom: 5rpx;
	}
</style>
