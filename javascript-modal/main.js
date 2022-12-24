/*
  -
*/

var $openModal = document.querySelector('.open-modal');
var $closeModal = document.querySelector('.close-modal');
var $body = document.querySelector('body');
$openModal.addEventListener('click', toggle);
$closeModal.addEventListener('click', toggle);

function toggle(event) {
  if ($openModal.className === 'open-modal') {
    $body.className = 'none';
    $closeModal.className = 'block';
  } else {
    $openModal.className = 'open-modal';
    $closeModal.className = 'none';
  }
}
