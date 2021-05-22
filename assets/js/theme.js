var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 4000
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
});
var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 7,
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>350){
            $(".to-top").show();
        }else{
            $(".to-top").hide();
        }
    })
    $(".to-top").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:0},1000)
    })
})