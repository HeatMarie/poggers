
async function taskFormHandler(event) {
  event.preventDefault();
  const title = document.getElementById('taskDesc').value;
  const content = document.getElementById('taskContent').value;
  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  if(title) {
    const response = await fetch(`/api/tasks`, {
      method: 'POST',
      body: JSON.stringify({ title, content, id }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(title, content, id);
    if (response.ok) {
      document.location.reload();
      console.log('click');
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById('task-form').addEventListener('submit', taskFormHandler);