// Conceptual Goods Store - Interactive JavaScript

// Product interaction
function showProduct(productName) {
    alert(`Thank you for your interest in ${productName}!\n\nThis is a demo website. In the full version, this would open a detailed product page with:\n\n- Poetic content preview\n- Interactive element demo\n- Secure checkout via Stripe\n\nVisit the GitHub repository for the complete technical implementation.`);
}

// Smooth scroll enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Console message for developers
    console.log('%c✨ Conceptual Goods Store', 'font-size: 20px; font-weight: bold; color: #2D2D2D;');
    console.log('%cBuy a feeling, not a thing.', 'font-size: 14px; font-style: italic; color: #6B6B6B;');
    console.log('%cGitHub: https://github.com/Adarsh1337/conceptual-goods-store', 'font-size: 12px; color: #2D2D2D;');
});
