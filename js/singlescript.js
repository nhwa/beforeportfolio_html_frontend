window.addEventListener('load', function() {
  //로딩 애니메이션
  $('.preloader').fadeOut(2000);
  $('.body_wrapper').fadeIn(2000);

  //--------------------------ㅡmenubar클릭시 효과----
  $(".menu_bar").click(function() {
    var dp = $('.menu img').css('display');
    if (dp == 'block')
      $('.menu img').toggleClass('active');
    $('html').toggleClass('active');
    setTimeout(function() {
      $('.t1').toggleClass('active');
    }, 400);
    setTimeout(function() {
      $('.t2').toggleClass('active');
    }, 550);
    setTimeout(function() {
      $('.t3').toggleClass('active');
    }, 600);
    $(".menu_wrap").toggleClass('active');
    $(".top").toggleClass('active');
    $(".bottom").toggleClass('active');
    $(".middle").toggleClass('active');
  });
});
