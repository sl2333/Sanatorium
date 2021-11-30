<template>
	<view>

		<!-- 家属端 -->
		<view class="content" v-if="change===0">
			<view class="up">
				消息（20）
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
				<view class="item" v-for="(item,index) in list" :key="index">
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
							<view class="hong" />

						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 护工端 -->
		<view class="content" v-if="change===1">
			<view class="up">
				消息（4）
			</view>
			<view class="mid">
				<view class="icon">
					<image src="../../static/images/message4.png" />
					<text>家属信息</text>
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
				<view class="item" v-for="(item,index) in list" :key="index">
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
							<view class="hong" />

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
				change: 0 //0为家属端，1为护工端
			}
		},
		onLoad() {
			this.change = uni.getStorageSync('change')
			console.log(this.change)
			if(this.change===1){
				uni.setTabBarItem({
			  index: 1,
			  text: '任务',
			  iconPath: 'static/images/task5.png',
			  selectedIconPath: 'static/images/task4.png'
			})
			}
		},
		methods: {
			list: [{
					id: 0,
					picUrl: '../../static/images/tx.png',
					name: '钱玉亲属',
					content: '干得不错！',
					date: '昨天'
				},
				{
					id: 1,
					picUrl: '../../static/images/tx.png',
					name: '钱玉亲属',
					content: '早点完成任务！',
					date: '昨天'
				},
				{
					id: 2,
					picUrl: '../../static/images/tx.png',
					name: '钱玉亲属',
					content: '老人今日身体怎么样？',
					date: '昨天'
				},
				{
					id: 3,
					picUrl: '../../static/images/tx.png',
					name: '钱玉亲属',
					content: '昨天的任务完成得很好！',
					date: '昨天'
				}
			]
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

	.mid {
		margin-top: 20rpx;
		width: 750rpx;
		height: 230rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 50rpx 0rpx 50rpx;
	}

	.icon {
		display: flex;
		flex-direction: column;
		width: 200rpx;
		height: 160rpx;
		justify-content: space-around;
		align-items: center;

		image {
			width: 100rpx;
			height: 100rpx;
		}

		text {
			font-size: 27rpx;
			color: #333333;
		}
	}

	.down {
		width: 750rpx;
		background-color: #FFFFFF;

		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.item {
		width: 700rpx;
		height: 160rpx;
		background-color: #ffffff;
		padding: 20rpx 0rpx 20rpx 0rpx;
		display: flex;
	}

	.left image {
		width: 100rpx;
		height: 100rpx;
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
		font-size: 28rpx;
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
		height: 100rpx;
		justify-content: space-around;
		position: absolute;
		right: 30rpx;
	}

	.hong {
		width: 15rpx;
		height: 15rpx;
		border-radius: 50%;
		background-color: rgb(255, 77, 77);
	}
</style>
