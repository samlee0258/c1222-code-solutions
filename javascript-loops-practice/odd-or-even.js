/* exported oddOrEven */
/*
  - define a function named oddOrEven with one parameter "numbers"
  - create a new variable for the output which is an empty array
  - create a for loop to check each value in the array using it's index
    - get each value and see if it is divisible by 2
      - if it is with no remainders then push 'even' into output array
      - if not then push 'odd' into output array
  - return output array
*/

function oddOrEven(numbers) {
  var oddOrEvenArr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenArr.push('even');
    } else {
      oddOrEvenArr.push('odd');
    }
  }
  return oddOrEvenArr;
}
