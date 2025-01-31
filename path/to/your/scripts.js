document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        playClickSound();
    });

    // Add hover sound effects to all interactive elements
    const interactiveElements = document.querySelectorAll('button, .nav-link, .game-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            playHoverSound();
            addNeonGlow(element);
        });
        element.addEventListener('mouseleave', () => {
            removeNeonGlow(element);
        });
    });

    // Add particle effects to the background
    initParticles();

    // Add typing effect to headings
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        addTypingEffect(heading);
    });

    // Enhanced login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = loginForm.querySelectorAll('input');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value) {
                    isValid = false;
                    shakeElement(input);
                    input.style.borderColor = '#ff0000';
                } else {
                    input.style.borderColor = '#39FF14';
                }
            });

            if (isValid) {
                showSuccessAnimation();
                // Add your login logic here
            }
        });
    }

    // Game cards hover effect
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            applyTiltEffect(e, card);
        });
        
        card.addEventListener('mouseleave', () => {
            resetTiltEffect(card);
        });
    });
});

// Sound effects
function playHoverSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRn4BAABXQVZFZmt0IDgAAAABAAABAAgAZGF0YVoBAAAAAAEAAAAAAAAA');
    audio.volume = 0.1;
    audio.play().catch(() => {});
}

function playClickSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRn4BAABXQVZFZmt0IDgAAAABAAABAAgAZGF0YVoBAAAAAAEAAAAAAAAA');
    audio.volume = 0.2;
    audio.play().catch(() => {});
}

// Visual effects
function addNeonGlow(element) {
    element.style.boxShadow = `0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14`;
    element.style.transform = 'scale(1.05)';
}

function removeNeonGlow(element) {
    element.style.boxShadow = '';
    element.style.transform = 'scale(1)';
}

function shakeElement(element) {
    element.classList.add('shake-animation');
    setTimeout(() => {
        element.classList.remove('shake-animation');
    }, 500);
}

// Particle background effect
function initParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    document.body.prepend(particleContainer);

    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(particle);
}

// Typing effect for headings
function addTypingEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    let index = 0;

    function typeChar() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, 50);
        }
    }

    typeChar();
}

// 3D tilt effect for game cards
function applyTiltEffect(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
}

function resetTiltEffect(element) {
    element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}

// Success animation for login
function showSuccessAnimation() {
    const container = document.querySelector('.login-container');
    container.innerHTML = `
        <div class="success-animation">
            <h2 class="neon-text">Login Successful!</h2>
            <div class="checkmark"></div>
        </div>
    `;
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
} 