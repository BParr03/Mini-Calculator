function insert(num){
  document.calculator.output.value = document.calculator.output.value + num;
}

function equal(){
  var equals = document.calculator.output.value;
  if(equals){
    document.calculator.output.value = eval(equals)
  }
}

function backspace(){
  var backspace = document.calculator.output.value;
  document.calculator.output.value = backspace.substring(0, backspace.length - 1);
}

function aClear(){
  document.calculator.output.value = "";
}