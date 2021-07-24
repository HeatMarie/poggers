const loginFormHandler = async (e) => {
    e.preventDefault(e);

    const userEmail = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (userEmail && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ userEmail, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (e) => {
    e.preventDefault(e);
    
    const username = document.getElementById('name-signup').value.trim();
    const userEmail = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if (username && userEmail && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, userEmail, password }),
            headers: { 'Content-Type': 'application/json' }, 
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById('login-form').addEventListener('submit', loginFormHandler);

document.getElementById('signup-form').addEventListener('submit', signupFormHandler);

