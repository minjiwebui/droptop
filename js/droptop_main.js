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
// header 모바일 서브메뉴(공통요소)
$("nav > .fa-bars").click(function () {
    $(".navmb").toggleClass("on");
    $(this).toggleClass("fa-times");
});