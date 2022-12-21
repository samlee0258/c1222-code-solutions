/* exported countdown */

function countdown(number) {
  var numArr = [];
  for (var i = number; i > -1; i--) {
    numArr.push(i);
  }
  return numArr;
}
