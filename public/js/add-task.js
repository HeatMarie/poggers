async function taskFormHandler(event) {
  event.preventDefault();

  const content = document.getElementById('task-desc').value;
  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];



  
    const response = await fetch(`/api/tasks/${id}`, {
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
      document.location.replace('/game');
    } else {
      alert(response.statusText);
    }
  }

document.getElementById('task-form').addEventListener('click', taskFormHandler);