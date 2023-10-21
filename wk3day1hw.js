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
// function maxOfThree(number1, number2, number3) {
//   let max = number1;

//   if (number2 > max) {
//     max = number2;
//   }

//   if (number3 > max) {
//     max = number3;
//   }

//   return max;
// }

// console.log(maxOfThree(10,20,30));


// 3. 
// function isCharAvowel(lab3) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   return vowels.includes(lab3);
//   }
//   console.log(isCharAvowel('u'));


// 4.
// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers.
//  For example, sumArray([2, 4, 5]);would return 11.
// function sumArray(lab4){
//     let totalSum=0;
//   for(let i=0; i< lab4.length; i++){
//     totalSum += lab4[i];
//     }
//     return totalSum;
//     }
//     console.log(sumArray([2, 4, 5]));
 
// 5. 
// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers.
// For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(lab5){
  let product = 1;
  for(let i=0; i < lab5.length; i++){
    product *= lab5[i];
    }
    return product;
    }
    console.log(multiplyArray([2, 4, 5]));

