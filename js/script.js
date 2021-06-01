history.scrollRestoration = "manual";

window.addEventListener('load', function() {
  //로딩 애니메이션
  $('.preloader').fadeOut(2000);
  $('.body_wrapper').fadeIn(2000);

  //greet
  var elements = document.getElementsByClassName('typewrite');
  var last = false;
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);

  //스크롤이 .s2지점을 지날때 로고이미지 display: block;
  $(window).scroll(function() {
    var scrollPosition = $(".s2").offset().top;
    var height = $(document).scrollTop();
    if (height < scrollPosition) {
      $('.menu img').css('display', 'none');
    } else {
      $('.menu img').css('display', 'block');
    }
  });
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
  //-----------------------메뉴텍스트클릭시 이동-----------
  $('.t1').click(function() {
    var scrollPosition = $(".s1").offset().top;
    $('.menu img').toggleClass('active');
    $('html').toggleClass('active');
    $('.t1').toggleClass('active');
    $('.t2').toggleClass('active');
    $('.t3').toggleClass('active');
    $(".menu_wrap").toggleClass('active');
    $(".top").toggleClass('active');
    $(".bottom").toggleClass('active');
    $(".middle").toggleClass('active');
    $("html, body").animate({
      scrollTop: scrollPosition
    }, 800);
  });
  $('.t2').click(function() {
    var scrollPosition = $(".s2").offset().top;
    $('.menu img').toggleClass('active');
    $('html').toggleClass('active');
    $('.t1').toggleClass('active');
    $('.t2').toggleClass('active');
    $('.t3').toggleClass('active');
    $(".menu_wrap").toggleClass('active');
    $(".top").toggleClass('active');
    $(".bottom").toggleClass('active');
    $(".middle").toggleClass('active');
    $("html, body").animate({
      scrollTop: scrollPosition
    }, 800);
  });
  $('.t3').click(function() {
    var scrollPosition = $(".s3").offset().top;
    $('.menu img').toggleClass('active');
    $('html').toggleClass('active');
    $('.t1').toggleClass('active');
    $('.t2').toggleClass('active');
    $('.t3').toggleClass('active');
    $(".menu_wrap").toggleClass('active');
    $(".top").toggleClass('active');
    $(".bottom").toggleClass('active');
    $(".middle").toggleClass('active');
    $("html, body").animate({
      scrollTop: scrollPosition
    }, 1600);
  });

  $('.indicator-container').click(function() {
    var scrollPosition = $(".s2").offset().top;
    $("html, body").animate({
      scrollTop: scrollPosition
    }, 800);
  });
  //article_title
  var article_title = document.querySelector('.s2 .article_title');
  var about_text = document.querySelector('.about_text');
  var article_contents = document.querySelector('.s2 .article_contents');
  about_text.addEventListener('click', function() {
    article_title.style.opacity = 0;
    article_contents.style.marginLeft = "0%";
  });

});

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  if (i == 4 && fullTxt == this.txt) {
    $('.indicator-container').fadeIn(2000);
    return 0;
  }

  var that = this;
  var delta = 200 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};
