var value = "";
var numbers = [];spaceinvaders
var operations = [];

function updateValue(val) {
  value += val;
  updateInput(value);
}

function updateInput(val) {
  document.getElementById("ecran").value = val;
}

function updateAction(act) {
  numbers.push(parseFloat(value));
  operations.push(act);
  value = "";
  updateInput("");
}

function clearAll() {
  value = "";
  updateInput("");
  numbers = [];
  operations = [];
}

function equals() {
  var result = numbers[0];
  for (var i = 0; i < operations.length && i + 1 < numbers.length; i++) {
    switch (operations[i]) {
      case "divide":
        result /= numbers[i + 1];
        break;
      case "multiply":
        result *= numbers[i + 1];
        break;
      case "substract":
        result -= numbers[i + 1];
        break;
      case "add":
        result += numbers[i + 1];
        break;
      default:
        result = 0;
    }
  }
  return result;
}

$(document).ready(function() {
  $(".btn-num").click(function() {
    updateValue($(this).text());
  });
  $(".btn-op").click(function() {
    updateAction($(this).attr("id"));
  });
  $(".btn-clear").click(function() {
    clearAll();
  });
  $("#equals").click(function() {
    updateInput(equals());
    clearAll();
  });
});