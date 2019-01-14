// function add(num1, num2) {
//   return num1 + num2
// }
//
// function sub(num1, num2) {
//   return num1 - num2
// }
//
// function mult(num1, num2) {
//   return num1 * num2
// }
//
// function div(num1, num2) {
//   return num1 / num2
// }
//
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter another number"));
//
//
//
// alert(div(number1, number2));


//BMI
// var height = parseInt(prompt("Enter height in inches"));
// var weight = parseInt(prompt("weight in lbs"));
//
// function bmi(height, weight) {
//   var userBMI = 703 * (weight / Math.pow(height, 2));
//   return userBMI
// }
//alert(bmi(height, weight));

var celsius = parseInt(prompt("Enter temp in celsius"));

function  convert(celsius)  {
  var farenheit=(celsius * (9/5)) + 32;
  return farenheit
}

alert(convert(celsius));
