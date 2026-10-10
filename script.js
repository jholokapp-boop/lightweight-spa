// Smooth scroll navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    const successMsg = document.getElementById('successMsg');
    
    // Simulate form submission
    form.style.opacity = '0.6';
    
    setTimeout(() => {
        // Clear form
        form.reset();
        form.style.opacity = '1';
        
        // Show success message
        successMsg.textContent = '✓ Message sent successfully! Thank you for reaching out.';
        successMsg.classList.add('show');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
    }, 600);
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards for animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// Add active link highlighting
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
        this.style.color = 'var(--primary)';
    });
});

// Lightweight analytics simulation
console.log('🚀 Ultra-light SPA loaded successfully!');
console.log('Total assets: HTML + CSS + JS only');
console.log('No frameworks, no dependencies, pure vanilla code!');
