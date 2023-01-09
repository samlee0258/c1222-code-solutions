function greeting() {
  var $h1 = document.querySelector('.message');
  $h1.textContent = 'Hello There';
}

setTimeout(greeting, 2000);
