<script>
	export default {
		
		onLaunch: function() {
		    uni.getSystemInfo({
		        success:function(e){
		            Vue.prototype.statusBar = e.statusBarHeight
		            // #ifndef MP
		            if(e.platform == 'android') {
		                Vue.prototype.customBar = e.statusBarHeight + 50
		            }else {
		                Vue.prototype.customBar = e.statusBarHeight + 45
		            }
		            // #endif
		            
		            // #ifdef MP-WEIXIN
		            let custom = wx.getMenuButtonBoundingClientRect()
		            Vue.prototype.customBar = custom.bottom + custom.top - e.statusBarHeight
		            // #endif
		            
		            // #ifdef MP-ALIPAY
		            Vue.prototype.customBar = e.statusBarHeight + e.titleBarHeight
		            // #endif
		        }
		    })
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
