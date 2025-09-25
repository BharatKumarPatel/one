// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const headerHeight = document.querySelector('.top-header')?.offsetHeight || 80;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });

    // Form Validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[name="name"]')?.value;
            const email = this.querySelector('input[name="email"]')?.value;
            const phone = this.querySelector('input[name="phone"]')?.value;
            const message = this.querySelector('textarea[name="message"]')?.value;
            
            // Basic validation
            if(!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Phone validation (optional field)
            if (phone) {
                const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
                if (!phoneRegex.test(phone)) {
                    alert('Please enter a valid phone number.');
                    return;
                }
            }

            // If validation passes
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.top-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if(window.scrollY > 100) {
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            }
        });
    }
});