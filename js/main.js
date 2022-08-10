$('.slider__slides').slick({
  arrows: true,
  slidesToShow: 3,
  Infinity: true,
  autoplay: false,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  prevArrow: $('.slider__arrow-left'),
  nextArrow: $('.slider__arrow-right'),
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2028 00:00:00 GMT+0300";
initializeClock('countdown', deadline);

$(function () {
  var mixer = mixitup('.collections__list');

})
$('.categories__slider-list').slick({
  arrows: true,
  slidesToShow: 3,
  Infinity: true,
  autoplay: true,
  prevArrow: $('.categories__slider-left-arrow'),
  nextArrow: $('.categories__slider-right-arrow'),
});