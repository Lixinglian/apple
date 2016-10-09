$(function(){
	$('.search').on('click',function(){
		$('.header').addClass('find');	
	})
	$('.header-inner .quan li .guan').on('click',function(){
		$('.header').removeClass('find');
	})
	$('.header-inner .phone .item .daohang').on('click',function(){
		$('.header-inner').toggleClass('zhzz')
	})
	var slides=$('.gallery-slide-wrapper a');
	var dots=$('.dot-box .dot');
	var moveTo=function(el,dir){
		if(dir=="right"){
			slides.filter('.active').removeClass('active').addClass('leave')
			.delay(1000).queue(function(){
				$(this).removeClass('leave').dequeue();
			})
			$(el).addClass('active').addClass('enter');
			slides.get(0).offsetHeight;
	        $(el).removeClass("enter");
		}
		if(dir=="left"){
			slides.filter('.active').removeClass('active').addClass('zuozou')
			.delay(1000).queue(function(){
				$(this).removeClass('zuozou').dequeue();
			})
			$(el).addClass('active').addClass('zuojin');
			slides.get(0).offsetHeight;
	        $(el).removeClass("zuojin");
		}
		
	}	
	var moveRight=function(){
		var active=slides.filter('.active');
		var el=active.next().length?active.next():slides.eq(0);
		moveTo(el,"right")
	}
	var moveLeft=function(){
		var active=slides.filter('.active');
		var el=active.prev().length?active.prev():slides.eq(-1);
		moveTo(el,"left")
	}
//	setInterval(moveRight,2000)
	dots.on('click',function(){
		$(this).addClass('changec').siblings().removeClass('changec')
		var q=slides.index($(".active"))
		var n=dots.index($(this))
		if(q<n){
			moveTo(slides.eq(n),"right")
		}
		if(q>n){
			moveTo(slides.eq(n),"left")
		}
	})
	
	$('.btn .btl').on('click',function(){
		moveLeft()
	})
	$('.btn .btr').on('click',function(){
		moveRight()
	})
	$('.ac-box').on('click','.h-box',function(){
		$(this).parent().parent().toggleClass('foot-dong')
	})
})
