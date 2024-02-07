$(document).ready(function(){ //문서가 로딩되면 단 1번 실행
    /* 메뉴에 마우스를 오버하면 > .header .gnb 
    header에서 menu_over 클래스 추가 
    메뉴에 마우스를 아웃하면 > .header (.header에 bg 지정해줬기떄문에)
    header에서 menu_over 클래스 삭제 

    mouseenter를 주면 click해도 적용되어 모바일에서 pc 버전으로 만든 코드가 작동
    : pc인지 모바일인지 jquery에서 구분에서 pc에서만 작동되도록 제한 
    css에서와 같이 jquery에서도 pc인지 모바일인지 브라우저 사이즈로 구분함
    */
    
    let window_w = $(window).width() //브라우저 넓이
    let device_status = 'pc' //pc인지 mobile인지 

    function device_chk(){ //함수를 선언 
        window_w = $(window).width() 
        if(window_w > 640){ // pc
            device_status = 'pc'
        }else{ //640이거나 640보다 작음 : mobile
            device_status = 'mobile'
        }
        console.log(device_status)
    } //function
    
    device_chk() //함수의 실행

    $(window).resize(function(){ //브라우저가 리사이즈될때마다 1번씩 실행
        device_chk()
    }) //$(window).resize

    $('.header .gnb').on('mouseenter focusin', function(){
        if(device_status == 'pc'){ //pc버전이라면 실행 , 모바일이면 실행X
            console.log('마우스올림')
            $('.header').addClass('menu_over')
        }
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    /* 마지막 1차 메뉴의 마지막 2차 메뉴에서 포커스가 아웃되면 menu_over 클래스 삭제
    제일 좋은 방법 : 메뉴 옆에 언어/찾기 등 다른 링크가 있고 그 링크에 포커스가 out되는 것 */
    $('.header .gnb>ul>li:last-child>ul>li:last-child').on('focusout', function(){
        $('.header').removeClass('menu_over')
    })

    /* 1차 메뉴를 클릭하면 감싸고 있는 li태그에 sub_open이라는 클래스 추가
    같은 메뉴를 1번 클릭하면 열리고 다시 클릭하면 닫힘
    하나의 메뉴를 클릭해서 열고 다른 메뉴를 클릭하면 이전 메뉴는 닫힘(지금 클릭한 것만 열림) 
    --- pc버전에서는 1차 메뉴를 선택하면 페이지 이동을 하고
    모바일버전에서는 하위메뉴를 열어줌*/
	$(".header .gnb ul.depth1 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault();	 /* a 태그의 href를 작동 시키지 않음 */
            //클릭한 a 자기 자신을 감싸는 li를 선택 
            $(this).parent().toggleClass('sub_open')
            /* toggleClass는 클래스가 있으면 삭제하고 없으면 추가 */
        }
	});

    /* 열기버튼을 누르면 header에 menu_open 클래스 추가
    닫기버튼을 누르면 header에 menu_open 클래스 삭제 */
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        //스크롤 금지 (모바일에서 메뉴 열린 상태에서)
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        //스크롤 금지 해제 (모바일에서 메뉴 닫으면 스크롤 다시 작동)
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })


}) //$(document).ready