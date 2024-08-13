// Smooth Scrolling for Navbar Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Callback Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const inputs = form.querySelectorAll('input');
            let valid = true;

            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    input.classList.add('is-invalid');
                    valid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (valid) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    });
});

// Client Circle Image Click Effect (Example)
const clientCircles = document.querySelectorAll('.clientCircles .rounded-circle');
clientCircles.forEach(circle => {
    circle.addEventListener('click', function() {
        alert('Client logo clicked!');
    });
});
