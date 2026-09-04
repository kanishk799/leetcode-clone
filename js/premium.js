document.addEventListener('DOMContentLoaded', () => {
    const pricingToggle = document.getElementById('pricingToggle');
    const proPrice = document.getElementById('proPrice');
    const enterprisePrice = document.getElementById('enterprisePrice');
    const proBilling = document.getElementById('proBilling');
    const enterpriseBilling = document.getElementById('enterpriseBilling');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const yearlyLabel = document.getElementById('yearlyLabel');

    // Pricing toggle
    pricingToggle.addEventListener('change', () => {
        if (pricingToggle.checked) {
            proPrice.textContent = '$7.99';
            enterprisePrice.textContent = '$23.99';
            proBilling.textContent = 'yearly';
            enterpriseBilling.textContent = 'yearly';
            monthlyLabel.classList.remove('active');
            yearlyLabel.classList.add('active');
        } else {
            proPrice.textContent = '$9.99';
            enterprisePrice.textContent = '$29.99';
            proBilling.textContent = 'monthly';
            enterpriseBilling.textContent = 'monthly';
            monthlyLabel.classList.add('active');
            yearlyLabel.classList.remove('active');
        }
    });

    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = question.querySelector('i');
            
            faqItem.classList.toggle('active');
            
            if (faqItem.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                answer.style.maxHeight = '0';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});

// Subscribe to plan
function subscribePlan(plan) {
    const user = localStorage.getItem('currentUser');
    if (!user) {
        alert('Please login to subscribe');
        window.location.href = 'login.html';
        return;
    }
    
    alert(`Redirecting to checkout for ${plan} plan... This is a demo!`);
}
