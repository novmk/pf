function checkPassword() {
    var passwordInput = document.getElementById('passwordInput');
    var password = passwordInput.value;
    var correctPassword = 'CHOCOLATE';
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


let iframeDiv = document.querySelector('iframe');
let iframeDocument = iframeDiv.contentDocument || iframeDiv.contentWindow.document;

let divInIframe = iframeDocument.querySelector('div.ndfHFb-c4YZDc-Wrql6b-SmKAyb');
if (divInIframe) {
  divInIframe.style.display = 'none';
}