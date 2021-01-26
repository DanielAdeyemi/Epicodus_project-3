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
  $('#first').submit(function(event1) {
    event1.preventDefault();
    const name = $('#name').val();
    $('#first').hide();
    $('#outName').text(name);
    $('.hidden').show();

    $('#main').click(function(event2) {
      event2.preventDefault();
      const input = parseInt($('#input').val());
      if (isNaN(input)) {
        $('.alert-primary, .alert-success').hide();
        $('.alert-danger').show();
      } else {
        const output = roboger(input, name);
        $('.alert-primary').show();
        $('.alert-danger, .alert-success').hide();
        $('#output1').text(output);
      }
      $('#second')[0].reset();
    });

    $('#reverse').click(function(event3) {
      event3.preventDefault();
      const input = parseInt($('#input').val());
      if (isNaN(input)) {
        $('.alert-primary, .alert-success').hide();
        $('.alert-danger').show();
      } else {
        const output = robogerReverse(input, name);
        $('.alert-success').show();
        $('.alert-danger, .alert-primary').hide();
        $('#output2').text(output);
      }
      $('#second')[0].reset();
    });
  });
});