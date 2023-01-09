var $button = document.querySelector('button');
var $body = document.querySelector('body');

$button.addEventListener('click', toggleOnOff);

function toggleOnOff(event) {
  if ($button.className === 'on-button') {
    $button.className = 'off-button';
    $body.className = 'off';
  } else {
    $button.className = 'on-button';
    $body.className = 'on';
  }
}
