/* 
    파일명 : common.js 
    작성자 : 이윤정
    작성일 : 24.02.28
    설  명 : 모든 페이지에서 작동되는 jqeury (header와 footer에서 작동)
*/


$(document).ready(function(){
    /* 
        브라우저가 스크롤이 되면 header에 fixed 클래스 추가
        맨위로 다시 올라가면 header에 fixed 클래스 삭제 
    */
    let scrolling 
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ // 스크롤 O
            $('.header').addClass('fixed')
        }else{ // 스크롤X 혹은 다시 상단으로 올라간 경우
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() // 문서가 로드되었을때 1번 실행
    $(window).scroll(function(){
        scroll_chk()
    })

    /* 
    pc버전 메뉴에 마우스를 올리면 header에 menu_over 클래스 추가
        이벤트 대상: .header .gnb
                    .header .gnb ul.depth1 > li
                    .header .gnb ul.depth1 > li > a
        1차메뉴 li에 마우스를 오버하면 li에 on 클래스 추가 
        이벤트 배상 :.header .gnb ul.depth1 > li
                    .header .gnb ul.depth1 > li > a 
        ------- 이전에 오버했던 대상을 찾아 on 클래스를 삭제하는 것보다
                모든 li의 on 클래스를 삭제하고 마우스를 오버한 li에만 클래스를 추가
    */
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk() //문서가 로딩되고 1번 실행
    $(window).resize(function(){  //문서가 리사이즈될때마다 1번씩 실행
        device_chk()
    })
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        if( device_status = 'pc'){
            $('.header').addClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
            $(this).addClass('on')    
        } 
    })
    $('.header').on('mouseleave', function(){
        if( device_status = 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
        }
    })
    $('.header .tnb .lang').on('focusin', function(){
        if( device_status = 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
        }       
    })

    /* 
        모바일메뉴
        1차메뉴 a를 클릭하면 a링크 작동이 안되어야 하고
        하위메뉴를 열어줌 
    */
    $(".header .gnb ul.depth1 > li > a").on("click", function(e){
        if( device_status = 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('on')
        }
	});

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

}) //$(document).ready