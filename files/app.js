"use strict";

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
function initHamburger() {
  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body");

  var mobileContainer = document.querySelector(".header__row-mobile");

  btn.addEventListener("click", function (e) {

    e.currentTarget.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-active");

    hideScrollContainer.forEach(function (val, idx) {
      val.classList.toggle("is-hideScroll");
    });
  });
}

/**
 * @name initHeaderFixed
 * @description
 */
function initHeaderFixed() {

  var countScroll = $(window).scrollTop(),
      headerElement = $('.header');

  if ($(window).width() > 0) {
    if (countScroll > 10) {
      headerElement.addClass("header--fixed");
    } else {
      headerElement.removeClass("header--fixed");
    }
  }
}
function initPopups() {

  $('[popup-js]').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function close() {}
    }
  });
}

/**
 * @name initPreventBehavior
 * @description
 */
function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {

      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
}

/**
 * @name initSwiper
 * @description initialize Swiper
 */
function initSwiper() {
  var mySwiper = new Swiper('.swiper-container.main__swiper', {
    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: false,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: false,
    freeMode: true,
    speed: 450,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    slidesPerView: 1,
    spaceBetween: 0,
    touchMoveStopPropagation: false,
    simulateTouch: false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}

/**
 * @description Window on load.
 */
$(window).on("load", function (ev) {});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {
  initHeaderFixed();
});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {
  initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /**
   * =============================================
   * CALLBACK
   * =============================================
   */

  /**
   * @studyTabs
   */
  var studyTabs = function studyTabs() {
    $("[tabs-link-js]").on("click", function (e) {
      var elem = $(e.currentTarget),
          elemId = elem.attr("data-tabsLink-id");

      $("[tabs-link-js]").removeClass("is-active");
      elem.addClass("is-active");

      var activeTabsBody = $(".study__tabs-body[data-tabsBody-id='" + elemId + "']");

      $(".study__tabs-body").removeClass("is-active");
      activeTabsBody.addClass("is-active");
    });
  };

  /**
   * @parallaxAnimation
   */
  var parallaxAnimation = function parallaxAnimation() {
    var parallaxImg = document.querySelector("#swiper-slide-bg");

    if (parallaxImg) {
      new Parallax(parallaxImg);
    }
  };

  /**
   * @name moduleBtn
   */
  var moduleBtn = function moduleBtn() {
    $("[module-btn-js]").on("click", function (e) {
      var elem = $(e.currentTarget),
          elemId = elem.data("module-id");

      $("[module-btn-js]").removeClass("is-active");
      elem.addClass("is-active");

      $(".module__section-body > div").removeClass("is-active flipCustom");
      $("[data-module-body=" + elemId + "]").addClass("is-active animated flipCustom");

      $(".module__section-content").removeClass("animated slideInLeft slideInRight");
    });
    $(".module__section-btn a").on("click", function (e) {
      var elem = $(e.currentTarget),
          elemId = elem.data("module-section-btn-id"),
          elemIdParent = elem.data("parent");

      if (_window.width() > 767) {
        var parentLinkContainer = elem.closest(".module__section-body--left"),
            parentContentContainer = elem.closest(".module__section-body--" + elemIdParent);

        parentLinkContainer.find(".module__section-btn a").removeClass("is-active");
        elem.addClass("is-active");

        parentContentContainer.find(".module__section-content").removeClass('is-active slideInRight');
        parentContentContainer.find("[data-module-section-content-id=" + elemId + "]").addClass("is-active animated slideInLeft");
      } else {
        var _parentLinkContainer = elem.closest(".module__section-body--right"),
            _parentContentContainer = elem.closest(".module__section-body--" + elemIdParent);

        if (elem.hasClass("is-active")) {
          elem.removeClass("is-active");
          _parentContentContainer.find("[data-module-section-content-id=" + elemId + "]").slideUp(300);
        } else {
          elem.addClass("is-active");

          _parentContentContainer.find("[data-module-section-content-id=" + elemId + "]").slideDown(300);
        }
      }
    });
  };

  /**
   * @name animatedModuleContainer
   */
  var animatedModuleContainer = function animatedModuleContainer() {
    _window.on("scroll load", function (e) {
      var parallaxContainer = $("#module"),
          parallaxDepth = parallaxContainer.data("depth");

      var scrollVal = _window.scrollTop(),
          offsetVal = parseInt(450 - scrollVal * parallaxDepth);

      parallaxContainer.css("transform", "translate3d(0, -" + offsetVal + "px, 0)");
    });
  };

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    // ...
    initPreventBehavior();
    initHeaderFixed();
    initHamburger();
    initSwiper();

    // ...
    studyTabs();
    parallaxAnimation();
    moduleBtn();
    animatedModuleContainer();
  };
  initJquery();
});

/*!
*
* Include lib:
*
* */

initPopups();