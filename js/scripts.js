function roboger(number, name) {
  const array = [];
  for (let i = 0; i <= number; i++) {
    if (/3+/.test(i)) {
      array.push(` "Won't you be my neighbor, ${name}?"`)
    } else if (/2+/.test(i)) {
      array.push(' "Boop!"')
    } else if (/1+/.test(i)) {
      array.push(' "Beep!"')
    } else {
      array.push(` ${i}`);
    }
  }
  return array;
}

function robogerReverse(number, name) {
  const array = [];
  for (let i = number; i >= 0; i--) {
    if (/3+/.test(i)) {
      array.push(` "Won't you be my neighbor, ${name}?"`)
    } else if (/2+/.test(i)) {
      array.push(' Boop!');
    } else if (/1+/.test(i)) {
      array.push(' Beep!');
    } else {
      array.push(` ${i}`);
    }
  }
  return array;
}


$(document).ready(function() {
  $('#first').submit(function() {
    event.preventDefault();
    const name = $('#name').val();
    $('#first').hide();
    $('#outName').text(name);
    $('.hidden').show();

    $('#main').click(function() {
      event.preventDefault();
      const input = parseInt($('#input').val());
      const output = roboger(input, name);
      //$('form')[0].reset();
      $('.alert-primary').show();
      $('.alert-success').hide();
      $('#output1').text(output);
    });

    $('#reverse').click(function() {
      event.preventDefault();
      const input = parseInt($('#input').val());
      const output = robogerReverse(input, name);
      //$('form')[0].reset();
      $('.alert-success').show();
      $('.alert-primary').hide();
      $('#output2').text(output);
    });
  });
});