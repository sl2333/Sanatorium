<template>
	<view>
		<!-- 家属端 -->
		<view class="content" v-if="change===0">
			<text class="title">预约种类</text>
			<view class="items1">
				<image src="../../../static/images/book1.png" />
				<text>拜访入院申请</text>
			</view>
			<view class="items2" @click="gotoBookSight()">
				<image src="../../../static/images/book2.png" />
				<text>预约参观申请</text>
			</view>
			<view class="items3">
				<image src="../../../static/images/book3.png" />
				<text>预约护工申请</text>
			</view>
		</view>
		<!-- 护工端 -->
		<view class="content" v-if="change===1">
			<text class="title">预约种类</text>
			<view class="items1">
				<image src="../../../static/images/book1.png" />
				<text>请假申请</text>
			</view>
			<view class="items2">
				<image src="../../../static/images/book2.png" />
				<text>预谈审批</text>
			</view>
			<!-- <view class="items3">
				<image src="../../../static/images/book3.png" />
				<text>预约护工申请</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				change: 1 //0为家属端，1为护工端
			}
		},
		onLoad() {
			this.change = uni.getStorageSync('change')
			console.log(this.change)
		},
		methods: {
			gotoBookSight() {
				uni.navigateTo({
					url: '/pages/index/book/bookSight/bookSight'
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

	.title {
		font-size: 40rpx;
		font-weight: bold;
		margin-left: -500rpx;
		margin-top: 30rpx;
	}

	.items1 {
		width: 220rpx;
		height: 220rpx;
		background-color: #FCF7F1;
		margin-top: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: rgb(232, 206, 176);
		font-size: small;

		image {
			width: 80rpx;
			height: 80rpx;
			margin-bottom: 15rpx;
		}
	}

	.items2 {
		width: 220rpx;
		height: 220rpx;
		background-color: #FCF6F6;
		margin-top: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: rgb(236, 182, 182);
		font-size: small;

		image {
			width: 80rpx;
			height: 80rpx;
			margin-bottom: 15rpx;
		}
	}

	.items3 {
		width: 220rpx;
		height: 220rpx;
		background-color: #FAF7EB;
		margin-top: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: rgb(234, 206, 98);
		font-size: small;

		image {
			width: 80rpx;
			height: 80rpx;
			margin-bottom: 15rpx;
		}
	}
</style>
