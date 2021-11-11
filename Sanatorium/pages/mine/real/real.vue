<template>
	<view class="content">
		<!-- <view class="title">
			实名认证
		</view> -->
		<view class="phone">
			<text>您的手机号</text>
			<text>178****0473</text>
		</view>

		<view class="input">
			<!-- <text>请输入真实姓名</text> -->
			<view class="box">
				<input placeholder="请输入真实姓名" placeholder-style="color: #898989;" type="text" />
			</view>
		</view>

		<view class="type">
			<text>证件类型</text>
			<view class="right">
				<text>居民身份证</text>
				<image src="../../../static/images/mine3.png" />
			</view>
		</view>
		<view class="input">
			<!-- <text>请输入真实姓名</text> -->
			<view class="box">
				<input placeholder="请输入证件号码" placeholder-style="color: #898989;" type="text" />
			</view>
		</view>
		<view class="button">
			<text>下一步</text>
		</view>
		<text class="pass">跳过</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: rgb(247, 248, 249);
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 50rpx 0rpx 50rpx 40rpx;
		background-color: #ffffff;
		margin-top: 100rpx;
	}

	/* 	.title{
		font-size: 40rpx;
		margin-bottom: 40rpx;
	} */
	.phone {
		display: flex;
		width: 380rpx;
		justify-content: space-between;
		margin-top: 10rpx;
	}

	.input {
		display: flex;
		flex-direction: column;
		margin-top: 30rpx;
	}

	.box {
		border-bottom: 1rpx solid#dcdcdc;
		margin-top: 20rpx;
	}

	.right {
		margin-left: 150rpx;
	}

	.right image {
		width: 28rpx;
		height: 28rpx;

	}

	.type {
		display: flex;
		width: 680rpx;
		justify-content: space-between;
		margin-top: 50rpx;
	}

	.button {
		width: 600rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(204,204,204);
		border-radius: 50rpx;
		color: #ffffff;
		margin-top: 60rpx;
		margin-left: 35rpx;
	}
	.pass{
		color: #27ACA3;
		margin-left: 600rpx;
		margin-top: 30rpx;
	}
</style>
