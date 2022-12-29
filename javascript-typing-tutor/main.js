var $phrase = document.querySelectorAll('span');
var counter = 0;

window.addEventListener('keydown', keyBoard);

function keyBoard(event) {
  while (counter === event.key) {
    counter++;
  }
  if ($phrase[counter].textContent === event.key) {
    $phrase[counter].className = 'correct underline';
  } else if ($phrase[counter].textContent !== event.key) {
    $phrase[counter].className = 'incorrect underline';
  }
}
