/* exported chunk */
/*

*/

function chunk(array, size) {
  var newArr = [];
  return newArr.push(array.slice(array.length - size));
}
