window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Добавляем класс "sticky", если прокрутка больше 100px
    if (scrollPosition > 100) {
        header.classList.add('sticky'); // Изменили .fixed на .sticky
    } else {
        header.classList.remove('sticky'); // Изменили .fixed на .sticky
    }

    // Добавляем класс "transparent" для плавного изменения прозрачности
    if (scrollPosition > 100) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});