$(document).ready(function () {

  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)

  $('.switcher').on('click', function(e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });


  var newDate = new Date();
  newDate.setDate(newDate.getDate());

  setInterval( function() {

    var hours    = new Date().getHours();
    var seconds  = new Date().getSeconds();
    var minutes  = new Date().getMinutes();

    var realTime = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds

    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);

  }, 1000);

});
/*
document.addEventListener("DOMContentLoaded", function(event) { 
    var now = new Date(),
        hr = now.getHours(),
        min = now.getMinutes(),
        seconds = now.getSeconds();

    var secondsAngle = seconds*6;
    var minAngle = min*6 + seconds/60 * 6;
    var hourAngle = hr*30 + min/60 * 30 + seconds/3600 * 30;

    adjustArms(hourAngle, minAngle, secondsAngle);

    function updateArmsLocation() {
        secondsAngle += 6;
        minAngle += 0.1;
        hourAngle += 1/120;

        adjustArms(hourAngle, minAngle, secondsAngle);
    }

    function adjustArms(a,b,c) {
        document.getElementById('hour').style.transform = 'rotate(' + a +'deg)';
        document.getElementById('minute').style.transform = 'rotate(' + b +'deg)';
        document.getElementById('second').style.transform = 'rotate(' + c +'deg)';
    }

    setInterval(updateArmsLocation, 1000);

});*/