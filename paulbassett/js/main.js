/* 
    파일명 : main.js 
    작성자 : 이윤정
    작성일 : 24.02.28
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/

$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });


    const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
        delay: 2500,
        disableOnInteraction: true,
        }, 
        
        loop: true,
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 22,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 22,
            },
            1280: {    /* 1280px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 22,
            },
        },
    });
        const sns_swiper = new Swiper('.sns .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            500: {    /* 500px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 34,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 34,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 34,
            },
            1280: {    /* 1280px 이상일때 적용 */
                slidesPerView: 5,
                spaceBetween: 34,
            },
        },
    });

    AOS.init({
    offset: 300, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
    duration: 500, // 애니메이션 효과가 작동되는 시간
    easing: 'ease', // 가속도
    });

}) //$(document).ready