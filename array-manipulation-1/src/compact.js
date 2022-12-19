/* exported compact */
/*

*/

function compact(array) {
  var truthyArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== Number.isNaN() && array[i] !== undefined && array[i] !== '' && array[i] !== 0) {
      truthyArr.push(array[i]);
    }
  }
  return truthyArr;
}
