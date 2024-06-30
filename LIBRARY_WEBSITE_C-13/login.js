const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Simulate login logic (replace with your actual authentication)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password123') {
    // Redirect to library interface on successful login (replace with actual redirect logic)
    window.location.href = 'library_interface.html'; // Assuming library_interface.html exists
  } else {
    alert("Try_Again!!-Something_went_wrong!")
  }
});
