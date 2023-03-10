$(document).ready(function () {
  //TEXT OVERFLOW ELLIPSIS
  $(".dot").each(function () {
    $(this).dotdotdot({
      ellipsis: "\u2026",
      //wrap: "node",
      watch: true,
      height: null,
      tolerance: 0,
    });
  });

  //TAB MENU
  if ($("html, body").find(".tab-top")) {
    tabs();
  } else {
  }

  //mobile
  $(".close-mnav").on("click", function (e) {
    e.preventDefault();
    closeMnav();
  });

  $(".btn-all").on("click", function (e) {
    e.preventDefault();
    $(".m-nav-bg").stop().fadeIn(500);

    $(".m-nav").stop().animate({
      right: 0,
    });
  });

  var mnavBg = document.getElementById("mnavBg");
  window.onclick = function (event) {
    if (event.target == mnavBg) {
      closeMnav();
    }
  };

  function closeMnav() {
    $(".m-nav-bg").stop().fadeOut(500);

    $(".m-nav").stop().animate({
      right: -280,
    });
  }

  $("#sub .btn-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
  });

  msieversion();
  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) {
      $("[data-aos^=fade][data-aos^=fade]").css({
        opacity: 1,
        transform: "none",
      });
      console.log("IE10");
    } else {
      AOS.init({
        once: false,
        duration: 800,
        delay: 150,
      });
      // Animate IE10�̻� ����
    }
  }
  $("#fullpage").fullpage({
    //options here
    menu: "#fullpage_nav",
    anchors: ["section01", "section02", "section03", "footer"],
    autoScrolling: true,
    scrollingSpeed: 700,
    //sectionsColor: ["#8FB98B", "#DE564B", "#EAE1C0"],
    slidesNavigation: true,
    //fixedElements: "#header",
    navigation: false,
    afterRender: function () {
      setInterval(function () {
        $.fn.fullpage.moveSlideRight();
      }, 5000);
    },
    // lockAnchors: false,
    // afterLoad: function (anchorLink, index) {
    // 	setTimeout(function () {
    // 		$(".section01").addClass("onSlide01");
    // 	}, 500);
    // },
    // navigation: false,
    // navigationPosition: "right",
    // showActiveTooltip: false,
    // slidesNavigation: false,
  });

  var team = new Swiper(".team-slider", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".team-pager",
      clickable: true,
    },
  });
});

function tabs() {
  $(".tab-top li").click(function (e) {
    e.preventDefault();
    var thisIndex = $(this).parent().find("li").index(this);

    $(this).parent().parent().parent().find("div.tab-cnt").removeClass("on");

    $(this).parent().find("li").removeClass("on");
    $(this)
      .parent()
      .parent()
      .parent()
      .find("div.tab-cnt")
      .eq(thisIndex)
      .addClass("on");
    $(this).addClass("on");
    return false;
  });
}
