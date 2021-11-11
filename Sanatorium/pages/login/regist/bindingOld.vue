<template>
	<view class="content">
		<view class="title">
			<view>
				开启智能疗养新时代
			</view>
			<text>请填写老人资料</text>
		</view>
		<view class="form">
			<view class="item">
				<text>老人照片</text>
				<image class="icon1" src="../../../static/images/right.png" />
			</view>
			<view class="item">
				<text>老人姓名</text>
				<input type="text" placeholder-style="color:#898989;text-align:right"
					style="text-align: right;margin-left: 200rpx;" placeholder="请输入" v-model="name" />
			</view>
			<view class="item">
				<text>身份证号</text>
				<input type="text" placeholder-style="color:#898989;text-align:right"
					style="text-align: right;margin-left: 200rpx;" placeholder="请输入" v-model="idCard" />
			</view>
			<view class="item">
				<text>出生年月</text>
				<input type="text" placeholder-style="color:#898989;text-align:right"
					style="text-align: right;margin-left: 200rpx;" placeholder="请输入" v-model="phone" />
			</view>
			<view class="item">
				<text>和老人关系</text>
				<picker  mode="selector" :range="title_list" range-key="name" @change="titlePicker">
					<view class="picker-title">
						{{title}}
						<image class="icon2" src="../../../static/images/down.png" />
					</view>
					
				</picker>
			</view>
			<!-- 			<view class="old">
				<text>绑定老人</text>
				<picker  mode="selector" :range="title_list" range-key="name" @change="titlePicker">
					<view class="picker-title">
						{{title}}
						<image class="icon2" src="../../../static/images/down.png" />
					</view>
					
				</picker>
			</view> -->
		</view>
		<view class="pass">
			跳过
		</view>
		<view class="btn">
			<text>绑定</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				idCard: '',
				phone: '',
				honor: false,
				title: '请选择',
				title_list: [{
					id: 0,
					name: '子女'
				},
				 {
				 	id: 1,
				 	name: '配偶'
				 },
				 {
				 	id: 3,
				 	name: '兄弟姐妹'
				 },
				 {
				 	id: 3,
				 	name: '其余亲属'
				 }]
			}
		},
		onLoad() {

		},
		methods: {
			titlePicker(e) {
				this.title = this.title_list[e.target.value].name
				console.log(this.title_list[e.target.value].id) //获取id
			},
		}
	}
</script>

<style>
	page{
		background-color: #f7f8f9;
	}
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}

	.title {
		font-size: large;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.title text {
		font-size: small;
		color: #5F5E5E;
		margin-top: 10rpx;
		margin-left: 65rpx;
		margin-bottom: 30rpx;
	}

	.form {
		width: 750rpx;
		height: 735rpx;
		background-color: #FFFFFF;
		padding: 0rpx 30rpx 0rpx 30rpx;
	}

	.item {
		border-bottom: 2rpx solid#e5e5e5;
		height: 100rpx;
		display: flex;
		align-items: center;
	}

	 	.old {
		margin-top: 90rpx;
		display: flex;
	}
	.picker-title{
		color: #898989;
		border: 1rpx solid#BBBBBB;
		padding: 10rpx;
		width: 150rpx;
		display: flex;
		margin-left: 400rpx;
		border-radius: 8rpx;
		
	} 
	.icon1 {
		width: 20rpx;
		height: 20rpx;
		margin-left: 550rpx;
	}

	.icon2{
		width: 20rpx;
		height: 20rpx;
		position: absolute;
		right: 48rpx;
		top: 560rpx;
	}
	.pass {
		color: #0B4A87;
		margin-top: 30rpx;
		margin-left: 600rpx;
	}

	.btn {
		width: 500rpx;
		height: 60rpx;
		border-radius: 4rpx;
		background-color: rgb(58, 146, 85);
		box-shadow: 0px 2px 3px 0px rgba(93, 93, 93, 0.0);
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 100rpx;
		margin-bottom: 115rpx;
	}
</style>
