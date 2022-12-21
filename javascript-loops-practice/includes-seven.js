/* exported includesSeven */
/*
  - define a function named includesSeven with one parameter named array
  - make a for loop to loop through each index in the array
    - check one by one if the values are the number 7
      - if the current value is 7, return true
  - if the loop has ended, then no 7 was present. return false
*/

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
