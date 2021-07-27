async function taskFormHandler(event) {
  event.preventDefault();

  const content = document.getElementById('task-desc').value;

  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  console.log(content, "we are over here");
  
    const response = await fetch(`/tasks/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        content,
        id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.replace('/tasks');
    } else {
      alert(response.statusText);
    }
  }

document.getElementById('taskSubmit').addEventListener('submit', taskFormHandler);