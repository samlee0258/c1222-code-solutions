function logSubmit(event) {
  event.preventDefault(event);
}
var $contact = document.querySelector('#contact-form');
$contact.addEventListener('submit', logSubmit);

var theForm = {};
theForm.name = '';
theForm.email = '';
theForm.message = '';
