<template>
	<view class="content">
		<!-- 店铺信息 -->
		<view class="top">
			<view class="intro">
				<image class="large" src="../../../static/images/house5.jpg" />
				<view class="box">
					<text class="title">解放军杭州疗养院</text>
					<image class="star" src="../../../static/images/house6.png" />
					<view class="price">
						<text>150条</text>
						<text>￥800/人</text>
					</view>
					<view class="addre">
						<text>青山湖科技城</text>
						<image src="../../../static/images/mine3.png" />
					</view>
				</view>
			</view>
			<view class="line" />
			<view class="status">
				<view class="status-up">
					<text>营业中</text>
					<text class="time">周一至周日 07：30-11：30 14：30-17：00</text>
				</view>
				<view class="status-down">
					<text>有音乐室</text>
					<text>支持医保</text>
					<text>慢病管理</text>
					<text>电子报告</text>
				</view>
			</view>

			<view class="line1" />

			<view class="address">
				<view class="left">
					<view class="status-up">
						<text>杨公堤27号</text>
					</view>
					<view class="status-down1">
						<text>距云松书社步行1.1km</text>
					</view>
				</view>
				<image class="phone" src="../../../static/images/phone.png" />
			</view>

		</view>
		<!-- 套餐 -->
		<view class="mid">
			<view class="mid-title">
				<image class="tc" src="../../../static/images/tc.png" />
				<text>套餐</text>
			</view>
			<view class="body">
				<view class="item" v-for="item in list" :key="index">
					<image :src="item.imgUrl" />
					<text class="item-title">{{item.title}}</text>
					<text class="price">￥{{item.price}}</text>
					<text class="item-sold">销量：{{item.sold}}</text>
				</view>
			</view>
		</view>

		<!-- 评论 -->
		<view class="bottom">
			<view class="mid-title">
				<image class="tc" src="../../../static/images/book.png" />
				<text>评价</text>
				<image class="tc1" src="../../../static/images/house3.png" />
			</view>
			<view class="bottom-body">
				<view class="bottom-item" v-for="item in pingList" :key="index">
					<image class="tx" :src="item.tx" />
					<view class="right">
						<view class="bottom-item-title">
							<text>{{item.name}}</text>
						</view>
						<text class="bottom-item-time">
							发布于：{{item.time}}
						</text>
						<view class="score">
							<text>打分</text>
							<image src="../../../static/images/house6.png" />
						</view>
						<view class="detail">
							{{item.detail}}
						</view>
						<view class="images">
							<view v-for="item1 in item.picUrl" key="index">
								<image  :src="item1" />
							</view>

						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="btn">
			<view class="btn-box">
				<image src="../../../static/images/shoucang.png" />
				<text>收藏</text>
			</view>
			
			<view class="nextSubmit" @click="gotoBookHouse()">
				预约该疗养院
			</view>
			<view class="btn-box">
				<image src="../../../static/images/zixun.png" />
				<text>咨询</text>
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
						name: '五星大厨套餐',
						sold: '15',
						price: '3000',
						imgUrl: '../../../static/images/tc1.png'
					},
					{
						id: 0,
						name: '带游泳服务套餐',
						sold: '21',
						price: '4000',
						imgUrl: '../../../static/images/taocan1.png'
					},
					{
						id: 0,
						name: '高档房间套餐',
						sold: '10',
						price: '8000',
						imgUrl: '../../../static/images/taocan2.png'
					},
					{
						id: 0,
						name: '雅致景观套餐',
						sold: '2',
						price: '15000',
						imgUrl: '../../../static/images/taocan3.png'
					}
				],
				pingList: [{
						id: 0,
						name: '小陈',
						time: '2021年11月5日',
						detail: '这里的厨师手艺真好！',
						tx: '../../../static/images/tx1.png',
						picUrl: ['../../../static/images/food1.png', '../../../static/images/food2.png']
					},
					{
						id: 0,
						name: '花花',
						time: '2021年11月1日',
						detail: '这次特地选择了有慢病管理项目的疗养院，觉得家里长辈的身体不是很好，需要完善的医疗系统，体验感非常好！',
						tx: '../../../static/images/tx2.png',
						picUrl: ['../../../static/images/doc1.png', '../../../static/images/doc2.png',
							'../../../static/images/doc3.png'
						]
					},
					{
						id: 0,
						name: '李成',
						time: '2021年10月7日',
						detail: '父亲反馈雅致景观房的入住感很好，钱花的很值！',
						tx: '../../../static/images/tx3.png',
						picUrl: ['../../../static/images/hotel1.png', '../../../static/images/hotel2.png',
							'../../../static/images/hotel3.png'
						]
					},
					{
						id: 0,
						name: '小花',
						time: '2020年5月5日',
						detail: '游泳套餐很贴心，有专业人员在，长辈也能更好地运动',
						tx: '../../../static/images/tx6.png',
						picUrl: ['../../../static/images/swim.png'
						]
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			gotoBookHouse() {
				uni.navigateTo({
					url: '../book/bookHouse/bookHouse'
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
		display: flex;
		background-color: #ffffff;

		flex-direction: column;
	}

	.intro {
		display: flex;
		background-color: #ffffff;
		width: 750rpx;
		height: 300rpx;
		padding: 30rpx;


	}

	.large {
		width: 200rpx;
		height: 200rpx;
		border-radius: 10rpx;
	}

	.box {
		display: flex;
		flex-direction: column;
		margin-left: 30rpx;
		align-items: flex-start;
		height: 190rpx;
		justify-content: space-between;
		font-size: 25rpx;

		.title {
			font-weight: 600;
			font-size: 33rpx;
		}

		.price {
			width: 250rpx;
			display: flex;
			justify-content: space-around;
			margin-left: -20rpx;
		}

		.star {
			width: 250rpx;
			height: 50rpx;
			margin: -10rpx 0rpx -10rpx -10rpx;
		}

		.addre {
			display: flex;

			image {
				width: 20rpx;
				height: 20rpx;
				margin-left: 280rpx;
				margin-top: 15rpx;
			}
		}
	}

	.line {
		width: 700rpx;
		height: 1rpx;
		background-color: #eaeaea;
		margin: -40rpx 0rpx 0rpx 25rpx;
	}

	.status {
		width: 700rpx;
		font-size: 25rpx;
		padding: 25rpx;
	}

	.time {
		margin-left: 20rpx;
	}

	.status-down {
		margin-top: 15rpx;

		text {
			padding: 6rpx;
			background-color: rgb(246, 246, 246);
			margin-right: 10rpx;
			font-size: 23rpx;
		}
	}

	.address {
		width: 700rpx;
		font-size: 25rpx;
		padding: 15rpx 0rpx 15rpx 25rpx;
		display: flex;
	}

	.status-down1 {
		margin-top: 5rpx;
		color: #9a9a9a;
	}

	.line1 {
		width: 700rpx;
		height: 1rpx;
		background-color: #eaeaea;
		margin: 0rpx 0rpx 0rpx 25rpx;
	}

	.phone {
		width: 35rpx;
		height: 35rpx;
		margin-top: 10rpx;
		position: absolute;
		right: 40rpx;

	}

	.mid {
		margin-top: 20rpx;
		width: 750rpx;
		background-color: #ffffff;
		padding: 25rpx;
		display: flex;
		flex-direction: column;


		.mid-title {
			display: flex;
			align-items: center;


			.tc {
				width: 29rpx;
				height: 29rpx;
				margin-right: 5rpx;
			}
		}

		.body {
			width: 750rpx;

			background-color: #ffffff;
			margin-top: 20rpx;
			display: flex;
			flex-wrap: wrap;

			.item {
				width: 330rpx;
				height: 460rpx;
				display: flex;
				border: 1rpx solid#e1e1e1;
				flex-direction: column;
				font-size: small;
				margin-left: 15rpx;
				margin-bottom: 20rpx;

				image {
					width: 331rpx;
					height: 400rpx;
				}

				.item-title {
					font-weight: 600;

					margin: 10rpx 0rpx 10rpx 10rpx;
				}

				.price {
					color: rgb(204, 93, 49);
					margin: 0rpx 0rpx 10rpx 10rpx;
				}

				.item-sold {
					color: #a3a3a3;
					font-size: smaller;
					text-align: right;
					margin-right: 20rpx;
					margin-bottom: 10rpx;
				}
			}
		}

	}

	.bottom {
		width: 750rpx;

		background-color: #ffffff;
		margin-top: 20rpx;
		padding: 25rpx;

		.mid-title {
			display: flex;
			align-items: center;


			.tc {
				width: 29rpx;
				height: 29rpx;
				margin-right: 5rpx;
			}

			.tc1 {
				width: 29rpx;
				height: 29rpx;
				margin-left: 580rpx;
			}
		}

		.bottom-body {
			width: 750rpx;
			padding-top: 20rpx;
			margin-bottom: 150rpx;
			.bottom-item {
				display: flex;
			}

			.tx {
				width: 85rpx;
				height: 85rpx;
				border-radius: 50%;
			}

			.right {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				margin-left: 15rpx;
				border-bottom: 1rpx solid#e8e8e8;
			}

			.bottom-item-title {
				display: flex;
				height: 90rpx;
				font-weight: 500;
				align-items: center;

				image {
					width: 80rpx;
					height: 80rpx;
					
				}

				text {

					color: rgb(97, 109, 127);
				}
			}

			.bottom-item-time {
				color: #717171;
			}

			.score {
				display: flex;
				align-items: center;
				color: #333333;

				image {
					width: 200rpx;
					height: 50rpx;

				}
			}

			.detail {
				color: #333333;
				width: 590rpx;
			}

			.images {
				width: 600rpx;
				display: flex;
				
				image {
					width: 150rpx;
					height: 150rpx;
					margin: 20rpx 20rpx 20rpx 0rpx;
					
				}
			}

		}
	}

	/* .btn{
		width: 700rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: (rgb(39, 172, 163));
		color: #ffffff;
		margin-bottom: 50rpx;
		border-radius: 10rpx;
		position: fixed;
		bottom: 0;
		z-index: 999;
	} */
	.btn {
		// display: flex;
		// justify-content: center;
		// align-items: center;
		// width: 100%;
		// margin-top: 40rpx;
		position: fixed;
		bottom: 0;
		padding: 30rpx 0;
		border-top: 2rpx solid #f8f8f8;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100vw;
		z-index: 999;
		background-color: #fff;
		padding-left: 20rpx;
		padding-right: 20rpx;
		// position: absolute;
		// bottom: 106rpx;
		// padding-left: 170rpx;
		// left: 50% ;
		// transform: translateX(-50%);
		// left: 0;
		// right: 0;

		.nextSubmit {
			background-color: rgb(39, 172, 163);
			color: white;
			border-radius: 10px;
			text-align: center;
			width: 80%;
			line-height: 76rpx;
		}
		image{
			width: 50rpx;
			height: 50rpx;
		}
	}
	.btn-box{
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: smaller;
	}
</style>
