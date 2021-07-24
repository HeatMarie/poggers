async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/games/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      games_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
// can change /dashboard to whatever handlebars is
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }

}
// change delete games btn to handlebars matching code
document.querySelector('.delete-games-btn').addEventListener('click', deleteFormHandler);