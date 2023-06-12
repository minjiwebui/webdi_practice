// nav 가로형 슬라이드 메뉴(더 많은 예제 연습하기!!)
$('header nav > ul').mouseenter(function(){
    $('header .mainmenu > ul').stop().slideDown(800);
  });
  $('header nav > ul').mouseleave(function(){
    $('header .mainmenu > ul').stop().slideUp(500);
  });
  // 슬라이드 세로형
  var num = 1;
  
  setInterval(function () {
    if (num < 3) {
      $(".slide").animate({ top: "-=" + 300 }, "slow");
      num++;
    } else {
      $(".slide").animate({ top: 0 }, "fast");
      num = 1;
    }
  }, 3000);
  // 슬라이드 가로형
  var num = 1;
  
  setInterval(function () {
    if (num < 3) {
      $(".slide").animate({ left: "-=" + 1200 }, "slow");
      num++;
    } else {
      $(".slide").animate({ left: 0 }, "fast");
      num = 1;
    }
  }, 3000);
  // 슬라이드 fadein, fadeout
  var num = 0;
  
  $(".slide").fadeout(0);
  $(".slide").eq(num).fadein(0);
  
  setInterval(function () {
    if (num < 2) {
      num++;
    } else {
      num = 0;
    }
    $(".slide").fadeout("slow");
    $(".slide").eq(num).fadein("slow");
  }, 3000);
  // 탭메뉴 가로형-인덱스번호
  $(".tab ul li").click(function(){
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(".tab .tabbox").eq(tabindex).addClass('on').siblings().removeClass('on');
  });
  // 공지사항 첫 번째 컨텐츠 클릭 시, 팝업창
  $(".tabbox > ul:first-of-type > li:first-of-type").click(function(){
    $(".popup").addClass("on");
  });
  $(".popup ").click(function(){
    $(".popup").removeClass("on");
  });
  // 패밀리 사이트(선택 버튼)
  <div class="f_fam">
       <select class="f_family">
            <option id="fam1">패밀리사이트</option>
            <option id="fam2">패밀리사이트1</option>
            <option id="fam3">패밀리사이트2</option>
            <option id="fam4">패밀리사이트3</option>
       </select>
  </div>