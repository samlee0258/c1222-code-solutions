/* exported compact */
/*
  - define a function named compact with one parameter "array"
  - create a variable assigned to an empty array
  - create a for loop to loop throught the array
    - if the index value at array is truthy value, push into output array
  - return output array
*/

function compact(array) {
  var truthyArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArr.push(array[i]);
    }
  }
  return truthyArr;
}
