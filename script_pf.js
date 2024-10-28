function checkPassword() {
    var passwordInput = document.getElementById('passwordInput');
    var password = passwordInput.value;
    var correctPassword = document.getElementById('div').innerHTML;
    var errorMessage = document.getElementById('errorMessage');

    if (password === correctPassword) {
        document.getElementById('passwordContainer').style.display = 'none';
        document.getElementById('pfContainer').style.display = 'flex';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = '';
    }
}

document.getElementById('submitPassword').addEventListener('click', checkPassword);

document.getElementById('passwordInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

document.getElementById('protectedPf').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
