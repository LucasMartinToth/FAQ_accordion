const faqDetails = document.querySelectorAll('details');

faqDetails.forEach(function(detail) {
    const icon = detail.querySelector('.faq-icon');

    detail.addEventListener('toggle', function() {
        if (detail.open) {
            icon.src = './assets/images/icon-minus.svg';
        } else {
            icon.src = './assets/images/icon-plus.svg';
        }
    })
});

