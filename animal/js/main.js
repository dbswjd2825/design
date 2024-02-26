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

    /* 관련사이트
        site_open을 클릭하면 목록이 나타남
            site_list 목록이 나타남
            site_open 사라짐
            site_close 나타남
        site_close를 클릭하면 목록이 나타남
            site_list 목록이 사라짐
            site_open 나타남
            site_close 사라짐    
    */
    $('.footer .family_site .site_open').on('click', function(){
        $('.footer .family_site .site_list').slideDown()
        $(this).hide()
        $('.footer .family_site .site_close').show()
    })
    $('.footer .family_site .site_close').on('click', function(){
        $('.footer .family_site .site_list').slideUp()
        $(this).hide()
        $('.footer .family_site .site_open').show()
    })

    /* 
        메뉴열기를 클릭하면 header에 menu_open 추가
        메뉴닫기를 클릭하면 header에 menu_open 클래스가 삭제 
      */
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
    /* 1차 메뉴 a를 클릭하면
        - a에 href링크 작동안함
        - depth2는 slidedown으로 나타남
        - 클릭한 a의 부모 li에 sub_open 클래스를 추가
        만약에 이미 열려있는 메뉴라면 닫음 
        (열린 메뉴를 판단하는 기준 - li에 sun_open 클래스 유무로 판단)
        같은 버튼이 열기/닫기 동시에 하는 경우
    */
    $(".header .gnb ul.depth1 > li:has(.depth2) > a ").on("click", function(e){
        e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
        if($(this).parent().hasClass('sub_open') == true){ //sun_open이 있다면
            console.log('sun_open 있음')
            $(this).parent().removeClass('sub_open')
            $(this).parent().find('ul.depth2').slideUp()
        }else{
            console.log('sun_open 없음')
            $(this).parent().addClass('sub_open')
            $(this).parent().find('ul.depth2').slideDown()
        }
    });


}) /*$(document).ready */