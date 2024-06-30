const form = document.getElementById('registration-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (can be extended with more complex checks)
    if (name === '' || email === '' || username === '' || password === '') {
        message.textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate form submission (replace with your actual logic)
    message.textContent = 'Registration successful!';

    // You would typically send the data (name, email, username, password) to a server-side script
    // for processing and account creation.
});
