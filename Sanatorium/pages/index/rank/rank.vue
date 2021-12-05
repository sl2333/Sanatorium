<template>
	<view class="page">

		<!-- <view class="otherrank" v-for="(item, index) in rankList" :key="index" v-if="index>3" @click="seedetail(index)">
			    <view class="rankid">{{index}}</view>
			    <view><image class="rankimg" src="../../../static/images/doctor.png"  /></view>
			    <view class="rankname">{{item.candidateName}}</view>
			    <view class="rankticket">{{item.voteNum}}票</view>
			</view> -->

		<view :class="{top1:index==0, top2:index==1, top3:index==2}" v-for="(item, index) in rankList" :key="index"
			v-if="index<3" @click="seedetail(index)">
			<view v-if="index==0">
				<image class="crown" src="../../../static/images/crown.png" />
			</view>
			<view v-if="index!=0">{{index+1}}</view>
			<view>
				<image class="rankimg" :src="item.picUrl" />
			</view>
			<view class="rankname">{{item.candidateName}}</view>
			<view class="rankticket">{{item.voteNum}}票</view>
		</view>
		<view class="line2"></view>
		<view class="otherrank" v-for="(item, index) in rankList" :key="index" v-if="index>3" @click="seedetail(index)">
			<view class="rankid">{{index}}</view>
			<view>
				<image class="rankimg" :src="item.picUrl" />
			</view>
			<view class="rankname">{{item.candidateName}}</view>
			<view class="rankticket">{{item.voteNum}}票</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				rankList: [{
						id: 0,
						candidateName: '小李',
						voteNum: 121,
						picUrl:'../../../static/images/hg10.png'
					},
					{
						id: 0,
						candidateName: '林桂花',
						voteNum: 110,
						picUrl:'../../../static/images/hg11.png'
					},
					{
						id: 0,
						candidateName: '梅兰',
						voteNum: 89,
						picUrl:'../../../static/images/hg12.png'
					},
					{
						id: 0,
						candidateName: '李阿花',
						voteNum: 88,
						picUrl:'../../../static/images/hg13.png'
					},
					{
						id: 0,
						candidateName: '小花',
						voteNum: 70,
						picUrl:'../../../static/images/hg14.png'
					},
					{
						id: 0,
						candidateName: '李婶',
						voteNum: 55,
						picUrl:'../../../static/images/hg15.png'
					},
					{
						id: 0,
						candidateName: '林小',
						voteNum: 49,
						picUrl:'../../../static/images/hg16.png'
					},
					{
						id: 0,
						candidateName: '梅婶',
						voteNum: 48,
						picUrl:'../../../static/images/hg17.png'
					},
					{
						id: 0,
						candidateName: '小白',
						voteNum: 47,
						picUrl:'../../../static/images/hg18.png'
					},
					{
						id: 0,
						candidateName: '小花',
						voteNum: 40,
						picUrl:'../../../static/images/hg19.png'
					},
					
				],

			}
		},

		methods: {
			seedetail() {
				// uni.setStorageSync('candidateName',this.rankList[index].candidateName)
				// console.log(uni.getStorageSync('candidateName'))
				uni.navigateTo({
					url: 'alreadyvoted?voteID=' + this.voteID
				})
			},




		},

		onLoad(option) {

		}
	}
</script>

<style lang="scss">
	.rank {
		color: rgb(39, 172, 163);
		font-weight: bold;
		width: 100%;
		text-align: center;
		margin-top: 20rpx;
		font-size: 32rpx;
	}

	.top1 {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 10rpx;

		.rankticket {
			color: rgb(147, 149, 147);
			margin-top: 10rpx;
		}

		.rankimg {
			width: 130rpx;
			height: 130rpx;
			border-radius: 50%;
		}
	}

	.top2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: -170rpx;
		margin-left: -450rpx;

		.rankticket {
			color: rgb(147, 149, 147);
			margin-top: 10rpx;
		}

		.rankimg {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50%;
		}
	}

	.top3 {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: -250rpx;
		margin-left: 450rpx;

		.rankticket {
			color: rgb(147, 149, 147);
			margin-top: 10rpx;
		}

		.rankimg {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50%;
		}
	}

	.crown {
		width: 40rpx;
		height: 40rpx;
		margin-bottom: -10rpx;

	}

	.line2 {
		width: 100%;
		height: 40rpx;
	}

	.otherrank {
		display: flex;
		width: 100%;
		height: 100rpx;
		margin-top: 30rpx;

		.rankid {
			margin-left: 8%;
			margin-top: 50rpx;
		}

		.rankticket {
			color: rgb(147, 149, 147);
			margin-top: 40rpx;
			margin-left: 200rpx;
		}

		.rankimg {
			width: 100rpx;
			height: 100rpx;
			margin-left: 20rpx;
			border-radius: 50%;
		}

		.rankname {
			margin-left: 50rpx;
			margin-top: 40rpx;
		}
	}
</style>
