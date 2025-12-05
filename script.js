// script.js
document.querySelectorAll('.product a').forEach(button => {
    button.addEventListener('click', function() {
        alert('تم إضافة المنتج إلى سلة التسوق!');
    });
});
