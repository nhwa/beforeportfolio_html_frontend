$(".mainmenu>li").mouseover(function(){
   $(this).children(".submenu").stop().slideDown(); 
    
});
$(".mainmenu>li").mouseleave(function(){
   $(this).children(".submenu").stop().slideUp();
});


//--슬라이드 이미지 스타트
