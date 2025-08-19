document.addEventListener('DOMContentLoaded', () => {

    // --- Payment Button Logic (from previous version) ---
    const paymentButton = document.querySelector('.cta-button');
    if (paymentButton) {
        paymentButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('A funcionalidade de pagamento será implementada em breve!');
        });
    }

    // --- Hamburger Menu Logic ---
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-overlay nav a');
    const body = document.body;

    if (hamburgerButton && navOverlay) {
        hamburgerButton.addEventListener('click', () => {
            toggleMenu();
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navOverlay.classList.contains('is-active')) {
                    toggleMenu();
                }
            });
        });
    }

    function toggleMenu() {
        hamburgerButton.classList.toggle('is-active');
        navOverlay.classList.toggle('is-active');
        body.classList.toggle('noscroll');
    }

    // --- Scroll Fade-in Animation Logic ---
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    if (fadeInSections.length > 0) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% of the item must be visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, observerOptions);

        fadeInSections.forEach(section => {
            observer.observe(section);
        });
    }

});
