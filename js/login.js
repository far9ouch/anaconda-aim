document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Here you would typically send a request to your backend
    // For now, we'll just simulate a login
    console.log('Login attempt:', email);
    
    // Simulated login (replace with actual authentication)
    if (email === 'player@example.com' && password === 'password123') {
        alert('Login Successful!');
        // Redirect to game or dashboard
        // window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password');
    }
}); 