document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Here you would typically send a request to your backend
    console.log('Registration attempt:', username, email);
    
    // Simulated registration
    alert('Registration Successful!');
    // Redirect to login or dashboard
    // window.location.href = 'login.html';
}); 