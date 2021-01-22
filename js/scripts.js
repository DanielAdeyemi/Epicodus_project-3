function roboger(number) {
  const array = [];
  for (let i = 0; i <= number; i++) {
    if (/2+/.test(i)) {
      array.push(' "Boop!"')
    } else if (/1+/.test(i)) {
      array.push(' "Beep!"')
    } else {
      array.push(` ${i}`);
    }
  }
  return array;
}


$(document).ready(function() {
  $('#main').click(function() {
    event.preventDefault();
    const input = parseInt($('#input').val());
    const output = roboger(input);
    $('form')[0].reset();
    $('.output').text(output);
  });
  $('#reverse').click(function() {
    event.preventDefault();
    const input = parseInt($('#input').val());
    const output = robogerReverse(input);
    $('form')[0].reset();
    $('.output').text(output);
  });
});