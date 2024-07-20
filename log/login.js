let togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.onclick = function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    if (togglePassword.classList.contains('fa-eye-slash')) {
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    } else {
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    }
};

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const passwordValue = document.getElementById('password').value;

    // Example validation (replace with actual login logic)
    if (username === 'username' && passwordValue === 'password') {
        console.log("Login successful");
        // Redirect or update UI accordingly
    } else {
        console.log("Invalid username or password");
        // Display error message or handle accordingly
    }
});