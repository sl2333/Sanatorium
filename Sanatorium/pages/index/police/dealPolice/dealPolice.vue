<template>
	<view>

		<!-- 家属端 -->
		<!-- <view class="content" v-if="change===0">
			<view class="up">
				消息（6）
			</view>
			<view class="mid">
				<view class="icon">
					<image src="../../static/images/message4.png" />
					<text>护工信息</text>
				</view>
				<view class="icon">
					<image src="../../static/images/message.png" />
					<text>疗养院信息</text>
				</view>
				<view class="icon">
					<image src="../../static/images/message3.png" />
					<text>系统通知</text>
				</view>
			</view>
			<view class="down">
				<view class="item" v-for="(item,index) in list" :key="index" @click="gotoDetail()">
					<view class="left">
						<image :src="item.picUrl" />
					</view>
					<view :class="[list.length==index+1? 'right':'right1']">
						<view class="right-left">
							<text class="item-title">{{item.name}}</text>
							<text class="item-content">{{item.content}}</text>
						</view>
						<view class="right-right">
							<text class="item-content">{{item.date}}</text>
							<view :class="[item.red==1? 'hong':'hong1']" />

						</view>
					</view>
				</view>
			</view>
		</view> -->

		<!-- 护工端 -->
		<view class="content" v-if="change===1">
			<view class="up">
				报警事项
			</view>

			<view class="down">
				<view class="item" v-for="(item,index) in list" :key="index" @click="gotoDetail()">

					<view :class="[list.length==index+1? 'right':'right1']">
						<view class="right-left">
							<view style="display: flex;">
								<text class="item-title">{{item.name}}</text>
							</view>
							<text class="item-content">{{item.content}}</text>
						</view>
						<view class="right-right">
							<view class="status">
								<text :class="[item.status=='已完成'?'color1':'color2']">{{item.status}}</text>
								<image src="../../../../static/images/house3.png" mode=""></image>
							</view>
							<text class="item-content">{{item.date}}</text>

						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				change: 0, //0为家属端，1为护工端
				list: [{
						id: 0,
						picUrl: '../../static/images/tx.png',
						name: '钱玉亲属',
						content: '生命体征微弱！',
						date: '2021/12/3   15:00',
						status: '跟进中'

					},
					{
						id: 1,
						picUrl: '../../static/images/tx.png',
						name: '郑西华',
						content: '生命体征微弱',
						date: '2021/10/5   18:11',
						status: '处理完成'
					},
					{
						id: 2,
						picUrl: '../../static/images/tx.png',
						name: '郑西华',
						content: '户外摔倒',
						date: '2021/9/5   15:19',
						status: '处理完成'
					},
					{
						id: 4,
						picUrl: '../../static/images/house5.jpg',
						name: '钱玉',
						content: '室内摔倒！',
						date: '2021/8/10   21:11',
						status: '处理完成'
					},
					{
						id: 5,
						picUrl: '../../static/images/tx4.png',
						name: '钱玉',
						content: '室内摔倒',
						date: '2021/7/29   08:11',
						status: '处理完成'
					}
				]
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
			gotoDetail() {
				uni.navigateTo({
					url: 'dealDetail/dealDetail'
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F7F8F9;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.up {
		width: 750rpx;
		padding-left: 20rpx;
		font-size: 37rpx;
	}


	.down {
		width: 750rpx;
		background-color: #FFFFFF;
		padding-top: 10rpx;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.item {
		width: 740rpx;
		height: 140rpx;
		background-color: #ffffff;
		padding: 10rpx 0rpx 10rpx 0rpx;
		display: flex;
	}


	.right {
		width: 670rpx;
		// border-bottom: 1rpx solid#e2e2e2;
		margin-left: 20rpx;
		display: flex;
	}

	.right1 {
		width: 670rpx;
		border-bottom: 1rpx solid#e2e2e2;
		margin-left: 20rpx;
		display: flex;
	}

	.right-left {
		display: flex;
		flex-direction: column;
		height: 100rpx;
		justify-content: space-around;
	}

	.item-title {
		font-size: 35rpx;
		color: #333333;

	}

	.item-content {
		font-size: 26rpx;
		color: #b0b0b0;
	}

	.right-right {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 90rpx;
		justify-content: space-around;
		position: absolute;
		right: 30rpx;
	}

	.status {
		display: flex;
		margin-left: 30rpx;

		align-items: center;

		image {
			width: 25rpx;
			height: 25rpx;
			margin-left: 15rpx;
		}
	}

	.color1 {
		color: #BBBBBB;
	}

	.color2 {
		color: #333333;
	}
</style>
