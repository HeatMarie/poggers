async function newGameHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#game-name').value;
  
    const response = await fetch(`/api/games`, {
      method: 'POST',
      body: JSON.stringify({
        title
      }),
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

  document.querySelector('.new-game-form').addEventListener('submit', newGameHandler);