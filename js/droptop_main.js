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
// sec 02 리사이징 시, 슬라이드 해제
var swiper2 = undefined;
    function initBenefit() {
        if (wiw > 1024 && swiper2 == undefined) {
            swiper2 = new Swiper('.basic02', {
                slidesPerView: 1.3,
            });
        } else if (wiw >= 640 && swiper2 != undefined) {
            swiper2.destroy();
            swiper2 = undefined;
        }
    }
    initBenefit();

    var wiw = window.innerWidth;
// 리사이징에 따라 반응형 잡기
window.addEventListener('resize', () => {
    wiw = window.innerWidth; //리사이징시 변경
    initBenefit();
});
// header 모바일 서브메뉴(공통요소)
$("nav > .fa-bars").click(function () {
    $(".navmb").toggleClass("on");
    $(this).toggleClass("fa-times");
});