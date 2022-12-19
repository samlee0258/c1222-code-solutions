/* exported getValues */
/*

*/

function getValues(object) {
  var keys = [];
  for (var key in object) {
    keys.push(object[key]);
  }
  return keys;
}
