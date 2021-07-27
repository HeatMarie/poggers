async function taskFormHandler(event) {
  event.preventDefault();
  console.log("hit");

  //sequelize not adding task id and incrementing 
  const content = {game_id:1, id: 2,description:document.getElementById('task_description').value, 
  title:document.getElementById('task_title').value};

  //we do not need this
 /*  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]; */

  console.log(content, "we are over here");
  
    const response = await fetch(`/api/tasks/add`, {
      method: 'POST',
      body: JSON.stringify(
        content
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.replace(`/tasks`);
    } else {
      alert(response.statusText);
    }
  }

document.getElementById('taskSubmit').addEventListener('click', taskFormHandler);