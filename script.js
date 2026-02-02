// PROFESSIONAL SOUL GUIDANCE WEBSITE JAVASCRIPT - ENTERPRISE GRADE

// Global button state tracking
window.soulGuidanceButtons = {
    initialized: false,
    buttons: {},
    errors: []
};

// Initialize when DOM is ready with comprehensive error handling
document.addEventListener('DOMContentLoaded', function () {
    // STARTUP BLOCKER
    window.isSiteLoading = true;
    console.log('🔒 Startup Block Active: Prevented Popups');
    setTimeout(() => {
        window.isSiteLoading = false;
        console.log('🔓 Startup Block Lifted: Popups allowed');
    }, 5000);

    console.log('🚀 DOM Content Loaded - Initializing website...');

    try {
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                delay: 0,
                once: true,
                mirror: false
            });
            console.log('✅ AOS initialized successfully');
        } else {
            console.warn('⚠️ AOS library not loaded - animations may not work');
        }

        // Initialize all functionality with error handling
        initNavigation();
        initSmoothScrolling();
        initFormHandling();
        initButtonEffects();
        initAccessibility();
        initPrayerButtons();

        // Mark as initialized
        window.soulGuidanceButtons.initialized = true;
        console.log('✅ Soul Guidance Website Initialized Successfully');

    } catch (error) {
        console.error('❌ Critical initialization error:', error);
        window.soulGuidanceButtons.errors.push(error);
    }
});

// Navigation Functionality
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');

            // Update aria-expanded
            const isExpanded = navLinks.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);

            // Change icon
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.className = isExpanded ? 'fas fa-times' : 'fas fa-bars';
            }
        });

        // Close mobile menu when clicking on links
        navLinks.addEventListener('click', function (e) {
            if (e.target.classList.contains('nav-link')) {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            }
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Close mobile menu on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navLinks) {
            navLinks.classList.remove('active');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            }
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Handling
// Form Handling
function initFormHandling() {
    const prayerForm = document.getElementById('prayerForm');

    // Original Contact Form Logic
    if (prayerForm) {
        prayerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            // Validate form
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Create email link with form data
            const subject = encodeURIComponent('Prayer Request from ' + name);
            const body = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Prayer Request:\n${message}\n\n` +
                `Sent from Soul Guidance Website`
            );

            const mailtoLink = `mailto:soulguidances@hotmail.com?subject=${subject}&body=${body}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            showNotification('Prayer request prepared! Your email client should open now.', 'success');

            // Reset form and close modal
            this.reset();
            setTimeout(() => {
                closePrayerModal();
            }, 2000);
        });
    }

    // Initialize Advanced Multi-Step Form
    initMultiStepForm();
}

// Multi-Step Form Logic
function initMultiStepForm() {
    const form = document.getElementById('advancedPrayerForm');
    if (!form) return;

    let currentStep = 1;
    const totalSteps = 5;

    const updateUI = () => {
        // Update Steps
        form.querySelectorAll('.form-step').forEach(step => {
            step.style.display = step.dataset.step == currentStep ? 'block' : 'none';
        });

        // Update Progress
        const progress = (currentStep / totalSteps) * 100;
        const progressBar = form.querySelector('.progress-fill');
        const currentStepText = form.querySelector('.current-step');
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (currentStepText) currentStepText.textContent = currentStep;

        // Update Buttons
        const prevBtn = form.querySelector('.btn-prev');
        const nextBtn = form.querySelector('.btn-next');
        const submitBtn = form.querySelector('.btn-submit');

        if (prevBtn) prevBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';

        if (currentStep === totalSteps) {
            if (nextBtn) nextBtn.style.display = 'none';
            if (submitBtn) submitBtn.style.display = 'inline-flex';
        } else {
            if (nextBtn) nextBtn.style.display = 'inline-flex';
            if (submitBtn) submitBtn.style.display = 'none';
        }
    };

    // Navigation Listeners
    const nextBtn = form.querySelector('.btn-next');
    if (nextBtn) {
        // Avoid duplicate listeners
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateUI();
            }
        });
    }

    const prevBtn = form.querySelector('.btn-prev');
    if (prevBtn) {
        const newPrev = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        newPrev.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateUI();
            }
        });
    }

    // Form Submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect Data
        const formData = new FormData(this);
        const name = formData.get('name');
        const type = this.querySelector('.option-btn.active')?.dataset.value || 'General';
        const urgency = formData.get('urgency');
        const details = formData.get('prayer-details');

        // Create Mailto
        const subject = encodeURIComponent(`URGENT PRAYER: ${type} - ${name}`);
        const body = encodeURIComponent(
            `NAME: ${name}\n` +
            `TYPE: ${type}\n` +
            `URGENCY: ${urgency}\n` +
            `DETAILS:\n${details}\n\n` +
            `Sent from Soul Guidance Modal`
        );

        window.location.href = `mailto:soulguidances@hotmail.com?subject=${subject}&body=${body}`;

        showNotification('Prayer request prepared! Opening email...', 'success');
        setTimeout(closePrayerModal, 2000);
    });

    // Option Selection Logic
    form.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            form.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Auto advance on selection
            setTimeout(() => {
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateUI();
                }
            }, 300);
        });
    });

    // Initialize UI
    updateUI();
}

// Button Effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('professional-ripple');

            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
    });
}

// Accessibility Features
function initAccessibility() {
    // Keyboard navigation for modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closePrayerModal();
        }
    });

    // Focus management for modal
    const modal = document.getElementById('safePrayerModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closePrayerModal();
            }
        });
    }

    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
        });
    }
}

// Initialize Prayer Buttons specifically
// Initialize Prayer Buttons specifically
function initPrayerButtons() {
    // List of all major call-to-action buttons
    const buttonIds = [
        'prayerRequestBtn',
        'finalPrayerBtn',
        'transformation-btn'
    ];

    console.log('🔄 Initializing prayer buttons...');

    buttonIds.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            // Remove old listeners to prevent duplicates (cloning)
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', function (e) {
                e.preventDefault();
                console.log(`✅ Button clicked: ${id}`);
                const type = id === 'transformation-btn' ? 'transformation' : 'maronite';
                openPrayerModal(type);
            });
            console.log(`✅ Attached listener to: ${id}`);
        } else {
            console.warn(`⚠️ Button not found: ${id}`);
        }
    });

    // Also attach to any generic .open-modal-btn class if added later
    document.querySelectorAll('.open-modal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openPrayerModal('maronite');
        });
    });
}

// Modal Functions
function openPrayerModal(type = 'maronite') {
    if (window.isSiteLoading) {
        console.warn('⛔ Blocked startup popup attempt');
        return;
    }
    console.log('Opening prayer modal...', type);
    const modal = document.getElementById('safePrayerModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Update form based on prayer type
        const textarea = modal.querySelector('textarea');

        if (type === 'maronite' && textarea) {
            textarea.value = `MARONITE PRAYER INTENTION REQUEST - طلب صلاة مارونية

Dear Soul Guidance Maronite Community,
عزيزتي جماعة إرشاد الروح المارونية،

I humbly submit my prayer intentions to be included in our daily Maronite liturgies and traditional Eastern Christian prayers.

PRAYER INTENTIONS - نيات الصلاة:
□ For healing (physical, emotional, spiritual)
□ For family members and loved ones  
□ For guidance in life decisions
□ For peace and comfort in difficult times
□ For spiritual growth and closer relationship with Christ
□ For the intercession of Our Lady and the saints
□ For the souls of the departed
□ Other specific intentions: _______________

With faith and gratitude - بالإيمان والامتنان,

[Your Full Name - اسمك الكامل]
[Your Email Address - عنوان بريدك الإلكتروني]
[Your Location - موقعك]`;
        } else if (type === 'transformation' && textarea) {
            textarea.value = `LIFE TRANSFORMATION REQUEST - PRIORITY

Dear Soul Guidance Ministry Team,

I am ready to experience complete life transformation through Jesus Christ.

CURRENT LIFE SITUATION:
□ Feeling lost and without purpose
□ Struggling with depression/anxiety
□ Relationship problems
□ Financial difficulties
□ Addiction or harmful habits
□ Spiritual emptiness
□ Other: _______________

TRANSFORMATION GOALS:
□ Find my divine purpose and calling
□ Experience genuine joy and peace
□ Build strong relationship with Jesus Christ
□ Heal from past wounds and trauma
□ Restore broken relationships
□ Achieve financial breakthrough
□ Break free from destructive patterns

I believe in the power of Jesus Christ to transform lives and I am ready to experience this miracle in my own life.

In faith and expectation,

[Your Full Name]
[Your Phone Number]
[Your Email Address]
[Your Location]`;
        }

        // Focus first input
        const firstInput = modal.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }

        console.log('Prayer modal opened successfully');
    } else {
        console.error('Prayer modal not found!');
    }
}

function closePrayerModal() {
    console.log('Closing prayer modal...');
    const modal = document.getElementById('safePrayerModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('Prayer modal closed successfully');
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
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
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Contact Functions
function callNow() {
    window.location.href = 'tel:+1234567555';
}

function sendEmail() {
    const subject = encodeURIComponent('Inquiry from Soul Guidance Website');
    const body = encodeURIComponent('Hello Soul Guidance Team,\n\nI am interested in learning more about your ministry and services.\n\nPlease contact me at your earliest convenience.\n\nThank you!');
    window.location.href = `mailto:soulguidances@hotmail.com?subject=${subject}&body=${body}`;
}

// Export functions for global access
window.openPrayerModal = openPrayerModal;
window.closePrayerModal = closePrayerModal;
window.callNow = callNow;
window.sendEmail = sendEmail;
window.showNotification = showNotification;

console.log('✅ Soul Guidance Website JavaScript loaded successfully!');


// ========================================
// PRAYER BOOK FUNCTIONS
// ========================================

// Show Prayer Section Navigation
function showPrayerSection(sectionId) {
    console.log('📖 Showing prayer section:', sectionId);

    // Scroll to the prayer section
    const prayerSection = document.getElementById('prayer');
    if (prayerSection) {
        prayerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Update active button
    document.querySelectorAll('.book-nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    showNotification(`Opening ${sectionId.replace('-', ' ')} prayers`, 'success');
}

// Divine Mercy Book Functions - FIXED for duplicate IDs
function openDivineMercyBook() {
    console.log('📖 Opening Divine Mercy Book');

    // Use the correct ID directly
    const bookCover = document.getElementById('bookCover');
    const bookContent = document.getElementById('bookContent');

    console.log('Using book cover:', bookCover);
    console.log('Using book content:', bookContent);

    if (bookCover && bookContent) {
        bookCover.style.display = 'none';
        bookContent.style.display = 'block';

        // Show first chapter by default
        const firstChapter = document.getElementById('table-of-contents');
        if (firstChapter) {
            firstChapter.style.display = 'block';
            firstChapter.classList.add('active');
        }

        // Scroll to book content
        setTimeout(() => {
            bookContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        showNotification('Divine Mercy Book opened! 📖', 'success');
        console.log('✅ Divine Mercy Book opened successfully');
    } else {
        console.error('❌ Book elements not found!');
        console.error('bookCover:', bookCover);
        console.error('bookContent:', bookContent);
        showNotification('Error: Could not open book', 'error');
    }
}

function closeDivineMercyBook() {
    console.log('📖 Closing Divine Mercy Book');

    // Use the correct ID directly
    const bookCover = document.getElementById('bookCover');
    const bookContent = document.getElementById('bookContent');

    console.log('Using book cover:', bookCover);
    console.log('Using book content:', bookContent);

    if (bookCover && bookContent) {
        bookContent.style.display = 'none';
        bookCover.style.display = 'block';

        // Scroll to book cover
        setTimeout(() => {
            bookCover.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        showNotification('Divine Mercy Book closed', 'info');
        console.log('✅ Divine Mercy Book closed successfully');
    } else {
        console.error('❌ Book elements not found!');
        showNotification('Error: Could not close book', 'error');
    }
}

function showChapter(chapterId) {
    console.log('📖 Showing chapter:', chapterId);

    // Hide all chapters
    document.querySelectorAll('.book-chapter').forEach(chapter => {
        chapter.classList.remove('active');
        chapter.style.display = 'none';
    });

    // Remove active from all buttons
    document.querySelectorAll('.chapter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected chapter
    const chapter = document.getElementById(chapterId);
    if (chapter) {
        chapter.classList.add('active');
        chapter.style.display = 'block';

        // Add active to button
        const btn = document.querySelector(`[onclick="showChapter('${chapterId}')"]`);
        if (btn) btn.classList.add('active');
    }
}

// Saint Anthony Book Functions - FIXED for duplicate IDs
function openAnthonyBook() {
    console.log('📖 Opening Saint Anthony Book');

    // Use the correct ID directly
    const bookCover = document.getElementById('anthonyBookCover');
    const bookContent = document.getElementById('anthonyBookContent');

    console.log('Anthony book cover:', bookCover);
    console.log('Anthony book content:', bookContent);

    if (bookCover && bookContent) {
        bookCover.style.display = 'none';
        bookContent.style.display = 'block';

        // Show first chapter by default
        const firstChapter = document.getElementById('anthony-table-of-contents');
        if (firstChapter) {
            firstChapter.style.display = 'block';
            firstChapter.classList.add('active');
        }

        setTimeout(() => {
            bookContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        showNotification('Saint Anthony Book opened! 📖', 'success');
        console.log('✅ Saint Anthony Book opened successfully');
    } else {
        console.error('❌ Anthony book elements not found!');
        showNotification('Error: Could not open book', 'error');
    }
}

function closeAnthonyBook() {
    console.log('📖 Closing Saint Anthony Book');

    const bookCover = document.getElementById('anthonyBookCover');
    const bookContent = document.getElementById('anthonyBookContent');

    if (bookCover && bookContent) {
        bookContent.style.display = 'none';
        bookCover.style.display = 'block';

        setTimeout(() => {
            bookCover.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        showNotification('Saint Anthony Book closed', 'info');
        console.log('✅ Saint Anthony Book closed successfully');
    } else {
        console.error('❌ Anthony book elements not found!');
        showNotification('Error: Could not close book', 'error');
    }
}

function showAnthonyChapter(chapterId) {
    console.log('📖 Showing Anthony chapter:', chapterId);

    // Hide all Anthony chapters
    document.querySelectorAll('#anthonyBookContent .book-chapter').forEach(chapter => {
        chapter.classList.remove('active');
        chapter.style.display = 'none';
    });

    // Remove active from all buttons
    document.querySelectorAll('#anthonyBookContent .chapter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected chapter
    const chapter = document.getElementById(chapterId);
    if (chapter) {
        chapter.classList.add('active');
        chapter.style.display = 'block';

        // Add active to button
        const btn = document.querySelector(`[onclick="showAnthonyChapter('${chapterId}')"]`);
        if (btn) btn.classList.add('active');
    }
}

// Holy Rosary Book Functions - FIXED for duplicate IDs
function openRosaryBook() {
    console.log('📖 Opening Holy Rosary Book');

    const bookCover = document.getElementById('rosaryBookCover');
    const bookContent = document.getElementById('rosaryBookContent');

    console.log('Rosary book cover:', bookCover);
    console.log('Rosary book content:', bookContent);

    if (bookCover && bookContent) {
        bookCover.style.display = 'none';
        bookContent.style.display = 'block';

        // Show first chapter by default
        const firstChapter = document.getElementById('rosary-table-of-contents');
        if (firstChapter) {
            firstChapter.style.display = 'block';
            firstChapter.classList.add('active');
        }

        setTimeout(() => {
            bookContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        showNotification('Holy Rosary Book opened! 📖', 'success');
        console.log('✅ Holy Rosary Book opened successfully');
    } else {
        console.error('❌ Rosary book elements not found!');
        showNotification('Error: Could not open book', 'error');
    }
}

function closeRosaryBook() {
    console.log('📖 Closing Holy Rosary Book');

    const bookCover = document.getElementById('rosaryBookCover');
    const bookContent = document.getElementById('rosaryBookContent');

    if (bookCover && bookContent) {
        bookContent.style.display = 'none';
        bookCover.style.display = 'block';

        setTimeout(() => {
            bookCover.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        showNotification('Holy Rosary Book closed', 'info');
        console.log('✅ Holy Rosary Book closed successfully');
    } else {
        console.error('❌ Rosary book elements not found!');
        showNotification('Error: Could not close book', 'error');
    }
}

function showRosaryChapter(chapterId) {
    console.log('📖 Showing Rosary chapter:', chapterId);

    // Hide all Rosary chapters
    document.querySelectorAll('#rosaryBookContent .book-chapter').forEach(chapter => {
        chapter.classList.remove('active');
        chapter.style.display = 'none';
    });

    // Remove active from all buttons
    document.querySelectorAll('#rosaryBookContent .chapter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected chapter
    const chapter = document.getElementById(chapterId);
    if (chapter) {
        chapter.classList.add('active');
        chapter.style.display = 'block';

        // Add active to button
        const btn = document.querySelector(`[onclick="showRosaryChapter('${chapterId}')"]`);
        if (btn) btn.classList.add('active');
    }
}

// Spiritual Warfare Book Functions - FIXED for duplicate IDs
function openWarfareBook() {
    console.log('📖 Opening Spiritual Warfare Book');

    const bookCover = document.getElementById('warfareBookCover');
    const bookContent = document.getElementById('warfareBookContent');

    console.log('Warfare book cover:', bookCover);
    console.log('Warfare book content:', bookContent);

    if (bookCover && bookContent) {
        bookCover.style.display = 'none';
        bookContent.style.display = 'block';

        // Show first chapter by default
        const firstChapter = document.getElementById('warfare-table-of-contents');
        if (firstChapter) {
            firstChapter.style.display = 'block';
            firstChapter.classList.add('active');
        }

        setTimeout(() => {
            bookContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        showNotification('Spiritual Warfare Book opened! ⚔️', 'success');
        console.log('✅ Spiritual Warfare Book opened successfully');
    } else {
        console.error('❌ Warfare book elements not found!');
        showNotification('Error: Could not open book', 'error');
    }
}

function closeWarfareBook() {
    console.log('📖 Closing Spiritual Warfare Book');

    const bookCover = document.getElementById('warfareBookCover');
    const bookContent = document.getElementById('warfareBookContent');

    if (bookCover && bookContent) {
        bookContent.style.display = 'none';
        bookCover.style.display = 'block';

        setTimeout(() => {
            bookCover.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        showNotification('Spiritual Warfare Book closed', 'info');
        console.log('✅ Spiritual Warfare Book closed successfully');
    } else {
        console.error('❌ Warfare book elements not found!');
        showNotification('Error: Could not close book', 'error');
    }
}

function showWarfareChapter(chapterId) {
    console.log('⚔️ Showing Warfare chapter:', chapterId);

    // Hide all Warfare chapters
    document.querySelectorAll('#warfareBookContent .book-chapter').forEach(chapter => {
        chapter.classList.remove('active');
        chapter.style.display = 'none';
    });

    // Remove active from all buttons
    document.querySelectorAll('#warfareBookContent .chapter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected chapter
    const chapter = document.getElementById(chapterId);
    if (chapter) {
        chapter.classList.add('active');
        chapter.style.display = 'block';

        // Add active to button
        const btn = document.querySelector(`[onclick="showWarfareChapter('${chapterId}')"]`);
        if (btn) btn.classList.add('active');
    }
}

// Export all functions to window
window.showPrayerSection = showPrayerSection;
window.openDivineMercyBook = openDivineMercyBook;
window.closeDivineMercyBook = closeDivineMercyBook;
window.showChapter = showChapter;
window.openAnthonyBook = openAnthonyBook;
window.closeAnthonyBook = closeAnthonyBook;
window.showAnthonyChapter = showAnthonyChapter;
window.openRosaryBook = openRosaryBook;
window.closeRosaryBook = closeRosaryBook;
window.showRosaryChapter = showRosaryChapter;
window.openWarfareBook = openWarfareBook;
window.closeWarfareBook = closeWarfareBook;
window.showWarfareChapter = showWarfareChapter;

console.log('✅ All prayer book functions loaded successfully!');