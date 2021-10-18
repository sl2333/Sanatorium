import base from '../api/base.js'
//添加修改属性值
function getLocalTime(nS) {
	return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}

function formatDate(now) {
	var d=new Date(now); 
	var year = d.getFullYear(); //取得4位数的年份
	var month = d.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
	var date = d.getDate(); //返回日期月份中的天数（1到31）
	var hour = d.getHours(); //返回日期中的小时数（0到23）
	var minute = d.getMinutes(); //返回日期中的分钟数（0到59）
	var second = d.getSeconds(); //返回日期中的秒数（0到59）
	return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}
//时间戳转日期
//时间戳获取日期
function myGet(inputTime) {
	var date = new Date(inputTime);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	return y + '/' + m + '/' + d;
};
//时间戳获取日期
function myGet2(inputTime) {
	var date = new Date(inputTime);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	return y + '-' + m + '-' + d +' ' + h+':'+ minute+':'+second;
};
//获取数组第几项内容
function getArrayIndex(arr,data){
	let temp = []
	arr.forEach(item=>{
		temp.push(data[item])
	})
	return temp
}
//富文本图片地址转换

function getRicheText(richText){
	let srcReg = /src=([\'\"]?([^\'\"]*)[\'\"]?)/ig;
	let reg=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
	if (richText) {
		richText = richText.replace(srcReg, reg.test("$2")?"style='height:200px;width:330px'" + ' ' +
			"src='"  + "$2" + "'":"style='height:200px;width:330px'" + ' ' +
			"src='" + base.sq+'/' + "$2" + "'");
	}
	return richText;
}
export default {
	getLocalTime,
	formatDate,
	myGet,
	myGet2,
	getArrayIndex,
	getRicheText,
}
