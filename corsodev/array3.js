/*function mimumEven(number1, number2, number3) {
  if (number1 < number2 && number1 < number3 && number1 % 2 == 0) {
    return true;
  } else if (number1 <= number2 && number1 <= number3 && number1 % 2 !== 0) {
    return false;
  } else if (number2 <= number1 && number2 <= number3 && number2 % 2 == 0) {
    return true;
  } else if (number2 <= number1 && number2 <= number3 && number2 % 2 !== 0) {
    return false;
  } else if (number3 <= number1 && number3 <= number2 && number3 % 2 == 0) {
    return true;
  } else if (number3 <= number1 && number3 <= number2 && number3 % 2 !== 0) {
    return false;
  }
  //Remember to return the result, execute tests to see if your code is correct
}
let result = mimumEven(number1, number2, number3);
console.log(result);
function mimumEven(number1, number2, number3) {
  let min = number1 < number2 ? number1 : number2;
  min = min < number3 ? min : number3;
  return min % 2 == 0;
}*/
function mimunEven2(...numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    min = min < numbers[i] ? min : numbers[i];
  }
  console.log("min", min);
  return min % 2 == 0;
}
let result = mimunEven2(12, 15, 16);
console.log(result);
