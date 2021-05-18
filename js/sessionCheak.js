/**
 * 检查当前是否有用户登录
 */
function sessionCheck() {
	let driver_id = localStorage.driver_id; //从缓冲中读取到driver_id
	if(driver_id === undefined){
		location.replace("login.html");
	}else{
		console.log(driver_id);
	}
}
