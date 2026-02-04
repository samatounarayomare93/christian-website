// CONSOLIDATED PRAYER BOOK JAVASCRIPT

// Prayer Book Navigation System
function showPrayerSection(sectionId) {
    console.log('Showing prayer section:', sectionId);

    // Hide all prayer sections
    const allSections = document.querySelectorAll('.prayer-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const targetSection = document.getElementById(sectionId + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';

        // Smooth scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Update navigation button states
    const allNavBtns = document.querySelectorAll('.book-nav-btn');
    allNavBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    const activeBtn = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Show notification
    const sectionNames = {
        'divine-mercy': 'Divine Mercy Collection - مجموعة الرحمة الإلهية',
        'holy-rosary': 'Holy Rosary - المسبحة الوردية',
        'saint-anthony': 'Saint Anthony the Great - القديس أنطونيوس الكبير',
        'saint-faustina': 'Saint Faustina Collection - مجموعة القديسة فوستينا',
        'spiritual-warfare': 'Spiritual Warfare Arsenal - ترسانة الحرب الروحية',
        'daily-prayers': 'Daily Prayer Companion - رفيق الصلاة اليومية'
    };

    const sectionName = sectionNames[sectionId] || sectionId;
    showNotification(`Opened: ${sectionName}`, 'success');
}

// Initialize Prayer Book when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('🙏 Initializing Consolidated Prayer Book...');

    // Set default section (Divine Mercy)
    // Default section is now hidden until user interaction
    // setTimeout(() => {
    //     const defaultSection = 'divine-mercy';
    //     showPrayerSection(defaultSection);
    // }, 1000);

    // Add click handlers to navigation buttons
    const navButtons = document.querySelectorAll('.book-nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                showPrayerSection(sectionId);
            }
        });
    });

    console.log('✅ Consolidated Prayer Book initialized successfully');
});

// Show notification function (reuse existing if available)
function showNotification(message, type = 'info') {
    // Try to use existing notification system first
    if (typeof window.showNotification === 'function') {
        window.showNotification(message, type);
        return;
    }

    // Fallback notification system
    const notification = document.createElement('div');
    notification.className = `prayer-notification prayer-notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10001;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        transform: translateX(0);
        transition: transform 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        line-height: 1.4;
    `;

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer; padding: 0; margin-left: auto; opacity: 0.8; font-size: 16px;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 4000);
}

// Keyboard navigation for accessibility
document.addEventListener('keydown', function (e) {
    // Only handle if we're in the prayer book section
    const prayerBook = document.getElementById('prayer-book');
    if (!prayerBook || !prayerBook.offsetParent) return;

    const navButtons = document.querySelectorAll('.book-nav-btn');
    const activeButton = document.querySelector('.book-nav-btn.active');

    if (!activeButton) return;

    let currentIndex = Array.from(navButtons).indexOf(activeButton);
    let newIndex = currentIndex;

    switch (e.key) {
        case 'ArrowLeft':
            newIndex = currentIndex > 0 ? currentIndex - 1 : navButtons.length - 1;
            break;
        case 'ArrowRight':
            newIndex = currentIndex < navButtons.length - 1 ? currentIndex + 1 : 0;
            break;
        case 'Home':
            newIndex = 0;
            break;
        case 'End':
            newIndex = navButtons.length - 1;
            break;
        default:
            return; // Don't prevent default for other keys
    }

    if (newIndex !== currentIndex) {
        e.preventDefault();
        const newButton = navButtons[newIndex];
        const sectionId = newButton.getAttribute('data-section');
        if (sectionId) {
            showPrayerSection(sectionId);
            newButton.focus();
        }
    }
});

// Add smooth scrolling enhancement
function smoothScrollToElement(element, offset = 80) {
    if (!element) return;

    const elementTop = element.offsetTop - offset;

    window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
    });
}

// Export functions for global access
window.showPrayerSection = showPrayerSection;
window.prayerBookNotification = showNotification;