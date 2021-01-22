$(document).ready(function() {
  $('#main').click(function() {
    event.preventDefault();
    const input = parseInt($('#input').val());
    //const output = roboger(input);
    $('form')[0].reset();
    $('.output').text(input);
  });
  $('#reverse').click(function() {
    event.preventDefault();
    const input = parseInt($('#input').val());
    //const output = robogerReverse(input);
    $('form')[0].reset();
    $('.output').text(input - 1);
  });
});