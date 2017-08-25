$(function(){
	$('#all-sorts').mouseover(function(){
		$('#all-details').css('display','block');
	});
	$('#all-sorts').mouseout(function(){
		$('#all-details').css('display','none');
	});
})

//轮播图
$(function(){
				var n=0;
				var timer;
				
				change();
				function change(){
					$('#focus ol li').attr('class','');
					$('#focus ol li').eq(n).attr('class','active');
					$('#focus ul').stop().animate({top:-800*n},500);
				}
				
				$('#focus ol li').mouseover(function(){
					clearInterval(timer);
					
					n=$(this).index();
					change();
				});
				
				$('#focus').mouseover(function(){
					clearInterval(timer);
				});
				$('#focus').mouseout(function(){
					atuoPlay();
				});
				
				
				atuoPlay();
				function atuoPlay(){
					timer=setInterval(function(){
						n++;
						
						if(n>$('#focus ol li').length-1){
							n=0;
						}
						
						change();
					},2000);
				}
			});