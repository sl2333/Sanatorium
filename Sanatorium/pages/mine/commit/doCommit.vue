<template>
	<view>
		<view class="content">
			<view class="form">
				<view class="top">
					<text class="large-title">临安市第一疗养院</text>

				</view>
				<view class="item">
					<text class="title">综合服务</text>
					<view class="star">
						<u-rate active-color="rgb(255,102,52)" inactive-color="rgb(172, 172, 172)" gutter="20"></u-rate>
					</view>
				</view>

				<view class="item">
					<text class="title">医疗互助</text>
					<view class="star">
						<u-rate active-color="rgb(255,102,52)" inactive-color="rgb(172, 172, 172)" gutter="20"></u-rate>
					</view>
				</view>
				<view class="item">
					<text class="title">护工服务</text>
					<view class="star">
						<u-rate active-color="rgb(255,102,52)" inactive-color="rgb(172, 172, 172)" gutter="20"></u-rate>
					</view>
				</view>
				<view class="item">
					<text class="title">优美环境</text>
					<view class="star">
						<u-rate active-color="rgb(255,102,52)" inactive-color="rgb(172, 172, 172)" gutter="20"></u-rate>
					</view>
				</view>
				   
			</view>
		</view>
		<view class="choose">

			<input placeholder="请写下您的文字评价"  v-model="value" type="textarea" style="border"></input>
			<view class="images">
				<image src="../../../static/images/upload.png" />
			</view>
			<view class="title1">
				选择服务项目
			</view>
			<view class="sign">
				<text v-for="item in sign" :key="index">{{item}}</text>
			</view>
			<view class="button" @click="submit()">
				<text>发布评价</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				sign: ["慢病管理套餐"]
			}
		},
		onLoad() {

		},
		methods: {
			titlePicker(e) {
				this.title = this.title_list[e.target.value].name
				console.log(this.title_list[e.target.value].id) //获取id
				this.status = 1

			},
			bindDateChange(e) {

				let that = this

				that.date = e.detail.value

			},
			bindTimeChange(e) {

				let that = this

				that.time = e.detail.value

			},


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
		justify-content: column;
		background-color: #ffffff;
		padding-bottom: 40rpx;
	}

	.form {
		width: 700rpx;
		padding-top: 20rpx;
		display: flex;
		flex-direction: column;
		.top{
			display: flex;
		}
		.large-title {
			font-size: 36rpx;
			margin-bottom: 30rpx;
			color: #000000;
		}

		.status {
			margin-top: 50rpx;
		}

		.title {
			font-size: small;
			margin-top: 10rpx;
			width: 200rpx;
		}

		.top {
			display: flex;
			align-items: center;
			margin-top: 20rpx;
			color: #BBBBBB;

		}

		.box {
			width: 750rpx;
			display: flex;
			padding-top: 20rpx;

			.item {
				display: flex;
				flex-direction: column;
				margin-right: 20rpx;
				font-size: small;
				background-color: rgb(244, 244, 244);
				width: 185rpx;
				border-radius: 15rpx;
				box-shadow: 0px 1px 1px 0px rgb(231, 227, 211);

				image {
					width: 185rpx;
					height: 180rpx;
				}

				text {
					margin: 10rpx 0rpx 10rpx 10rpx;
				}

				.price {
					color: #878787;

				}

			}
		}

		.scroll {
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			display: flex;
			flex-direction: row;
		}

		.line {
			width: 700rpx;
			height: 1rpx;
			background-color: #e6e6e6;
			margin-bottom: -20rpx;
		}
	}

	.icon {
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		right: 25rpx;
	}

	.check {
		margin-top: 60rpx;
		font-size: small;
	}

	.button {
		width: 700rpx;
		height: 75rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(255,102,52);
		margin-top: 100rpx;
		margin-left: 7rpx;
	}

	.star {
		margin-top: 20rpx;
		margin-left: -10rpx;
		width: 700rpx;

	}

	.title1 {
		font-size: small;
		margin-top: 30rpx;


	}

	.images {
		width: 700rpx;
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;

		image {
			width: 150rpx;
			height: 150rpx;
		}
	}

	.choose {
		margin-top: 20rpx;
		width: 750rpx;
		padding: 20rpx;
		background-color: #ffffff;
		height: 900rpx;
	}

	.sign {
		display: flex;
		margin: 15rpx 0rpx 10rpx 10rpx;

		text {
			padding: 20rpx;
			background-color: rgb(240, 240, 240);


		}
	}

	.item {
		display: flex;
		width: 750rpx;
		align-items: center;
	}
</style>
