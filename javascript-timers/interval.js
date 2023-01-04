var count = 4;
var countdownId = setInterval(countdown, 1000);
var $countdown = document.querySelector('.countdown-display');

function countdown() {
  count--;
  if (count > 0) {
    $countdown.textContent = count;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownId);
  }
}
