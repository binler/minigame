"use strict";

$(function(){
  var score = 0;
  var maxWidth = $(window).width(), maxHeight = $(window).height();
  setInterval(function(){

    var x = Math.floor(Math.random() * maxWidth) + 1;
    var y = Math.floor(Math.random() * maxHeight) + 1;

    if(x == maxWidth || y == maxHeight )
    {
      x = x - 60;
      y = y - 60;
      return x, y;
    }

    $('body').append('<div class="circle"></div>');
    $('.circle').css(
      '-webkit-transform','translate('+x+'px, '+y+'px)'
    );
    setTimeout(function(){
      $('.circle').remove();
    }, 1000);

  }, 2000);

  $( document ).on('mousedown', function(e){

    var specificDiv= $(".circle");
    if (specificDiv.is(event.target)){
      score = score + 1;
      alert('Điểm của bạn là: ' + score);
    }
    else
    {
      score = score - 1;
      alert('Điểm của bạn là: ' + score);
    }


  });

});
