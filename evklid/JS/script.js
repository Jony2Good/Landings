const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
     },

  effect: "coverflow",
  coverflowEffect: {
    rotate: 10,
    slideShadows: false,
  },

});


// main_tabs

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
        btn.classList.remove("tabs-nav__btn--active");
      });
      e.currentTarget.classList.add("tabs-nav__btn--active");

      document.querySelectorAll(".tabs-item").forEach(function (tabsItem) {
        tabsItem.classList.remove("tabs-item--active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tabs-item--active");
    });
  });
});

// tabs-color


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".work__btn").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (e) {
        const tabDefault = e.currentTarget.dataset.default;
        document.querySelectorAll(".work__btn").forEach(function (btn) {
          btn.classList.remove("work__btn--color");
          document
            .querySelector(`[data-default="${tabDefault}"]`)
            .classList.add("work__btn--color");
        });
      });
    });
  });


// accordion


$(function () {
  $("#accordion").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
});


// burger

const burgerBtn = document.querySelector('.header__btn-open');
const menuClose = document.querySelector('.nav__close');
const menuBurger = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.add('burger-active');
  menuBurger.classList.add('burger-active');

});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
  burgerBtn.classList.remove('burger-active');
});


// form__serch

document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".form").classList.add("form__active");
})
document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".form__container")) {
  form.classList.remove("form__active");
     }
})
document.querySelector('.form-btn__closed').addEventListener('click', function () {
  document.querySelector('form').classList.remove('form__active');
})


















