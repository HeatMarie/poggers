async function deleteFormHandler(event) {
  if (event.target.classList.contains("game-delete")) {
    event.preventDefault();

    const id = event.target.dataset.id;

    const response = await fetch(`/api/games/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {

      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
}

document.addEventListener("click", deleteFormHandler);
