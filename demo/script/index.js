$(function() {
  new Dragdealer('main-slider', {
    // Allow page to be opened with the test results directly
    x: window.location.hash == '#runner' ? 1 : 0,
    steps: 10,
	speed: 0.3,
    loose: true,
	requestAnimationFrame: true,
    animationCallback: function(x) {
      $('.content-slides').css('margin-left', (-x * 315) + '%');
      if (x > 0.5) {
        $('#content .slide.demo').height($('#content .slide.specs').height());
      } else {
        $('#content .slide.demo').height('auto');
      }
    }
  });
});
