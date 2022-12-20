/*
  - create a new variable that stores the number of times the use clicked the button
  -
*/
function clicked(event) {
  $counter.textContent = 'Clicks: ' + ++numberOfClicks;
  var temperature = null;
  if (numberOfClicks < 4) {
    temperature = 'cold';
  } else if (numberOfClicks < 7) {
    temperature = 'cool';
  } else if (numberOfClicks < 10) {
    temperature = 'tepid';
  } else if (numberOfClicks < 13) {
    temperature = 'warm';
  } else if (numberOfClicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hot.className = '.hot-button' + ' ' + temperature;
}

var numberOfClicks = 0;
var $hot = document.querySelector('.hot-button');
var $counter = document.querySelector('.click-count');

$hot.addEventListener('click', clicked);
