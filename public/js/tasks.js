const taskHandler = async (event) => {
    event.preventDefault();
    
    const description = document.querySelector('#task-desc').value;
  
    if (description) {
      const path = window.location.pathname;
      const response = await fetch(`/api/tasks/${path.substring(path.lastIndexOf("/") + 1)}`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log("This is what a task description should say", description);
        alert('Failed to post task');
      }
    }
  };
  
  document
    .querySelector('.task')
    .addEventListener('submit', taskHandler);