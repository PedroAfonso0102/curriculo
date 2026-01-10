// Light/Dark Theme Logic for Production (Static)
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Initialize theme immediately
(function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
})();

// ============================================
// HAMBURGER MENU LOGIC
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    
    if (!hamburgerBtn || !hamburgerMenu) return;
    
    // Toggle menu on button click
    hamburgerBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isOpen = hamburgerMenu.classList.contains('open');
        
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburgerMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
    
    function openMenu() {
        hamburgerMenu.classList.add('open');
        hamburgerBtn.classList.add('active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        hamburgerMenu.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
    }
    
    function closeMenu() {
        hamburgerMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerMenu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
    }
    
    // Close menu when clicking a menu item (for internal navigation)
    const menuItems = hamburgerMenu.querySelectorAll('.menu-item[href^="#"]');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            closeMenu();
        });
    });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (!scrollToTopBtn) return;
    
    // Show/hide button based on scroll position
    function toggleScrollButton() {
        const scrollY = window.scrollY || window.pageYOffset;
        const threshold = 300; // Show after scrolling 300px
        
        if (scrollY > threshold) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
    
    // Scroll to top with smooth animation
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Event listeners
    window.addEventListener('scroll', toggleScrollButton, { passive: true });
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    // Initial check
    toggleScrollButton();
});
