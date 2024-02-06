$(document).ready(function(){

    let window_w = $(window).width()
    let device_status = 'pc' // pc버전/ 모바일버전
    if(window_w >640){ //pc버전
        device_status = 'pc'
    }else{ //모바일버전
        device_status = 'mobile'
    }
    console.log(device_status)
    $(window).resize(function(){
        window_w = $(window).width()    
        if(window_w >640){ //pc버전
            device_status = 'pc'
        }else{ //모바일버전
            device_status = 'mobile'
        }
        console.log(device_status)
    })

	/* 메뉴에 마우스를 오버하면 > .header .gnb
    header에 menu_open이라는 클래스 추가
    메뉴에 마우스를 아웃하면(벗어나면) : 오버해서 생긴 흰 배경을 벗어나면 > .header
    header에 menu_open이라는 클래스 삭제 */ 
    /* tab 키로만 메뉴를 이동했을때 메뉴에 접근하면 하위메뉴가 열려야함 */
    $('.header .gnb').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $(".header").addClass("menu_open")
        }
    })
    $('.header').on('mouseleave', function(){
        $(".header").removeClass("menu_open")
    })
    /* 마지막 메뉴에서 포커스가 아웃되면 메뉴를 모두 봤다고 판단하고 열린 메뉴 닫기 */
    $('.header .gnb>ul>li:last-child>ul>li:last-child').on('focusout', function(){
        $(".header").removeClass("menu_open")
    })
    /* hover 마우스 focus tap키 기준이동 */

    $('.header .gnb .gnb_open').on('click', function(){
        $(".header").addClass("menu_mobile")
    })
    $('.header .gnb .gnb_close ').on('click', function(){
        $(".header").removeClass("menu_mobile")
    })
}); //$(document).ready