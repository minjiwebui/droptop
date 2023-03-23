// sec01 슬라이드
var swiper1 = new Swiper(".basic01", {
    centeredSlides: true,
    effect: "fade",
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 1,
});
// sec02 슬라이드
var swiper2 = new Swiper(".basic02", {
    slidesPerView: 1.3,
});
swiper2.init();
// sec 02 리사이징 시, 슬라이드 해제
window.addEventListener('resize', () => {
    let wiw = window.innerWidth;
    if (wiw <= 1024) {
        // 모바일에서만 스와이퍼 구현
        swiper2.destroy(true, true);
        
    } else {
        swiper2.init();
        console.log('재실행');
    }
});
// header 모바일 서브메뉴(공통요소)
$("nav > .fa-bars").click(function () {
    $(".navmb").toggleClass("on");
    $(this).toggleClass("fa-times");
});