async function commentFormHandler(event) {
  event.preventDefault();

  const task_content = document.querySelector('textarea[name="task_content]').value.trim();

  const task_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (task_content) {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({
        task_id,
        task_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}
//maybe change .task-form depending on handlebars
document.querySelector('.task-form').addEventListener('submit', taskFormHandler);