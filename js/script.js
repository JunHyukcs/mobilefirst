


//배너슬라이드
const slideBanner=$('.bannerArea .area');
const slideBannerList=$('.bannerArea .area li');
const slideWidth=slideBannerList.width();
let setIntervalId;

bannerSlide()
function bannerSlide(){
    setIntervalId=setInterval(() =>{
        slideBanner.stop().animate({left:-(slideWidth+15)},500,function(){
            $('.bannerArea .area li:first').insertAfter('.bannerArea .area li:last');
            slideBanner.css({left: 0})
        })
    },2000)
}
$('.leftBtn, .rightBtn, .bannerArea').on('mouseover', function(){
    clearInterval(setIntervalId)
});
$('.leftBtn, .rightBtn, .bannerArea').on('mouseout', function(){
    bannerSlide()
});
function rightBtn(){
    slideBanner.stop().animate({left:-(slideWidth+15)},500,function(){
        $('.bannerArea .area li:first').insertAfter('.bannerArea .area li:last');
        slideBanner.css({left: 0})
    })
}
$('.rightBtn').click(function(){
    rightBtn()
});
function leftBtn(){
    $('.bannerArea .area li:last').insertBefore('.bannerArea .area li:first');
    slideBanner.css({left:-(slideWidth+15)}).stop().animate({left:0},500)
}
$('.leftBtn').click(function(){
    leftBtn()
});

$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions:false,
      auto:true,
      /* autoControls: true, */
      pager: true,
      stopAutoOnClick: true,
      /* autoControlsCombine:true */
    });
  });