document.getElementById('submitPassword').addEventListener('click', function() {
    var passwordInput = document.getElementById('passwordInput');
    var password = passwordInput.value;
    var correctPassword = 'chocolate2024';  // Replace with your desired password
    var errorMessage = document.getElementById('errorMessage');

    if (password === correctPassword) {
        document.getElementById('passwordContainer').style.display = 'none';
        document.getElementById('videoContainer').style.display = 'flex';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = '';  // Clear the input field
    }
});

document.getElementById('protectedVideo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


