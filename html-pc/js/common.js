(function (document, window) {
  var docEl = document.documentElement,
    event = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var size = 1920
      var zoom = docEl.clientWidth / size > 1 ? 1 : docEl.clientWidth / size
      // if (zoom > 1) {
      //   docEl.style.fontSize = '100px'
      // } else {
      //   docEl.style.fontSize = 100 * zoom + 'px'
      // }
      var len = document.getElementsByTagName('div').length
      for (var i = 0; i < len; i++) {
        var height = document.getElementsByTagName('div')[i].style.height
        document.getElementsByTagName('div')[i].style.height = height * zoom
      }
    }
  if (!window.addEventListener) return
  window.addEventListener(event, recalc, false)
  window.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
