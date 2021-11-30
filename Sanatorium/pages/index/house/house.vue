<template>
	<view class="content">
		<view class="top">
			<text>临安</text>
			<image class="down" src="../../../static/images/house4.png" />
			<view class="input">
				<image src="../../../static/images/house2.png" />
				<input type="text" placeholder="搜疗养院" style="color: #BBBBBB;" />
			</view>
		</view>

		<view class="mid">
			<view class="up">
				<text class="all">全部15家疗养院</text>
				<image class="down" src="../../../static/images/house3.png" />
			</view>
			<view class="middle">
				<view class="title-item">
					<text>综合排序</text>
					<image class="down" src="../../../static/images/house1.png" />
				</view>
				<view class="title-item">
					<text>位置距离</text>
					<image class="down" src="../../../static/images/house1.png" />
				</view>
				<view class="title-item">
					<text>价格/星级</text>
					<image class="down" src="../../../static/images/house1.png" />
				</view>
				<view class="title-item">
					<text>筛选</text>
					<image class="down" src="../../../static/images/house1.png" />
				</view>
			</view>
			<view class="card">
				<view class="item" v-for="item in list" :key="index" @click="detailClick(item)">
					<image src="../../../static/images/house5.jpg" />
					<view class="right">
						<text class="item-title">{{item.name}}</text>
						<view class="box">
							<image class="star" src="../../../static/images/house6.png" />
							<text>{{item.lengh}}</text>
						</view>
						
						<view class="sign" >
							<text v-for="item1 in item.sign" :key="index">{{item1}}</text>

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
				list:[{
					id:0,
					name:'临安市第一疗养院',
					lengh:'3.3km',
					sign:["有音乐室","支持医保","慢病管理"]
				},
				{
					id:1,
					name:'临安市第一疗养院',
					lengh:'3.3km',
					sign:["有音乐室","支持医保","慢病管理"]
				},
				{
					id:2,
					name:'临安市第一疗养院',
					lengh:'3.3km',
					sign:["有音乐室","支持医保","慢病管理"]
				},
				{
					id:3,
					name:'临安市第一疗养院',
					lengh:'3.3km',
					sign:["有音乐室","支持医保","慢病管理"]
				}]
			}
		},
		onLoad() {

		},
		methods: {

			detailClick(item){
				console.log('1')
				uni.navigateTo({
					url: './houseDetail?item='+item
				})
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
		justify-content: center;
	}

	.top {
		width: 750rpx;
		height: 100rpx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		padding: 25rpx;

	}

	.down {
		width: 22rpx;
		height: 22rpx;
		margin-left: 8rpx;
	}

	.input {
		width: 580rpx;
		height: 60rpx;
		border: 1rpx solid #27ACA3;
		border-radius: 10rpx;
		margin-left: 20rpx;
		display: flex;
		padding-left: 10rpx;
		align-items: center;

		image {
			width: 40rpx;
			height: 40rpx;
			margin-right: 20rpx;
		}
	}

	.mid {
		width: 750rpx;
		height: 1000rpx;
		background-color: #ffffff;
		margin-top: 20rpx;
		padding-top: 20rpx;
	}

	.all {
		color: #999999;
		font-size: 28rpx;
		margin-left: 490rpx;
	}
	.middle{
		display: flex;
		width: 680rpx;
		height: 80rpx;
		align-items: center;
		justify-content: space-between;
		margin-left: 35rpx;
		color: #333333;
	}
	.card{
		width: 700rpx;
		height: 800rpx;
		background-color: #ffffff;
		margin-left: 25rpx;
		display: flex;
		flex-direction: column;
	}
	.item{
		height: 200rpx;
		width: 100%;
		display: flex;
		margin-top: 30rpx;
		.right{
			display: flex;
			flex-direction: column;
			margin-left: 20rpx;
			border-bottom: 1rpx solid#ebebeb;
		}
		.item-title{
			font-size: 33rpx;
			font-weight: 500;
			
		}
		image{
			width: 160rpx;
			height: 160rpx;
		}
		.star{
			width: 200rpx;
			height: 50rpx;
			margin: 10rpx 0rpx 10rpx -10rpx;
		}
		.box{
			display: flex;
			text{
				margin-left: 240rpx;
				color:#a2a2a2 ;
				margin-top: 15rpx;
				font-size: small;
			}
		}
	}
	.sign{
		display: flex;
		margin-left: -10rpx;
		text{
			padding: 7rpx;
			background-color: rgb(240,240,240);
			font-size: small;
			margin-left: 15rpx;
		}
	}
	
</style>
