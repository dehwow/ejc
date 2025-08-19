document.addEventListener('DOMContentLoaded', () => {
    const paymentButton = document.querySelector('.cta-button');

    if (paymentButton) {
        paymentButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('A funcionalidade de pagamento será implementada em breve!');
            // In a real application, you would redirect to a payment gateway here.
            // For example: window.location.href = 'https://pagamento.example.com';
        });
    }
});
