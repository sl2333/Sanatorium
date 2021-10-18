<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//判断当前版本更新
			console.log('当前版本', this.$u.config.v);
			// 版本更新
			var that = this;
			const updateManager = uni.getUpdateManager()
			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
			})
			updateManager.onUpdateReady(function() {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success: function(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate()
						}
					}
				})
			})
			// 新的版本下载失败
			updateManager.onUpdateFailed(function() {})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import './static/iconfont/iconfont.css';
	/*每个页面公共css */
	
	//去除scroll-view的滚动条
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>
