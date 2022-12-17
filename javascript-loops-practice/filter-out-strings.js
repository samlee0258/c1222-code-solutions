/* exported filterOutStrings */
/*
  - define a function named filterOutStrings with one parameter named values
  - create a new variable assigned to an empty array
  - write a for loop to loop through the index values one by one
    - write a conditional in the for loop code block to check if the data type of the value
    is not "string" using typeof
      - if it is not a string, then push it into the output array
  - return array with values not equaling to a string
*/

function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
