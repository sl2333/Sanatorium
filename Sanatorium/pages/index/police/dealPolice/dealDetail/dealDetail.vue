<template>
	<view class="content">
		<view class="top-title">
			<view class="box" />
			<text class="title">报警详情</text>
		</view>

		<view class="table">
			<view class="item">
				<text>报警人</text>
				
				<input type="text" placeholder="护工1" placeholder-style="color:#BBBBBB" disabled="true" />
			</view>
			<view class="item">
				<text>报警对象</text>
				<view class="card">
					<text style="color:#BBBBBB">郑西华</text>
				</view>
			</view>
			<view class="item">
				<text>报警类型</text>
				<view class="card">
					<text style="color:#BBBBBB">{{type}}</text>

				</view>
			</view>
			<view class="item1">
				<text>报警时间</text>
				<view class="card">
					<text style="color:#BBBBBB">2021/12/3 19：04</text>
				</view>
			</view>
			
			<view class="top-title">
				<view class="box" />
				<text class="title">处理情况</text>
			</view>
			<view class="wrap">
			
				<u-time-line v-for="item in list">
					<u-time-line-item nodeTop="2">
						<template v-slot:content>
							<view>
								<view class="u-order-title">
									<text>{{item.action}}</text>
								</view>
								<view class="pic" style="margin-top: 20rpx;" v-if="item.pic">
									<view class="u-order-desc"> 报警照片： </view>
									<view class="u-track-image">
										<image class="image-item" style="width: 300rpx;height: 210rpx;" :src="item.pic"/>
									</view>
									
								</view>

								<view class="u-order-time">{{item.reply}}</view>
							</view>
						</template>
						<template v-slot:node>
							<view class="u-node" style="background: rgb(230,230,230);">
							</view>
							<view class="time-left">
								<text style="font-size: 27rpx;margin-right: 20rpx;">{{item.time2}}</text>
								<text style="color: #b4b4b4;">{{item.time1}}</text>
							</view>
						</template>
					</u-time-line-item>

				</u-time-line>

			</view>

		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				imgList1: [],
				status: 0,
				people_list: [{
						id: 0,
						name: '钱玉'
					},
					{
						id: 1,
						name: '郑西华'
					}
				],
				people: '钱玉',
				type_list: [{
						id: 0,
						name: '户外摔倒'
					},
					{
						id: 1,
						name: '室内摔倒'
					},
					{
						id: 2,
						name: '生命体征微弱'
					},
					{
						id: 3,
						name: '生命体征消失'
					}
				],
				type: '户外摔倒',
				checkboxValue1: [],
				// 基本案列数据
				checkboxList1: [{
						name: '疗养院',
						disabled: false
					},
					{
						name: '钱玉儿子',
						disabled: false
					},
					{
						name: '钱玉女儿',
						disabled: false
					}
				],

				list: [{
						time1: '12-03',
						time2: '17:38',
						action: '处理完成',
						reply: '已处理完成',
						
					},
					{
						time1: '12-01',
						time2: '19:50',
						action: '已受理',
						reply: '患者已出院'
					},
					{
						time1: '12-01',
						time2: '19:50',
						action: '已受理',
						reply: '已安排送往医院'
					},
					{
						time1: '12-01',
						time2: '17:48',
						action: '已提交',
						pic:'../../../../../static/images/fall.jpg'
					}
				],

			}
		},
		onLoad() {

		},
		methods: {
			submit() {
				this.$refs.uUpload.upload();
			},
			titlePicker(e) {
				this.title = this.title_list[e.target.value].name
				console.log(this.title_list[e.target.value].id) //获取id
				this.status = 1

			},
			checkboxChange(n) {
				console.log('change', n);
			},
			// 预览大图
			previewImage(item, index = 0) {
				uni.previewImage({
					urls: item,
					current: index
				})
			},

		}
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		padding: 20rpx;
		font-size: medium;
	}

	.top-title {
		display: flex;
		align-items: center;
	}

	.box {
		width: 20rpx;
		height: 45rpx;
		background-color: rgb(39, 172, 163);
		margin-right: 10rpx;
	}

	.title {
		font-size: 36rpx;
	}

	.table {

		padding: 10rpx;
	}

	.item {
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 20rpx;
		font-size: small;

	}

	.item1 {
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 20rpx;
		font-size: small;
		border-bottom: 1rpx solid#e7e7e7;
		margin-bottom: 20rpx;
		image {
			width: 30rpx;
			height: 30rpx;
			margin-left: 420rpx;
		}
	}

	.card {
		margin-top: -10rpx;
		display: flex;
		align-items: center;

		.choose {
			color: rgb(102, 163, 180);
			position: absolute;
			right: 50rpx;
		}
	}


	.upload {
		width: 150rpx;
		height: 150rpx;
		margin-top: 30rpx;
	}


	.img {
		display: flex;

		margin-right: 10rpx;

		image {
			height: 150rpx;
			width: 150rpx;
			margin-top: 30rpx;
			margin-left: 20rpx;
			// margin-right: 27.77rpx;
		}

		.delete {
			width: 35rpx;
			height: 35rpx;
			margin-top: 25rpx;
			margin-left: 140rpx;
			position: absolute;
			display: block;
			z-index: 999;
		}
	}

	.check {
		margin-top: 100rpx;
		font-size: small;
	}

	.button {
		width: 600rpx;
		height: 75rpx;
		margin: 40rpx 0rpx 10rpx 50rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(39, 172, 163);
	}

	.u-order-title text {
		color: #333333;
		font-size: 28rpx;
		background-color: rgb(230, 230, 230);
		border-radius: 20rpx;
		padding: 5rpx 15rpx 5rpx 15rpx;
	}

	.u-order-desc {
		color: #333333;
		font-size: 28rpx;

	}

	.u-order-time {
		color: #333333;
		font-size: 28rpx;
		margin-top: 25rpx;
	}

	.comment {
		display: flex;
		padding: 30rpx;

		.left {
			image {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				background-color: #f2f2f2;
			}
		}

		.right {
			flex: 1;
			padding-left: 20rpx;
			font-size: 26rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;

				.name {
					color: #5677fc;
				}

			}

			.content {
				margin-bottom: 10rpx;
			}

		}
	}

	.comment-input-btn {
		width: 100%;

		.input {
			width: calc(100% - 200rpx) !important;
			display: inline-block;
		}

		.btn {
			width: 40rpx;
			display: inline-block;
			// float: right;
			margin-left: 20rpx;
		}
	}

	.btn-group {
		display: flex;
		justify-content: space-between;

		.btn {
			width: 48%
		}
	}

	.line {
		width: 750rpx;
		height: 1rpx;
		background-color: #c7c7c7;
		margin-left: -40rpx;
		margin-top: 20rpx;
	}

	.line1 {
		width: 750rpx;
		height: 1rpx;
		background-color: #dadada;
		margin-left: -40rpx;

	}

	.pic {
		display: flex;
	}

	.u-track-image {
		display: flex;
		flex-wrap: wrap;
		flex: 1
	}

	.u-node {
		border-radius: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d0d0d0;
		width: 20rpx;
		height: 20rpx;
	}

	.time-left {
		display: flex;
		flex-direction: column;
		margin-left: -80rpx;
		margin-top: -60rpx;
	}

	.wrap {
		margin: 80rpx 0rpx 50rpx 100rpx;
	}
</style>
