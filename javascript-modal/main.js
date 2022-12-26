/*
  - create a variable named $openModal and query select to the class '.open-modal'
  - create a variable named $closeModal and query select to the class '.close-modal'
  - create a variable named $fixedBox and query select to the class '.fixed'
  - create a variable named $body and query select to the element 'body'
  - add event listener to the button $openModal and $closeModal to toggle a click function
    - if $openModal button is strictly equal to class '.open-modal' run conditional
      - $body class name is assigned 'body-bg'
      - $fixedBox class name is assigned 'fixed border p-sides bg-color body-bg visible'
      - $closeModal class name is assigned 'visible close-modal font-size'
      - $openModal class name is assigned 'font-size open-modal dim'
*/

var $openModal = document.querySelector('.open-modal');
var $closeModal = document.querySelector('.close-modal');
var $fixedBox = document.querySelector('.fixed');
var $body = document.querySelector('body');

$openModal.addEventListener('click', toggle);
$closeModal.addEventListener('click', toggle);

function toggle(event) {
  if ($openModal.className === 'open-modal') {
    $body.className = 'body-bg';
    $fixedBox.className = 'fixed border p-sides bg-color body-bg visible';
    $closeModal.className = 'visible close-modal font-size';
    $openModal.className = 'dim';
  } else {
    $openModal.className = 'open-modal';
    $closeModal.className = 'hidden close-modal font-size';
    $body.className = 'bg-color';
    $fixedBox.className = 'fixed border p-sides bg-color body-bg hidden';
  }
}
