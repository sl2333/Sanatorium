<template>
	<view class="content">
		<view class="form">
			<text class="large-title">预约疗养院申请</text>
			<text class="title">选择护工种类</text>
			<picker mode="selector" :range="title_list" range-key="name" @change="titlePicker">
				<view class="top">
					<text>{{title}}</text>
					<image class="icon" src="../../../../static/images/house3.png" />
				</view>
			</picker>

			<view class="status" v-if="status==1">
				<text class="title">选择护工</text>
				<view class="box">
					<scroll-view scroll-x="true" class="scroll">
						<view style="display: flex;">
							<view class="item" v-for="item in nurseList" :key="index">
								<image :src="item.picUrl" />
								<text>{{item.name}}</text>
								<text class="price">工资：{{item.price}}￥</text>
							</view>
						</view>

					</scroll-view>
				</view>
			</view>

			<view class="title">
				面谈日期
			</view>
			   <picker mode="date" :value="date"  @change="bindDateChange">
				<view class="top">
					<text>{{date}}</text>
					<image class="icon" src="../../../../static/images/house3.png" />
				</view>  
			</picker>
			<view class="line"/>

			<view class="title">
				面谈时间
			</view>
			<picker mode="time" :value="time" @change="bindTimeChange">
				<view class="top">
					<text>{{time}}</text>
					<image class="icon" src="../../../../static/images/house3.png" />
				</view>  
			</picker>
			<view class="line"/>
			<view class="title">
				预约人姓名
			</view>
			<view class="top">
				<input type="text" placeholder="请输入" placeholder-style="#BBBBBB" />
				<image class="icon" src="../../../../static/images/house3.png" />
				
			</view>
			<view class="line"/>
			<view class="title">
				预约人电话号码
			</view>
			<view class="top">
				<input type="text" placeholder="请输入" placeholder-style="#BBBBBB" />
				<image class="icon" src="../../../../static/images/house3.png" />
				
			</view>
			<view class="line"/>
		</view>
		
		<view class="check">
			<label>
				<checkbox  /><text>我已阅读并同意预约申请规则</text>
			</label>
		</view>
		<view class="button" @click="submit()">
			<text>提交</text>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title_list: [{
						id: 0,
						name: '大体健康'
					},
					{
						id: 1,
						name: '恢复健康'
					},
					{
						id: 2,
						name: '基本自理'
					},
					{
						id: 3,
						name: '丧失自理'
					}
				],
				nurseList: [{
						id: 0,
						name: '李卓恬',
						picUrl: '../../../../static/images/coffee.png',
						price: 3500
					},
					{
						id: 1,
						name: '李卓恬',
						picUrl: '../../../../static/images/coffee.png',
						price: 3500
					},
					{
						id: 2,
						name: '李卓恬',
						picUrl: '../../../../static/images/coffee.png',
						price: 3500
					},
					{
						id: 3,
						name: '李卓恬',
						picUrl: '../../../../static/images/coffee.png',
						price: 3500
					},
					{
						id: 4,
						name: '李卓恬',
						picUrl: '../../../../static/images/coffee.png',
						price: 3500
					},
					{
						id: 5,
						name: '李卓恬',
						picUrl: '../../../../static/images/coffee.png',
						price: 3500
					}
				],
				title: '请选择',
				status: 0,
				date: '2021-11-26',
				time: '23：55'
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
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: column;

	}

	.form {
		width: 700rpx;
		padding-top: 20rpx;
		display: flex;
		flex-direction: column;

		.large-title {
			font-size: 36rpx;
		}

		.status {
			margin-top: 50rpx;
		}

		.title {
			font-size: small;
			margin-top: 50rpx;
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
		.line{
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
	.check{
		margin-top: 60rpx;
		font-size: small;
	}
	.button{
		width: 600rpx;
		height: 75rpx;
		margin: 40rpx 0rpx 50rpx 0rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(39,172,163);
	}
</style>
