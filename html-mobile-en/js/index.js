
(function (document, window) {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination'
    }
  })
})(document, window)
