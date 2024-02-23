$(document).ready(function(){
    /* html 문서가 로딩된 다음에 실행 */

    /* 1차 메뉴(.header .gnb ul.depth1 > li)에 마우스를 오버하면
    오버한 li(this)에 sub_over 클래스 추가
    header에는 menu_over 클래스 추가
    옆의 메뉴로 이동하면 이전메뉴가 아웃처리되어야함 
    모든 li에 있는 클래스를 지우고 지금 오버한 것만 
    다시 클래스를 줌 */
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .gnb').on('focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })

    /* swiper */
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
             delay: 2500,
             disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .prev',  
        },

    });
   
    /* 
        .visual .ctrl_btn .stop 정지 버튼을  클릭하면 
        팝업은 정지, stop 버튼 사라짐, play 버튼 나타남
        .visual .ctrl_btn .play 정지 버튼을  클릭하면 
        팝업은 재생, stop 버튼 나타남, play 버튼 사라짐
     */
    $('.visual .ctrl_btn .stop').on('click', function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .play').show()
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').show()
    })
    /* 
        .lost .list > ul > li 클릭했을때 
        li에 active 클래스를 추가
        이전에 active가 있던 li의 active 클래스는 삭제 
    */
    $('.lost .list > ul > li').on('click', function(){
        $('.lost .list > ul > li').removeClass('active')
        $(this).addClass('active')
    })

    /* 입양 팝업 */
    const adopt_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	breakpoints: {

        500: {    /* 1280px 이상일때 적용 */
			slidesPerView: 2,
		},
		768: {    /* 1280px 이상일때 적용 */
			slidesPerView: 3,
		},
        1024: {    /* 1280px 이상일때 적용 */
			slidesPerView: 4,
		},
        1320: {    /* 1320px 이상일때 적용 */
        slidesPerView: 'auto', /* 사이즈 제한 */
        },
	},
	navigation: {
		nextEl: '.adopt .next',
		prevEl: '.adopt .prev',
	},
    });
    $('.adopt .ctrl_btn .stop').on('click', function(){
        adopt_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.adopt .ctrl_btn .play').show()
    })
    $('.adopt .ctrl_btn .play').on('click', function(){
        adopt_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.adopt .ctrl_btn .stop').show()
    })

}) /*$(document).ready */