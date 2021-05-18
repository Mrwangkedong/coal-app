function goPage(pageName,pageParams){
	
	var pageId = pageName.slice(6,pageName.length-1);
	
	mui.openWindow({
		url: pageName+".html", //需要打开页面的url地址 
		id: pageId, //需要打开页面的url页面id
		styles: {
			top: '0px', //新页面顶部位置 
			bottom: '50px', //新页面底部位置 
		},
		extras: pageParams,
		show: { //控制打开页面的类型
			autoShow: true,
			aniShow: 'zoom-fade-out', //页面显示动画，默认为”slide-in-right“；  页面出现的方式 左右上下
			duration: '350' //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒； 
		},
	});
}

function goPage2(pageName,pageParams){
	
	var pageId = pageName.slice(6,pageName.length-1);
	
	mui.openWindow({
		url: pageName+".html", //需要打开页面的url地址 
		id: pageId, //需要打开页面的url页面id
		styles: {
			top: '0px', //新页面顶部位置 
			bottom: '0px', //新页面底部位置 
		},
		extras: pageParams,
		show: { //控制打开页面的类型
			autoShow: true,
			aniShow: 'zoom-fade-out', //页面显示动画，默认为”slide-in-right“；  页面出现的方式 左右上下
			duration: '350' //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒； 
		},
	});
}