document.getElementById('startGame').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        alert(`Starting game for ${username}`);
        // Add logic to start the game
    } else {
        alert('Please enter your name');
    }
});

document.getElementById('createRoom').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        alert(`Creating private room for ${username}`);
        // Add logic to create a private room
    } else {
        alert('Please enter your name');
    }
});
