async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/tasks/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      task_id: id
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
//maybe change .delete-task-btn based on handlebars
document.querySelector('.delete-task-btn').addEventListener('click', deleteFormHandler);