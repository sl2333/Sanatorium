<template>
	<view class="content">
		<view class="page">
			<!-- <video class="video" id="demoVideo" :controls="false" :enable-progress-gesture="false"
				:show-center-play-btn="disable"
				src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v">
			</video> -->
			<yy-video-player 
			  :auto-play="false" 
			  :url="url"  
			  :poster="poster" 
			  :danmu-list="danmuList"  
			  :show-back-btn="true"
			></yy-video-player>

		</view>

	</view>
</template>

<script>
	import yyVideoPlayer from '@/components/yy-video-player/yy-video-player.nvue';
	export default {
		components: {
			yyVideoPlayer
		},
		data() {
			return {
				url:'http://tangbucker.oss-cn-hangzhou.aliyuncs.com/CareHome/Video/163869365552141.mp4?Expires=1640841138&OSSAccessKeyId=LTAI5tNju6tSVYrD6ivwm9TZ&Signature=T4ZyeDjycfk5s9%2BsTwV02Gld5%2BQ%3D'
/* 			"https://vd3.bdstatic.com/mda-mm0hys9ajvyzb0j9/sc/cae_h264/1638403305236365197/mda-mm0hys9ajvyzb0j9.mp4?v_from_s=hkapp-haokan-suzhou&amp;auth_key=1638421334-0-0-984d8c96bd31b1d9b16e83c9abfed512&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=3000187_1&amp;klogid=1934876303"
 */			}
			
		},
		onLoad() {

		},
		methods: {
		//视频播放器
		   onShow() {
		      if (this.videoContext) {
		        this.videoContext.play();
		       }
		    },
		    onReady: function() {
		     this.videoContext = uni.createVideoContext('video', this);
		    },
		    onHide: function() {
		      if (this.videoContext) {
		        this.videoContext.stop();
		      }
		    }

		},
		
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.page video {
		width: 750rpx;
	}
</style>
