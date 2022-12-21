function logSubmit(event) {
  event.preventDefault();
  var name = $contact.elements.name.value;
  var email = $contact.elements.email.value;
  var message = $contact.elements.message.value;
  var messageData = {
    name,
    email,
    message
  };
  console.log('messageData:', messageData);
  $contact.reset();
}

var $contact = document.querySelector('#contact-form');
$contact.addEventListener('submit', logSubmit);
