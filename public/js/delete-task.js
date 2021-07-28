// async function deleteTaskHandler(event) {
//   event.preventDefault();

//   const id = window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
//   ];

//   const response = await fetch(`/api/tasks/${id}`, {
//     method: 'DELETE',
//     body: JSON.stringify({
//       task_id: 'id'
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.reload();
//   } else {
//     console.log("you are a huge potato")
//     alert(response.statusText);
//   }
// }

console.log("LOADED");

const deleteTaskHandler = async (event) => {
  if (event.target.classList.contains("task-delete") && event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('I am not going anywhere!!!');
    }
  }
};

document.addEventListener('click', deleteTaskHandler);