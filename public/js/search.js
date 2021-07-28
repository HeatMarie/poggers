async function newSearch(event){
    event.preventDefault();

const searchBar = document.getElementById('#searchBar').value;

const search = await fetch('/api/game', {
method: 'GET',
search.query("SELECT * FROM Games WHERE title '%or%';
}),
headers:{
    "Content-Type": 'application/json'
}
});

if (response.ok) {
    document.location.reload();
} else {
    alert (response.statusText);
}
}

document.querySelectorAll('.new-game-form')