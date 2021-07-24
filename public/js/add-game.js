async function newFormHandler(event) {
    event.preventDefault();
  //change post_game
    const title = document.querySelector('input[name="post_game"]').value;
    const post_game = document.querySelector('input[name="post_game"]').value;
  
    const response = await fetch(`/api/games`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_game
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
//maybe change dashboard depending on handlebars
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  //maybe change .new-post-form depending on handlebars
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);