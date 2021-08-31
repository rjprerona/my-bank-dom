document.getElementById('submit-btn').addEventListener('click', function() {
    // get user email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // check email and password
    if(email == 'sontan@gmail.com' && password == 'secret') {
        window.location.href = 'banking.html'
    }
})
