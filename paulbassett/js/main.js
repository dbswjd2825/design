/* 
    파일명 : main.js 
    작성자 : 이윤정
    작성일 : 24.02.28
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/

$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });

}) //$(document).ready