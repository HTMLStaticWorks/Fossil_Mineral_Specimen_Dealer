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

    // Password Toggle
    const togglePasswordBtn = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password-input');
    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
            
            const eyeIcon = document.getElementById('eye-icon');
            const eyeOffIcon = document.getElementById('eye-off-icon');
            if (eyeIcon && eyeOffIcon) {
                if (isPassword) {
                    eyeIcon.classList.add('hidden');
                    eyeIcon.classList.remove('block');
                    eyeOffIcon.classList.add('block');
                    eyeOffIcon.classList.remove('hidden');
                } else {
                    eyeIcon.classList.add('block');
                    eyeIcon.classList.remove('hidden');
                    eyeOffIcon.classList.add('hidden');
                    eyeOffIcon.classList.remove('block');
                }
            }
        });
    }

    // FAQ Accordion
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const item = toggle.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            const icon = toggle.querySelector('.faq-icon');
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    const otherToggle = otherItem.querySelector('.faq-toggle');
                    const otherContent = otherItem.querySelector('.faq-content');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    
                    if (otherToggle && otherContent) {
                        otherToggle.setAttribute('aria-expanded', 'false');
                        otherContent.style.maxHeight = null;
                        if (otherIcon) {
                            otherIcon.classList.remove('rotate-180');
                        }
                    }
                }
            });

            // Toggle current item
            if (isOpen) {
                toggle.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
                if (icon) {
                    icon.classList.remove('rotate-180');
                }
            } else {
                toggle.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) {
                    icon.classList.add('rotate-180');
                }
            }
        });
    });
});
