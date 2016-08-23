// 获取元素的第一个子节点
function fnFirst(oParent){
	if(oParent.firstElementChild){
		return oParent.firstElementChild;
	}
	else{
		return oParent.firstChild;
	}
}

// 阻止右键默认事件
function preventDefault(oEvent){
	if(oEvent.preventDefault){
		oEvent.preventDefault();
	}
	else{
		oEvent.returnValue = false;
	}
}

// 阻止事件流
function stopPropagation(oEvent){
	if(oEvent.stopPropagation){
		oEvent.stopPropagation();
	}
	else{
		oEvent.cancelBubble = true ;
	}
}

// 获取目标元素
function getTarget(oEvent){
	if(oEvent.target){
		return oEvent.target;
	}
	else{
		return oEvent.srcElement;
	}
}

// 获取元素计算后的样式
function getStyle(obj,sStyle){
	if(obj.currentStyle){
		return obj.currentStyle[sStyle];
	}
	else{
		return window.getComputedStyle(obj, null)[sStyle];
	}
}

// 绑定事件方法三
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else{
		obj.attachEvent("on"+type, fn);
	}
}

// 解除事件程序
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn,false);
	}
	else{
		obj.detachEvent('on'+type,fn);
	}
}

// 滚轮事件
function mouseWheel(obj,upFn,downFn){
		function fn(e){
			var oEvent = e||window.event;
			if(oEvent.wheelDelta>0 ||oEvent.detail<0){
				upFn();
			}
			else{
				downFn();
			}
			// return false;	友情提示：此方法用在此处无法阻止默认事件
			oEvent.preventDefault();
		}
		addEvent(obj,'mousewheel',fn);
		addEvent(obj,'DOMMouseScroll',fn);
	}

// 获取cookie
function getCookie(name){
	var arr = document.cookie.split("; ");
	for (var i = 0; i < arr.length; i++) {
		var arr2=arr[i].split("=");
		if(arr2[0]==name){
			return arr2[1];
		}
	}
}

// 设置cookie
function setCookie(name,value,iDay){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie = name+"="+value+" ;expires="+oDate;
}

// 删除cookie
function removeCookie(name){
	setCookie(name,"",-1);
}