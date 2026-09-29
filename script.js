document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu');
    const navLinks = document.querySelector('.navlinks');

    if (menuBtn && navLinks) {
        function toggleMenu() {
            const isOpen = navLinks.classList.toggle('open');

            if (isOpen) {
                menuBtn.textContent = 'CLOSE ✕';
                menuBtn.style.background = 'var(--accent)';
                menuBtn.style.color = 'var(--white)';
            } else {
                menuBtn.textContent = 'MENU';
                menuBtn.style.background = 'var(--white)';
                menuBtn.style.color = 'var(--ink)';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when a navigation item is clicked
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function () {
                if (navLinks.classList.contains('open')) {
                    toggleMenu();
                }
            });
        });
    }
});
