const newGameFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#game-name').value.trim();
    const description = document.querySelector('#game-desc').value.trim();
  
    if (username && description) {
      const response = await fetch(`/api/games`, {
        method: 'POST',
        body: JSON.stringify({ username, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('You have failed');
      }
    }
  };
  
  const deleteGameFormHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/game/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('I am not going anywhere!!!');
      }
    }
  };
  
  document
    .querySelector('.new-game-form')
    .addEventListener('submit', newGameFormHandler);
  
  document
    .querySelector('.game-list')
    .addEventListener('click', deleteGameFormHandler);
