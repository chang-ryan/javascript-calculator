var num1 = [];
var num2 = [];
var operand = null;
var operands = /[\+\-\/x=]/

// Calculator Functions
function add(n1, n2) {
  var result = n1 + n2;
  return result;
};
function multiply(n1,n2) {
  var result = n1 * n2;
  return result;
};
function clear() {
  num1 = [];
  num2 = [];
  operand = null;
  $("#screen").html("0")
};
function numberize(array) {
  return +array.join('')
};

$(document).ready(function() {
  // Start

  function calculator(input) {
    // c pressed
    if (/c/i.test(input)) {
      clear();
    }

    // numbers pressed
    if (!operand && /[0-9\.]/.test(input)) {
      if (input === ".") {
        if (num1.indexOf(".") === -1) {
          num1.push(input);
        }
      } else {
        num1.push(input);
      }
      $("#screen").html(num1);
    } else if (/[0-9\.]/.test(input)) {
      if (input === ".") {
        if (num2.indexOf(".") === -1) {
          num2.push(input);
        }
      } else {
        num2.push(input);
      }
      $("#screen").html(num2);
    }

    // operands pressed
    if (operands.test(input) && num1.length > 0) {
      if (num2.length > 0) {
        var n1 = numberize(num1);
        var n2 = numberize(num2);
        result = null;

        switch (operand) {
          case '+':
          result = add(n1,n2);
          break;
          case '-':
          result = n1 - n2;
          break;
          case 'x':
          result = multiply(n1,n2);
          break;
          case '/':
          result = n1 / n2;
          break;
          case '=':
          break;
        }
        num1 = result.toString().split('');
        num2 = [];
        $("#screen").html(num1);
      }
      operand = input;
    }
  };

  // using keydown
  $(document).keydown(function(key) {
    var input = String.fromCodePoint(key.which);
    calculator(input);
  });

  // using mouseclick
  $(".key").click(function() {
    var input = $(this).html();
    calculator(input);
  });

  // End
});
