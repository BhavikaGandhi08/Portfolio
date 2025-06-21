// Basic interactivity: Smooth scroll for navigation links

document.querySelectorAll('nav[role="navigation"] a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); 
    if (form) {
        form.addEventListener('submit', function(e) {
            if (form.checkValidity()) {
                e.preventDefault();
                alert('Message was sent successfully!');
                form.reset();
            }
        });
    }
});