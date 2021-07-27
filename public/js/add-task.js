async function taskFormHandler(event) {
  event.preventDefault();
  const content = document.getElementById('taskDesc').value;

  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  if(content) {
    const response = await fetch(`/api/tasks`, {
      method: 'POST',
      //THIS is missing data entry//
      body: JSON.stringify({ content, id }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      document.location.reload();
      console.log('click');
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById('task-form').addEventListener('submit', taskFormHandler);