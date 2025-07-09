document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.getElementById('scrollContainer');
    const cardWidth = 300;
    const gap = 24;

    function getCardsPerScroll() {
        return window.innerWidth < 1024 ? 1 : 2; // 1 card on small screens, 2 on large
    }

    function getScrollAmount() {
        return (cardWidth + gap) * getCardsPerScroll();
    }

    document.getElementById('scrollLeft').addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    document.getElementById('scrollRight').addEventListener('click', () => {
        scrollContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
});