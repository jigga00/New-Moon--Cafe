document.addEventListener('DOMContentLoaded', function () {
    const popUpElements = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, {
        threshold: 0.1 // The percentage of the element that's visible before triggering
    });

    popUpElements.forEach(element => {
        observer.observe(element);
    });
});