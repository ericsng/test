$(document).ready(function () {

  $('#leftButton').click(function () {
      $('#mySq').animate({left:'10px'});
  });

  $('#mySq').mouseenter(function () {
      $(this).css('background-color', 'red');
  });

  $('#mySq').mouseleave(function () {
      $(this).css('background-color', 'blue');
  });

  $('#hideButton').click(function () {
      $('#mySq').toggle(1000);
  });

  $('#slideButton').click(function () {
      $('#mySq').slideToggle(1000);
  });


});
