/* exported tail */
/*
  - define a function named tail with one parameter "array"
  - create a new variable assigned to an empty array
  - create a for loop to loop through the array
    - create a conditional statement where if the index is not strictly equal to 0
    - push the index value into an empty array
  - return output array
*/

function tail(array) {
  var tailArr = [];
  for (var i = 1; i < array.length; i++) {
    tailArr.push(array[i]);
  }
  return tailArr;
}
