<template>
	<view class="content">
		<view class="item" v-for="item in foodList" :key="index">
			<view class="title">
				<text>{{item.date}}</text>
			</view>
			<view class="food">
				<text class="break">早餐:</text>
				<text class="break-item" v-for="item1 in item.break">{{item1}}</text>
			</view>
			<view class="food">
				<text class="lunch">午餐:</text>
				<text class="lunch-item" v-for="item2 in item.lunch">{{item2}}</text>
			</view>
			<view class="food">
				<text class="dinner">晚餐:</text>
				<text class="dinner-item" v-for="item3 in item.dinner">{{item3}}</text>
			</view>
			<view class="health">
				<text>健康指数</text>
				<image src="../../../../static/images/house6.png" />
			</view>
		</view>

		<view class="btn">
			<text>选用自定义套餐</text>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				foodList: [{
						id: 0,
						date: '2021年11月23日',
						break: ['豆浆', '油条'],
						lunch: ['米饭', '青菜', '番茄炒蛋'],
						dinner: ['包子', '牛肉', '土豆丝']
					},
					{
						id: 0,
						date: '2021年11月23日',
						break: ['豆浆', '油条'],
						lunch: ['米饭', '青菜', '番茄炒蛋'],
						dinner: ['包子', '牛肉', '土豆丝']
					},
					{
						id: 0,
						date: '2021年11月23日',
						break: ['豆浆', '油条'],
						lunch: ['米饭', '青菜', '番茄炒蛋'],
						dinner: ['包子', '牛肉', '土豆丝']
					}
				]
			}
		},
		onLoad() {

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

	.item {
		width: 700rpx;

		border-radius: 15rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 2rpx 6rpx 0rpx #e2e2db;
		margin-top: 20rpx;
		padding: 15rpx;

		.title {
			border-bottom: 1rpx solid #eeeeee;
			height: 55rpx;
			display: flex;
			align-items: center;
			padding-bottom: 10rpx;
		}

		.food {
			margin-top: 25rpx;
		}

		.break {
			background-color: rgb(252, 215, 158);
			padding: 5rpx 10rpx 5rpx 10rpx;
			border-radius: 10rpx;
			color: #ffffff;

		}

		.break-item {
			border: 5rpx solid rgb(252, 215, 158);
			border-radius: 12rpx;
			padding: 4rpx 8rpx 4rpx 8rpx;
			margin-left: 15rpx;

		}

		.lunch {
			background-color: rgb(250, 182, 182);
			padding: 5rpx 10rpx 5rpx 10rpx;
			border-radius: 10rpx;
			color: #ffffff;
		}

		.lunch-item {
			border: 5rpx solid rgb(250, 182, 182);
			border-radius: 12rpx;
			padding: 4rpx 8rpx 4rpx 8rpx;
			margin-left: 15rpx;

		}

		.dinner {
			background-color: rgb(173, 227, 146);
			padding: 5rpx 10rpx 5rpx 10rpx;
			border-radius: 10rpx;
			color: #ffffff;
		}

		.dinner-item {
			border: 5rpx solid rgb(173, 227, 146);
			border-radius: 12rpx;
			padding: 4rpx 8rpx 4rpx 8rpx;
			margin-left: 15rpx;

		}
	}

	.health {
		margin-top: 20rpx;
		display: flex;
		align-items: center;

		image {
			width: 250rpx;
			height: 60rpx;
			margin-left: 20rpx;
		}
	}


	.btn {
		width: 700rpx;
		margin-top: 20rpx;
		margin-bottom: 50rpx;
		height: 80rpx;
		border-radius: 5rpx;
		background-color: rgb(158,206,255);
		color: #ffffff;
		
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
