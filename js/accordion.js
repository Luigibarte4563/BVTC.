// Services Accordion logic
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#services-accordion .accordion-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const key = this.getAttribute('data-accordion');
            const content = document.querySelector(`#services-accordion [data-content="${key}"]`);
            const svgIcon = this.querySelector('.accordion-icon');
            const isOpen = content.classList.contains('open');

            // Close all
            document.querySelectorAll('#services-accordion .accordion-content').forEach(c => {
                c.style.maxHeight = null;
                c.classList.remove('open');
            });
            document.querySelectorAll('#services-accordion .accordion-icon').forEach(svg => {
                svg.classList.remove('rotate');
            });

            // Toggle current
            if (!isOpen) {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px";
                svgIcon.classList.add('rotate');
            } else {
                content.classList.remove('open');
                content.style.maxHeight = null;
                svgIcon.classList.remove('rotate');
            }
        });
    });

    // About Accordion logic
    document.querySelectorAll('#about-accordion .accordion-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const key = this.getAttribute('data-accordion');
            const content = document.querySelector(`#about-accordion [data-content="${key}"]`);
            const svgIcon = this.querySelector('.accordion-icon');
            const isOpen = content.classList.contains('open');

            // Close all
            document.querySelectorAll('#about-accordion .accordion-content').forEach(c => {
                c.style.maxHeight = null;
                c.classList.remove('open');
            });
            document.querySelectorAll('#about-accordion .accordion-icon').forEach(svg => {
                svg.classList.remove('rotate');
            });

            // Toggle current
            if (!isOpen) {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px";
                svgIcon.classList.add('rotate');
            } else {
                content.classList.remove('open');
                content.style.maxHeight = null;
                svgIcon.classList.remove('rotate');
            }
        });
    });

    // Initialize all accordions as closed
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.style.maxHeight = null;
            c.classList.remove('open');
        });
        document.querySelectorAll('.accordion-icon').forEach(svg => {
            svg.classList.remove('rotate');
        });
    });
});