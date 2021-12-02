import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
	  user: {
	  			home: {
	  				id: 1,
	  				name: 'tax',
	  				img: 'static/img/homeHL.png'
	  			},
	  			customer: {
	  				id: 2,
	  				name: 'customer',
	  				img: 'static/img/customerHL.png'
	  			}
	  		},
	forcedLogin: true,
    userName: '',
	hasLogin: false
  },
  updated:function(){
  		console.log('message update:'+ this.scrollTop);
  	},
  mutations: {
    login(state, userName) {
		state.userName = userName || '新用户';
		state.hasLogin = true;
	},
	logout(state) {
	    state.userName = "";
	    state.hasLogin = false;
	}
  }
})

export default store


