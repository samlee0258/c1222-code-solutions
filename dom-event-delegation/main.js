function taskDone(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }
  console.log('closest .task-list-item', event.target.closest('.task-list-item'));
}

var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskDone);
