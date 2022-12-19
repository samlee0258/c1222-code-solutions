/* exported getValues */
/*
  - define a function named getValues with one parameter "object"
  - create a new variable assigned to an empty array
  - create a for in loop to loop through the objects
    - push the index property from the object into the output array
  - return output array
*/

function getValues(object) {
  var keys = [];
  for (var key in object) {
    keys.push(object[key]);
  }
  return keys;
}
