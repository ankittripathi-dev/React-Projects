document.addEventListener('DOMContentLoaded', function() {
    // Animate the development message
    const devMessage = document.querySelector('.development-message');
    const featureItems = document.querySelectorAll('.features-preview li');

    // Add entrance animation to the development message
    setTimeout(() => {
        devMessage.style.opacity = '1';
        devMessage.style.transform = 'translateY(0)';
    }, 300);

    // Add staggered animation to feature items
    featureItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + (index * 150));
    });

    // Add a subtle parallax effect to the header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (header) {
            header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Add hover effect to the return home button
    const returnHomeBtn = document.querySelector('.return-home');
    if (returnHomeBtn) {
        returnHomeBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 12px 20px rgba(90, 26, 171, 0.3)';
        });

        returnHomeBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 15px rgba(90, 26, 171, 0.2)';
        });
    }
});
