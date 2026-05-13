document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Theme Toggle (Dark/Light)
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(savedTheme);

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                htmlElement.classList.add('light');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.remove('light');
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    });

    // RTL Toggle
    const rtlToggleBtns = document.querySelectorAll('.rtl-toggle');
    
    // Check for saved dir
    const savedDir = localStorage.getItem('dir') || 'ltr';
    htmlElement.setAttribute('dir', savedDir);

    rtlToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir');
            if (currentDir === 'ltr') {
                htmlElement.setAttribute('dir', 'rtl');
                localStorage.setItem('dir', 'rtl');
            } else {
                htmlElement.setAttribute('dir', 'ltr');
                localStorage.setItem('dir', 'ltr');
            }
        });
    });
});
