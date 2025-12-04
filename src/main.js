// Main JavaScript file
console.log("Mark M. Orwa Portfolio Loaded");

// Add any global animations or interactions here
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a simple fade-in effect to elements with .animate-fade-in-down
    const animatedElements = document.querySelectorAll('.animate-fade-in-down');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-20px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});
