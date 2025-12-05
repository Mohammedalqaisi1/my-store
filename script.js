document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        alert('تمت إضافة المنتج إلى سلة الشراء!');
    });
});
