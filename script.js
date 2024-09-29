// Smooth scroll function
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default anchor behavior
        
        const targetId = this.getAttribute('href').substring(1);  // Get the target ID
        const targetElement = document.getElementById(targetId);

        // Scroll into view with smooth behavior
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
