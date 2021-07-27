async function taskFormHandler(event) {
  event.preventDefault();

  const content = document.getElementById('taskDesc').value;
  console.log('taskDesc', taskDesc.value)
  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  console.log('id',)
  console.log(content, "we are over here");
  
  if(content) {
    const response = await fetch(`/api/tasks`, {
      method: 'POST',
      body: JSON.stringify({ content, id }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      document.location.replace('/tasks');
      console.log('click');
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById('task-form').addEventListener('submit', taskFormHandler);