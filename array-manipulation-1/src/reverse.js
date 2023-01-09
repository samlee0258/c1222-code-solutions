/* exported reverse */
/*
  - define a function named reverse with one parameter "array"
    - create a new variable assigned to an empty array
    - create a for loop to loop through the array
      - if the index is not strictly equal to -1
        - push into the output array
    - return output array
*/

function reverse(array) {
  var reverseArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArr.push(array[i]);
  }
  return reverseArr;
}
