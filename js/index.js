$(function() {
	//banner描述右侧划出
	$("body").css({
		"overflow-x": "hidden"
	})
	$(".b_d_content").css({
		"position": "absolute",
		"top": "-250px",
		"right": "-350px"
	}).animate({
		"top": "81px",
		"right": "292px"
	}, 800, function() {
		$(this).css({
			"position": "static",
			"top": "0",
			"right": "0"
		});
	});
	var $p = $(".b_d_content").parent();
	console.log($p.offset().left + "/" + $p.offset().top);
	//slide 轮播

	var first = true;
	$(".page a:first").click(function() {
		if(first) {
			$(".ul_con ul:last").prependTo($(".ul_con"));
			$(".ul_con").css("margin-left", "-1000px");
		}
		$(".ul_con").animate({
			"margin-left": "0"
		}, 2000, function() {
			first = false;
			$(".ul_con ul:last").prependTo($(".ul_con"));
			$(".ul_con").css("margin-left", "-1000px");
		});
	});
	$(".page a:last").click(function() {
		next();
	});

	//自动播放
	var timer = setInterval(function() {
		next();
	}, 3000);

	$(".page a:first,.page a:last").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			next();
		}, 4000);
	});
	
	//顯示隱藏backtop
	$(window).scroll(function(){
		var winHeight = $(window).height();//获得浏览器可视窗口高度
		var scrollTop = $(window).scrollTop();
		if(winHeight>scrollTop){
			$(".back_top").hide();
		}else{
			$(".back_top").show();
		}
	});
	
	//回到顶部
	$(".back_top").click(function(){
		$("html,body").animate({"scrollTop":"0px"},500);
	});
});

function next() {
	$(".ul_con").animate({
		"margin-left": "-1000px"
	}, 2000, function() {
		$(".ul_con").find("ul:first").appendTo($(".ul_con"));
		$(".ul_con").css({
			"margin-left": "0"
		})
	});
}