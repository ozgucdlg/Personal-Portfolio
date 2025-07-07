// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');
const navbar = document.querySelector('.navbar');

// Throttle function to limit scroll event frequency
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Navbar scroll effect
function handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Add throttled scroll event listener
window.addEventListener('scroll', throttle(handleScroll, 100));

// Run scroll check on page load
document.addEventListener('DOMContentLoaded', handleScroll);

// Mobile menu functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href').slice(1) === current) {
            li.classList.add('active');
        }
    });
});

// Add animation class when elements come into view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Navbar Scroll Effect
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add scroll event listener with throttling
window.addEventListener('scroll', throttle(handleScroll, 100));

// Initial check for page load
document.addEventListener('DOMContentLoaded', handleScroll);
window.addEventListener('load', handleScroll);

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const messageElement = notification.querySelector('.notification-message');
    const iconElement = notification.querySelector('.notification-icon');
    
    // Set message
    messageElement.textContent = message;
    
    // Set icon based on type
    iconElement.className = 'notification-icon fas ' + 
        (type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle');
    
    // Set type class
    notification.className = 'notification ' + type + ' show';
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Close notification on button click
document.querySelector('.notification-close').addEventListener('click', () => {
    document.getElementById('notification').classList.remove('show');
});

// Contact Form Functionality
(function() {
    // Initialize EmailJS with your public key
    emailjs.init("dkaBIZPjEcL8J1VX2");

    // Get the contact form element
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Get form data
            const formData = {
                name: this.querySelector('input[name="name"]').value,
                email: this.querySelector('input[name="email"]').value,
                message: this.querySelector('textarea[name="message"]').value
            };

            // Send email using EmailJS
            emailjs.send('service_lgws63i', 'template_r4bbbdr', formData)
                .then(function() {
                    // Show success notification
                    showNotification('Thank you! Your message has been sent successfully.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                })
                .catch(function(error) {
                    // Show error notification
                    showNotification('Oops! Something went wrong. Please try again later.', 'error');
                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    // Reset button state
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                });
        });
    }
})(); 