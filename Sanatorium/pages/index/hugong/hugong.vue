<template>
	<view class="content">
		<image class="large" src="../../../static/images/hg5.png" />
		<view class="title">
			护工交流
		</view>
		<view class="items">
			<view class="item1">
				<text>每日任务</text>
				<view class="circle">
					<image src="../../../static/images/hg1.png" />
				</view>
			</view>
			<view class="item2">
				<text>实时视频</text>
				<view class="circle">
					<image src="../../../static/images/hg3.png" />
				</view>
			</view>
			<view class="item3">
				<text>聊一聊</text>
				<view class="circle">
					<image src="../../../static/images/hg4.png" />
				</view>
			</view>
			<view class="item4">
				<text>立即报警</text>
				<view class="circle">
					<image src="../../../static/images/hg2.png" />
				</view>
			</view>
		</view>
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

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.large{
		width: 750rpx;
		height: 480rpx;
		margin-top: 30rpx;
		margin-bottom: 10rpx;
	}
	.title{
		padding: 0rpx 5rpx 0rpx 5rpx;
		background-color: rgba(83,128,123,0.5);
		color: #ffffff;
		font-size: xx-large;
		margin: -490rpx 0rpx 400rpx -460rpx;
	}
	.items{
		width: 700rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		
	}
	.item1{
		width: 300rpx;
		height: 230rpx;
		background-color: rgb(255,248,223);
		border-radius: 20rpx;
		box-shadow: 0px 2px 6px 0px #FEBF12;
		font-size: large;
		margin-top: 30rpx;
		padding-top: 20rpx;
		text{
			margin:0rpx 0rpx 0rpx 100rpx;
		}
		.circle{
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 80rpx;
			margin-left: 10rpx;
			image{
			width: 50rpx;
			height: 50rpx;
			
		}
		}
	}
	.item2{
		width: 300rpx;
		height: 230rpx;
		background-color: rgb(221, 240, 255);
		border-radius: 20rpx;
		box-shadow: 0px 2px 6px 0px #465B73;
		font-size: large;
		margin-top: 30rpx;
		padding-top: 20rpx;
		text{
			margin:0rpx 0rpx 0rpx 100rpx;
		}
		.circle{
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 80rpx;
			margin-left: 10rpx;
			image{
			width: 50rpx;
			height: 50rpx;
			
		}
		}
	}
	.item3{
		width: 300rpx;
		height: 230rpx;
		background-color: rgb(255, 220, 219);
		border-radius: 20rpx;
		box-shadow: 0px 2px 6px 0px #BB4B41;
		font-size: large;
		margin-top: 30rpx;
		padding-top: 20rpx;
		text{
			margin:0rpx 0rpx 0rpx 100rpx;
		}
		.circle{
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 80rpx;
			margin-left: 10rpx;
			image{
			width: 50rpx;
			height: 50rpx;
			
		}
		}
	}
	.item4{
		width: 300rpx;
		height: 230rpx;
		background-color: rgb(231, 251, 247);
		border-radius: 20rpx;
		box-shadow: 0px 2px 6px 0px #49595E;
		font-size: large;
		margin-top: 30rpx;
		padding-top: 20rpx;
		text{
			margin:0rpx 0rpx 0rpx 100rpx;
		}
		.circle{
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 80rpx;
			margin-left: 10rpx;
			image{
			width: 50rpx;
			height: 50rpx;
			
		}
		}
	}
</style>
