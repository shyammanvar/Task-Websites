function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    let valid = true;

    // Reset error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validate username (minimum 3 characters)
    if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        valid = false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = 'Invalid email address.';
        valid = false;
    }

    // Validate password (minimum 6 characters)
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    return valid;
}
