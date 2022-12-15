$(document).ready(() => {
  $("#share").on("click", function () {
    $("#modal").show();
  });
  $("#modal-close, #modal-bg").on("click", function () {
    $("#modal").hide();
  });
  $(".thum-btn").on("click", function () {
    const index = $(".thum-btn").index(this);
    $(".thum-btn").removeClass("active");
    $(this).addClass("active");
    $(".video-box").removeClass("video-on");
    $(".video-box").eq(index).addClass("video-on");
  });
  $("#all-menu").on("click", function () {
    $("#all-menu_list").toggle();
    $(this).toggleClass("all-menu_close");
    $("body").toggleClass("scroll");
  });

  let ww = window.innerWidth;

  $(window).scroll(() => {
    if (scrollY) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
    if (scrollY >= 1100 && ww >= 1024) {
      $("#menu").removeClass("hide");
    } else if (scrollY < 1100 || ww <= 1023) {
      $("#menu").addClass("hide");
    }

    if (
      scrollY > $("#section-content2").offset().top &&
      scrollY < $("#section-content3").offset().top
    ) {
      $("#tab1").addClass("menu-on");
      $("#tab2").removeClass("menu-on");
    } else if (
      scrollY > $("#section-content3").offset().top &&
      scrollY < $("#section-content6").offset().top
    ) {
      $("#tab1").removeClass("menu-on");
      $("#tab3").removeClass("menu-on");
      $("#tab2").addClass("menu-on");
    } else if (
      scrollY > $("#section-content7").offset().top &&
      scrollY < $("#section-content8").offset().top
    ) {
      $("#tab1").removeClass("menu-on");
      $("#tab2").removeClass("menu-on");
      $("#tab3").addClass("menu-on");
    }
    if (scrollY > $("#section-content6").offset().top) {
      timerCounter();
    }
  });

  let counting1 = 0;
  let counting2 = 0;
  let counting3 = 0;
  let counting4 = 0;

  function timerCounter() {
    id0 = setInterval(count0Fn, 100);
    function count0Fn() {
      counting1 += 1000;
      if (counting1 > 130000) {
        clearInterval(id0);
      } else {
        $(".counting1").text(
          counting1.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        );
      }
    }
    id1 = setInterval(count1Fn, 100);
    function count1Fn() {
      counting2++;
      if (counting2 > 10) {
        clearInterval(id1);
      } else {
        $(".counting2").text(
          counting2.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        );
      }
    }
    id2 = setInterval(count2Fn, 100);
    function count2Fn() {
      counting3 += 2589.53;
      if (counting3 >= 258953) {
        clearInterval(id2);
      } else {
        $(".counting3").text(
          Math.ceil(counting3)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        );
      }
    }
    id3 = setInterval(count3Fn, 100);
    function count3Fn() {
      counting4 += 4338.64 * 5;
      if (counting4 > 4338644) {
        clearInterval(id3);
      } else {
        $(".counting4").text(
          Math.floor(counting4)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        );
      }
    }
  }
});
