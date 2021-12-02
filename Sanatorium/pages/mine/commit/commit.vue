<template>
	<view class="content">
		<view class="card">
			<view class="item" v-for="item in list" :key="index" @click="detailClick()">
				<view class="up">
					<image :src="item.picUrl" />
					<view class="right">
						<text class="item-title">{{item.name}}</text>
						<view class="box">
							<text>{{item.content}}</text>
						</view>
					</view>
					<view class="btn">
						<text>写评价</text>
					</view>
				</view>
				<view class="down">
					<text>2021-11-27消费</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						id: 0,
						name: '临安市第一疗养院',
						content: '慢病管理套餐',
						picUrl: '../../../static/images/house5.jpg'

					},
					{
						id: 1,
						name: '临安青山湖疗养院',
						content: '糖尿病病人专属',
						picUrl: '../../../static/images/house10.jpg'
					},

				],
			}
		},
		onLoad() {

		},
		methods: {
detailClick(){
	uni.navigateTo({
		url:'doCommit'
	})
}
		}
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.card {
		width: 700rpx;

		background-color: #ffffff;
		
		display: flex;
		flex-direction: column;
	}

	.item {
		display: flex;
		flex-direction: column;
		border: 1rpx solid#e3e3e3;
		box-shadow: 0px 2px 3px 0px rgb(232, 232, 232);
		margin-top: 30rpx;
		border-radius: 15rpx;
		height: 200rpx;

		.up {
			display: flex;
		}

		.right {
			display: flex;
			flex-direction: column;
			height: 130rpx;
			margin-left: 20rpx;
			padding-bottom: 10rpx;
			border-bottom: 1rpx solid#ebebeb;
			justify-content: space-around;
		}

		.btn {
			width: 120rpx;
			height: 50rpx;
			color: #ffffff;
			background-color: rgb(39, 172, 163);
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			right: 70rpx;
			margin-top: 40rpx;
			border-radius: 20rpx;
		}

		.item-title {
			font-size: 33rpx;
			font-weight: 500;
			margin-top: 10rpx;

		}

		image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 15rpx;
			margin: 10rpx 0rpx 0rpx 10rpx;
		}

		.box {
			text {

				color: #a2a2a2;
				margin-top: 30rpx;
				font-size: small;
			}
		}

		.down {

			font-size: small;
			margin: 20rpx 0rpx 0rpx 20rpx;
		}
	}
</style>
