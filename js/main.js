document.addEventListener('DOMContentLoaded', () => {
    // Lógica para Navbar no Scroll
    const navbar = document.getElementById('main-navbar');
    // Checa se a navbar existe para evitar erros em páginas sem ela
    if (navbar) {
        const masthead = document.querySelector('.masthead');
        const heroHeight = masthead ? masthead.offsetHeight : 200; // Altura padrão se a seção não for encontrada

        window.addEventListener('scroll', () => {
            if (window.scrollY > heroHeight - 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Animações com Intersection Observer para sections e cards
    const sections = document.querySelectorAll('.js-fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.2 // A animação dispara quando 20% do elemento está visível
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animações de Hover para Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 12px 20px var(--shadow-dark)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px var(--shadow-dark)';
        });
    });

    // Script para ano dinâmico no footer
    const currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});