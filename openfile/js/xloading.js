
var defaultImg = 'images/xloading.gif'

$(document).ready(function(){
	$('body img').each(function(){
		// $(this).removeAttr('class');
		$(this).addClass('scrloadpic');
	})
	var $targetpics = $("img.scrloadpic"); 
	var len = $targetpics.length; 
	for(var i=0; i< len; i++){ 
		var $temppic = $targetpics.eq(i); 
		var src = $temppic.attr('src');
		$temppic.attr('xsrc',src).attr('src',defaultImg);
	}
	scrollLoading(); 
})

function scrollLoading(){ 
	var $targetpics = $("img.scrloadpic"); 
	var len = $targetpics.length; 
	var st = $(window).scrollTop(), sth = st + $(window).height();  
	// alert(len+";"+st+";"+sth);
	// console.log(len+";"+st+";"+sth);
	for(var i=0; i< len; i++){ 
		var $temppic = $targetpics.eq(i); 
		var post = $temppic.offset().top; 
		var posb = post + $temppic.height(); 
		// alert(st+";"+sth+";"+post+";"+posb);
		// console.log(st+";"+sth+";"+post+";"+posb);	
		if((post > st && post < sth) || (posb > st && posb < sth)) { 
			var xsrc = $temppic.attr("xsrc"); 
			// alert(xsrc);
			// console.log(xsrc);
			if(xsrc != ""){ 
				$temppic.attr("src", xsrc).attr("xsrc",'').css('opacity','1'); 
			}
		} 
	} 
}


$(window).bind("scroll", scrollLoading); 

// $(window).on("touchstart",function(){
// 	event.preventDefault();
//   	// alert("开始滚动！");
//   	console.log("开始滚动！");
// 	scrollLoading(); 
// });

// document.ontouchstart=function(){          
//     document.location="myweb:touch:start";
// }; 
// document.ontouchend=function(){         
//     document.location="myweb:touch:end";  
// }; 
// document.ontouchmove=function(){        
//     document.location="myweb:touch:move"; 
// }

$(document).on("scrollstart",function(){
	scrollLoading(); 
  	// console.log("开始滚动！");
});

$(document).on("scrollstop",function(){
	scrollLoading(); 
  	// console.log("结束滚动！");
});

// $(window).height();//是文档窗口高度
// $("div").offset().top//是标签距离顶部高度
// $(document).scrollTop();//是滚动条高度
// $("div").height();//是标签高度
// jquery元素到底部高度+$("div").height()+[$("div").offset().top-$(document).scrollTop()]=$(window).height();



