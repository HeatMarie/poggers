async function taskFormHandler(event) {
  event.preventDefault();

  const id = document.querySelector('#game-desc').value;
  
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        task_id,
        description,
        task_content
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

document.querySelector('.task-form').addEventListener('click', taskFormHandler);