

$(function(){
$('.back-to-top').click(function(){

    $('html, body').animate({scrollTop:0}, 2000);


});




$(window).scroll(function(){

    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.back-to-top').fadeIn(500);
    }
    else{
        $('.back-to-top').fadeOut(500);
    }

    if(scrolling > 100 ){
        $('.nav').addClass('bg');
    }

    else{
        $('.nav').removeClass('bg');
    }

});

// preloader

$(window).on('load', function(){

    $('.preloader').delay(1500).fadeOut(500);

});

//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 60
            }, 1500);
            return false;
        }
    }
});

$('.counter').counterUp({
    delay: 5,
    time: 1000
});


    $('.venobox').venobox(); 
  

});




const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

//Format is (MM, DD, YYYY  hr,min,sec)
let countDown = new Date('Mar 26, 2021 19:24:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;
      
      let mth = Math.floor;
      let days = mth(distance / (day));
      let hourss = mth((distance % (day)) / (hour));
      let mint = mth((distance % (hour)) / (minute));
      let secnd = mth((distance % (minute)) / second);
      
      function checkdigit(name){
        if(name.toString().length < 2){
          name= "0" + name;
        }
        return name;
      }
      
        $('#days').text(checkdigit(days)),
        $('#hours').text(checkdigit(hourss)),
        $('#minutes').text(checkdigit(mint)),
        $('#seconds').text(checkdigit(secnd));
      
      
      if (distance < 0) {
        $("#countdown").hide();
        $("#Live").show();
      }else{
        $("#countdown").show();
        $("#Live").hide();
      }

    }, 1000);



    