/* exported sumAll */
/*
  - create a variable that holds onto the number value
  - create a for loop to loop through the numbers in the array
  - find a way to pull out those indexes in the array
  - add the numbers
  - return the number out of the function
*/

function sumAll(numbers) {
  var numSum = 0;
  for (var i = 0; i < numbers.length; i++) {
    numSum += numbers[i];
  }
  return numSum;
}
