//alert('안녕하세요') 
//확인창 alert - 잘 사용안함
console.log('개발자모드에서만 확인가능한 메세지 출력')
//코딩의 결과를 확인하기 위한 용도

var a = '한글' //a라는 변수에 '한글'이라는 값을 저장/= 할당연산자
a = '대한' //기존에 저장된 값을 지우고 '대한'만 저장
//a = 3 숫자는 '' 없이 선언 , 연산가능
var b = '민국'
a = a + b
console.log(a)

var c = 4
if(c == 5){ /* 만약에 c 가 5와 같다면 */
    console.log('c는 5입니다')
    //if문은 ()안의 조건이 충족할 경우에만 실행
}
if(c != 5){ /* 만약에 c가 5가 아니라면 */
    console.log('c는 5가 아닙니다')
}

var d = 10
if(d > 10){ // d가 10보다 크다면
    console.log('d는 10보다 크다')
}else{ //if의 조건을 충족시키지 않으면 무조건 else 실행
    //d가 10이거나, 10보다 작다면 무조건 실항
    console.log('d는 10이거나, 10보다 작다')
}

var e = 35
if(e > 20){ // e가 20보다 크다면
    console.log('e는 20보다 크다')
}else if(e <20){ //e가 20보다 작다면
    console.log('e는 20보다 작다')
}else{ //e가 20보다 크지도 작지도 않다면 즉, e가 20이라면
    console.log('e는 20입니다')
}
/* if else문의 특징 : 단 한번만 실행함 */

var e = '안녕'
console.log(e)
// var 이라는 변수를 선언하는 방식은 중복선언이 가능
// 이 변수명을 이미 사용중인지 아닌지 판단이 어려움

let abc = '대한'
console.log(abc)
// let abc = '민국' - 이미 사용중인 변수를 또 선언하면 에러가 남
abc = '중복'
console.log(abc)

const bbb = '제이쿼리'
console.log(bbb)
// bbb = '안녕하세요222' - 처음에 선언했던 값 이외에 다른값 저장이 불가능 (상수)

let box_w = $('.box').width()
console.log(box_w)
/* js는 head태그 안에서 불러들임
js에서 html요소를 불러서 효과를 줌
아직 html요소가 로딩되기 전임 
<head>
    --js 요소
</head>
<body>
    -- html요소
<body>
이런 구조이기 때문에 js가 불렀을때에는 html은 로딩되기 전임
원래 jquery는 호출될때 단 한번 작동됨
jquery는 조건이 될때 다시 한번 호출이 되도록 하는 기능이 있음 */

$(document).ready(function(){ //html 문서가 모두 로딩된 이후에 1번 실행
    let box_h = $('.box').height()
    console.log(box_h)

    $(window).resize(function(){ //w브라우저 사이즈가 리사이즈 될때마다
        let window_w = $(window).width()
        console.log(window_w)
    })
    $(window).scroll(function(){
        let scrolling = $(window).scrollTop()
        console.log(scrolling)
    })

    /* box에 마우스를 오버하면 active 클래스를 추가
    box에서 마우스를 아웃하면 active 클래스를 삭제 */
    $('.box').on('mouseenter', function(){ //마우스를 오버했을 때
        //마우스를 오버한 box 자기 자신한테 active 클래스를 줌
        // $('.box').addClass('active') - 마우스를 오버하면 모든 box에 class가 추가됨 
    $(this).addClass('active') //마우스를 오버한 자기 자신
    })
    $('.box').on('mouseleave', function(){
        $(this).removeClass('active')
    })

    // box1이 1초동안 opacity가 0으로 점점 변하는 애니메이션
    $('.box1').animate({
        opacity : 0
    }, 1000)

    /* btn_top을 누르면 상단으로 자동 스크롤 */
    $('.btn_top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
}) /* $(document).ready */