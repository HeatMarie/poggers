async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="task-title"]').value;
  const task_content = document.querySelector('input[name="task-content"]').value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/tasks/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      task_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
//maybe change dashboard depending on handlebars
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}
//maybe change .edit-task-form depending on handlebars
document.querySelector('.edit-task-form').addEventListener('submit', editFormHandler);