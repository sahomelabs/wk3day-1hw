// 1
// function maxOfTwoNumbers(number1, number2) {
//   if (number1 >= number2) {
//     return number1;
//   } else  {
//     return number2;
//     }
// }
// console.log(maxOfTwoNumbers(10, 5));


// 2. 
function maxOfThree(number1, number2, number3) {
  let max = number1;

  if (number2 > max) {
    max = number2;
  }

  if (number3 > max) {
    max = number3;
  }

  return max;
}

console.log(maxOfThree(10,20,30));
