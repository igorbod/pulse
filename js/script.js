$(document).ready(function () {
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    speed: 1000
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  /* Click button "more" */
  // $('.catalog-item__link').each(function(i) {
  //   $(this).on('click', function(e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   });
  // });

  /* Click button "back" */
  // $('.catalog-item__back').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   });
  // });


  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

    
  /* Modal windows */

  // click on "order" button
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });

  // click on "close" button in modal
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  });

  // click on "buy" button
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

});