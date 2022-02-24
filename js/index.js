// 点击右上角图标 显示、隐藏导航
$(document).ready(function(){
	$(".show-menu").click(function(){ 
		$(this).next("div").slideToggle("fast")  
		.siblings(".hide-menu:visible").slideUp("fast");
	});
});
	
// 控制导航条样式 
$(function(){
	$(window).scroll(function(){
		var s = $(document).scrollTop();
		if(s > 40){
			$('.header-top .col-sm-10').addClass('navbar-fixed-top');
		}else{
			$('.header-top .col-sm-10').removeClass('navbar-fixed-top');
		}
	});
});







