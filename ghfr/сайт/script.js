// Переместите функцию smoothScroll в глобальную область видимости
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчик события для всех ссылок с классом 'scroll-link'
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем стандартное поведение ссылки
            const targetId = this.getAttribute('href').substring(1); // Получаем id цели
            smoothScroll(targetId); // Вызываем функцию плавного скролла
        });
    });
});
