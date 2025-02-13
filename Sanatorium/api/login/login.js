import request from '../../utils/request.js'
import qs from 'qs'; // 根据需求是否导入qs模块
import base from '../base.js'
const login = {
	//租客/成员注册（公共）
	registrationPublic(communityId,idNumber,mobilephone,name,publicPropertyId,type){
		return request.httpRequest(`${base.sq}/registration?communityId=${communityId}&idNumber=${idNumber}&mobilephone=${mobilephone}&name=${name}&publicPropertyId=${publicPropertyId}&type=${type}`, 'POST')
	},
	//获取banner
	getBannerList(){
		return request.httpRequest(`${base.sq}/banner`,'GET')
	},
}

export default login;