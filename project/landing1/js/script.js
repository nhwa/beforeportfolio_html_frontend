'use strict';
    
var items = [
    'star and moon',
    'are so much',
    'cute!',
    'enjoy them ^-^'
];
//화면에 들어갈 말

var app = document.getElementById('app');
var count = 0;
var index = 0;
var typingEffect = function typingEffect() {
    var text = items[index];
    //text -> 한줄
    if (count < text.length) {
        setTimeout(function () {
            app.innerHTML += text[count];
            count++;
            typingEffect();
        }, Math.floor(Math.random(10) * 100));
    } else {
        count = 0;
        index = index + 1 < items.length ? index + 1 : 0;
        setTimeout(function () {
            app.innerHTML = '';
            //화면에 찍기
            typingEffect();
        }, 1700);  //텍스트 체인지 시간
    }
};
typingEffect();


$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
               $('#app img').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


//말풍선

$("#main_img").mouseover(function() {
    $("#speech_bubble").addClass("active");
    $("#app").addClass("active");
    
});

$("#main_img").mouseleave(function() {
    $("#speech_bubble").removeClass("active");
    $("#app").removeClass("active");
});

//mainimage 날아오기

$(document).ready(function() {
    $("#main_img").attr('style','right:0');
});


//webtoon wrap


$(".webtoon_wrap1").mouseover(function() {
    $(this).addClass("active");
    
});

$(".webtoon_wrap1").mouseleave(function() {
    $(this).removeClass("active");
});


$(".webtoon_wrap2").mouseover(function() {
    $(this).addClass("active");
    
});

$(".webtoon_wrap2").mouseleave(function() {
    $(this).removeClass("active");
});

