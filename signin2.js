document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Validate email format
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Check password length
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // Sign-in successful
    errorMessage.textContent = 'Sign-in successful!';

    // Redirect to index.html after successful sign-in
    window.location.href = 'index.html'; // Replace 'index.html' with the actual path to your Home page
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
