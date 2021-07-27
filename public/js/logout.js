async function logout() {
    const response = await fetch('/api/profile/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/login');
      console.log("YOU LEFT!!!!")
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);