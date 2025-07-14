// FAQ Toggle
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            
            // Fechar todas as outras FAQs
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.faq-question i');
                otherAnswer.style.display = 'none';
                otherIcon.style.transform = 'rotate(0deg)';
            });
            
            // Abrir/fechar a FAQ clicada
            if (!isOpen) {
                answer.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});

// Rastreamento de conversões específicas do produto
function trackConversion(conversionLabel) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/' + conversionLabel
        });
    }
    
    // Log para debug
    console.log('Conversão rastreada:', conversionLabel);
}

// Animação de entrada para elementos da página de produto
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animações aos elementos
    const animatedElements = document.querySelectorAll('.detalhe-card, .faq-item, .produto-info');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Efeito de hover nos cards de detalhes
document.addEventListener('DOMContentLoaded', () => {
    const detalheCards = document.querySelectorAll('.detalhe-card');
    
    detalheCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 10px 25px rgba(0,123,255,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});

