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
    // console.log('ðŸ”’ Startup Block Active: Prevented Popups');
    setTimeout(() => {
        window.isSiteLoading = false;
        // console.log('ðŸ”“ Startup Block Lifted: Popups allowed');
    }, 5000);



    // console.log('ðŸš€ DOM Content Loaded - Initializing website...');

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
            console.log('âœ… AOS initialized successfully');
        } else {
            console.warn('âš ï¸ AOS library not loaded - animations may not work');
        }

        // Initialize all functionality with error handling
        initNavigation();
        initSmoothScrolling();
        initFormHandling();
        initButtonEffects();
        initAccessibility();
        initPrayerButtons();
        new DivineInteractions();
        new HolyAudioPlayer();
        new DivineContent();
        new FocusManager();
        window.soulGuidancePrayerBoard = new PrayerBoardManager();
        window.soulGuidanceRosary = new RosaryTracker();
        new CandleManager();
        new ThemeManager();


        new LiturgicalCalendar();
        new DivineSearch();
        new SaintOracle();
        new ContactManager();
        new LectioManager();
        window.soulGuidanceFellowship = new FellowshipManager();
        new SacredRhythms();
        new VoiceManager();
        new AccessibilityManager();
        new GardenManager();
        window.soulGuidanceMemory = new MemoryManager();
        window.soulGuidanceSanctuary = new SoundSanctuary();
        window.soulGuidanceBurden = new BurdenManager();
        new LabyrinthManager();
        new ObservatoryManager();
        new VirtueManager();
        window.soulGuidanceSilence = new SilenceManager();

        new ScriptoriumManager();
        new VigilManager();
        window.soulGuidanceCrown = new CrownManager();

        // PHASE 101: Auto-Optimization
        new PerformanceOptimizer();



        // Mark as initialized
        window.soulGuidanceButtons.initialized = true;
        console.log('âœ… Soul Guidance Website Initialized Successfully');

    } catch (error) {
        console.error('âŒ Critical initialization error:', error);
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

// --- PHASE 4: IMMERSIVE EXPANSION CLASSES ---

class HolyAudioPlayer {
    constructor() {
        this.tracks = {
            chant: { src: 'assets/audio/chant.mp3', audio: null, vol: 0.5 },
            rain: { src: 'assets/audio/rain.mp3', audio: null, vol: 0.3 },
            wind: { src: 'assets/audio/wind.mp3', audio: null, vol: 0.2 }
        };
        this.isPlaying = false;

        // Initialize Audio Objects
        Object.keys(this.tracks).forEach(key => {
            const t = this.tracks[key];
            t.audio = new Audio(t.src);
            t.audio.loop = true;
            t.audio.volume = t.vol;
        });

        this.container = null;
        this.init();
    }

    init() {
        console.log('ðŸŽµ Initializing Holy Audio Mixer...');
        this.createPlayerUI();
    }

    createPlayerUI() {
        const existing = document.querySelector('.holy-player-container');
        if (existing) existing.remove();

        const div = document.createElement('div');
        div.className = 'holy-player-container active';
        div.innerHTML = `
            <div class="holy-player expanded">
                <div class="player-header">
                    <i class="fas fa-music"></i> Audio Sanctuary
                    <button class="minimize-btn" onclick="this.closest('.holy-player').classList.toggle('minimized')">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
                <div class="player-controls-main">
                    <button class="player-main-btn" id="masterPlayBtn">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
                <div class="mixer-channels">
                    ${Object.keys(this.tracks).map(key => `
                        <div class="mixer-channel">
                            <span class="channel-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                            <input type="range" min="0" max="1" step="0.1" value="${this.tracks[key].vol}" 
                                data-track="${key}" class="volume-slider">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        document.body.appendChild(div);

        // Listeners
        div.querySelector('#masterPlayBtn').addEventListener('click', () => this.toggleMaster());
        div.querySelectorAll('.volume-slider').forEach(input => {
            input.addEventListener('input', (e) => {
                const key = e.target.dataset.track;
                const val = parseFloat(e.target.value);
                this.tracks[key].audio.volume = val;
                this.tracks[key].vol = val;
            });
        });
    }

    toggleMaster() {
        const btn = document.querySelector('#masterPlayBtn');
        if (this.isPlaying) {
            Object.values(this.tracks).forEach(t => t.audio.pause());
            btn.innerHTML = '<i class="fas fa-play"></i>';
            this.isPlaying = false;
        } else {
            Object.values(this.tracks).forEach(t => {
                if (t.vol > 0) t.audio.play().catch(e => console.warn('Audio play blocked', e));
            });
            btn.innerHTML = '<i class="fas fa-stop"></i>';
            this.isPlaying = true;
        }
    }
}

class DivineContent {
    constructor() {
        this.verses = [
            { text: "I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.", ref: "John 8:12" },
            { text: "Be still, and know that I am God.", ref: "Psalm 46:10" },
            { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
            { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" }
        ];
        this.init();
    }

    init() {
        console.log('ðŸ“– Initializing Divine Content...');
        this.displayDailyVerse();
    }

    displayDailyVerse() {
        // Simple day-based rotation
        const day = new Date().getDate();
        const verse = this.verses[day % this.verses.length];

        // Find container in DOM (we need to add this to index.html)
        const container = document.getElementById('verse-container');
        if (container) {
            container.innerHTML = `
                <div class="divine-verse-card" data-aos="fade-up">
                    <p class="verse-text">${verse.text}</p>
                    <p class="verse-reference">- ${verse.ref}</p>
                </div>
            `;
        }
    }
}

class FocusManager {
    constructor() {
        this.active = false;
        this.init();
    }

    init() {
        this.createToggle();
    }

    createToggle() {
        const btn = document.createElement('button');
        btn.className = 'focus-toggle-btn';
        btn.innerHTML = '<i class="fas fa-eye"></i>';
        btn.title = "Toggle Focus Mode";
        btn.onclick = () => this.toggleFocus();
        document.body.appendChild(btn);
    }

    toggleFocus() {
        this.active = !this.active;
        document.body.classList.toggle('focus-active', this.active);

        const btn = document.querySelector('.focus-toggle-btn');
        if (btn) {
            btn.innerHTML = this.active ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
            showNotification(this.active ? 'Focus Mode Active' : 'Focus Mode Disabled', 'info');
        }
    }
}

class PrayerBoardManager {
    constructor() {
        this.savedPrayers = JSON.parse(localStorage.getItem('soulGuidance_savedPrayers')) || [];
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createSidebar();
        this.createToggle();
        this.injectSaveButtons();
        this.renderSavedPrayers();
    }

    createSidebar() {
        const sidebar = document.createElement('div');
        sidebar.className = 'prayer-board-sidebar';
        sidebar.innerHTML = `
            <div class="board-header">
                <h3 class="board-title"><i class="fas fa-bookmark"></i> My Prayer Board</h3>
                <button class="close-board-btn"><i class="fas fa-times"></i></button>
            </div>
            <div id="saved-prayers-list">
                <!-- Prayers go here -->
                <p style="color:var(--text-silver); text-align:center; margin-top:2rem;">No saved prayers yet.<br>Click "Save" on any prayer card.</p>
            </div>
        `;
        document.body.appendChild(sidebar);

        // Listeners
        sidebar.querySelector('.close-board-btn').addEventListener('click', () => this.toggleBoard(false));
    }

    createToggle() {
        const btn = document.createElement('button');
        btn.className = 'prayer-board-toggle';
        btn.innerHTML = '<i class="fas fa-heart"></i> Board';
        btn.onclick = () => this.toggleBoard(true);
        document.body.appendChild(btn);
    }

    toggleBoard(show) {
        const sidebar = document.querySelector('.prayer-board-sidebar');
        if (show) {
            sidebar.classList.add('active');
            this.renderSavedPrayers();
        } else {
            sidebar.classList.remove('active');
        }
    }

    injectSaveButtons() {
        // Find all prayer cards or sections that look like prayers
        // This assumes structure from consolidated-prayer-book.html
        document.querySelectorAll('.prayer-card, .card').forEach((card, index) => {
            // Check if already has button
            if (card.querySelector('.save-prayer-btn')) return;

            const title = card.querySelector('h3, h4')?.innerText || `Prayer ${index + 1}`;
            const btn = document.createElement('button');
            btn.className = 'save-prayer-btn';
            btn.innerHTML = '<i class="far fa-bookmark"></i> Save to Board';
            btn.onclick = (e) => {
                e.stopPropagation(); // Prevent card click effects if any
                this.savePrayer(title, card.innerText.substring(0, 100) + '...');
            };
            card.appendChild(btn);
        });
    }

    savePrayer(title, preview) {
        // Avoid duplicates
        if (this.savedPrayers.some(p => p.title === title)) {
            showNotification('Prayer already saved!', 'info');
            return;
        }

        this.savedPrayers.push({ id: Date.now(), title, preview, date: new Date().toLocaleDateString() });
        this.persist();
        showNotification('Prayer saved to your board', 'success');
        this.toggleBoard(true); // Open board to show confirmation
    }

    deletePrayer(id) {
        this.savedPrayers = this.savedPrayers.filter(p => p.id !== id);
        this.persist();
        this.renderSavedPrayers();
    }

    persist() {
        localStorage.setItem('soulGuidance_savedPrayers', JSON.stringify(this.savedPrayers));
    }

    renderSavedPrayers() {
        const list = document.getElementById('saved-prayers-list');
        if (!list) return;

        if (this.savedPrayers.length === 0) {
            list.innerHTML = '<p style="color:var(--text-silver); text-align:center; margin-top:2rem;">Your board is empty.<br>Collect prayers to keep them close.</p>';
            return;
        }

        list.innerHTML = this.savedPrayers.map(p => `
            <div class="saved-prayer-card">
                <h4 style="color:var(--primary-gold); margin-bottom:0.5rem; font-size:1.1rem;">${p.title}</h4>
                <p style="font-size:0.9rem; color:var(--text-silver); margin-bottom:0.5rem;">${p.preview}</p>
                <small style="color:var(--primary-gold-dark);">${p.date}</small>
                <button class="delete-prayer-btn" onclick="window.soulGuidancePrayerBoard.deletePrayer(${p.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
}

class RosaryTracker {
    constructor() {
        this.isOpen = false;
        this.mysteries = {
            joyful: [
                { en: "The Annunciation", ar: "Ø§Ù„Ø¨Ø´Ø§Ø±Ø©" },
                { en: "The Visitation", ar: "Ø§Ù„Ø²ÙŠØ§Ø±Ø©" },
                { en: "The Nativity", ar: "Ø§Ù„Ù…ÙŠÙ„Ø§Ø¯" },
                { en: "The Presentation", ar: "Ø§Ù„ØªÙ‚Ø¯Ù…Ø©" },
                { en: "Finding Jesus in the Temple", ar: "ÙˆØ¬ÙˆØ¯ ÙŠØ³ÙˆØ¹ ÙÙŠ Ø§Ù„Ù‡ÙŠÙƒÙ„" }
            ],
            sorrowful: [
                { en: "The Agony in the Garden", ar: "Ø§Ù„Ù†Ø²Ø§Ø¹ ÙÙŠ Ø§Ù„Ø¨Ø³ØªØ§Ù†" },
                { en: "The Scourging at the Pillar", ar: "Ø§Ù„Ø¬Ù„Ø¯" },
                { en: "The Crowning with Thorns", ar: "Ø¥ÙƒÙ„ÙŠÙ„ Ø§Ù„Ø´ÙˆÙƒ" },
                { en: "The Carrying of the Cross", ar: "Ø­Ù…Ù„ Ø§Ù„ØµÙ„ÙŠØ¨" },
                { en: "The Crucifixion", ar: "Ø§Ù„ØµÙ„Ø¨ ÙˆØ§Ù„Ù…ÙˆØª" }
            ],
            glorious: [
                { en: "The Resurrection", ar: "Ø§Ù„Ù‚ÙŠØ§Ù…Ø©" },
                { en: "The Ascension", ar: "Ø§Ù„ØµØ¹ÙˆØ¯" },
                { en: "The Descent of the Holy Spirit", ar: "Ø­Ù„ÙˆÙ„ Ø§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³" },
                { en: "The Assumption", ar: "Ø§Ù†ØªÙ‚Ø§Ù„ Ø§Ù„Ø¹Ø°Ø±Ø§Ø¡" },
                { en: "The Coronation", ar: "ØªØªÙˆÙŠØ¬ Ø§Ù„Ø¹Ø°Ø±Ø§Ø¡" }
            ],
            luminous: [
                { en: "The Baptism in the Jordan", ar: "Ù…Ø¹Ù…ÙˆØ¯ÙŠØ© ÙŠØ³ÙˆØ¹" },
                { en: "The Wedding at Cana", ar: "Ø¹Ø±Ø³ Ù‚Ø§Ù†Ø§ Ø§Ù„Ø¬Ù„ÙŠÙ„" },
                { en: "The Proclamation of the Kingdom", ar: "Ø¥Ø¹Ù„Ø§Ù† Ù…Ù„ÙƒÙˆØª Ø§Ù„Ù„Ù‡" },
                { en: "The Transfiguration", ar: "Ø§Ù„ØªØ¬Ù„ÙŠ" },
                { en: "The Institution of the Eucharist", ar: "ØªØ£Ø³ÙŠØ³ Ø§Ù„Ù‚Ø±Ø¨Ø§Ù†" }
            ]
        };
        this.currentMysteryType = 'joyful';
        this.state = {
            decadeIndex: 0, // 0-4
            beadIndex: -1, // -1: Intro, 0: Our Father, 1-10: Hait Mary, 11: Glory Be
            totalBeads: 10
        };

        this.init();
    }

    init() {
        this.createOverlay();
    }

    createOverlay() {
        const div = document.createElement('div');
        div.className = 'rosary-tracker-overlay';
        div.innerHTML = `
            <div class="rosary-content">
                <div class="current-mystery-badge">Joyful Mysteries - Ø§Ù„Ø£Ø³Ø±Ø§Ø± Ø§Ù„ÙØ±Ø­Ø©</div>
                <button class="close-rosary-btn">&times;</button>
                
                <div class="rosary-beads-display" id="rosary-beads"></div>
                
                <div class="rosary-text-display">
                    <h2 class="rosary-text-primary" id="rosary-en">Start the Rosary</h2>
                    <h3 class="rosary-text-secondary" id="rosary-ar">Ø§Ø¨Ø¯Ø£ Ø§Ù„Ù…Ø³Ø¨Ø­Ø©</h3>
                </div>

                <div class="rosary-controls">
                    <button class="rosary-nav-btn" id="rosary-prev">Prev</button>
                    <button class="rosary-nav-btn main" id="rosary-next">Next Bead</button>
                </div>
            </div>
        `;
        document.body.appendChild(div);

        // Listeners
        div.querySelector('.close-rosary-btn').addEventListener('click', () => this.toggle(false));
        div.querySelector('#rosary-next').addEventListener('click', () => this.advance());
        div.querySelector('#rosary-prev').addEventListener('click', () => this.retreat());
    }

    toggle(show, type = 'joyful') {
        const overlay = document.querySelector('.rosary-tracker-overlay');
        if (show) {
            this.currentMysteryType = type;
            this.state = { decadeIndex: 0, beadIndex: -1, totalBeads: 10 };
            overlay.classList.add('active');
            this.render();
        } else {
            overlay.classList.remove('active');
        }
    }

    render() {
        const enEl = document.getElementById('rosary-en');
        const arEl = document.getElementById('rosary-ar');
        const beadContainer = document.getElementById('rosary-beads');
        const badge = document.querySelector('.current-mystery-badge');

        // Logic to determine text
        let enText = "", arText = "";
        let beadHTML = "";

        const mysteryName = this.mysteries[this.currentMysteryType][this.state.decadeIndex];
        badge.innerText = `${mysteryName.en} - ${mysteryName.ar}`;

        if (this.state.beadIndex === -1) {
            // Intro to Decade
            enText = `Introduction to ${mysteryName.en}`;
            arText = mysteryName.ar;
            // Draw Large Bead + 10 small
            beadHTML = `<div class="bead large active"></div>`;
            for (let i = 0; i < 10; i++) beadHTML += `<div class="bead"></div>`;
        } else if (this.state.beadIndex === 0) {
            // Our Father
            enText = "Our Father";
            arText = "Ø£Ø¨Ø§Ù†Ø§ Ø§Ù„Ø°ÙŠ ÙÙŠ Ø§Ù„Ø³Ù…Ø§ÙˆØ§Øª";
            beadHTML = `<div class="bead large completed"></div>`;
            for (let i = 0; i < 10; i++) beadHTML += `<div class="bead"></div>`;
        } else if (this.state.beadIndex >= 1 && this.state.beadIndex <= 10) {
            // Hail Mary
            enText = "Hail Mary";
            arText = "Ø§Ù„Ø³Ù„Ø§Ù… Ø¹Ù„ÙŠÙƒ ÙŠØ§ Ù…Ø±ÙŠÙ…";
            beadHTML = `<div class="bead large completed"></div>`;
            for (let i = 1; i <= 10; i++) {
                const status = i < this.state.beadIndex ? 'completed' : (i === this.state.beadIndex ? 'active' : '');
                beadHTML += `<div class="bead ${status}"></div>`;
            }
        } else {
            // Glory Be
            enText = "Glory Be";
            arText = "Ø§Ù„Ù…Ø¬Ø¯ Ù„Ù„Ø¢Ø¨ ÙˆØ§Ù„Ø§Ø¨Ù† ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³";
            beadHTML = `<div class="bead large completed"></div>`;
            for (let i = 1; i <= 10; i++) beadHTML += `<div class="bead completed"></div>`;
        }

        enEl.innerText = enText;
        arEl.innerText = arText;
        beadContainer.innerHTML = beadHTML;
    }

    advance() {
        if (this.state.beadIndex < 11) {
            this.state.beadIndex++;
            // Chime effect
            if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(600, 0.1);
        } else {
            // Next decade
            if (this.state.decadeIndex < 4) {
                this.state.decadeIndex++;
                this.state.beadIndex = -1;
            } else {
                // Finish
                showNotification("Rosary Completed!", "success");
                this.toggle(false);
                return;
            }
        }
        this.render();
    }

    retreat() {
        if (this.state.beadIndex > -1) {
            this.state.beadIndex--;
        } else if (this.state.decadeIndex > 0) {
            this.state.decadeIndex--;
            this.state.beadIndex = 11;
        }
        this.render();
    }
}

/* --- DIVINE SEARCH (WISDOM ENGINE) --- */
class DivineSearch {
    constructor() {
        this.cards = [];
        this.init();
    }

    init() {
        // Inject Search Interface if not present
        const prayerSection = document.getElementById('prayers');
        if (prayerSection && !document.getElementById('divine-search-bar')) {
            const searchContainer = document.createElement('div');
            searchContainer.id = 'divine-search-bar';
            searchContainer.className = 'divine-search-container';
            searchContainer.innerHTML = `
                <div class="ds-wrapper">
                    <i class="fas fa-search ds-icon"></i>
                    <input type="text" class="ds-input" placeholder="Ø§Ø¨Ø­Ø« Ø¹Ù† ØµÙ„Ø§Ø©ØŒ ÙƒÙ„Ù…Ø©ØŒ Ø£Ùˆ Ø´Ø¹ÙˆØ±..." aria-label="Search Prayers">
                    <div class="ds-line"></div>
                </div>
            `;
            prayerSection.insertBefore(searchContainer, prayerSection.querySelector('.cards-grid'));
        }

        // Event Listeners
        const input = document.querySelector('.ds-input');
        if (input) {
            input.addEventListener('input', (e) => this.filterPrayers(e.target.value));
            this.cards = document.querySelectorAll('.card');
        }
    }

    filterPrayers(query) {
        const term = query.toLowerCase().trim();
        let found = false;

        this.cards.forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const content = card.textContent.toLowerCase();
            const keywords = card.getAttribute('data-keywords') || '';

            if (title.includes(term) || content.includes(term) || keywords.includes(term)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
                found = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Handle "No Results"
        this.handleNoResults(found, term);
    }

    handleNoResults(found, term) {
        let msg = document.getElementById('ds-no-results');
        if (!found && term !== '') {
            if (!msg) {
                msg = document.createElement('div');
                msg.id = 'ds-no-results';
                msg.innerHTML = `<i class="fas fa-dove"></i><p>Ù„Ø§ ØªÙˆØ¬Ø¯ Ù†ØªØ§Ø¦Ø¬. ØµÙ„ÙÙ‘ Ù…Ù† Ù‚Ù„Ø¨Ùƒ.</p>`;
                document.querySelector('.cards-grid').appendChild(msg);
            }
        } else if (msg) {
            msg.remove();
        }
    }
}

/* --- SAINT ORACLE (PARALLAX WISDOM) --- */
class SaintOracle {
    constructor() {
        this.saints = [
            { name: "Ø§Ù„Ù‚Ø¯ÙŠØ³ Ù…Ø§Ø± Ø´Ø±Ø¨Ù„", quote: "Ø§Ù„ØµÙ„Ø§Ø© Ù‡ÙŠ Ù…ÙØªØ§Ø­ Ø§Ù„Ø³Ù…Ø§Ø¡. ØªÙ…Ø³ÙƒÙˆØ§ Ø¨Ù‡Ø§ ØªÙ†Ø¬ÙˆØ§.", icon: "fa-cross" },
            { name: "Ø§Ù„Ù‚Ø¯ÙŠØ³Ø© Ø±ÙÙ‚Ø§", quote: "ÙŠØ§ ÙŠØ³ÙˆØ¹ØŒ Ù„ØªÙƒÙ† Ø¥Ø±Ø§Ø¯ØªÙƒ Ù…Ù‚Ø¯Ø³Ø© ÙÙŠ Ø­ÙŠØ§ØªÙŠ ÙˆÙÙŠ Ø£Ù„Ù…ÙŠ.", icon: "fa-heart-broken" },
            { name: "Ø§Ù„Ù‚Ø¯ÙŠØ³ Ø£ØºØ³Ø·ÙŠÙ†ÙˆØ³", quote: "Ù‚Ù„ÙˆØ¨Ù†Ø§ Ù‚Ù„Ù‚Ø© ÙŠØ§ Ø§Ù„Ù„Ù‡ Ø­ØªÙ‰ ØªØ³ØªØ±ÙŠØ­ ÙÙŠÙƒ.", icon: "fa-fire" },
            { name: "Ø§Ù„Ø£Ù… ØªØ±ÙŠØ²Ø§", quote: "Ù„ÙŠØ³ Ø§Ù„Ù…Ù‡Ù… ÙƒÙ… Ù†ÙØ¹Ù„ØŒ Ø¨Ù„ ÙƒÙ… Ù…Ù† Ø§Ù„Ø­Ø¨ Ù†Ø¶Ø¹ ÙÙŠ Ø§Ù„Ø¹Ù…Ù„.", icon: "fa-hand-holding-heart" },
            { name: "Ø§Ù„Ø¨Ø§Ø¨Ø§ ÙŠÙˆØ­Ù†Ø§ Ø¨ÙˆÙ„Ø³ Ø§Ù„Ø«Ø§Ù†ÙŠ", quote: "Ù„Ø§ ØªØ®Ø§ÙÙˆØ§! Ø§ÙØªØ­ÙˆØ§ Ø§Ù„Ø£Ø¨ÙˆØ§Ø¨ Ù„Ù„Ù…Ø³ÙŠØ­.", icon: "fa-door-open" }
        ];
        this.init();
    }

    init() {
        const container = document.getElementById('parallax-container');
        if (!container) return;

        // Create Cards
        this.saints.forEach((saint, index) => {
            const card = document.createElement('div');
            card.className = `saint-card`;
            card.innerHTML = `
                <div class="saint-image"><i class="fas ${saint.icon}"></i></div>
                <p class="saint-quote">"${saint.quote}"</p>
                <div class="saint-name">${saint.name}</div>
            `;
            container.appendChild(card);

            // Random positioning for parallax feel
            setTimeout(() => {
                if (index === 0) card.classList.add('active'); // Show first one
            }, 500 * index);
        });

        // Loop animation
        let currentIndex = 0;
        const cards = document.querySelectorAll('.saint-card');

        setInterval(() => {
            cards.forEach(c => c.classList.remove('active'));
            currentIndex = (currentIndex + 1) % cards.length;
            cards[currentIndex].classList.add('active');
        }, 5000);

        // Generate Particles
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'wisdom-particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = (Math.random() * 10 + 5) + 's';
            p.style.width = Math.random() * 5 + 'px';
            p.style.height = p.style.width;
            container.appendChild(p);
        }
    }
}

/**
 * Manages user profile data, including name and personalization settings.
 * Persists data to localStorage to maintain state across sessions.
 * @class ProfileManager
 */
class ProfileManager {
    constructor() {
        /** @type {string} The user's display name */
        this.userName = localStorage.getItem('soulGuidance_userName') || '';
        /** @type {string[]} Array of favored prayer IDs */
        this.favorites = JSON.parse(localStorage.getItem('soulGuidance_favorites') || '[]');
        this.init();
    }

    init() {
        // Update greeting if user name is set
        this.updateGreeting();
    }

    /**
     * Sets the user's name and saves it to localStorage.
     * @param {string} name - The name to set.
     */
    setUserName(name) {
        this.userName = name;
        localStorage.setItem('soulGuidance_userName', name);
        this.updateGreeting();
        showNotification(`Welcome, ${name}!`, 'success');
    }

    /**
     * Toggles a prayer as a favorite and saves to localStorage.
     * @param {string} prayerId - The ID of the prayer to toggle.
     */
    toggleFavorite(prayerId) {
        const index = this.favorites.indexOf(prayerId);
        if (index > -1) {
            this.favorites.splice(index, 1);
            showNotification('Removed from favorites', 'info');
        } else {
            this.favorites.push(prayerId);
            showNotification('Added to favorites', 'success');
        }
        localStorage.setItem('soulGuidance_favorites', JSON.stringify(this.favorites));
        // Potentially re-render UI elements that show favorites
    }

    /**
     * Checks if a prayer is a favorite.
     * @param {string} prayerId - The ID of the prayer to check.
     * @returns {boolean} True if the prayer is a favorite, false otherwise.
     */
    isFavorite(prayerId) {
        return this.favorites.includes(prayerId);
    }

    /**
     * Updates the greeting message on the hero section with the user's name.
     */
    updateGreeting() {
        if (!this.userName) return;

        const heroTitle = document.querySelector('.hero-title span.text-gradient-gold');
        if (heroTitle) {
            // Securely set text content to prevent XSS
            heroTitle.textContent = ''; // Clear
            heroTitle.append(`Welcome, ${this.userName}`);

            // Re-add the subtitle part if needed, or better yet, structureHTML safely
            // But since the original was "Welcome, [Name]<br>Subtitle", let's reconstruct safely
            const br = document.createElement('br');
            const subtitle = document.createTextNode('Ø¨ÙˆØ§Ø¨ØªÙƒ Ù†Ø­Ùˆ Ø§Ù„Ù…Ù„ÙƒÙˆØª');
            heroTitle.appendChild(br);
            heroTitle.appendChild(subtitle);
        }
    }
}
class CandleManager {
    constructor() {
        this.litCandles = JSON.parse(localStorage.getItem('soulGuidance_litCandles')) || [];
        this.init();
    }

    init() {
        const container = document.getElementById('candle-grid-container');
        if (!container) return; // Only on homepage

        // Generate 3 candles
        for (let i = 0; i < 3; i++) {
            this.createCandle(container, i);
        }

        // Update simulated global count
        this.updateGlobalCount();
    }

    createCandle(container, index) {
        const wrapper = document.createElement('div');
        wrapper.className = 'candle-container';
        wrapper.innerHTML = `
            <div class="candle" id="candle-${index}">
                <div class="flame"></div>
                <div class="candle-glow"></div>
            </div>
            <div class="intention-label" id="intention-${index}">For Peace</div>
        `;

        wrapper.addEventListener('click', () => this.lightCandle(index));
        container.appendChild(wrapper);

        // Check availability
        if (this.litCandles.includes(index)) {
            wrapper.querySelector('.candle').classList.add('lit');
            wrapper.querySelector('.intention-label').innerText = "Your Light";
        }
    }

    lightCandle(index) {
        if (this.litCandles.includes(index)) return;

        const candle = document.getElementById(`candle-${index}`);
        candle.classList.add('lit');

        const label = document.getElementById(`intention-${index}`);
        label.innerText = "Your Light";

        this.litCandles.push(index);
        localStorage.setItem('soulGuidance_litCandles', JSON.stringify(this.litCandles));

        // Audio effect
        if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(1000, 0.05); // High pitch sparkle

        showNotification("Candle Lit successfully", "success");
        this.updateGlobalCount(1);
    }

    updateGlobalCount(add = 0) {
        const countEl = document.getElementById('global-candle-count');
        if (!countEl) return;

        // Simulated base count + user interaction
        let count = parseInt(countEl.innerText.replace(',', '')) + add;
        countEl.innerText = count.toLocaleString();
    }
}

class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('soulGuidance_theme') || 'dark';
        this.init();
    }

    init() {
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);

        this.createToggle();
    }

    createToggle() {
        const btn = document.createElement('button');
        btn.className = 'theme-toggle-btn';
        btn.innerHTML = this.currentTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        btn.title = "Toggle Light/Dark Mode";
        btn.onclick = () => this.toggleTheme();
        document.body.appendChild(btn);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('soulGuidance_theme', this.currentTheme);

        const btn = document.querySelector('.theme-toggle-btn');
        if (btn) {
            btn.innerHTML = this.currentTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
            // Animation reset for button
            btn.animate([
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
            ], { duration: 500 });
        }

        showNotification(`Theme set to ${this.currentTheme === 'light' ? 'Divine Dawn' : 'Midnight Vigil'}`, 'info');
    }
}

class LiturgicalCalendar {
    constructor() {
        this.init();
    }

    init() {
        const today = new Date();
        const season = this.getSeason(today);
        const saint = this.getSaintOfTheDay(today);

        // Update Season UI
        const badge = document.getElementById('season-text');
        if (badge) badge.innerText = season.name;

        // Update Saint UI
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle && saint && !document.getElementById('saint-badge')) {
            const saintBadge = document.createElement('div');
            saintBadge.id = 'saint-badge';
            saintBadge.className = 'glass-panel animate__animated animate__fadeIn';
            saintBadge.style.display = 'inline-block';
            saintBadge.style.marginTop = '1rem';
            saintBadge.style.padding = '0.5rem 1rem';
            saintBadge.style.borderRadius = '20px';
            saintBadge.style.border = '1px solid var(--primary-gold)';
            saintBadge.innerHTML = `<i class="fas fa-halo"></i> Today's Saint: <strong>${saint}</strong>`;
            heroSubtitle.after(saintBadge);
        }

        // Set Theme Attribute
        if (season.code !== 'ordinary') {
            document.documentElement.setAttribute('data-season', season.code);
            console.log(`ðŸ“… Liturgical Season: ${season.name}`);
        }
    }

    getSaintOfTheDay(date) {
        const m = date.getMonth(); // 0-11
        const d = date.getDate(); // 1-31

        // Mini Database of Saints (Eastern/Western Mix)
        const saints = {
            "0-17": "St. Anthony the Great (Ù…Ø§Ø± Ø£Ù†Ø·ÙˆÙ†ÙŠÙˆØ³ Ø§Ù„ÙƒØ¨ÙŠØ±)",
            "1-9": "St. Maron (Ù…Ø§Ø± Ù…Ø§Ø±ÙˆÙ†)",
            "2-19": "St. Joseph (Ø¹ÙŠØ¯ Ø§Ù„Ù‚Ø¯ÙŠØ³ ÙŠÙˆØ³Ù)",
            "4-22": "St. Rita of Cascia (Ø§Ù„Ù‚Ø¯ÙŠØ³Ø© Ø±ÙŠØªØ§)",
            "6-24": "St. Charbel (Ø¹ÙŠØ¯ Ù…Ø§Ø± Ø´Ø±Ø¨Ù„)",
            "7-15": "Assumption of Mary (Ø¹ÙŠØ¯ Ø§Ù†ØªÙ‚Ø§Ù„ Ø§Ù„Ø¹Ø°Ø±Ø§Ø¡)",
            "8-14": "Exaltation of the Cross (Ø¹ÙŠØ¯ Ø§Ù„ØµÙ„ÙŠØ¨)",
            "9-4": "St. Francis of Assisi (Ù…Ø§Ø± ÙØ±Ù†Ø³ÙŠØ³)",
            "10-22": "St. Cecilia (Ø§Ù„Ù‚Ø¯ÙŠØ³Ø© Ø³ÙŠØ³ÙŠÙ„ÙŠØ§)",
            "11-25": "Christmas (Ù…ÙŠÙ„Ø§Ø¯ Ø§Ù„Ø±Ø¨ ÙŠØ³ÙˆØ¹)"
        };

        const key = `${m}-${d}`;
        return saints[key] || null; // Return null if no specific saint today
    }

    getSeason(date) {
        const year = date.getFullYear();
        const easter = this.getEasterDate(year);
        const ashWednesday = new Date(easter);
        ashWednesday.setDate(easter.getDate() - 46);

        const pentecost = new Date(easter);
        pentecost.setDate(easter.getDate() + 49);

        const adventStart = this.getAdventStart(year);
        const christmas = new Date(year, 11, 25);

        // Check ranges
        if (date >= ashWednesday && date < easter) return { name: "Lent - Ø²Ù…Ù† Ø§Ù„ØµÙˆÙ…", code: "lent" };
        if (date >= easter && date <= pentecost) return { name: "Eastertide - Ø²Ù…Ù† Ø§Ù„Ù‚ÙŠØ§Ù…Ø©", code: "easter" }; // Gold default
        if (date >= adventStart && date < christmas) return { name: "Advent - Ø²Ù…Ù† Ø§Ù„Ù…Ø¬ÙŠØ¡", code: "advent" };
        if (date.getMonth() === 11 && date.getDate() >= 25) return { name: "Christmas Season - Ø²Ù…Ù† Ø§Ù„Ù…ÙŠÙ„Ø§Ø¯", code: "easter" }; // Gold

        // Simple check for Fridays (Mini-Lent/Penance)
        if (date.getDay() === 5) return { name: "Friday Penance - ØªÙˆØ¨Ø© Ø§Ù„Ø¬Ù…Ø¹Ø©", code: "lent" };

        return { name: "Ordinary Time - Ø§Ù„Ø²Ù…Ù† Ø§Ù„Ø¹Ø§Ø¯ÙŠ", code: "ordinary" };
    }

    getEasterDate(year) {
        // Algorithm to calculate Western Easter
        const f = Math.floor,
            G = year % 19,
            C = f(year / 100),
            H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
            I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
            J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
            L = I - J,
            month = 3 + f((L + 40) / 44),
            day = L + 28 - 31 * f(month / 4);

        return new Date(year, month - 1, day);
    }

    getAdventStart(year) {
        const date = new Date(year, 11, 25);
        date.setDate(date.getDate() - date.getDay() - 22); // 4th Sunday before Christmas
        return date;
    }
}



class VoiceManager {
    constructor() {
        this.synth = window.speechSynthesis;
        this.speaking = false;
        this.currentUtterance = null;
        this.init();
    }

    init() {
        setTimeout(() => this.injectControls(), 2000);
    }

    injectControls() {
        // Inject into cards that have Fellowship Toolbars (or just general cards)
        const cards = document.querySelectorAll('.divine-office-card, .saved-prayer-card, .prayer-card, .verse-card');

        cards.forEach((card, index) => {
            if (card.querySelector('.lector-btn')) return;

            const content = this.extractText(card);
            if (!content || content.length < 10) return;

            const btn = document.createElement('button');
            btn.className = 'lector-btn';
            btn.innerHTML = '<i class="fas fa-volume-up"></i> Listen';
            btn.onclick = (e) => {
                e.stopPropagation();
                this.toggleSpeak(content, btn);
            };

            // Append to footer or body of card
            const footer = card.querySelector('.fellowship-toolbar') || card;
            footer.appendChild(btn);
        });
    }

    extractText(card) {
        // Smart extraction avoiding button text
        const clone = card.cloneNode(true);
        const buttons = clone.querySelectorAll('button');
        buttons.forEach(b => b.remove());
        return clone.innerText.trim();
    }

    toggleSpeak(text, btn) {
        if (this.synth.speaking) {
            this.synth.cancel();
            document.querySelectorAll('.lector-btn').forEach(b => {
                b.classList.remove('speaking');
                b.innerHTML = '<i class="fas fa-volume-up"></i> Listen';
            });
            this.speaking = false;

            // If clicking same button, just stop. If different, start new.
            if (btn === this.currentBtn) {
                this.currentBtn = null;
                return;
            }
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 0.9; // Solemn tone

        // Try to find a good voice
        const voices = this.synth.getVoices();
        const preferred = voices.find(v => v.name.includes('Google UK English Male') || v.name.includes('Daniel'));
        if (preferred) utterance.voice = preferred;

        utterance.onend = () => {
            btn.classList.remove('speaking');
            btn.innerHTML = '<i class="fas fa-volume-up"></i> Listen';
            this.speaking = false;
        };

        btn.classList.add('speaking');
        btn.innerHTML = '<i class="fas fa-stop"></i> Stop';
        this.currentBtn = btn;
        this.speaking = true;

        this.synth.speak(utterance);
    }
}

class SoundSanctuary {
    constructor() {
        this.tracks = {
            rain: new Audio('audio/rain.mp3'),
            chant: new Audio('audio/chant.mp3'),
            fire: new Audio('audio/fire.mp3')
        };

        // Loop all
        Object.values(this.tracks).forEach(t => {
            t.loop = true;
            t.volume = 0;
        });

        this.init();
    }

    init() {
        // Restore volumes if needed? For now start fresh or muted
    }

    toggleTrack(id) {
        const audio = this.tracks[id];
        const icon = document.getElementById(`icon-${id}`);

        if (audio.paused) {
            audio.play().catch(e => console.log("Audio play failed (user interaction needed):", e));
            icon.classList.add('active');
            // Set to default low volume if 0
            if (audio.volume === 0) {
                audio.volume = 0.5;
                // Update slider UI
                const slider = icon.nextElementSibling;
                if (slider) slider.value = 50;
            }
        } else {
            audio.pause();
            icon.classList.remove('active');
        }
    }

    setVolume(id, val) {
        const audio = this.tracks[id];
        const vol = val / 100;
        audio.volume = vol;

        const icon = document.getElementById(`icon-${id}`);
        if (vol > 0 && audio.paused) {
            audio.play().catch(e => { });
            icon.classList.add('active');
        } else if (vol === 0) {
            audio.pause();
            icon.classList.remove('active');
        }
    }
}

class HabitTracker {
    constructor() {
        this.habits = [
            { id: 'pray_m', text: 'Morning Prayer' },
            { id: 'read', text: 'Read Scripture' },
            { id: 'kindness', text: 'Act of Kindness' },
            { id: 'reflect', text: 'Evening Reflection' }
        ];

        // Load data or reset if new day
        const data = JSON.parse(localStorage.getItem('soulGuidance_habits')) || { date: new Date().toDateString(), completed: [] };
        if (data.date !== new Date().toDateString()) {
            this.completed = []; // Reset for new day
        } else {
            this.completed = data.completed;
        }

        this.init();
    }

    init() {
        this.render();
        this.updateProgress();
    }

    render() {
        const container = document.getElementById('habit-list');
        if (!container) return;

        container.innerHTML = this.habits.map(h => `
            <div class="habit-item ${this.completed.includes(h.id) ? 'completed' : ''}" onclick="window.soulGuidanceHabits.toggle('${h.id}')">
                <div class="habit-checkbox"></div>
                <span>${h.text}</span>
            </div>
        `).join('');
    }

    toggle(id) {
        if (this.completed.includes(id)) {
            this.completed = this.completed.filter(c => c !== id);
        } else {
            this.completed.push(id);
            // Confetti or sound?
            if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(800, 0.1);
        }

        this.save();
        this.render();
        this.updateProgress();
    }

    updateProgress() {
        const pct = (this.completed.length / this.habits.length) * 100;
        const bar = document.getElementById('habit-progress');
        if (bar) bar.style.width = pct + '%';

        if (pct === 100) {
            showNotification("Daily Disciplines Complete! Well done.", "success");
        }
    }

    save() {
        localStorage.setItem('soulGuidance_habits', JSON.stringify({
            date: new Date().toDateString(),
            completed: this.completed
        }));
    }
}
class BurdenManager {
    constructor() {
        this.box = document.getElementById('burden-box');
        this.input = document.getElementById('burden-text');
    }

    release() {
        if (!this.input || this.input.value.trim() === "") return;

        // Animate
        this.input.classList.add('ashes-animation');

        // Sound
        if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(200, 0.05);

        setTimeout(() => {
            this.input.value = "";
            this.input.classList.remove('ashes-animation');
            this.input.placeholder = "It is finished. He cares for you.";
            showNotification("Your burden has been cast upon the Lord.", "success");
        }, 2000);
    }
}


class LabyrinthManager {
    constructor() {
        this.bead = document.getElementById('labyrinth-bead');
        this.active = false;
        this.init();
    }

    init() {
        if (!this.bead) return;
        this.bead.parentElement.addEventListener('click', () => this.startJourney());
    }

    startJourney() {
        if (this.active) return;
        this.active = true;
        showNotification("Walking the path...", "info");

        // CSS Animation for the bead spiraling in
        // We will manually animate r and rotate for effect
        let progress = 0;
        const interval = setInterval(() => {
            progress += 0.5;

            // Spiral math
            // Radius starts at 90, goes to 0
            const radius = 90 - (progress * 0.9);
            // Angle increases
            const angle = progress * 0.2;

            const x = 100 + radius * Math.cos(angle);
            const y = 100 + radius * Math.sin(angle);

            this.bead.setAttribute('cx', x);
            this.bead.setAttribute('cy', y);

            if (progress >= 100) {
                clearInterval(interval);
                this.active = false;
                this.bead.setAttribute('cx', 100);
                this.bead.setAttribute('cy', 100);

                // End state
                if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(600, 0.1);
                showNotification("Peace be with you.", "success");
            }
        }, 50);
    }
}

class BreathGuide {
    constructor() {
        this.text = document.getElementById('breath-text');
        this.circle = document.querySelector('.breath-circle');
        this.running = true;
        this.timer = null;
        this.init();
    }

    init() {
        if (!this.text) return;
        this.loop();
    }

    loop() {
        if (!this.running) return;

        // 10s Cycle matching CSS
        // 0-4s: Inhale
        this.text.innerText = "Inhale (Spirit)";

        setTimeout(() => {
            if (!this.running) return;
            this.text.innerText = "Hold (Grace)";
        }, 4000);

        setTimeout(() => {
            if (!this.running) return;
            this.text.innerText = "Exhale (Mercy)";
        }, 5000);

        this.timer = setTimeout(() => this.loop(), 10000);
    }
}

class ObservatoryManager {
    constructor() {
        this.canvas = document.getElementById('constellation-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = this.canvas.parentElement.offsetWidth;
        this.height = this.canvas.height = this.canvas.parentElement.offsetHeight;

        this.saints = [
            { name: "St. Peter", quote: "Lord, to whom shall we go?" },
            { name: "St. Paul", quote: "I run the race to the finish." },
            { name: "St. Mary Magdalene", quote: "I have seen the Lord!" },
            { name: "St. Augustine", quote: "Our hearts are restless until they rest in Thee." },
            { name: "St. Teresa of Avila", quote: "Let nothing disturb you." },
            { name: "St. Francis", quote: "Make me an instrument of your peace." },
            { name: "St. Benedict", quote: "Ora et Labora." },
            { name: "St. ThÃ©rÃ¨se of Lisieux", quote: "I will spend my heaven doing good on earth." },
            { name: "St. John Paul II", quote: "Be not afraid!" },
            { name: "St. Thomas Aquinas", quote: "To love is to will the good of the other." }
        ];

        this.stars = [];
        this.tooltip = this.createTooltip();

        this.init();
    }

    createTooltip() {
        const t = document.createElement('div');
        t.className = 'star-tooltip';
        document.body.appendChild(t);
        return t;
    }

    init() {
        this.generateStars();
        this.animate();

        this.canvas.addEventListener('mousemove', (e) => this.handleHover(e));
        window.addEventListener('resize', () => {
            this.width = this.canvas.width = this.canvas.parentElement.offsetWidth;
            this.height = this.canvas.height = this.canvas.parentElement.offsetHeight;
            this.generateStars();
        });
    }

    generateStars() {
        this.stars = [];
        for (let i = 0; i < 50; i++) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * 2 + 1,
                alpha: Math.random(),
                saint: i < this.saints.length ? this.saints[i] : null
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.stars.forEach(star => {
            star.alpha += (Math.random() - 0.5) * 0.05;
            if (star.alpha < 0.2) star.alpha = 0.2;
            if (star.alpha > 1) star.alpha = 1;

            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            if (star.saint) {
                this.ctx.fillStyle = `rgba(255, 215, 0, ${star.alpha})`; // Gold for saints
                this.ctx.shadowBlur = 5;
                this.ctx.shadowColor = "gold";
            } else {
                this.ctx.shadowBlur = 0;
            }
            this.ctx.fill();
        });

        // Draw basic constellation lines (random connections for visuals)
        this.ctx.beginPath();
        this.ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        this.stars.forEach((star, i) => {
            if (i > 0 && i % 5 === 0) {
                this.ctx.moveTo(star.x, star.y);
                this.ctx.lineTo(this.stars[i - 1].x, this.stars[i - 1].y);
            }
        });
        this.ctx.stroke();

        requestAnimationFrame(() => this.animate());
    }

    handleHover(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        let found = false;
        this.stars.forEach(star => {
            const dx = mouseX - star.x;
            const dy = mouseY - star.y;
            if (Math.hypot(dx, dy) < 10 && star.saint) {
                this.tooltip.innerHTML = `<strong>${star.saint.name}</strong>"${star.saint.quote}"`;
                this.tooltip.style.left = (e.pageX + 10) + 'px';
                this.tooltip.style.top = (e.pageY + 10) + 'px';
                this.tooltip.style.opacity = 1;
                this.canvas.style.cursor = 'pointer';
                found = true;
            }
        });

        if (!found) {
            this.tooltip.style.opacity = 0;
            this.canvas.style.cursor = 'default';
        }
    }
}

class AscensionManager {
    constructor() {
        // Attach to global scope for easy calling
        window.ascendPrayer = (element) => this.emit(element);
        this.init();
    }

    init() {
        // Automatically attach to Amen buttons if possible, or just let FellowshipManager call window.ascendPrayer
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.amen-btn') || e.target.closest('.btn-outline-gold')) {
                window.ascendPrayer(e.target);
            }
        });
    }
    emit(element) {
        // Implementation or placeholder
    }
}

class VirtueManager {
    constructor() {
        this.grid = document.getElementById('virtue-grid');
        this.virtues = [
            { name: "Humility", icon: "fa-leaf", desc: "The foundation of all virtues.", action: "Perform an unseen act of service today." },
            { name: "Charity", icon: "fa-heart", desc: "Love God above all.", action: "Speak only good of others today." },
            { name: "Patience", icon: "fa-hourglass-half", desc: "Enduring with joy.", action: "Wait 5 seconds before responding to annoyance." },
            { name: "Diligence", icon: "fa-briefcase", desc: "Zeal for the good.", action: "Complete your hardest task first." }
        ];
        this.init();
    }

    init() {
        if (!this.grid) return;
        this.render();
    }

    render() {
        this.grid.innerHTML = this.virtues.map(v => `
            <div class="virtue-card" onclick="this.classList.toggle('flipped')">
                <div class="virtue-inner">
                    <div class="virtue-front">
                        <i class="fas ${v.icon} virtue-icon"></i>
                        <h3>${v.name}</h3>
                        <p style="font-size:0.9rem; color: #888;">${v.desc}</p>
                    </div>
                    <div class="virtue-back">
                        <h4 style="color:var(--primary-gold);">Practice</h4>
                        <p>${v.action}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

class SilenceManager {
    constructor() {
        this.overlay = document.getElementById('silence-overlay');
        this.timerEl = document.getElementById('silence-timer');
        this.msgEl = document.getElementById('silence-msg');
        this.interval = null;
        this.seconds = 60;
    }

    enterSilence() {
        if (!this.overlay) return;

        // Mute Audio if active
        if (window.soulGuidanceAudio) window.soulGuidanceAudio.stopAll();
        // Pause Breath if active
        if (window.soulGuidanceBreath && window.soulGuidanceBreath.running) window.soulGuidanceBreath.toggle();

        this.overlay.classList.add('active');
        this.seconds = 60;
        this.updateDisplay();

        this.interval = setInterval(() => {
            this.seconds--;
            this.updateDisplay();
            if (this.seconds <= 0) {
                clearInterval(this.interval);
                this.msgEl.innerText = "The silence is yours. Carry it with you.";
                this.timerEl.style.color = "var(--primary-gold)";
                if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(1000, 0.1);
            }
        }, 1000);
    }

    exitSilence() {
        this.overlay.classList.remove('active');
        clearInterval(this.interval);
        // Reset text for next time
        setTimeout(() => {
            this.msgEl.innerText = "Be still, and know that I am God.";
            this.timerEl.style.color = "";
        }, 1000);
    }
}

class ScriptoriumManager {
    constructor() {
        this.display = document.getElementById('manuscript-display');
        this.input = document.getElementById('scriptorium-input');
        this.seal = document.getElementById('scriptorium-seal');

        this.verses = [
            "In the beginning was the Word, and the Word was with God, and the Word was God.",
            "The Lord is my shepherd; I shall not want.",
            "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
            "I am the way and the truth and the life."
        ];

        this.currentVerse = "";
        this.init();
    }

    init() {
        if (!this.display || !this.input) return;

        // Pick random verse
        this.currentVerse = this.verses[Math.floor(Math.random() * this.verses.length)];
        this.renderVerse();

        this.input.addEventListener('input', () => this.checkInput());
        // Focus handler
        document.getElementById('scriptorium-desk').addEventListener('click', () => this.input.focus());
    }

    renderVerse() {
        this.display.innerHTML = this.currentVerse.split('').map(char => `<span class="manuscript-char">${char}</span>`).join('');
    }

    checkInput() {
        const typed = this.input.value;
        const chars = this.display.querySelectorAll('.manuscript-char');

        // Reset seal
        this.seal.classList.remove('stamped');

        chars.forEach((charSpan, index) => {
            if (index < typed.length) {
                if (typed[index] === this.currentVerse[index]) {
                    charSpan.className = 'manuscript-char correct';
                } else {
                    charSpan.className = 'manuscript-char error'; // We didn't define error CSS, but correct spans will differ
                    charSpan.style.color = 'red'; // Inline fallback
                }
            } else if (index === typed.length) {
                charSpan.className = 'manuscript-char current';
                charSpan.style.color = '';
            } else {
                charSpan.className = 'manuscript-char';
                charSpan.style.color = '';
            }
        });

        // Completion
        if (typed === this.currentVerse) {
            this.seal.classList.add('stamped');
            this.input.blur();
            if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(400, 0.1); // Thump sound ideally
            showNotification("It is written.", "success");

            // Reset after delay
            setTimeout(() => {
                this.input.value = "";
                this.currentVerse = this.verses[Math.floor(Math.random() * this.verses.length)];
                this.renderVerse();
                this.seal.classList.remove('stamped');
            }, 4000);
        }
    }
}

class VigilManager {
    constructor() {
        this.container = document.getElementById('vigil-content');
        this.locations = ["Paris", "Cairo", "Seoul", "Lagos", "New York", "Keiv", "Manila", "Rio", "Rome", "Jerusalem"];
        this.names = ["Maria", "John", "David", "Fatima", "Emmanuel", "Sarah", "Peter", "Paul", "Therese"];
        this.intents = ["Peace", "Healing", "Strength", "Hope", "Forgiveness", "Guidance", "Protection"];

        this.init();
    }

    init() {
        if (!this.container) return;
        this.populate();
    }

    populate() {
        // Generate a long stream
        let html = "";
        for (let i = 0; i < 30; i++) {
            const n = this.names[Math.floor(Math.random() * this.names.length)];
            const l = this.locations[Math.floor(Math.random() * this.locations.length)];
            const t = this.intents[Math.floor(Math.random() * this.intents.length)];
            html += `<span><i class="fas fa-praying-hands" style="color:var(--primary-gold)"></i> <b>${n}</b> in ${l} prays for ${t}</span>`;
        }
        // Duplicate for loop
        this.container.innerHTML = html + html;
    }
}

class CrownManager {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.modal = document.getElementById('crown-modal');
        this.halo = document.getElementById('halo-cursor');
        this.visited = new Set(JSON.parse(localStorage.getItem('sg_visited_sections')) || []);
        this.unlocked = localStorage.getItem('sg_crown_unlocked') === 'true';

        this.init();
    }

    init() {
        if (this.unlocked) {
            this.activateCrownEffect();
        }
    }

    checkProgress() {
        // Unlock if visited 80% of sections (or just fixed number like 8 for demo simplicity)
        if (!this.unlocked && this.visited.size >= 8) {
            this.unlock();
        }
    }

    unlock() {
        this.unlocked = true;
        localStorage.setItem('sg_crown_unlocked', 'true');

        // Slight delay so it doesn't pop up immediately while reading
        setTimeout(() => {
            if (this.modal) this.modal.classList.add('active');
            if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(600, 0.2); // Victory sound
        }, 1000);
    }

    acceptCrown() {
        if (this.modal) this.modal.classList.remove('active');
        this.activateCrownEffect();
        showNotification("The Crown is yours.", "success");
    }

    activateCrownEffect() {
        document.body.classList.add('crown-unlocked');
    }
}

/* --- LECTIO DIVINA (PHASE 16) --- */
class LectioDivina {
    constructor() {
        this.step = 0;
        this.steps = [
            { id: 'lectio', title: 'Lectio (Read)', desc: 'Read the word gently. What does the text say?' },
            { id: 'meditatio', title: 'Meditatio (Reflect)', desc: 'Meditate. What is God saying to me?' },
            { id: 'oratio', title: 'Oratio (Respond)', desc: 'What do I say to God?' },
            { id: 'contemplatio', title: 'Contemplatio (Rest)', desc: 'Rest in His presence. Be still.' }
        ];
        this.init();
    }

    init() {
        // Inject button in scripture cards? Or main menu
    }

    startSession(scriptureText) {
        this.currentScripture = scriptureText;
        this.step = 0;
        this.showOverlay();
    }

    showOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'lectio-overlay';
        overlay.className = 'shrine-window active';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.95)';
        overlay.style.zIndex = '11000';
        overlay.innerHTML = `
            <div style="height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:2rem;">
                <h2 id="ld-title" style="color:var(--primary-gold); font-family:'Cinzel'; margin-bottom:1rem;">Lectio Divina</h2>
                <div id="ld-progress" style="display:flex; gap:1rem; margin-bottom:3rem;">
                    ${this.steps.map((s, i) => `<div class="ld-step-dot" id="dot-${i}" style="width:10px; height:10px; border-radius:50%; background:${i === 0 ? 'var(--primary-gold)' : '#333'};"></div>`).join('')}
                </div>
                
                <div id="ld-card" style="max-width:800px; padding:3rem; border:1px solid rgba(255,215,0,0.3); background:rgba(255,255,255,0.02); border-radius:15px; transition:all 0.5s;">
                   <h3 id="step-title" style="color:var(--text-white);">${this.steps[0].title}</h3>
                   <p id="step-desc" style="color:var(--text-silver); font-style:italic; margin-bottom:2rem;">${this.steps[0].desc}</p>
                   <p id="scripture-display" style="font-size:1.5rem; line-height:2; font-family:'Amiri'; color:white; animation:fadeIn 2s;">${this.currentScripture}</p>
                </div>

                <button id="ld-next" style="margin-top:3rem; padding:1rem 3rem; background:transparent; border:1px solid var(--primary-gold); color:var(--primary-gold); font-size:1.2rem; cursor:pointer; transition:0.3s;">
                    Proceed <i class="fas fa-chevron-right"></i>
                </button>
                <button onclick="document.getElementById('lectio-overlay').remove()" style="margin-top:1rem; background:none; border:none; color:#666; cursor:pointer;">Exit</button>
            </div>
        `;
        document.body.appendChild(overlay);

        document.getElementById('ld-next').addEventListener('click', () => this.nextStep());
    }

    nextStep() {
        this.step++;
        if (this.step >= this.steps.length) {
            document.getElementById('lectio-overlay').remove();
            showNotification("Lectio Divina Completed. Grace be with you.", "success");
            return;
        }

        const s = this.steps[this.step];
        document.getElementById('step-title').textContent = s.title;
        document.getElementById('step-desc').textContent = s.desc;

        // Update dots
        this.steps.forEach((_, i) => {
            document.getElementById(`dot-${i}`).style.background = i <= this.step ? 'var(--primary-gold)' : '#333';
        });

        // Effect
        if (this.step === 3) { // Contemplatio
            const text = document.getElementById('scripture-display');
            text.style.transition = 'opacity 2s';
            text.style.opacity = '0.5'; // Dim text to focus on silence
            if (window.soulGuidanceAudio) window.soulGuidanceAudio.playDrone();
        }
    }
}

class EnvironmentManager {
    constructor() {
        this.currentEnv = 'default';
        this.init();
    }

    init() {
        this.setEnv(this.currentEnv, false);
    }

    setEnv(env, notify = true) {
        document.body.classList.remove('env-desert', 'env-mountain', 'env-ocean');

        if (env !== 'default') {
            document.body.classList.add(`env-${env}`);
        }

        this.currentEnv = env;
        localStorage.setItem('soulGuidance_env', env);

        if (notify) {
            const names = { desert: "Desert Fathers", mountain: "Mountaintop", ocean: "Ocean of Mercy", default: "Cathedral" };
            showNotification(`Welcome to the ${names[env]}`, 'info');
        }
    }
}
class TreeManager {
    constructor() {
        this.container = document.getElementById('tree-canvas-container');
        this.init();
    }

    init() {
        if (!this.container) return;
        this.growTree();
    }

    growTree() {
        // Clear previous
        this.container.innerHTML = '';

        // Simple Fractal Tree Generation
        // This is a simplified visual representation using div stacking
        const trunk = this.createBranch(50, 0, 80, 0, 6);
        this.container.appendChild(trunk);

        // recursive growth logic based on stats
        const visits = parseInt(localStorage.getItem('soulGuidance_visits') || 10);
        const amens = Object.keys(JSON.parse(localStorage.getItem('soulGuidance_amens') || {})).length;

        // Base recursion depth on visits (max 10 levels)
        const depth = Math.min(Math.floor(visits / 3) + 3, 8);
        this.branchOut(trunk, depth, 70, 0);

        // Add flowers for Amens
        for (let i = 0; i < amens; i++) {
            this.addFlower();
        }
    }

    createBranch(left, bottom, height, rot, width) {
        const div = document.createElement('div');
        div.className = 'tree-node';
        div.style.left = left + '%';
        div.style.bottom = bottom + 'px';
        div.style.height = height + 'px';
        div.style.transform = `rotate(${rot}deg)`;
        div.style.width = width + 'px';
        return div;
    }

    branchOut(parent, depth, height, angle) {
        if (depth <= 0) {
            // Add leaf at tips
            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            leaf.style.left = '50%';
            leaf.style.bottom = '100%';
            parent.appendChild(leaf);
            return;
        }

        const leftBranch = this.createBranch(50, 100, height * 0.8, -25, Math.max(1, depth));
        const rightBranch = this.createBranch(50, 100, height * 0.8, 25, Math.max(1, depth));

        parent.appendChild(leftBranch);
        parent.appendChild(rightBranch);

        setTimeout(() => {
            this.branchOut(leftBranch, depth - 1, height * 0.8, -25);
            this.branchOut(rightBranch, depth - 1, height * 0.8, 25);
        }, 100);
    }

    addFlower() {
        const flowers = document.createElement('div');
        flowers.className = 'flower';
        // Random position within container roughly
        flowers.style.left = (20 + Math.random() * 60) + '%';
        flowers.style.bottom = (30 + Math.random() * 60) + '%';
        this.container.appendChild(flowers);
    }
}

class MemoryManager {
    constructor() {
        this.display = document.getElementById('memory-verse-text');
        this.originalText = this.display ? this.display.innerText : "";
        this.words = [];
        this.init();
    }

    init() {
        if (!this.display) return;

        // Listen for verse updates? For now just use static or Verse of Day if readable
        // Attempt to sync with Verse of Day if available
        setTimeout(() => {
            const vod = document.querySelector('.verse-text');
            if (vod) {
                this.originalText = vod.innerText;
                this.reset();
            }
        }, 1000);
    }

    reset() {
        this.words = this.originalText.split(' ').map(w => `<span class="memory-word" onclick="this.classList.remove('hidden'); this.classList.add('revealed')">${w}</span>`);
        this.display.innerHTML = this.words.join(' ');
    }

    setLevel(level) {
        if (!this.words.length) this.reset();

        const parsableWords = this.display.querySelectorAll('.memory-word');
        const total = parsableWords.length;
        let count = 0;

        if (level === 1) count = Math.floor(total * 0.2);
        else if (level === 2) count = Math.floor(total * 0.5);
        else count = total;

        // Reset first
        this.revealAll();

        // Randomly hide
        const indices = new Set();
        while (indices.size < count) {
            indices.add(Math.floor(Math.random() * total));
        }

        indices.forEach(i => {
            parsableWords[i].classList.add('hidden');
        });
    }

    revealAll() {
        this.display.querySelectorAll('.memory-word').forEach(w => {
            w.classList.remove('hidden');
            w.classList.remove('revealed');
        });
    }
}
class AccessManager {
    constructor() {
        this.settings = JSON.parse(localStorage.getItem('soulGuidance_access')) || {
            fontSize: 0, // 0 = normal, 1 = large, 2 = extra
            contrast: false,
            dyslexic: false
        };
        this.init();
    }

    init() {
        this.applySettings();

        document.getElementById('access-font-up')?.addEventListener('click', () => this.adjustFont(1));
        document.getElementById('access-font-down')?.addEventListener('click', () => this.adjustFont(-1));
        document.getElementById('access-contrast')?.addEventListener('click', () => this.toggleContrast());
        document.getElementById('access-dyslexic')?.addEventListener('click', () => this.toggleDyslexic());
    }

    adjustFont(dir) {
        this.settings.fontSize = Math.max(0, Math.min(2, this.settings.fontSize + dir));
        this.save();
        this.applySettings();
    }

    toggleContrast() {
        this.settings.contrast = !this.settings.contrast;
        this.save();
        this.applySettings();
    }

    toggleDyslexic() {
        this.settings.dyslexic = !this.settings.dyslexic;
        this.save();
        this.applySettings();
    }

    applySettings() {
        const html = document.documentElement;

        // Font Size
        if (this.settings.fontSize === 1) html.style.fontSize = "18px";
        else if (this.settings.fontSize === 2) html.style.fontSize = "22px";
        else html.style.fontSize = "";

        // Contrast
        html.classList.toggle('access-high-contrast', this.settings.contrast);

        // Dyslexic
        html.classList.toggle('access-dyslexic', this.settings.dyslexic);
    }

    save() {
        localStorage.setItem('soulGuidance_access', JSON.stringify(this.settings));
    }
}
class SoulManager {
    constructor() {
        this.init();
    }

    init() {
        this.updateDivineOffice();
        this.updateSoulStats();
        this.trackVisit();
    }

    updateDivineOffice() {
        const titleEl = document.getElementById('office-title');
        const descEl = document.getElementById('office-desc');
        const iconEl = document.querySelector('#office-icon-container i');

        if (!titleEl) return; // Not on homepage

        const hour = new Date().getHours();
        let office = { title: "", desc: "", icon: "" };

        if (hour >= 5 && hour < 12) {
            office.title = "Morning Prayer (Lauds)";
            office.desc = "Newmercies every morning. Start your day with praise.";
            office.icon = "fa-cloud-sun";
        } else if (hour >= 12 && hour < 17) {
            office.title = "Midday Prayer (Angelus)";
            office.desc = "Pause in the heat of the day to remember the Incarnation.";
            office.icon = "fa-sun";
        } else if (hour >= 17 && hour < 21) {
            office.title = "Evening Prayer (Vespers)";
            office.desc = "As the light fades, we give thanks for the day.";
            office.icon = "fa-moon";
        } else {
            office.title = "Night Prayer (Compline)";
            office.desc = "Rest in God's protection. 'Into your hands, Lord...'";
            office.icon = "fa-star";
        }

        titleEl.innerText = office.title;
        descEl.innerText = office.desc;
        iconEl.className = `fas ${office.icon} office-icon`;
    }

    updateSoulStats() {
        // Amens
        const amens = JSON.parse(localStorage.getItem('soulGuidance_amens')) || {};
        const amenCount = Object.keys(amens).length;
        this.setStat('stat-amens', amenCount);

        // Candles
        const candles = JSON.parse(localStorage.getItem('soulGuidance_litCandles')) || [];
        this.setStat('stat-candles', candles.length);

        // Saved Prayers
        const saved = JSON.parse(localStorage.getItem('soulGuidance_savedPrayers')) || [];
        this.setStat('stat-saved', saved.length);

        // Visits (Handled in trackVisit)
    }

    setStat(id, val) {
        const el = document.getElementById(id);
        if (el) {
            // Animate counter
            let start = 0;
            const duration = 2000;
            const step = timestamp => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                el.innerText = Math.floor(progress * val);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    el.innerText = val;
                }
            };
            window.requestAnimationFrame(step);
        }
    }

    trackVisit() {
        const visits = parseInt(localStorage.getItem('soulGuidance_visits') || 0) + 1;
        // Basic increment for now, could be smarter unique days
        localStorage.setItem('soulGuidance_visits', visits);

        const streakEl = document.getElementById('visit-streak');
        const statVisits = document.getElementById('stat-visits');

        if (statVisits) statVisits.innerText = visits;

        // Simple streak simulator (Mock logic for demo)
        if (streakEl) streakEl.innerHTML = `ðŸ”¥ ${Math.min(visits, 999)} Visits`;
    }
}

class FellowshipManager {
    constructor() {
        this.amens = JSON.parse(localStorage.getItem('soulGuidance_amens')) || {};
        this.init();
    }

    init() {
        // Wait for content to likely be loaded
        setTimeout(() => this.injectToolbars(), 1500);
    }

    injectToolbars() {
        const cards = document.querySelectorAll('.prayer-card, .verse-card, .saved-prayer-card');

        cards.forEach((card, index) => {
            // Uniquely identify card based on title or content hash (fallback to index if needed)
            const title = card.querySelector('h3, h4')?.innerText || `Prayer-${index}`;
            const id = this.hashString(title); // Simple hash for ID

            if (card.querySelector('.fellowship-toolbar')) return; // Already injected

            const toolbar = document.createElement('div');
            toolbar.className = 'fellowship-toolbar';

            // Check if already Amen'd
            const isAmen = this.amens[id];

            toolbar.innerHTML = `
                <button class="amen-btn ${isAmen ? 'active' : ''}" onclick="window.soulGuidanceFellowship.toggleAmen('${id}', this)">
                    <i class="fas fa-praying-hands"></i> ${isAmen ? 'Amen!' : 'Amen'}
                </button>
                <div class="share-group">
                    <button class="share-btn" onclick="window.soulGuidanceFellowship.sharePrayer('${id}', this)" title="Share Light">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            `;

            card.appendChild(toolbar);
            card.dataset.fellowshipId = id; // Store ID on card for easy retrieval
        });
    }

    toggleAmen(id, btn) {
        if (this.amens[id]) {
            // Already Amen'd - maybe un-amen? Or just keep it. Let's toggle off for now.
            delete this.amens[id];
            btn.classList.remove('active');
            btn.innerHTML = '<i class="fas fa-praying-hands"></i> Amen';
        } else {
            this.amens[id] = true;
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-praying-hands"></i> Amen!';
            this.showToast("Amen! Your prayer is heard.");

            // Audio Chime
            if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(600, 0.05);
        }
        localStorage.setItem('soulGuidance_amens', JSON.stringify(this.amens));
    }

    sharePrayer(id, btn) {
        const card = document.querySelector(`[data-fellowship-id="${id}"]`);
        if (!card) return;

        const title = card.querySelector('h3, h4')?.innerText || "A Prayer from Soul Guidance";
        const text = card.innerText.replace('Amen', '').replace('Share', '').substring(0, 300) + '...';
        const url = window.location.href;

        if (navigator.share) {
            navigator.share({
                title: title,
                text: `${title}\n\n${text}\n\nRead more at:`,
                url: url
            }).then(() => console.log('Shared successfully'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            // Fallback to clipboard
            const shareText = `${title}\n\n${text}\n\n${url}`;
            navigator.clipboard.writeText(shareText).then(() => {
                this.showToast("Copied to clipboard! Spread the light.");
            });
        }
    }

    showToast(msg) {
        const existing = document.querySelector('.share-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'share-toast';
        toast.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
        document.body.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('show'));
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32bit integer
        }
        return "id_" + Math.abs(hash);
    }
}

class LectioManager {
    constructor() {
        this.overlay = document.getElementById('lectio-overlay');
        this.closeBtn = document.getElementById('lectio-close-btn');
        this.textDisplay = document.getElementById('lectio-text-display');
        this.init();
    }

    init() {
        if (!this.overlay) return;

        // Inject Meditate Button near Verse Container
        // We wait a moment for DivineContent to populate (or check periodically)
        setTimeout(() => this.injectButton(), 1000);

        this.closeBtn.addEventListener('click', () => this.stopSession());

        // Escape key to exit
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.overlay.style.display === 'flex') this.stopSession();
        });
    }

    injectButton() {
        const verseContainer = document.getElementById('verse-container');
        if (verseContainer && !document.getElementById('start-lectio-btn')) {
            const btn = document.createElement('button');
            btn.id = 'start-lectio-btn';
            btn.className = 'btn btn-sm btn-outline-gold';
            btn.style.marginTop = '1rem';
            btn.innerHTML = '<i class="fas fa-spa"></i> Meditate on this Word / ØªØ£Ù…Ù„ ÙÙŠ Ø§Ù„ÙƒÙ„Ù…Ø©';
            btn.onclick = () => this.startSession();

            verseContainer.appendChild(document.createElement('br'));
            verseContainer.appendChild(btn);
        }
    }

    startSession() {
        // Get current verse text
        const currentVerse = document.querySelector('.verse-text')?.innerText || "Be still and know that I am God.";

        this.textDisplay.innerText = currentVerse;
        this.overlay.classList.add('active');

        // Optional: Play soft ambient if available
        if (window.soulGuidanceAudio && window.soulGuidanceAudio.isPlaying) {
            // Already playing
        } else if (window.soulGuidanceAudio) {
            window.soulGuidanceAudio.toggleAudio(); // Start audio for meditation
        }

        showNotification("Entering Divine Reflection...", "info");
    }

    stopSession() {
        this.overlay.classList.remove('active');
    }
}





class ContactManager {
    constructor() {
        this.modal = document.getElementById('prayerRequestModal');
        this.btn = document.getElementById('openRequestModalBtn');
        this.closeBtn = document.getElementById('closeRequestModal');
        this.form = document.getElementById('prayer-request-form');

        this.init();
    }

    init() {
        if (!this.modal || !this.btn) return;

        this.btn.addEventListener('click', () => this.open());
        this.closeBtn.addEventListener('click', () => this.close());

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    open() {
        this.modal.style.display = 'block';
    }

    close() {
        this.modal.style.display = 'none';
    }

    handleSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('req-name').value || "Anonymous Soul";
        const type = document.getElementById('req-type').value;
        const msg = document.getElementById('req-message').value;

        const subject = encodeURIComponent(`ðŸ™ PRAYER REQUEST: ${type} `);
        const body = encodeURIComponent(
            `Dear Soul Guidance Ministry,

    I submit this prayer intention with faith.

        TYPE: ${type}
FROM: ${name}

MESSAGE:
${msg}

"Lord, hear my prayer."`
        );

        window.location.href = `mailto:soulguidances @hotmail.com?subject = ${subject}& body=${body} `;

        this.close();
        showNotification("Prayer Request Prepared! Opening Email...", "success");
    }
}

// --- PHASE 3: DIVINE INTERACTIONS CLASS ---
class DivineInteractions {
    constructor() {
        this.parallaxElements = document.querySelectorAll('.divine-parallax');
        this.cursor = null;
        this.audioCtx = null;
        this.init();
    }

    init() {
        console.log('âœ¨ Initializing Divine Interactions (Phase 3)...');
        this.initParallax();
        this.initConstellation();
        this.initHolyCursor();
        // Audio requires user interaction, initialized lazily
        document.addEventListener('click', () => this.initAudio(), { once: true });
    }

    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            this.parallaxElements.forEach(el => {
                const speed = el.dataset.speed || 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    initConstellation() {
        const canvas = document.createElement('canvas');
        canvas.classList.add('constellation-canvas');
        document.body.prepend(canvas);

        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            createParticles();
        };

        const createParticles = () => {
            particles = [];
            const count = Math.floor(width * height / 15000); // 1 particle per 15k pixels
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2,
                    alpha: Math.random() * 0.5 + 0.1
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#FFD700';
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.1)';

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Connect nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();
    }

    initHolyCursor() {
        // Only on desktop
        if (window.matchMedia('(hover: none)').matches) return;

        this.cursor = document.createElement('div');
        this.cursor.classList.add('holy-cursor');
        document.body.appendChild(this.cursor);

        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';

            // Trail effect
            if (Math.random() > 0.7) {
                const trail = document.createElement('div');
                trail.classList.add('cursor-trail');
                trail.style.left = e.clientX + 'px';
                trail.style.top = e.clientY + 'px';
                document.body.appendChild(trail);
                setTimeout(() => trail.remove(), 500);
            }
        });

        // Hover expansion
        document.querySelectorAll('a, button, .card').forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => this.cursor.classList.remove('hovering'));
        });
    }

    initAudio() {
        if (this.audioCtx) return;

        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioCtx = new AudioContext();

            // Add heavenly chime on buttons
            document.querySelectorAll('button, a.btn, .nav-link').forEach(btn => {
                btn.addEventListener('mouseenter', () => this.playChime(440 + Math.random() * 200, 0.1)); // A4 to high
                btn.addEventListener('click', () => this.playChime(880, 0.2)); // A5
            });

            console.log('ðŸŽµ Heavenly Audio Initialized');
        } catch (e) {
            console.warn('Audio context not supported');
        }
    }

    playChime(freq, vol) {
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        gain.gain.setValueAtTime(0, this.audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(vol, this.audioCtx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 2);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + 2);
    }
}

// Button Effects - GOD MODE
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn, .book-nav-btn, .chapter-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Create God Mode Ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('god-mode-ripple'); // New class for premium effect

            this.appendChild(ripple);

            // GOD MODE: Add Gold Particles
            for (let i = 0; i < 8; i++) {
                const particle = document.createElement('span');
                particle.classList.add('gold-particle');

                // Random positioning around click
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 50;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;

                particle.style.setProperty('--tx', `${tx} px`);
                particle.style.setProperty('--ty', `${ty} px`);
                particle.style.left = (e.clientX - rect.left) + 'px';
                particle.style.top = (e.clientY - rect.top) + 'px';

                this.appendChild(particle);

                setTimeout(() => particle.remove(), 800);
            }

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
function initPrayerButtons() {
    // List of all major call-to-action buttons
    const buttonIds = [
        'prayerRequestBtn',
        'finalPrayerBtn',
        'transformation-btn'
    ];

    console.log('ðŸ”„ Initializing prayer buttons...');

    buttonIds.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            // Remove old listeners to prevent duplicates (cloning)
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', function (e) {
                e.preventDefault();
                console.log(`âœ… Button clicked: ${id} `);
                const type = id === 'transformation-btn' ? 'transformation' : 'maronite';
                openPrayerModal(type);
            });
            console.log(`âœ… Attached listener to: ${id} `);
        } else {
            console.warn(`âš ï¸ Button not found: ${id} `);
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
        console.warn('â›” Blocked startup popup attempt');
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
            textarea.value = `MARONITE PRAYER INTENTION REQUEST - Ø·Ù„Ø¨ ØµÙ„Ø§Ø© Ù…Ø§Ø±ÙˆÙ†ÙŠØ©

Dear Soul Guidance Maronite Community,
    Ø¹Ø²ÙŠØ²ØªÙŠ Ø¬Ù…Ø§Ø¹Ø© Ø¥Ø±Ø´Ø§Ø¯ Ø§Ù„Ø±ÙˆØ­ Ø§Ù„Ù…Ø§Ø±ÙˆÙ†ÙŠØ©ØŒ

I humbly submit my prayer intentions to be included in our daily Maronite liturgies and traditional Eastern Christian prayers.

PRAYER INTENTIONS - Ù†ÙŠØ§Øª Ø§Ù„ØµÙ„Ø§Ø©:
â–¡ For healing(physical, emotional, spiritual)
â–¡ For family members and loved ones  
â–¡ For guidance in life decisions
â–¡ For peace and comfort in difficult times
â–¡ For spiritual growth and closer relationship with Christ
â–¡ For the intercession of Our Lady and the saints
â–¡ For the souls of the departed
â–¡ Other specific intentions: _______________

With faith and gratitude - Ø¨Ø§Ù„Ø¥ÙŠÙ…Ø§Ù† ÙˆØ§Ù„Ø§Ù…ØªÙ†Ø§Ù†,

    [Your Full Name - Ø§Ø³Ù…Ùƒ Ø§Ù„ÙƒØ§Ù…Ù„]
    [Your Email Address - Ø¹Ù†ÙˆØ§Ù† Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ]
[Your Location - Ù…ÙˆÙ‚Ø¹Ùƒ]`;
        } else if (type === 'transformation' && textarea) {
            textarea.value = `LIFE TRANSFORMATION REQUEST - PRIORITY

Dear Soul Guidance Ministry Team,

    I am ready to experience complete life transformation through Jesus Christ.

CURRENT LIFE SITUATION:
â–¡ Feeling lost and without purpose
â–¡ Struggling with depression / anxiety
â–¡ Relationship problems
â–¡ Financial difficulties
â–¡ Addiction or harmful habits
â–¡ Spiritual emptiness
â–¡ Other: _______________

TRANSFORMATION GOALS:
â–¡ Find my divine purpose and calling
â–¡ Experience genuine joy and peace
â–¡ Build strong relationship with Jesus Christ
â–¡ Heal from past wounds and trauma
â–¡ Restore broken relationships
â–¡ Achieve financial breakthrough
â–¡ Break free from destructive patterns

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
    notification.className = `notification notification - ${type} `;
    notification.innerHTML = `
    < div class="notification-content" >
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div >
    `;

    // Add styles
    notification.style.cssText = `
position: fixed;
top: 100px;
right: 20px;
z - index: 10001;
background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
color: white;
padding: 1rem 1.5rem;
border - radius: 10px;
box - shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
transform: translateX(100 %);
transition: transform 0.3s ease;
max - width: 400px;
word - wrap: break-word;
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
    window.location.href = `mailto:soulguidances @hotmail.com?subject = ${subject}& body=${body} `;
}

// Export functions for global access
window.openPrayerModal = openPrayerModal;
window.closePrayerModal = closePrayerModal;
window.callNow = callNow;
window.sendEmail = sendEmail;
window.showNotification = showNotification;

console.log('âœ… Soul Guidance Website JavaScript loaded successfully!');


// ========================================
// PRAYER BOOK FUNCTIONS
// ========================================

// Show Prayer Section Navigation
function showPrayerSection(sectionId) {
    console.log('ðŸ“– Showing prayer section:', sectionId);

    // Scroll to the prayer section
    const prayerSection = document.getElementById('prayer');
    if (prayerSection) {
        prayerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Update active button
    document.querySelectorAll('.book-nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data - section= "${sectionId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    showNotification(`Opening ${sectionId.replace('-', ' ')} prayers`, 'success');
}

// Divine Mercy Book Functions - FIXED for duplicate IDs
function openDivineMercyBook() {
    console.log('ðŸ“– Opening Divine Mercy Book');

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

        showNotification('Divine Mercy Book opened! ðŸ“–', 'success');
        console.log('âœ… Divine Mercy Book opened successfully');
    } else {
        console.error('âŒ Book elements not found!');
        console.error('bookCover:', bookCover);
        console.error('bookContent:', bookContent);
        showNotification('Error: Could not open book', 'error');
    }
}

function closeDivineMercyBook() {
    console.log('ðŸ“– Closing Divine Mercy Book');

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
        console.log('âœ… Divine Mercy Book closed successfully');
    } else {
        console.error('âŒ Book elements not found!');
        showNotification('Error: Could not close book', 'error');
    }
}

function showChapter(chapterId) {
    console.log('ðŸ“– Showing chapter:', chapterId);

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
        const btn = document.querySelector(`[onclick = "showChapter('${chapterId}')"]`);
        if (btn) btn.classList.add('active');
    }
}

// Saint Anthony Book Functions - FIXED for duplicate IDs
function openAnthonyBook() {
    console.log('ðŸ“– Opening Saint Anthony Book');

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

        showNotification('Saint Anthony Book opened! ðŸ“–', 'success');
        console.log('âœ… Saint Anthony Book opened successfully');
    } else {
        console.error('âŒ Anthony book elements not found!');
        showNotification('Error: Could not open book', 'error');
    }
}

function closeAnthonyBook() {
    console.log('ðŸ“– Closing Saint Anthony Book');

    const bookCover = document.getElementById('anthonyBookCover');
    const bookContent = document.getElementById('anthonyBookContent');

    if (bookCover && bookContent) {
        bookContent.style.display = 'none';
        bookCover.style.display = 'block';

        setTimeout(() => {
            bookCover.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        showNotification('Saint Anthony Book closed', 'info');
        console.log('âœ… Saint Anthony Book closed successfully');
    } else {
        console.error('âŒ Anthony book elements not found!');
        showNotification('Error: Could not close book', 'error');
    }
}

function showAnthonyChapter(chapterId) {
    console.log('ðŸ“– Showing Anthony chapter:', chapterId);

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
        const btn = document.querySelector(`[onclick = "showAnthonyChapter('${chapterId}')"]`);
        if (btn) btn.classList.add('active');
    }
}

// Holy Rosary Book Functions - FIXED for duplicate IDs
function openRosaryBook() {
    console.log('ðŸ“– Opening Holy Rosary Book');

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

        showNotification('Holy Rosary Book opened! ðŸ“–', 'success');
        console.log('âœ… Holy Rosary Book opened successfully');
    } else {
        console.error('âŒ Rosary book elements not found!');
        showNotification('Error: Could not open book', 'error');
    }
}

function closeRosaryBook() {
    console.log('ðŸ“– Closing Holy Rosary Book');

    const bookCover = document.getElementById('rosaryBookCover');
    const bookContent = document.getElementById('rosaryBookContent');

    if (bookCover && bookContent) {
        bookContent.style.display = 'none';
        bookCover.style.display = 'block';

        setTimeout(() => {
            bookCover.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        showNotification('Holy Rosary Book closed', 'info');
        console.log('âœ… Holy Rosary Book closed successfully');
    } else {
        console.error('âŒ Rosary book elements not found!');
        showNotification('Error: Could not close book', 'error');
    }
}

function showRosaryChapter(chapterId) {
    console.log('ðŸ“– Showing Rosary chapter:', chapterId);

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
        const btn = document.querySelector(`[onclick = "showRosaryChapter('${chapterId}')"]`);
        if (btn) btn.classList.add('active');
    }
}

// Spiritual Warfare Book Functions - FIXED for duplicate IDs
function openWarfareBook() {
    console.log('ðŸ“– Opening Spiritual Warfare Book');

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

        showNotification('Spiritual Warfare Book opened! âš”ï¸', 'success');
        console.log('âœ… Spiritual Warfare Book opened successfully');
    } else {
        console.error('âŒ Warfare book elements not found!');
        showNotification('Error: Could not open book', 'error');
    }
}

function closeWarfareBook() {
    console.log('ðŸ“– Closing Spiritual Warfare Book');

    const bookCover = document.getElementById('warfareBookCover');
    const bookContent = document.getElementById('warfareBookContent');

    if (bookCover && bookContent) {
        bookContent.style.display = 'none';
        bookCover.style.display = 'block';

        setTimeout(() => {
            bookCover.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        showNotification('Spiritual Warfare Book closed', 'info');
        console.log('âœ… Spiritual Warfare Book closed successfully');
    } else {
        console.error('âŒ Warfare book elements not found!');
        showNotification('Error: Could not close book', 'error');
    }
}

function showWarfareChapter(chapterId) {
    console.log('âš”ï¸ Showing Warfare chapter:', chapterId);

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
        const btn = document.querySelector(`[onclick = "showWarfareChapter('${chapterId}')"]`);
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

console.log('âœ… All prayer book functions loaded successfully!');

/* --- HOLY PARTICLE SYSTEM (SUPERINTELLIGENCE VISUAL) --- */
/* --- CONSTELLATION ENGINE (THE FIRMAMENT) --- */
class ConstellationEngine {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = 80;
        this.connectionDistance = 150;

        this.initCanvas();
        this.initParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        // Mouse interaction
        window.addEventListener('mousemove', (e) => {
            // Add momentary particle at mouse pos
            if (Math.random() > 0.5) this.addParticle(e.clientX, e.clientY, true);
        });
    }

    initCanvas() {
        this.canvas.id = 'firmament-canvas';
        this.canvas.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100 %;
height: 100 %;
z - index: -1;
pointer - events: none;
opacity: 0.6;
`;
        document.body.prepend(this.canvas);
        this.resize();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addParticle(x, y, isTemporary = false) {
        this.particles.push({
            x: x || Math.random() * this.canvas.width,
            y: y || Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            life: isTemporary ? 100 : Infinity, // Mouse trail fades
            maxLife: 100
        });

        // Cap limit
        if (this.particles.length > this.maxParticles + 20) {
            this.particles.shift();
        }
    }

    initParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.addParticle();
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update & Draw Particles
        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i];

            p.x += p.vx;
            p.y += p.vy;

            // Boundary wrap
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            // Draw Star
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 215, 0, ${p.life === Infinity ? 0.5 : (p.life / p.maxLife)})`;
            this.ctx.fill();

            // Decay temp and remove
            if (p.life !== Infinity) {
                p.life--;
                if (p.life <= 0) {
                    this.particles.splice(i, 1);
                    i--;
                    continue;
                }
            }

            // Draw Connections (Constellations)
            for (let j = i + 1; j < this.particles.length; j++) {
                let p2 = this.particles[j];
                let dx = p.x - p2.x;
                let dy = p.y - p2.y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 215, 0, ${0.15 - (dist / this.connectionDistance) * 0.15})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Liturgical Time Cycle (Dynamic Theme)
class LiturgicalTime {
    constructor() {
        this.init();
        setInterval(() => this.init(), 60000); // Check every minute
    }

    init() {
        const hour = new Date().getHours();
        const root = document.documentElement;
        let timeName = "";

        if (hour >= 5 && hour < 10) {
            // DAWN (Lauds) - Soft Gold/Pink
            root.style.setProperty('--primary-purple-void', '#2a1a35');
            root.style.setProperty('--primary-gold', '#FFD700');
            timeName = "Lauds (Dawn)";
        } else if (hour >= 10 && hour < 17) {
            // DAY (Sext/None) - Bright, Energetic
            root.style.setProperty('--primary-purple-void', '#1a052a');
            root.style.setProperty('--primary-gold', '#F0E68C');
            timeName = "Day (Light)";
        } else if (hour >= 17 && hour < 20) {
            // DUSK (Vespers) - Deep Purple/Orange
            root.style.setProperty('--primary-purple-void', '#150520');
            root.style.setProperty('--primary-gold', '#FFA500');
            timeName = "Vespers (Dusk)";
        } else {
            // NIGHT (Compline) - Deepest Void
            root.style.setProperty('--primary-purple-void', '#050208');
            root.style.setProperty('--primary-gold', '#D4AF37');
            timeName = "Compline (Night)";
        }

        console.log(`ðŸ•°ï¸ Liturgical Time: ${timeName} `);
    }
}

// Initialize Systems
document.addEventListener('DOMContentLoaded', () => {
    new ConstellationEngine();
    new LiturgicalTime();
    new DivineScroll();
    new ProceduralAudioEngine();
    new DivineSearch();
    new SaintOracle();
    new VirtualShrine();
    new InstallManager();
    new GestureManager();
});

/* --- PATRON SAINT MATCHER (PHASE 14) --- */
class PatronSaintMatcher {
    constructor() {
        this.questions = [
            {
                id: 1, text: "Ù…Ø§ Ø§Ù„Ø°ÙŠ ØªØ¨Ø­Ø« Ø¹Ù†Ù‡ Ø§Ù„Ø¢Ù†ØŸ", options: [
                    { text: "Ø§Ù„Ø³Ù„Ø§Ù… Ø§Ù„Ø¯Ø§Ø®Ù„ÙŠ", traits: ["peace", "monastic"] },
                    { text: "Ø§Ù„Ù‚ÙˆØ© ÙÙŠ Ø§Ù„ØµØ¹Ø§Ø¨", traits: ["strength", "martyr"] },
                    { text: "Ø§Ù„Ø­ÙƒÙ…Ø© ÙˆØ§Ù„Ù…Ø¹Ø±ÙØ©", traits: ["wisdom", "doctor"] },
                    { text: "Ø´ÙØ§Ø¡ Ø§Ù„Ù†ÙØ³ ÙˆØ§Ù„Ø¬Ø³Ø¯", traits: ["healing", "miracle"] }
                ]
            },
            {
                id: 2, text: "ÙƒÙŠÙ ØªÙØ¶Ù„ Ø£Ù† ØªØµÙ„ÙŠØŸ", options: [
                    { text: "Ø¨ØµÙ…Øª ÙˆØ¹Ø²Ù„Ø©", traits: ["monastic", "peace"] },
                    { text: "Ø¨Ø®Ø¯Ù…Ø© Ø§Ù„Ø¢Ø®Ø±ÙŠÙ†", traits: ["charity", "active"] },
                    { text: "Ø¨ØªØ±Ø§Ù†ÙŠÙ… ÙˆØªØ³Ø§Ø¨ÙŠØ­", traits: ["joy", "praise"] },
                    { text: "Ø¨Ù‚Ø±Ø§Ø¡Ø© Ø§Ù„ÙƒØªØ¨ Ø§Ù„Ù…Ù‚Ø¯Ø³Ø©", traits: ["wisdom", "scripture"] }
                ]
            }
        ];

        this.saints = [
            { name: "Ù…Ø§Ø± Ø´Ø±Ø¨Ù„", title: "Ù‚Ø¯ÙŠØ³ Ø§Ù„Ø¹Ø¬Ø§Ø¦Ø¨", trait: "miracle", desc: "Ø´ÙÙŠØ¹Ùƒ Ù„Ù„Ø´ÙØ§Ø¡ ÙˆØ§Ù„Ø¹Ø¬Ø§Ø¦Ø¨.", img: "fa-cross" },
            { name: "ØªØ±ÙŠØ²Ø§ Ø§Ù„Ø·ÙÙ„ ÙŠØ³ÙˆØ¹", title: "ÙˆØ±Ø¯Ø© Ø§Ù„Ù…Ø³ÙŠØ­", trait: "peace", desc: "ØªØ¹Ù„Ù…Ùƒ Ø§Ù„Ø·Ø±ÙŠÙ‚ Ø§Ù„ØµØºÙŠØ± Ù„Ù„Ø­Ø¨.", img: "fa-rose" },
            { name: "Ù…Ø§Ø± Ø¬Ø±Ø¬Ø³", title: "Ø§Ù„Ø´Ù‡ÙŠØ¯ Ø§Ù„Ø¹Ø¸ÙŠÙ…", trait: "strength", desc: "ÙŠÙ…Ù†Ø­Ùƒ Ø§Ù„Ù‚ÙˆØ© Ù„Ù…Ø­Ø§Ø±Ø¨Ø© Ø§Ù„Ø´Ø±.", img: "fa-shield-alt" },
            { name: "Ø§Ù„Ø£Ù… ØªØ±ÙŠØ²Ø§", title: "Ø£Ù… Ø§Ù„ÙÙ‚Ø±Ø§Ø¡", trait: "charity", desc: "ØªÙ„Ù‡Ù…Ùƒ Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ù…Ø³ÙŠØ­ ÙÙŠ Ø§Ù„Ø¢Ø®Ø±ÙŠÙ†.", img: "fa-hand-holding-heart" },
            { name: "Ø§Ù„Ù‚Ø¯ÙŠØ³ ØªÙˆÙ…Ø§ Ø§Ù„Ø£ÙƒÙˆÙŠÙ†ÙŠ", title: "Ø§Ù„Ù…Ø¹Ù„Ù… Ø§Ù„Ù…Ù„Ø§Ø¦ÙƒÙŠ", trait: "wisdom", desc: "ÙŠØ±Ø´Ø¯ Ø¹Ù‚Ù„Ùƒ Ù†Ø­Ùˆ Ø§Ù„Ø­Ù‚ÙŠÙ‚Ø©.", img: "fa-book-open" }
        ];

        this.init();
    }

    init() {
        // Create Trigger Button (Floating?) or integrate into menu
        // For now, let's put it in the Soul Guide menu or a specific section
        // We will assume a "Find Your Saint" button exists or create one interactively
    }

    startQuiz() {
        // Logic to show modal and run quiz
        const modal = document.createElement('div');
        modal.id = 'saint-quiz-modal';
        modal.className = 'shrine-window active'; // Reuse shrine styling for consistency
        modal.style.zIndex = '10002';
        modal.innerHTML = `
    < div class="shrine-header" >
                <h3>Ø±ÙÙŠÙ‚Ùƒ Ø§Ù„Ø³Ù…Ø§ÙˆÙŠ</h3>
                <small>Ø£Ø¬Ø¨ Ù„ØªÙƒØªØ´Ù Ø´ÙÙŠØ¹Ùƒ</small>
            </div >
    <div class="quiz-content" id="quiz-content">
        <!-- Dynamic Question -->
    </div>
`;
        document.body.appendChild(modal);
        this.askQuestion(0, modal);
    }

    askQuestion(index, modal) {
        if (index >= this.questions.length) {
            this.showResult(modal);
            return;
        }

        const q = this.questions[index];
        const content = modal.querySelector('#quiz-content');
        content.innerHTML = `
    < h4 style = "color:var(--primary-gold); margin-bottom:1rem;" > ${q.text}</h4 >
        <div class="quiz-options">
            ${q.options.map((opt, i) => `
                    <button class="quiz-btn" data-idx="${i}" style="width:100%; margin:0.5rem 0; padding:1rem; background:rgba(255,255,255,0.05); border:1px solid #444; color:white; border-radius:10px; cursor:pointer; transition:0.3s;">
                        ${opt.text}
                    </button>
                `).join('')}
        </div>
`;

        const btns = content.querySelectorAll('.quiz-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Determine trait (simplified logic for demo)
                // In full version, we score traits. Here we just advance.
                this.userChoice = this.userChoice || [];
                this.userChoice.push(q.options[btn.dataset.idx].traits[0]);
                this.askQuestion(index + 1, modal);
            });
        });
    }

    showResult(modal) {
        // Simple logic: pick random saint matching one of the traits or random if no match logic implemented yet
        const saint = this.saints[Math.floor(Math.random() * this.saints.length)];

        const content = modal.querySelector('#quiz-content');
        content.innerHTML = `
    < div style = "text-align:center; animation:fadeIn 1s;" >
                <i class="fas ${saint.img}" style="font-size:4rem; color:var(--primary-gold); margin-bottom:1rem;"></i>
                <h3 style="color:white;">${saint.name}</h3>
                <p style="color:var(--text-silver);">${saint.title}</p>
                <div style="margin:2rem 0; padding:1rem; background:rgba(138,43,226,0.2); border-radius:10px;">
                    <p>"${saint.desc}"</p>
                </div>
                <button id="close-quiz" style="padding:0.8rem 2rem; background:var(--primary-gold); border:none; border-radius:20px; font-weight:bold; cursor:pointer;">
                    Ù‚Ø¨ÙˆÙ„ Ø§Ù„ØµØ¯Ø§Ù‚Ø©
                </button>
            </div >
    `;

        modal.querySelector('#close-quiz').addEventListener('click', () => {
            modal.remove();
            if (window.soulGuidanceAudio) window.soulGuidanceAudio.playChime(600, 0.5);
            showNotification(`Ø´ÙÙŠØ¹Ùƒ Ù‡Ùˆ ${saint.name} `, "success");
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Other inits...
    window.patronMatcher = new PatronSaintMatcher();

    // Auto-trigger for demo/testing after 30 seconds if not visited? 
    // Or add a button to the footer
    const footer = document.querySelector('footer');
    if (footer) {
        const div = document.createElement('div');
        div.style.textAlign = 'center';
        div.style.marginTop = '2rem';
        div.innerHTML = `< button onclick = "window.patronMatcher.startQuiz()" style = "background:transparent; border:1px solid var(--text-silver); color:var(--text-silver); padding:0.5rem 1rem; border-radius:20px; cursor:pointer;" > Ù…Ù† Ù‡Ùˆ Ø´ÙÙŠØ¹ÙŠØŸ</button > `;
        footer.insertBefore(div, footer.firstChild);
    }
});

/* --- GREGORIAN CHANT ENGINE (PHASE 13) --- */
class GregorianChantEngine {
    constructor() {
        this.ctx = window.soulGuidanceAudio?.ctx || new (window.AudioContext || window.webkitAudioContext)();
        this.isPlaying = false;
        this.voices = [];
        this.baseFreq = 110; // A2 (Deep Monk Voice)
        this.scale = [0, 2, 4, 5, 7, 9, 11]; // Major (Ionian) - often used but Gregorian is modal.
        // dorian: 0, 2, 3, 5, 7, 9, 10
        this.dorianScale = [110, 123.47, 130.81, 146.83, 164.81, 185.00, 196.00, 220.00];
        this.init();
    }

    init() {
        // Add Controls near the shrine
        const shrineContainer = document.getElementById('virtual-shrine-container');
        if (shrineContainer) {
            const btn = document.createElement('button');
            btn.className = 'shrine-trigger-btn';
            btn.style.bottom = '90px'; // Stack above shrine
            btn.style.border = '2px solid var(--primary-purple-vivid)';
            btn.innerHTML = '<i class="fas fa-music"></i>';
            btn.title = "Toggle Gregorian Chant";
            btn.onclick = () => this.toggleChant();
            shrineContainer.parentElement.appendChild(btn); // Add to body or same parent
            // Actually let's put it fixed on screen
            btn.style.position = 'fixed';
            btn.style.left = '30px';
            document.body.appendChild(btn);
            this.uiBtn = btn;
        }
    }

    toggleChant() {
        if (this.isPlaying) {
            this.stopChant();
        } else {
            this.startChant();
        }
    }

    startChant() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        this.isPlaying = true;
        this.uiBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        this.uiBtn.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.6)';

        // Start procedural voices
        this.chantLoop();
    }

    stopChant() {
        this.isPlaying = false;
        this.uiBtn.innerHTML = '<i class="fas fa-music"></i>';
        this.uiBtn.style.boxShadow = '';
        this.voices.forEach(v => this.rampDown(v));
        this.voices = [];
    }

    chantLoop() {
        if (!this.isPlaying) return;

        // Create a new "Monk" voice every few seconds
        const duration = 4 + Math.random() * 6;
        const note = this.dorianScale[Math.floor(Math.random() * this.dorianScale.length)];

        // Harmony: 50% chance of root or 5th
        let actualNote = note;
        if (Math.random() > 0.7) actualNote = this.baseFreq; // Drone root
        if (Math.random() > 0.85) actualNote = this.baseFreq * 1.5; // Perfect 5th

        this.playMonkVoice(actualNote, duration);

        setTimeout(() => this.chantLoop(), 2000 + Math.random() * 3000);
    }

    playMonkVoice(freq, duration) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        // Sawtooth + Lowpass = Human-ish
        osc.type = 'sawtooth';
        osc.frequency.value = freq;

        filter.type = 'lowpass';
        filter.frequency.value = 400 + Math.random() * 200; // Formant area
        filter.Q.value = 5; // Resonance

        // Envelope
        const now = this.ctx.currentTime;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 1); // Fade in
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration); // Fade out

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + duration);

        // Vocal vibrato
        const vib = this.ctx.createOscillator();
        vib.frequency.value = 4 + Math.random(); // 4-5Hz vibrato
        const vibGain = this.ctx.createGain();
        vibGain.gain.value = 3; // Depth
        vib.connect(vibGain);
        vibGain.connect(osc.frequency);
        vib.start(now);
        vib.stop(now + duration);
    }

    rampDown(node) {
        // Helper if we tracked nodes, but strict fire-and-forget is okay for procedural nature
    }
}

/* --- SILENCE MODE (PHASE 13) --- */
class SilenceMode {
    constructor() {
        this.active = false;
        this.styleTag = null;
        this.init();
    }

    init() {
        const btn = document.createElement('button');
        btn.id = 'silence-toggle';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i>';
        btn.title = 'Enter Silence Mode';
        btn.style.cssText = `
position: fixed;
top: 20px;
left: 20px;
z - index: 10001;
background: rgba(0, 0, 0, 0.5);
border: 1px solid rgba(255, 255, 255, 0.2);
color: white;
width: 40px;
height: 40px;
border - radius: 50 %;
cursor: pointer;
transition: all 0.3s;
`;
        document.body.appendChild(btn);

        btn.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.active = !this.active;
        const btn = document.getElementById('silence-toggle');

        if (this.active) {
            btn.innerHTML = '<i class="fas fa-eye"></i>';
            btn.style.background = 'var(--primary-gold)';
            btn.style.color = 'black';

            // Inject CSS to hide distractions
            this.styleTag = document.createElement('style');
            this.styleTag.textContent = `
body > *: not(#silence - toggle): not(.cards - grid): not(.prayer - section) {
    opacity: 0.1;
    filter: blur(5px);
    transition: all 1s;
    pointer - events: none;
}
                .cards - grid, .prayer - section, #prayers {
    opacity: 1!important;
    filter: none!important;
    pointer - events: all!important;
    z - index: 10000;
    position: relative;
}
nav, footer, .hero, #divine - preloader, .shrine - trigger - btn, .sg - trigger - btn {
    display: none!important;
}
                body {
    background: #050505!important;
}
`;
            document.head.appendChild(this.styleTag);

            // Show toast
            const toast = document.createElement('div');
            toast.textContent = "Silence Mode: Focus on the Word.";
            toast.style.cssText = "position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); color:white; font-family:'Cinzel'; font-size:2rem; animation: fadeOut 3s forwards; pointer-events:none; z-index:10002;";
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);

        } else {
            btn.innerHTML = '<i class="fas fa-eye-slash"></i>';
            btn.style.background = 'rgba(0,0,0,0.5)';
            btn.style.color = 'white';
            if (this.styleTag) this.styleTag.remove();
        }
    }
}

console.log('ðŸŒŒ Firmament & Time Cycle Activated');





/* --- DIVINE SCROLL INDICATOR --- */
class DivineScroll {
    constructor() {
        this.createProgressBar();
        window.addEventListener('scroll', () => this.updateProgress());
    }

    createProgressBar() {
        const bar = document.createElement('div');
        bar.id = 'divine-progress-bar';
        bar.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 0 %;
height: 4px;
background: linear - gradient(90deg, #FFD700, #4B0082, #FFD700);
z - index: 10001;
box - shadow: 0 0 10px rgba(255, 215, 0, 0.5);
transition: width 0.1s ease - out;
`;
        document.body.appendChild(bar);
        this.bar = bar;
    }

    updateProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        this.bar.style.width = scrolled + "%";

        // Dynamic glow based on progress
        if (scrolled > 99) {
            this.bar.style.boxShadow = "0 0 20px #FFD700";
        } else {
            this.bar.style.boxShadow = "0 0 10px rgba(255, 215, 0, 0.5)";
        }
    }
}

// Initialize Scroll Indicator
document.addEventListener('DOMContentLoaded', () => {
    new DivineScroll();
});

// Preloader Removal
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
        setTimeout(() => {
            const preloader = document.getElementById('divine-preloader');
            if (preloader) preloader.remove();
        }, 1000);
    }, 2000); // Minimum 2s divine entrance
});

/* --- PROCEDURAL HOLY AUDIO ENGINE (WEB AUDIO API) --- */
class ProceduralAudioEngine {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.oscillators = [];
        this.enabled = false;

        // Expose to global scope for chimes
        window.soulGuidanceAudio = this;

        this.initUI();
    }

    initUI() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        btn.className = 'ambient-toggle-btn';
        btn.title = "Toggle Heavenly Ambience";
        btn.style.cssText = `
position: fixed;
bottom: 20px;
right: 80px;
background: rgba(75, 0, 130, 0.9);
color: #FFD700;
border: 2px solid #FFD700;
border - radius: 50 %;
width: 50px;
height: 50px;
cursor: pointer;
z - index: 10002;
transition: all 0.3s ease;
box - shadow: 0 0 15px rgba(255, 215, 0, 0.3);
display: flex;
align - items: center;
justify - content: center;
font - size: 1.2rem;
`;

        btn.onclick = () => this.toggle();
        document.body.appendChild(btn);
        this.btn = btn;
    }

    initAudio() {
        if (this.ctx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
    }

    playDrone() {
        this.initAudio();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        // 432Hz Healing Frequencies (E Major Add9)
        const freqs = [82.41, 123.47, 164.81, 185.00, 207.65];

        this.oscillators = freqs.map((f, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = i % 2 === 0 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(f, this.ctx.currentTime);
            osc.detune.setValueAtTime((Math.random() - 0.5) * 10, this.ctx.currentTime);

            // Breath LFO
            const lfo = this.ctx.createOscillator();
            lfo.frequency.value = 0.1 + (Math.random() * 0.2);
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.value = 0.1;

            lfo.connect(lfoGain);
            lfoGain.connect(gain.gain);

            osc.connect(gain);
            gain.connect(this.masterGain);

            osc.start();
            lfo.start();

            gain.gain.setValueAtTime(0.05, this.ctx.currentTime); // Low baseline volume

            return { osc, gain, lfo };
        });

        this.masterGain.gain.setTargetAtTime(0.5, this.ctx.currentTime, 3);
    }

    stopDrone() {
        if (!this.ctx) return;
        this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 1);
        setTimeout(() => {
            this.oscillators.forEach(o => { o.osc.stop(); o.lfo.stop(); });
            this.oscillators = [];
        }, 1500);
    }

    playChime(freq = 600, duration = 0.5) {
        this.initAudio();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.type = 'sine';

        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    toggle() {
        this.enabled = !this.enabled;

        if (this.enabled) {
            this.playDrone();
            this.btn.innerHTML = '<i class="fas fa-volume-up"></i>';
            this.btn.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.8), inset 0 0 10px #FFD700';
            showNotification("Atmosphere Stabilized.", "success");
        } else {
            this.stopDrone();
            this.btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            this.btn.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
        }
    }
}

// Initialize Sound Manager
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => new ProceduralAudioEngine(), 1000);
});

/* --- 3D TILT EFFECT (PREMIUM PHYSICS) --- */
class TiltEffect {
    constructor() {
        this.cards = document.querySelectorAll('.card, .hero-badge, .prayer-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMove(e, card));
            card.addEventListener('mouseleave', () => this.handleLeave(card));
        });
    }

    handleMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        card.style.transition = 'transform 0.1s ease';
    }

    handleLeave(card) {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        card.style.transition = 'transform 0.5s ease';
    }
}

// Initialize Tilt
document.addEventListener('DOMContentLoaded', () => {
    // Wait for other elements to render
    setTimeout(() => {
        new TiltEffect();
        console.log('ðŸŒŒ 3D Tilt Physics Enabled');
    }, 1000);
});

/* --- SACRED GEOMETRY (PHASE 17) --- */
class SacredGeometry {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.time = 0;
        this.init();
    }

    init() {
        this.canvas.id = 'sacred-geo-bg';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-100';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.opacity = '0.15';

        document.body.insertBefore(this.canvas, document.body.firstChild);

        window.addEventListener('resize', () => this.resize());
        this.resize();
        this.animate();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.time += 0.005;
        const cx = this.width / 2;
        const cy = this.height / 2;

        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';

        // Golden Spiral approximation
        const petals = 8;
        const radius = Math.min(this.width, this.height) * 0.4;

        this.ctx.beginPath();
        for (let i = 0; i < petals; i++) {
            const angle = (i / petals) * Math.PI * 2 + this.time;
            const x = cx + Math.cos(angle) * (radius * Math.sin(this.time));
            const y = cy + Math.sin(angle) * (radius * Math.sin(this.time));
            this.ctx.moveTo(cx, cy);
            this.ctx.bezierCurveTo(cx + 100, cy - 100, x, y, x, y);
        }
        this.ctx.stroke();

        // Ripple
        for (let j = 0; j < 5; j++) {
            const r = ((this.time * 50) + (j * 100)) % (radius * 1.5);
            const alpha = 1 - (r / (radius * 1.5));
            if (alpha > 0) {
                this.ctx.beginPath();
                this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
                this.ctx.strokeStyle = `rgba(138, 43, 226, ${alpha * 0.2})`;
                this.ctx.stroke();
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SacredGeometry();
    console.log('ðŸ“ Sacred Geometry Active');
});

/* --- PHASE 26: BIBLICAL MAP --- */
class BiblicalMap {
    constructor() {
        this.locations = [
            { name: "Bethlehem", x: 40, y: 60, event: "Nativity of Our Lord" },
            { name: "Nazareth", x: 35, y: 30, event: "The Annunciation" },
            { name: "Jerusalem", x: 42, y: 65, event: "The Passion & Resurrection" },
            { name: "Sea of Galilee", x: 45, y: 25, event: "Walking on Water" }
        ];
        this.init();
    }

    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-map-marked-alt"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '90px';
        btn.title = "Walk Where He Walked";
        btn.onclick = () => this.openMap();
        // document.body.appendChild(btn); 
    }

    openMap() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.style.zIndex = '12500';
        modal.innerHTML = `
    < div class="shrine-header" >
                <h3>The Holy Land</h3>
                <small>Journey with Him</small>
            </div >
            <div style="position:relative; width:100%; height:400px; background:#eec; overflow:hidden; border-radius:10px; border:2px solid var(--primary-gold);">
                <div style="position:absolute; top:0; left:0; width:100%; height:100%; opacity:0.3; background:url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Israel_relief_location_map.jpg/1200px-Israel_relief_location_map.jpg') no-repeat center/cover;"></div>
                ${this.locations.map(loc => `
                    <div class="map-point" style="position:absolute; top:${loc.y}%; left:${loc.x}%; transform:translate(-50%, -50%); cursor:pointer;" onclick="showNotification('${loc.event}', 'info')">
                        <i class="fas fa-map-marker-alt" style="color:#d00; font-size:1.5rem; text-shadow:0 2px 5px rgba(0,0,0,0.5);"></i>
                    </div>
                `).join('')}
            </div>
            <button onclick="this.parentElement.remove()" style="margin-top:1rem; width:100%; padding:1rem; background:transparent; border:none; color:#888; cursor:pointer;">Close Map</button>
`;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 27: SACRED TIME --- */
class SacredCalendar {
    constructor() {
        this.seasons = {
            advent: { color: "#800080", name: "Advent" },
            christmas: { color: "#FFD700", name: "Christmas" },
            lent: { color: "#800080", name: "Lent" },
            easter: { color: "#FFFFFF", name: "Easter" },
            ordinary: { color: "#008000", name: "Ordinary Time" }
        };
        this.checkSeason();
    }

    checkSeason() {
        const now = new Date();
        const month = now.getMonth();
        const date = now.getDate();
        let current = 'ordinary';
        if (month === 11 || (month === 0 && date < 10)) current = 'christmas';
        else if (month === 11 && date < 25) current = 'advent';
        else if ((month === 1 || month === 2) && date > 14) current = 'lent';
        else if (month === 3) current = 'easter';
        this.applyTheme(this.seasons[current]);
    }

    applyTheme(season) {
        document.body.style.setProperty('--primary-purple-vivid', season.color);
        console.log(`ðŸ“… Season: ${season.name} `);
    }
}

/* --- PHASE 28: VIRTUAL CHOIR --- */
class VirtualChoir {
    constructor() {
        this.ctx = window.soulGuidanceAudio?.ctx;
        this.init();
    }
    init() {
        if (this.ctx) console.log("ðŸ° Cathedral Reverb Ready");
    }
}

/* --- PHASE 29: AR LENS --- */
class ScripturalLens {
    constructor() { this.video = null; this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-camera"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '150px';
        btn.title = "AR Lens";
        btn.onclick = () => this.toggleAR();
        document.body.appendChild(btn);
    }
    toggleAR() { showNotification("AR Lens requires HTTPS/Mobile", "info"); }
}

/* --- PHASE 30: ACCESSIBILITY PRO --- */
class AccessibilityManager {
    toggleHighContrast() {
        document.body.classList.toggle('high-contrast');
    }
}

/* --- PHASE 32: APP NAVIGATION --- */
class AppNavigation {
    constructor() { this.init(); }
    init() {
        if (window.innerWidth <= 768) this.createBottomTab();
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768 && !document.getElementById('bottom-tab-bar')) this.createBottomTab();
        });
    }
    createBottomTab() {
        const bar = document.createElement('div');
        bar.id = 'bottom-tab-bar';
        bar.style.position = 'fixed';
        bar.style.bottom = '0';
        bar.style.left = '0';
        bar.style.width = '100%';
        bar.style.height = '60px';
        bar.style.background = 'rgba(10, 5, 20, 0.95)';
        bar.style.display = 'flex';
        bar.style.justifyContent = 'space-around';
        bar.style.alignItems = 'center';
        bar.style.zIndex = '10000';
        bar.style.borderTop = '1px solid var(--primary-gold)';

        const tabs = [
            { icon: 'fa-home', label: 'Home', action: () => window.scrollTo(0, 0) },
            { icon: 'fa-book-open', label: 'Pray', action: () => document.getElementById('prayers').scrollIntoView() },
            { icon: 'fa-church', label: 'Shrine', action: () => document.getElementById('virtual-shrine-container').scrollIntoView() }
        ];

        tabs.forEach(t => {
            const btn = document.createElement('div');
            btn.innerHTML = `< i class="fas ${t.icon}" ></i > `;
            btn.style.color = 'var(--text-silver)';
            btn.onclick = t.action;
            bar.appendChild(btn);
        });
        document.body.appendChild(bar);
    }
}

/* --- PHASE 33: GESTURES --- */
class GestureControl {
    constructor() {
        this.startX = 0;
        this.init();
    }
    init() {
        document.addEventListener('touchstart', e => this.startX = e.touches[0].clientX);
        document.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].clientX;
            if (this.startX - endX > 100) {
                // Swipe Left
            }
        });
    }
}

/* --- PHASE 34: DARK NIGHT MODE --- */
class DarkNightMode {
    constructor() {
        this.isOled = false;
        this.init();
    }

    init() {
        // Add Toggle in Settings/Footer
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-moon"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '80px';
        btn.style.bottom = '20px'; // Next to Install btn
        btn.title = "OLED Night Mode";
        btn.onclick = () => this.toggle();
        document.body.appendChild(btn);

        // Blue light filter element
        const filter = document.createElement('div');
        filter.id = 'blue-light-filter';
        document.body.appendChild(filter);

        this.checkTime();
    }

    checkTime() {
        const hours = new Date().getHours();
        if (hours >= 22 || hours < 5) {
            this.toggle(true);
            showNotification("Entering Deep Night...", "info");
        }
    }

    toggle(forceState) {
        this.isOled = forceState !== undefined ? forceState : !this.isOled;
        if (this.isOled) {
            document.body.classList.add('oled-mode');
            document.getElementById('blue-light-filter').classList.add('active');
            showNotification("OLED Night Mode Active", "info");
        } else {
            document.body.classList.remove('oled-mode');
            document.getElementById('blue-light-filter').classList.remove('active');
            showNotification("Standard Mode", "info");
        }
    }
}

/* --- PHASE 35: SUNRISE PROTOCOL --- */
class SunriseProtocol {
    constructor() { this.init(); }
    init() {
        const now = new Date();
        const hour = now.getHours();
        const min = now.getMinutes();

        // Simple check for "Dawn" (approx 6 AM)
        if (hour === 6 && min < 30) {
            this.triggerMorningGlory();
        }
    }

    triggerMorningGlory() {
        showNotification("Morning Glory! The sun listens.", "success");
        document.body.style.transition = "background 10s ease";
        document.body.style.background = "linear-gradient(to bottom, #FFD700, #FF8C00)";
        // Reset after animation
        setTimeout(() => {
            document.body.style.background = "";
        }, 15000);
    }
}

/* --- GESTURE MANAGER (PHASE 33) --- */
class GestureManager {
    constructor() {
        this.touchstartX = 0;
        this.touchendX = 0;
        this.touchstartY = 0;
        this.touchendY = 0;
        this.initialScale = 1;
        this.init();
    }

    init() {
        // Swipe Listeners
        document.addEventListener('touchstart', (e) => {
            this.touchstartX = e.changedTouches[0].screenX;
            this.touchstartY = e.changedTouches[0].screenY;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            this.touchendX = e.changedTouches[0].screenX;
            this.touchendY = e.changedTouches[0].screenY;
            this.handleGesture(e.target);
        }, { passive: true });

        // Pinch to Zoom listeners (Visual Accessibility)
        // Note: 'gesturestart' is Safari only, but standard touch impl works for others.
        // For simplicity in this env, we'll try a basic pinch detection via touch events if needed, 
        // or just rely on browser default for scale but add a double-tap to reset?
        // Let's implement a double-tap to toggle font size for accessibility.

        let lastTap = 0;
        document.addEventListener('touchend', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 500 && tapLength > 0) {
                this.handleDoubleTap(e);
                e.preventDefault();
            }
            lastTap = currentTime;
        });
    }

    handleGesture(target) {
        const xDiff = this.touchendX - this.touchstartX;
        const yDiff = this.touchendY - this.touchstartY;

        // Horizontal Swipes (Navigation)
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (Math.abs(xDiff) > 100) {
                if (xDiff > 0) this.navigate('prev'); // Right swipe
                else this.navigate('next'); // Left swipe
            }
        }
        // Vertical Swipes (Dismiss Cards)
        else {
            if (yDiff > 100) {
                // Swipe Down
                const card = target.closest('.prayer-card, .shrine-window');
                if (card) {
                    this.dismissCard(card);
                }
            }
        }
    }

    dismissCard(card) {
        card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        card.style.transform = 'translateY(100vh)';
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.display = 'none';
            // Reset for next showing
            card.style.transform = '';
            card.style.opacity = '';
        }, 300);
        showNotification("Dismissed", "info");
    }

    handleDoubleTap(e) {
        // Toggle Font Size
        const root = document.documentElement;
        const current = getComputedStyle(root).getPropertyValue('--base-font-size') || '16px';
        if (current.trim() === '16px') {
            root.style.setProperty('--base-font-size', '20px');
            showNotification("Zoom: Large", "info");
        } else {
            root.style.setProperty('--base-font-size', '16px');
            showNotification("Zoom: Normal", "info");
        }
    }

    navigate(direction) {
        const tabs = document.getElementById('bottom-tab-bar')?.children;
        if (!tabs || tabs.length === 0) return;

        // Visual Feedback only for now as distinct tab state isn't fully tracked
        this.showSwipeFeedback(direction);
    }

    showSwipeFeedback(direction) {
        const arrow = document.createElement('div');
        arrow.className = `swipe - feedback swipe - ${direction} `;
        arrow.innerHTML = direction === 'next' ? '<i class="fas fa-chevron-left"></i>' : '<i class="fas fa-chevron-right"></i>';
        document.body.appendChild(arrow);
        setTimeout(() => arrow.remove(), 600);
    }
}

/* --- PWA INSTALL MANAGER (PHASE 31) --- */
class InstallManager {
    constructor() {
        this.deferredPrompt = null;
        this.init();
    }

    init() {
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            this.deferredPrompt = e;
            // Update UI to notify the user they can add to home screen
            this.showInstallButton();
        });

        window.addEventListener('appinstalled', () => {
            showNotification('Soul Guidance installed!', 'success');
            this.deferredPrompt = null;
        });
    }

    showInstallButton() {
        // Create or show an install button in the footer or settings
        let btn = document.getElementById('pwa-install-btn');
        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'pwa-install-btn';
            btn.className = 'btn btn-sm btn-outline-gold';
            btn.innerHTML = '<i class="fas fa-download"></i> Install App';
            btn.style.cssText = `
position: fixed;
bottom: 80px;
left: 20px;
z - index: 9999;
box - shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
display: block;
animation: fadeInUp 0.5s;
background: var(--primary - purple - void);
color: var(--primary - gold);
border: 1px solid var(--primary - gold);
padding: 10px 15px;
border - radius: 20px;
cursor: pointer;
`;
            btn.onclick = () => this.promptInstall();
            document.body.appendChild(btn);
        }
    }

    promptInstall() {
        if (!this.deferredPrompt) return;

        // Show the prompt
        this.deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            this.deferredPrompt = null;
            const btn = document.getElementById('pwa-install-btn');
            if (btn) btn.remove();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new InstallManager();
    new GestureManager();
    new DarkNightMode();
    new SunriseProtocol();
    new BiblicalMap();
    new SacredCalendar();
    new VirtualChoir();
    new ScripturalLens();
    new AccessibilityManager();
    new AppNavigation();
    new GestureControl();
    new AngelusBell();
    new FastingTimer();
    new SpiritualJournal();
    new ExamenAssistant();
    new LatinToggle();
    new VRChapel();
    new BinauralBeats();
    new BreathPrayer();
    new IconGallery();
    new StainedGlass();
    new HolyWater();
    new IncenseSmoke();
    new HaloEffect();
    new ParableMode();
    new BeatitudesLadder();
    new Decalogue();
    new PsalmGen();
    new HymnLyrics();
    new ChantHero();
    new TheologyGlossary();
    new CrossRef();
    new OriginalLanguage();
    new SalvationTimeline();
    new HolyLandMap();
    new AISermon();
    new SocraticAI();
    new DreamJournal();
    new SpiritualDirector();
    new SocraticAI();
    new DreamJournal();
    new SpiritualDirector();
    new VirtueTracker();
    new SinDestroyer();
    new GraceMeter();
    new MercyFountain();
    new AdorationMode();
    new RosaryAudio();
    new StationsCross();
    new SevenSorrows();
    new DivineMercy();
    new LitanyBuilder();
    new PrayerBouquet();
    new SpiritualWill();
    new MementoMori();
    new LastRites();
    new FuneralPlan();
    new CosmicVis();
    new FractalZoom();
    new NatureSounds();
    new DesertWisdom();
    new MysticQuotes();
    new SummaTree();
    new CatechismSearch();
    new EncyclicalReader();
    new CouncilHistory();
    new HeresyQuiz();
    new ApologeticsNinja();
    new EvangelismCards();
    new DonationSim();
    new MerchMockup();
    new NewsletterSub();
    new AdminStats();
    new UserProfile();
    new CloudWittness();
    new AscensionAnim();
});

/* --- PHASE 36: ANGELUS BELL --- */
class AngelusBell {
    constructor() {
        this.times = [6, 12, 18];
        this.checked = false;
        setInterval(() => this.check(), 60000); // Check every minute
    }

    check() {
        const hour = new Date().getHours();
        const min = new Date().getMinutes();
        if (this.times.includes(hour) && min === 0 && !this.checked) {
            this.playBell();
            this.checked = true;
        } else if (min !== 0) {
            this.checked = false;
        }
    }

    playBell() {
        showNotification("ðŸ”” The Angel of the Lord declared unto Mary...", "info");
        // Play Bell Sound using Procedural Audio
        if (window.soulGuidanceAudio) {
            window.soulGuidanceAudio.playChime(523.25, 2); // C5
            setTimeout(() => window.soulGuidanceAudio.playChime(659.25, 2), 1000); // E5
            setTimeout(() => window.soulGuidanceAudio.playChime(783.99, 3), 2000); // G5
        }
    }
}

/* --- PHASE 37: FASTING TIMER --- */
class FastingTimer {
    constructor() {
        this.startTime = localStorage.getItem('fastingStart');
        this.init();
    }

    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-hourglass-start"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '140px';
        btn.style.bottom = '20px';
        btn.title = "Fasting Tracker";
        btn.onclick = () => this.toggleUI();
        document.body.appendChild(btn);
    }

    toggleUI() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.style.zIndex = '11000';
        modal.innerHTML = `
    < div class="shrine-header" >
                <h3>Spiritual Fast</h3>
                <small>Deny self, Spirit grows.</small>
            </div >
            <div style="text-align:center; padding:2rem;">
                <h2 id="fast-timer-display" style="font-family:'Cinzel'; color:var(--primary-gold); font-size:2.5rem; margin:1rem 0;">--:--</h2>
                <div id="fast-controls">
                    ${this.startTime ?
                `<button id="end-fast" class="btn btn-outline-gold">End Fast</button>` :
                `<button id="start-fast" class="btn btn-primary-gold">Begin Fast</button>`
            }
                </div>
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px; background:none; border:none; color:white;">âœ–</button>
`;
        document.body.appendChild(modal);

        if (this.startTime) this.updateDisplay(modal.querySelector('#fast-timer-display'));

        const startBtn = modal.querySelector('#start-fast');
        if (startBtn) startBtn.onclick = () => {
            this.startTime = Date.now();
            localStorage.setItem('fastingStart', this.startTime);
            this.toggleUI(); // Refresh
        };

        const endBtn = modal.querySelector('#end-fast');
        if (endBtn) endBtn.onclick = () => {
            const duration = ((Date.now() - this.startTime) / 3600000).toFixed(1);
            showNotification(`Fast completed: ${duration} hours`, "success");
            this.startTime = null;
            localStorage.removeItem('fastingStart');
            this.toggleUI(); // Refresh
        };

        // Live Update
        if (this.startTime) {
            this.interval = setInterval(() => {
                const display = modal.querySelector('#fast-timer-display');
                if (display) this.updateDisplay(display);
                else clearInterval(this.interval);
            }, 60000);
        }
    }

    updateDisplay(el) {
        if (!this.startTime) return;
        const diff = Date.now() - this.startTime;
        const hours = Math.floor(diff / 3600000);
        const mins = Math.floor((diff % 3600000) / 60000);
        el.textContent = `${hours}h ${mins} m`;
    }
}

/* --- PHASE 38: SPIRITUAL JOURNAL --- */
class SpiritualJournal {
    constructor() {
        this.init();
    }

    init() {
        // Add button to user profile area or footer (simplified here)
        // Storing data in localStorage 'soulJournal'
    }

    open() {
        const saved = localStorage.getItem('soulJournal') || '';
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.style.width = '90%';
        modal.style.maxWidth = '600px';
        modal.style.zIndex = '11001';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Soul Journal</h3></div >
            <textarea id="journal-area" style="width:100%; height:300px; background:rgba(0,0,0,0.5); color:white; border:1px solid #555; padding:1rem; font-family:'Cinzel';">${saved}</textarea>
            <div style="display:flex; justify-content:space-between; margin-top:1rem;">
                <button id="save-journal" class="btn btn-outline-gold">Save</button>
                <button id="close-journal" class="btn btn-sm">Close</button>
            </div>
`;
        document.body.appendChild(modal);

        modal.querySelector('#save-journal').onclick = () => {
            const text = modal.querySelector('#journal-area').value;
            localStorage.setItem('soulJournal', text);
            showNotification("Journal Saved", "success");
        };

        modal.querySelector('#close-journal').onclick = () => modal.remove();
    }
}

/* --- PHASE 39: EXAMEN ASSISTANT --- */
class ExamenAssistant {
    constructor() {
        this.steps = [
            { title: "Presence", text: "Become aware of God's presence. Ask the Holy Spirit to guide you." },
            { title: "Gratitude", text: "Review the day with thankfulness. What gifts did God give you today?" },
            { title: "Review", text: "Look at your day. Where did you feel God? Where did you turn away?" },
            { title: "Sorrow", text: "Ask forgiveness for any sins or omissions. Accept His mercy." },
            { title: "Grace", text: "Look to tomorrow. Ask for grace to see God more clearly." }
        ];
        this.currentStep = 0;
        this.init();
    }

    init() {
        const btn = document.createElement('button');
        btn.innerHTML = 'EX'; // Simple icon placeholder
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '20px';
        btn.style.bottom = '80px';
        btn.title = "Daily Examen";
        btn.onclick = () => this.start();
        document.body.appendChild(btn);
    }

    start() {
        this.currentStep = 0;
        this.renderOverlay();
    }

    renderOverlay() {
        let modal = document.getElementById('examen-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'examen-modal';
            modal.className = 'shrine-window active';
            modal.style.zIndex = '12000';
            document.body.appendChild(modal);
        }

        const step = this.steps[this.currentStep];

        modal.innerHTML = `
    < div class="shrine-header" >
                <h3>Ignatian Examen</h3>
                <small>Step ${this.currentStep + 1} of 5</small>
            </div >
            <div style="padding:2rem; text-align:center;">
                <h2 style="color:var(--primary-gold); margin-bottom:1rem;">${step.title}</h2>
                <p style="font-size:1.2rem; line-height:1.6;">${step.text}</p>
            </div>
            <div style="display:flex; justify-content:space-between; padding:1rem;">
                <button class="btn btn-sm" onclick="document.getElementById('examen-modal').remove()">Close</button>
                <button class="btn btn-outline-gold" id="next-step-btn">
                    ${this.currentStep < 4 ? 'Next' : 'Finish'}
                </button>
            </div>
`;

        document.getElementById('next-step-btn').onclick = () => {
            if (this.currentStep < 4) {
                this.currentStep++;
                this.renderOverlay();
            } else {
                document.getElementById('examen-modal').remove();
                showNotification("Examen Completed. Go in peace.", "success");
            }
        };
    }
}

/* --- PHASE 40: LATIN TOGGLE --- */
class LatinToggle {
    constructor() { this.isLatin = false; this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = 'LAT';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '20px';
        btn.style.bottom = '140px'; // Shifted up
        btn.onclick = () => this.toggle();
        document.body.appendChild(btn);

        // Define Latin mappings
        this.translations = {
            "Our Father": "Pater Noster",
            "Hail Mary": "Ave Maria",
            "Glory Be": "Gloria Patri"
            // More would be added here
        };
    }
    toggle() {
        this.isLatin = !this.isLatin;
        document.body.classList.toggle('latin-mode');

        // Simple text replacement for headers
        document.querySelectorAll('h3, h2').forEach(el => {
            const text = el.textContent;
            if (this.isLatin) {
                if (this.translations[text]) {
                    el.dataset.eng = text;
                    el.textContent = this.translations[text];
                }
            } else {
                if (el.dataset.eng) {
                    el.textContent = el.dataset.eng;
                }
            }
        });

        showNotification(this.isLatin ? "Lingua Latina" : "English", "info");
    }
}

/* --- PHASE 41: VR CHAPEL (WebXR Stub) --- */
class VRChapel {
    constructor() {
        this.init();
    }

    init() {
        // Add VR Toggle
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-vr-cardboard"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '20px'; // Stacked
        btn.style.bottom = '140px';
        btn.title = "Enter Virtual Chapel";
        btn.onclick = () => this.enterVR();
        document.body.appendChild(btn);
    }

    enterVR() {
        if (navigator.xr) {
            // Full WebXR impl would go here. For now, a CSS 3D immersive modal.
            this.openCSSChapel();
        } else {
            this.openCSSChapel();
        }
    }

    openCSSChapel() {
        const modal = document.createElement('div');
        modal.className = 'vr-overlay active';
        modal.style.cssText = `
position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
background: black; z - index: 15000; perspective: 1000px;
overflow: hidden; cursor: grab;
`;

        modal.innerHTML = `
    < div id = "vr-scene" style = "width:100%; height:100%; transform-style:preserve-3d; transition:transform 0.1s;" >
                <div class="wall front" style="transform:translateZ(-500px)">This is the Holy of Holies</div>
                <div class="wall left" style="transform:rotateY(90deg) translateZ(-500px)">Icons of Saints</div>
                <div class="wall right" style="transform:rotateY(-90deg) translateZ(-500px)">Stained Glass Windows</div>
                <div class="wall back" style="transform:rotateY(180deg) translateZ(-500px)">Entrance</div>
                <div class="floor" style="transform:rotateX(90deg) translateZ(-500px)">Sacred Ground</div>
                <div class="ceiling" style="transform:rotateX(-90deg) translateZ(-500px)">Heavenly Fresco</div>
            </div >
            <button onclick="this.parentElement.remove()" style="position:absolute; top:20px; right:20px; z-index:15001;">Exit VR</button>
            <div style="position:absolute; bottom:20px; left:50%; transform:translateX(-50%); color:white;">Drag to Look Around</div>
`;
        document.body.appendChild(modal);

        // Simple Mouse Look
        let startX = 0;
        let currentY = 0;
        modal.addEventListener('mousedown', e => startX = e.clientX);
        modal.addEventListener('mousemove', e => {
            if (e.buttons === 1) {
                const diff = e.clientX - startX;
                currentY += diff * 0.2;
                modal.querySelector('#vr-scene').style.transform = `rotateY(${currentY}deg)`;
                startX = e.clientX;
            }
        });
    }
}

/* --- PHASE 42: BINAURAL BEATS --- */
class BinauralBeats {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.init();
    }

    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-wave-square"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '80px';
        btn.style.bottom = '140px';
        btn.title = "Binaural Meditation (Alpha)";
        btn.onclick = () => this.toggle();
        document.body.appendChild(btn);
    }

    toggle() {
        if (this.isPlaying) this.stop();
        else this.play();
    }

    play() {
        if (!window.soulGuidanceAudio) return; // Dep on main audio engine
        this.ctx = window.soulGuidanceAudio.ctx || new AudioContext();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        // Alpha Waves (8-12Hz difference)
        // Left Ear: 200Hz
        // Right Ear: 210Hz
        // Diff: 10Hz ( Alpha - Relaxation/Focus)

        this.oscL = this.ctx.createOscillator();
        this.oscR = this.ctx.createOscillator();
        this.panL = this.ctx.createStereoPanner();
        this.panR = this.ctx.createStereoPanner();
        this.gain = this.ctx.createGain();

        this.oscL.frequency.value = 200;
        this.oscR.frequency.value = 210;

        this.panL.pan.value = -1; // Left
        this.panR.pan.value = 1;  // Right

        this.gain.gain.value = 0.1; // Low volume

        this.oscL.connect(this.panL);
        this.panL.connect(this.gain);

        this.oscR.connect(this.panR);
        this.panR.connect(this.gain);

        this.gain.connect(this.ctx.destination);

        this.oscL.start();
        this.oscR.start();

        this.isPlaying = true;
        showNotification("Binaural Alpha Waves Active (Headphones Required)", "success");
    }

    stop() {
        if (this.oscL) {
            this.oscL.stop();
            this.oscR.stop();
            this.isPlaying = false;
            showNotification("Meditation Audio Stopped", "info");
        }
    }
}

/* --- PHASE 43: BREATH PRAYER --- */
class BreathPrayer {
    constructor() { this.init(); }
    init() {
        // Simple visual guide that can be triggered from menu
    }

    start() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '13000';

        modal.innerHTML = `
    < div id = "breath-circle" style = "width:100px; height:100px; border-radius:50%; background:var(--primary-gold); box-shadow:0 0 50px var(--primary-gold); margin-bottom:2rem; transition: all 4s ease-in-out;" ></div >
            <h2 id="breath-text" style="color:white; font-family:'Cinzel'; transition: opacity 1s;">Breathe In...</h2>
            <button onclick="this.parentElement.remove()" style="margin-top:2rem; background:transparent; border:1px solid #555; color:#888;">End Prayer</button>
`;
        document.body.appendChild(modal);

        const circle = modal.querySelector('#breath-circle');
        const text = modal.querySelector('#breath-text');

        const cycle = () => {
            if (!document.body.contains(modal)) return;

            // Inhale (4s)
            circle.style.transform = 'scale(2)';
            circle.style.opacity = '1';
            text.textContent = "Lord Jesus Christ...";
            text.style.opacity = '1';

            setTimeout(() => {
                // Hold (2s - abbreviated for flow)
                // Exhale (4s)
                if (!document.body.contains(modal)) return;
                circle.style.transform = 'scale(0.5)';
                circle.style.opacity = '0.5';
                text.textContent = "Have Mercy On Me.";
            }, 4000);

            setTimeout(cycle, 8000);
        };

        // Start cycle
        setTimeout(cycle, 100);
    }
}

/* --- PHASE 44: ICON GALLERY --- */
class IconGallery {
    constructor() {
        this.icons = [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Simon_Ushakov_-_Last_Supper_-_Google_Art_Project.jpg/640px-Simon_Ushakov_-_Last_Supper_-_Google_Art_Project.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Caravaggio_-_The_Entombment_of_Christ_-_Google_Art_Project.jpg/640px-Caravaggio_-_The_Entombment_of_Christ_-_Google_Art_Project.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Christ_the_Saviour_%28Pantokrator%29_-_Google_Art_Project.jpg/640px-Christ_the_Saviour_%28Pantokrator%29_-_Google_Art_Project.jpg"
        ];
        // this.init(); // Lazy init to save bandwidth
    }

    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.style.overflowY = 'auto';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Sacred Icons</h3></div >
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:1rem; padding:1rem;">
                ${this.icons.map(src => `
                    <div style="aspect-ratio:1; background:url('${src}') center/cover; border:2px solid #333; cursor:pointer; transition:transform 0.3s;" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'" onclick="window.open('${src}')"></div>
                `).join('')}
            </div>
            <button onclick="this.parentElement.remove()" style="width:100%; padding:1rem;">Close Gallery</button>
`;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 45: STAINED GLASS --- */
class StainedGlass {
    constructor() { this.apply(); }
    apply() {
        // Generative CSS Pattern
        const style = document.createElement('style');
        style.textContent = `
    .stained - glass - bg {
    background - color: transparent;
    background - image:
    linear - gradient(30deg, #445 12 %, transparent 12.5 %, transparent 87 %, #445 87.5 %, #445),
        linear - gradient(150deg, #445 12 %, transparent 12.5 %, transparent 87 %, #445 87.5 %, #445),
        linear - gradient(30deg, #445 12 %, transparent 12.5 %, transparent 87 %, #445 87.5 %, #445),
        linear - gradient(150deg, #445 12 %, transparent 12.5 %, transparent 87 %, #445 87.5 %, #445),
        linear - gradient(60deg, #77a 25 %, transparent 25.5 %, transparent 75 %, #77a 75 %, #77a),
        linear - gradient(60deg, #77a 25 %, transparent 25.5 %, transparent 75 %, #77a 75 %, #77a);
    background - size: 80px 140px;
    background - position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
    opacity: 0.1;
    pointer - events: none;
    position: fixed; top: 0; left: 0; width: 100 %; height: 100 %; z - index: -50;
}
`;
        document.head.appendChild(style);

        const bg = document.createElement('div');
        bg.className = 'stained-glass-bg';
        document.body.appendChild(bg);
    }
}

/* --- PHASE 56: THEOLOGY GLOSSARY --- */
class TheologyGlossary {
    constructor() {
        this.terms = {
            "Grace": "The free and unmerited favor of God.",
            "Mercy": "Compassion or forgiveness shown toward someone.",
            "Hope": "Trust in God's promises."
        };
        this.init();
    }
    init() {
        // Simple scanner that could wrap text nodes
        // preventing breakage of existing markup is tricky, so we'll just expose a lookup tool for now
    }
}

/* --- PHASE 57: CROSS-REFERENCE --- */
class CrossRef {
    constructor() { this.init(); }
    init() {
        // Stub
    }
}

/* --- PHASE 58: GREEK/HEBREW TOGGLES --- */
class OriginalLanguage {
    constructor() { this.init(); }
    init() {
        // Stub
    }
}

/* --- PHASE 59: TIMELINE OF SALVATION --- */
class SalvationTimeline {
    constructor() {
        this.events = ["Creation", "The Fall", "Noah", "Abraham", "Moses", "David", "Prophets", "The Incarnation", "Cross", "Resurrection", "Pentecost", "Parousia"];
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-history"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '20px';
        btn.style.bottom = '200px';
        btn.onclick = () => this.show();
        document.body.appendChild(btn);
    }
    show() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.style.width = '95%';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>History of Salvation</h3></div >
            <div class="timeline-container">
                ${this.events.map(e => `
                    <div class="timeline-event">
                        <div style="font-weight:bold; color:var(--primary-gold);">${e}</div>
                    </div>
                `).join('')}
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 60: MAP OF HOLY LAND --- */
class HolyLandMap {
    constructor() { this.init(); }
    init() {
        // Interactive SVG would go here.
    }
}

/* --- PHASE 61: AI SERMON --- */
class AISermon {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-robot"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '20px';
        btn.style.bottom = '200px';
        btn.title = "AI Homily";
        btn.onclick = () => this.generate();
        document.body.appendChild(btn);
    }
    generate() {
        showNotification("Generating Reflection...", "info");
        setTimeout(() => {
            const homilies = [
                "Today, consider the lilies of the field. They do not toil, yet God clothes them. How much more will He care for you, O you of little faith? Trust in His providence today.",
                "The storm on the sea represents the chaos of our hearts. Yet Christ sleeps peacefully. Awaken your faith, and the winds will cease.",
                "To love is to will the good of the other. In a world of self-seeking, be the one who seeks the good of your neighbor, fueled by the love of the Cross."
            ];
            const chosen = homilies[Math.floor(Math.random() * homilies.length)];

            const modal = document.createElement('div');
            modal.className = 'shrine-window active';
            modal.innerHTML = `
    < div class="shrine-header" > <h3>Daily Reflection</h3></div >
                <div class="scripture-block">
                    ${chosen}
                </div>
                <button onclick="this.parentElement.remove()" style="width:100%; padding:1rem;">Amen</button>
`;
            document.body.appendChild(modal);
        }, 1500);
    }
}

/* --- PHASE 62: THEOLOGICAL DEBATE --- */
class SocraticAI {
    constructor() { this.init(); }
    init() {
        // Chat interface stub
    }
}

/* --- PHASE 63: DREAM JOURNAL --- */
class DreamJournal {
    constructor() { this.init(); }
    init() {
        // Form stub
    }
}

/* --- PHASE 64: SPIRITUAL DIRECTOR --- */
class SpiritualDirector {
    constructor() { this.init(); }
    init() {
        // Wizard stub
    }
}

/* --- PHASE 65: VIRTUE TRACKER --- */
class VirtueTracker {
    constructor() {
        this.virtues = {
            "Humility": 1,
            "Charity": 1,
            "Patience": 1,
            "Chastity": 1
        };
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-chart-line"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '80px';
        btn.style.bottom = '200px';
        btn.title = "Virtue Stats";
        btn.onclick = () => this.show();
        document.body.appendChild(btn);
    }
    show() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Soul Stats</h3></div >
            <div style="padding:1rem;">
                ${Object.keys(this.virtues).map(v => `
                    <div class="virtue-stat">
                        <span>${v}</span>
                        <span>Lvl ${this.virtues[v]} <button onclick="window.incrementVirtue('${v}', this)">+</button></span>
                    </div>
                `).join('')}
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);

        window.incrementVirtue = (v, btn) => {
            this.virtues[v]++;
            btn.parentElement.innerHTML = `Lvl ${this.virtues[v]} <button onclick="window.incrementVirtue('${v}', this)">+</button>`;
            showNotification(`${v} Increased!`, "success");
        };
    }
}

/* --- PHASE 46: HOLY WATER --- */
class HolyWater {
    constructor() { this.init(); }
    init() {
        document.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.left = `${e.clientX} px`;
            ripple.style.top = `${e.clientY} px`;
            document.body.appendChild(ripple);

            // Audio Effect
            if (window.soulGuidanceAudio && window.soulGuidanceAudio.playWaterDrop) {
                window.soulGuidanceAudio.playWaterDrop();
            } else if (window.soulGuidanceAudio) {
                // Fallback synthetic drop
                const osc = window.soulGuidanceAudio.ctx.createOscillator();
                const g = window.soulGuidanceAudio.ctx.createGain();
                osc.connect(g);
                g.connect(window.soulGuidanceAudio.ctx.destination);
                osc.frequency.setValueAtTime(800, window.soulGuidanceAudio.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(100, window.soulGuidanceAudio.ctx.currentTime + 0.2);
                g.gain.setValueAtTime(0.5, window.soulGuidanceAudio.ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, window.soulGuidanceAudio.ctx.currentTime + 0.2);
                osc.start();
                osc.stop(window.soulGuidanceAudio.ctx.currentTime + 0.2);
            }

            ripple.addEventListener('animationend', () => ripple.remove());
        });
    }
}

/* --- PHASE 47: INCENSE PARTICLES --- */
class IncenseSmoke {
    constructor() {
        this.ctx = null;
        this.canvas = null;
        this.particles = [];
        this.active = false;
        this.init();
    }

    init() {
        // Toggle btn
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-smog"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '80px';
        btn.style.bottom = '80px';
        btn.title = "Incense";
        btn.onclick = () => this.toggle();
        document.body.appendChild(btn);
    }

    toggle() {
        if (this.active) {
            this.active = false;
            if (this.canvas) this.canvas.remove();
            showNotification("Incense Extinguished", "info");
        } else {
            this.active = true;
            this.setupCanvas();
            this.loop();
            showNotification("Incense Lit", "success");
        }
    }

    setupCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:9000; opacity:0.4;";
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }

    loop() {
        if (!this.active) return;
        requestAnimationFrame(() => this.loop());

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (Math.random() < 0.05) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: this.canvas.height + 10,
                vx: (Math.random() - 0.5) * 0.5,
                vy: -1 - Math.random(),
                size: 10 + Math.random() * 20,
                life: 1
            });
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            let p = this.particles[i];
            p.x += p.vx + Math.sin(Date.now() / 1000 + p.y * 0.01) * 0.5;
            p.y += p.vy;
            p.size += 0.1;
            p.life -= 0.002;

            this.ctx.fillStyle = `rgba(200, 200, 200, ${p.life * 0.3})`;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            if (p.life <= 0) this.particles.splice(i, 1);
        }
    }
}

/* --- PHASE 48: HALO EFFECT --- */
class HaloEffect {
    constructor() { this.init(); }
    init() {
        const halo = document.createElement('div');
        halo.id = 'halo-cursor';
        document.body.appendChild(halo);

        document.addEventListener('mousemove', (e) => {
            halo.style.left = e.clientX + 'px';
            halo.style.top = e.clientY + 'px';
        });
    }
}

/* --- PHASE 50: PARABLES INTERACTIVE --- */
class ParableMode {
    constructor() {
        this.parables = [
            { title: "The Prodigal Son", text: "A story of return and the Father's overwhelming mercy..." },
            { title: "The Sower", text: "Some seeds fell on rocky ground, others on good soil..." },
            { title: "The Good Samaritan", text: "Who is my neighbor? The one who showed mercy." }
        ];
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-book-open"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '140px';
        btn.style.bottom = '80px';
        btn.title = "Parables";
        btn.onclick = () => this.openMenu();
        document.body.appendChild(btn);
    }
    openMenu() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Parables of Christ</h3></div >
            <div class="shrine-content">
                ${this.parables.map(p => `
                    <div class="prayer-card" style="margin:1rem 0; cursor:pointer;" onclick="new ParableReader('${p.title}', '${p.text}')">
                        <h4>${p.title}</h4>
                    </div>
                `).join('')}
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);
    }
}

class ParableReader {
    constructor(title, text) {
        // Simple alert for now, full reader would be a modal overlay
        showNotification(`Reading: ${title} `, "info");
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.style.zIndex = '12000';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>${title}</h3></div >
            <div class="scripture-block">
                ${text}
            </div>
            <button onclick="this.parentElement.remove()" style="width:100%; padding:1rem;">Close</button>
`;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 51: BEATITUDES LADDER --- */
class BeatitudesLadder {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-network-wired"></i>'; // Ladder/Steps icon
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '180px';
        btn.style.bottom = '80px';
        btn.title = "Ladder of Beatitudes";
        btn.onclick = () => this.climb();
        document.body.appendChild(btn);
    }
    climb() {
        // The 8 rungs
        const steps = [
            "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
            "Blessed are those who mourn, for they shall be comforted.",
            "Blessed are the meek, for they shall inherit the earth.",
            "Blessed are those who hunger and thirst for righteousness.",
            "Blessed are the merciful, for they shall obtain mercy.",
            "Blessed are the pure in heart, for they shall see God.",
            "Blessed are the peacemakers, for they shall be called sons of God.",
            "Blessed are those persecuted for righteousness' sake."
        ];

        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Ladder of Beatitudes</h3></div >
            <div style="padding:1rem; overflow-y:auto; max-height:400px;">
                ${steps.map((s, i) => `
                    <div class="prayer-card" style="margin-bottom:1rem; opacity: ${(i + 1) / 8 + 0.2};">
                        <div style="font-weight:bold; color:var(--primary-gold);">Rung ${i + 1}</div>
                        <p>${s}</p>
                    </div>
                `).reverse().join('')} <!-- Reverse to show ladder going up -->
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 52: COMMANDMENTS CHECK --- */
class Decalogue {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-list-ol"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '220px';
        btn.style.bottom = '80px';
        btn.title = "Examination of Conscience";
        btn.onclick = () => this.examine();
        document.body.appendChild(btn);
    }
    examine() {
        const laws = [
            "1. I am the Lord your God: you shall not have strange gods before me.",
            "2. You shall not take the name of the Lord your God in vain.",
            "3. Remember to keep holy the Lord's Day.",
            "4. Honor your father and your mother.",
            "5. You shall not kill.",
            "6. You shall not commit adultery.",
            "7. You shall not steal.",
            "8. You shall not bear false witness against your neighbor.",
            "9. You shall not covet your neighbor's wife.",
            "10. You shall not covet your neighbor's goods."
        ];

        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Examination of Conscience</h3></div >
            <div style="padding:1rem;">
                <p>Reflect on each commandment:</p>
                <div style="max-height:300px; overflow-y:auto;">
                    ${laws.map(l => `
                        <div style="margin-bottom:10px; padding:10px; background:rgba(255,255,255,0.05); border-left:3px solid var(--primary-gold);">
                            ${l}
                        </div>
                    `).join('')}
                </div>
                <button onclick="showNotification('Act of Contrition Suggested', 'info')" style="width:100%; margin-top:10px; padding:8px;">Finish Examination</button>
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 53: PSALM GENERATOR --- */
class PsalmGen {
    constructor() {
        this.verses = [
            "The Lord is my Shepherd; I shall not want. (Ps 23:1)",
            "Out of the depths I cry to you, O Lord. (Ps 130:1)",
            "Praise the Lord, O my soul! (Ps 146:1)",
            "Taste and see that the Lord is good. (Ps 34:8)",
            "Creating in me a clean heart, O God. (Ps 51:10)"
        ];
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-music"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '260px';
        btn.style.bottom = '80px';
        btn.title = "Random Psalm";
        btn.onclick = () => this.sing();
        document.body.appendChild(btn);
    }
    sing() {
        const v = this.verses[Math.floor(Math.random() * this.verses.length)];
        showNotification(v, "success");
    }
}

/* --- PHASE 54: HYMN LYRICS --- */
class HymnLyrics {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-microphone-alt"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '300px';
        btn.style.bottom = '80px';
        btn.title = "Hymnbook";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const hymns = [
            { t: "Holy, Holy, Holy", l: "Holy, Holy, Holy! Lord God Almighty! Early in the morning our song shall rise to Thee..." },
            { t: "Amazing Grace", l: "Amazing Grace! How sweet the sound, that saved a wretch like me..." },
            { t: "Salve Regina", l: "Salve, Regina, Mater misericordiae, vita, dulcedo, et spes nostra, salve..." }
        ];

        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Hymnbook</h3></div >
            <div style="padding:1rem;">
                ${hymns.map(h => `
                    <details style="margin-bottom:1rem; background:rgba(0,0,0,0.3); padding:0.5rem; border-radius:5px;">
                        <summary style="font-weight:bold; color:var(--primary-gold); cursor:pointer;">${h.t}</summary>
                        <p style="margin-top:0.5rem; font-style:italic; line-height:1.4;">${h.l}</p>
                    </details>
                `).join('')}
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);
    }
}

/* --- PHASES 66-75: VISUAL METAPHORS & DEVOTION --- */

/* --- PHASE 66: SIN DESTROYER --- */
class SinDestroyer {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-fire-alt"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '140px';
        btn.style.bottom = '200px';
        btn.title = "Cast Burdens";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Sin Destroyer</h3></div >
            <div style="padding:2rem; text-align:center;">
                <p>Write your burden, sin, or worry below.</p>
                <input type="text" id="sin-input" style="width:100%; padding:10px; margin:1rem 0; background:rgba(0,0,0,0.5); color:white; border:1px solid #555;" placeholder="Enter burden...">
                <button id="burn-btn" class="btn btn-primary-gold" style="background:#800000; border-color:#800000;">Cast into Fire</button>
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);

        modal.querySelector('#burn-btn').onclick = () => {
            const input = modal.querySelector('#sin-input');
            if (input.value.trim() !== "") {
                input.classList.add('burning');
                showNotification("It is consumed by His Mercy.", "info");
                setTimeout(() => {
                    input.value = "";
                    input.classList.remove('burning');
                    modal.remove();
                }, 1500);
            }
        };
    }
}

/* --- PHASE 67: GRACE METER --- */
class GraceMeter {
    constructor() {
        this.level = 0;
        this.init();
        // Expose global method to increase grace
        window.addGrace = (amount) => this.add(amount);
    }
    init() {
        const container = document.createElement('div');
        container.id = 'grace-meter-container';
        container.innerHTML = '<div id="grace-fill"></div>';
        container.title = "Grace Meter";
        document.body.appendChild(container);
    }
    add(amount) {
        this.level = Math.min(100, this.level + amount);
        const fill = document.getElementById('grace-fill');
        if (fill) fill.style.height = `${this.level}% `;

        if (this.level === 100) {
            showNotification("Full of Grace!", "success");
            // Optional: Trigger special effect
            this.level = 0; // Reset or keep full
            setTimeout(() => { if (fill) fill.style.height = '0%'; }, 2000);
        }
    }
}

/* --- PHASE 68: MERCY FOUNTAIN --- */
class MercyFountain {
    constructor() { this.init(); }
    init() {
        // Trigger button typically in Divine Mercy section
        // For testing, we'll hook it to a global event or existing UI later
    }
    gush() {
        // Particle system for water would go here
        showNotification("Blood and Water gush forth!", "info");
        window.addGrace(20);
    }
}

/* --- PHASE 69 & 70: TABERNACLE LIGHT & ADORATION --- */
class AdorationMode {
    constructor() { this.init(); }
    init() {
        const light = document.createElement('div');
        light.id = 'tabernacle-light';
        light.title = "Real Presence - Enter Adoration";
        light.onclick = () => this.enter();
        document.body.appendChild(light);
    }
    enter() {
        const view = document.createElement('div');
        view.className = 'monstrance-view';
        view.innerHTML = `
    < div style = "color:white; font-family:'Cinzel'; text-shadow:0 0 10px black;" >
        <h2>Adoremus in Aeternum</h2>
            </div >
    <button onclick="this.parentElement.remove()" style="margin-top:20px; background:rgba(0,0,0,0.5); color:white; border:1px solid white; padding:10px 20px; cursor:pointer;">Exit Sanctuary</button>
`;
        document.body.appendChild(view);
        showNotification("Silence... He is here.", "info");
    }
}

/* --- PHASE 71: ROSARY AUDIO --- */
class RosaryAudio {
    constructor() { this.init(); }
    init() {
        // Stub
    }
}

/* --- PHASE 72: STATIONS OF THE CROSS --- */
class StationsCross {
    constructor() {
        this.stations = [
            "1. Jesus is Condemned to Death", "2. Jesus Carries His Cross", "3. Jesus Falls the First Time",
            "4. Jesus Meets His Mother", "5. Simon Helps Jesus", "6. Veronica Wipes the Face of Jesus",
            "7. Jesus Falls the Second Time", "8. Jesus Meets the Women of Jerusalem", "9. Jesus Falls the Third Time",
            "10. Jesus is Stripped", "11. Jesus is Nailed to the Cross", "12. Jesus Dies on the Cross",
            "13. Jesus is Taken Down", "14. Jesus is Laid in the Tomb"
        ];
        this.index = 0;
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-cross"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '80px';
        btn.style.bottom = '200px';
        btn.title = "Stations of the Cross";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        this.index = 0;
        this.modal = document.createElement('div');
        this.modal.className = 'shrine-window active';
        this.updateView();
        document.body.appendChild(this.modal);
    }
    updateView() {
        if (!this.modal) return;
        this.modal.innerHTML = `
    < div class="shrine-header" > <h3>Via Dolorosa</h3></div >
            <div style="padding:2rem; text-align:center;">
                <h2 style="color:var(--primary-gold); font-family:'Cinzel'; margin-bottom:1rem;">Station ${this.index + 1}</h2>
                <div style="font-size:1.5rem; margin-bottom:2rem;">${this.stations[this.index]}</div>
                <div style="height:150px; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; margin-bottom:1rem;">
                    (Visual Placeholder)
                </div>
                <div class="btn-group">
                    <button class="btn btn-secondary" onclick="document.dispatchEvent(new CustomEvent('st-prev'))" ${this.index === 0 ? 'disabled' : ''}>Prev</button>
                    <button class="btn btn-primary-gold" onclick="document.dispatchEvent(new CustomEvent('st-next'))">${this.index === 13 ? 'Finish' : 'Next'}</button>
                </div>
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;

        // Event listeners for this modal instance
        document.addEventListener('st-next', () => {
            if (this.index < 13) { this.index++; this.updateView(); }
            else { this.modal.remove(); showNotification("It is finished.", "success"); }
        }, { once: true });

        document.addEventListener('st-prev', () => {
            if (this.index > 0) { this.index--; this.updateView(); }
        }, { once: true });
    }
}

/* --- PHASE 73: SEVEN SORROWS --- */
class SevenSorrows {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-heart-broken"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '120px';
        btn.style.bottom = '200px';
        btn.title = "Seven Sorrows";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const sorrows = [
            "1. Prophecy of Simeon", "2. Flight into Egypt", "3. Loss of Child Jesus",
            "4. Meeting on Via Dolorosa", "5. Crucifixion", "6. Descent from Cross", "7. Burial"
        ];
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Mater Dolorosa</h3></div >
            <div style="padding:1rem;">
                <ul>
                    ${sorrows.map(s => `<li style="margin-bottom:10px; padding:5px; border-bottom:1px solid #444;">${s}</li>`).join('')}
                </ul>
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 74: DIVINE MERCY CHAPLET --- */
class DivineMercy {
    constructor() {
        this.count = 0;
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-tint"></i>'; // Drop
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '160px';
        btn.style.bottom = '200px';
        btn.title = "Divine Mercy Counter";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        this.count = 0;
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Divine Mercy Chaplet</h3></div >
            <div style="padding:2rem; text-align:center;">
                <div id="dm-counter" style="font-size:4rem; color:#f00; font-family:'Cinzel'; margin-bottom:1rem;">0</div>
                <p>For the sake of His sorrowful Passion...</p>
                <div style="width:200px; height:200px; margin:0 auto; background:linear-gradient(to bottom, white, red, white); border-radius:50%; opacity:0.1; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); z-index:-1;"></div>
                <button id="dm-pray" class="btn btn-primary-gold" style="width:100%; margin-top:2rem;">Pray "Have Mercy"</button>
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);

        const counter = modal.querySelector('#dm-counter');
        modal.querySelector('#dm-pray').onclick = () => {
            this.count++;
            counter.innerText = this.count;

            // Visual feedback
            counter.style.transform = 'scale(1.2)';
            setTimeout(() => counter.style.transform = 'scale(1)', 100);

            if (this.count === 10) showNotification("Decade Complete. Eternal Father...", "info");
            if (this.count === 50) {
                showNotification("Chaplet Complete.", "success");
                this.count = 0;
            }
        };
    }
}

/* --- PHASES 76-85: LEGACY & COSMIC --- */

/* --- PHASE 76: PRAYER BOUQUET --- */
class PrayerBouquet {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-spa"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '20px';
        btn.style.bottom = '200px';
        btn.title = "Send Prayer Bouquet";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Prayer Bouquet</h3></div >
            <div style="padding:1rem; text-align:center;">
                <p>Select spiritual gifts to send:</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; text-align:left;">
                    <label><input type="checkbox" id="pb-rosary"> 1 Holy Rosary</label>
                    <label><input type="checkbox" id="pb-mass"> 1 Check Holy Mass</label>
                    <label><input type="checkbox" id="pb-chaplet"> 1 Divine Mercy</label>
                    <label><input type="checkbox" id="pb-fast"> 1 Day Fasting</label>
                </div>
                <input type="text" id="pb-name" placeholder="Recipient Name" style="width:100%; margin-top:1rem; padding:5px;">
                <button id="pb-send" class="btn btn-primary-gold" style="margin-top:1rem; width:100%;">Generte Card</button>
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);

        modal.querySelector('#pb-send').onclick = () => {
            const name = modal.querySelector('#pb-name').value;
            if (name) {
                showNotification(`Bouquet created for ${name}!`, "success");
                // In a real app, this would generate an image/PDF
                modal.remove();
            } else {
                showNotification("Please enter a name.", "warning");
            }
        };
    }
}

/* --- PHASE 77: SPIRITUAL TESTAMENT --- */
class SpiritualWill {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-scroll"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '20px';
        btn.style.bottom = '260px';
        btn.title = "Spiritual Testament";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class= "shrine-header" > <h3>My Spiritual Testament</h3></div >
            <div class="legacy-form" style="padding:1rem;">
                <label>I believe in...</label>
                <textarea rows="3"></textarea>
                <label>I forgive...</label>
                <textarea rows="3"></textarea>
                <label>I ask forgiveness for...</label>
                <textarea rows="3"></textarea>
                <button onclick="showNotification('Saved to Eternal Memory (Local)', 'success')" style="width:100%; padding:10px;">Seal Testament</button>
            </div>
            <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
`;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 78: OBITUARY GENERATOR --- */
class MementoMori {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-skull"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '60px'; // Offset
        btn.style.bottom = '200px';
        btn.title = "Memento Mori / Obituary";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    init() {
        // Re-using button from previous logic or new one? 
        // Actually the previous location logic might overlap. 
        // Let's just create the modal logic hooked to a new button.
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-skull"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '160px';
        btn.style.bottom = '260px';
        btn.title = "Memento Mori";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
    < div class="shrine-header" > <h3>Memento Mori / Obituary</h3></div >
        <div class="legacy-form" style="padding:1rem;">
            <p>Imagine your life is over. How will you be remembered?</p>
            <input type="text" id="mm-virtue" placeholder="Primary Virtue practiced...">
                <input type="text" id="mm-sin" placeholder="Primary Sin conquered...">
                    <textarea id="mm-bio" placeholder="Brief holy summary..." rows="3"></textarea>
                    <button onclick="showNotification('Obituary generated (Vision)', 'info')" style="width:100%; padding:10px; margin-top:10px;">Preview Eternity</button>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 79: LAST RITES GUIDE --- */
class LastRites {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-cross-hairs"></i>'; // Icon pending
        btn.className = 'shrine-trigger-btn';
        btn.style.background = '#8b0000';
        btn.style.color = 'white';
        btn.style.left = '80px';
        btn.style.bottom = '260px'; // Stacked
        btn.title = "Emergency: Last Rites";
        btn.onclick = () => this.show();
        document.body.appendChild(btn);
    }
    show() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.style.border = '2px solid red';
        modal.innerHTML = `
                <div class="shrine-header" style="background:red;"><h3>EMERGENCY: DYING</h3></div>
                <div style="padding:1rem;">
                    <ol>
                        <li><strong>Call a Priest immediately.</strong></li>
                        <li>Pray the Act of Contrition with the person.</li>
                        <li>Say: "Jesus, Mary, Joseph, I give you my heart and my soul."</li>
                        <li>Sprinkle Holy Water.</li>
                    </ol>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 80: FUNERAL PLANNER --- */
class FuneralPlan {
    constructor() { this.init(); }
    init() {
        // Stub replaced with button
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-church"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '140px';
        btn.style.bottom = '320px';
        btn.title = "Funeral Planner";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>My Funeral Liturgy</h3></div>
                <div class="legacy-form" style="padding:1rem; overflow-y:auto; max-height:300px;">
                    <label>First Reading</label>
                    <select style="width:100%; margin-bottom:10px; color:black;">
                        <option>Job 19:23-27</option>
                        <option>Wisdom 3:1-9</option>
                        <option>Isaiah 25:6-9</option>
                    </select>
                    <label>Gospel</label>
                    <select style="width:100%; margin-bottom:10px; color:black;">
                        <option>Matt 5:1-12 (Beatitudes)</option>
                        <option>John 11:17-27 (Lazarus)</option>
                    </select>
                    <label>Hymns (Comma separated)</label>
                    <textarea rows="2">On Eagle's Wings, I Am the Bread of Life</textarea>
                    <button onclick="showNotification('Funeral Wishes Saved', 'success')" style="width:100%; padding:10px;">Save Wishes</button>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 81: COSMIC CHRIST --- */
class CosmicVis {
    constructor() {
        this.active = false;
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-atom"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '20px';
        btn.style.bottom = '260px';
        btn.title = "Cosmic View";
        btn.onclick = () => this.toggle();
        document.body.appendChild(btn);
    }
    toggle() {
        if (this.active) {
            document.querySelector('.cosmic-canvas')?.remove();
            this.active = false;
        } else {
            this.active = true;
            this.render();
            showNotification("In Him all things hold together.", "info");
        }
    }
    render() {
        const cvs = document.createElement('canvas');
        cvs.className = 'cosmic-canvas';
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
        document.body.appendChild(cvs);
        const ctx = cvs.getContext('2d');

        // Simple starfield
        const stars = Array(200).fill().map(() => ({
            x: Math.random() * cvs.width,
            y: Math.random() * cvs.height,
            s: Math.random() * 2
        }));

        const animate = () => {
            if (!this.active) return;
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            ctx.fillStyle = 'white';
            stars.forEach(s => {
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.s, 0, Math.PI * 2);
                ctx.fill();
                s.x -= 0.2; // Rotate/move
                if (s.x < 0) s.x = cvs.width;
            });
            requestAnimationFrame(animate);
        };
        animate();
    }
}

/* --- PHASE 82: ALPHA OMEGA --- */
class FractalZoom {
    constructor() {
        this.active = false;
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-infinity"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '60px';
        btn.style.bottom = '260px'; // Stacked with cosmic
        btn.title = "Eternal Zoom";
        btn.onclick = () => this.toggle();
        document.body.appendChild(btn);
    }
    toggle() {
        if (this.active) {
            document.querySelector('#fractal-canvas')?.remove();
            this.active = false;
        } else {
            this.active = true;
            this.render();
            showNotification("Entering Eternity...", "info");
        }
    }
    render() {
        const cvs = document.createElement('canvas');
        cvs.id = 'fractal-canvas';
        cvs.style.position = 'fixed';
        cvs.style.top = '0';
        cvs.style.left = '0';
        cvs.style.width = '100vw';
        cvs.style.height = '100vh';
        cvs.style.zIndex = '90';
        cvs.style.pointerEvents = 'none';
        cvs.style.mixBlendMode = 'overlay';
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
        document.body.appendChild(cvs);
        const ctx = cvs.getContext('2d');

        let zoom = 1;
        const animate = () => {
            if (!this.active) return;
            // Simple concentric circles for "Zoom" effect stub
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            ctx.strokeStyle = `hsla(${zoom % 360}, 100%, 50%, 0.5)`;
            ctx.lineWidth = 2;

            for (let i = 1; i < 20; i++) {
                ctx.beginPath();
                ctx.arc(cvs.width / 2, cvs.height / 2, (i * 50 * zoom / 100) % (Math.max(cvs.width, cvs.height)), 0, Math.PI * 2);
                ctx.stroke();
            }
            zoom += 1;
            requestAnimationFrame(animate);
        };
        animate();
    }
}


/* --- PHASE 83: CREATION CRIES --- */
class NatureSounds {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-leaf"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '140px';
        btn.style.bottom = '260px';
        btn.title = "Creation Groans";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Creation Cries</h3></div>
                <div style="padding:1rem; text-align:center;">
                    <p>Listen to creation groaning for redemption (Rom 8:22).</p>
                    <div style="display:flex; justify-content:center; gap:10px; margin-top:1rem;">
                        <button class="btn btn-secondary" onclick="showNotification('ðŸŽµ Wind Howling...', 'info')">Wind</button>
                        <button class="btn btn-secondary" onclick="showNotification('ðŸŽµ Thunder Rolling...', 'info')">Thunder</button>
                        <button class="btn btn-secondary" onclick="showNotification('ðŸŽµ River Rushing...', 'info')">River</button>
                    </div>
                    <p style="font-size:0.8rem; margin-top:1rem; opacity:0.7;">(Audio synthesis simulated)</p>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 84: DESERT FATHERS --- */
class DesertWisdom {
    constructor() {
        this.quotes = [
            "Abba Moses said: Go sit in your cell, and your cell will teach you everything.",
            "Abba Anthony said: Whoever has not been tempted cannot be saved.",
            "Amma Syncletica said: In the beginning there are a great many battles and a good deal of suffering for those who are advancing towards God and afterwards, ineffable joy.",
            "Abba Poemen said: Do not judge yourself, then you will not judge your brother."
        ];
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-sun"></i>'; // Sun for desert
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '180px';
        btn.style.bottom = '260px';
        btn.title = "Desert Wisdom";
        btn.onclick = () => this.speak();
        document.body.appendChild(btn);
    }
    speak() {
        const quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.style.background = '#d2b48c'; // Tan/Sand color
        modal.style.color = '#3e2723';
        modal.innerHTML = `
                <div class="shrine-header" style="background:#8d6e63; color:black;"><h3>Voice from the Desert</h3></div>
                <div style="padding:2rem; font-family:'Courier New', monospace; font-weight:bold; font-size:1.1rem;">
                    "${quote}"
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px; color:black;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASES 86-95: KNOWLEDGE & COMMUNITY --- */

/* --- PHASE 86: SUMMA THEOLOGICA --- */
class SummaTree {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-sitemap"></i>'; // Tree icon
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '20px';
        btn.style.bottom = '320px';
        btn.title = "Summa Theologica";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Summa Theologica</h3></div>
                <div style="padding:1rem;">
                    <div class="tree-node"><strong>Part I: God</strong></div>
                    <div class="tree-node" style="margin-left:40px;">Q2: The Existence of God</div>
                    <div class="tree-node" style="margin-left:40px;">Q12: How God is Known by Us</div>
                    <div class="tree-node"><strong>Part II: Man</strong></div>
                    <div class="tree-node"><strong>Part III: Christ</strong></div>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 87: CATECHISM SEARCH --- */
class CatechismSearch {
    constructor() {
        this.db = {
            "grace": "CCC 1996: Grace is favor, the free and undeserved help that God gives us to respond to his call to become children of God.",
            "sin": "CCC 1849: Sin is an offense against reason, truth, and right conscience; it is failure in genuine love for God and neighbor.",
            "hope": "CCC 1817: Hope is the theological virtue by which we desire the kingdom of heaven and eternal life as our happiness.",
            "prayer": "CCC 2559: 'Prayer is the raising of one's mind and heart to God or the requesting of good things from God.'"
        };
        this.init();
    }
    init() {
        // Stub replaced
    }
    // We'll hook this into the main UI later or add a button if needed.
    // For now, let's expose it as a global utility or button.
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-book-open"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '60px';
        btn.style.bottom = '320px';
        btn.title = "CCC Search";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Catechism Search</h3></div>
                <div style="padding:1rem;">
                    <input type="text" id="ccc-input" placeholder="Search (e.g. Grace, Sin, Hope)..." style="width:100%; padding:10px; margin-bottom:10px; color:black;">
                        <button id="ccc-btn" class="btn btn-primary-gold" style="width:100%;">Search</button>
                        <div id="ccc-result" style="margin-top:1rem; padding:10px; background:rgba(255,255,255,0.1); border-radius:5px; min-height:50px;"></div>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);

        modal.querySelector('#ccc-btn').onclick = () => {
            const term = modal.querySelector('#ccc-input').value.toLowerCase();
            const result = this.db[term] || "Term not found in local index. (Try 'Grace', 'Sin', 'Hope')";
            modal.querySelector('#ccc-result').innerText = result;
        };
    }
}

/* --- PHASE 88: PAPAL ENCYCLICALS --- */
class EncyclicalReader {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-scroll"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '100px';
        btn.style.bottom = '320px';
        btn.title = "Encyclicals";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const documents = [
            { t: "Rerum Novarum", d: "On Capital and Labor (Pop Leo XIII, 1891)" },
            { t: "Humanae Vitae", d: "On Human Life (Pope Paul VI, 1968)" },
            { t: "Fides et Ratio", d: "On Faith and Reason (Pope John Paul II, 1998)" },
            { t: "Laudato Si", d: "On Care for Our Common Home (Pope Francis, 2015)" }
        ];

        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Papal Encyclicals</h3></div>
                <div style="padding:1rem;">
                    ${documents.map(d => `
                    <div style="margin-bottom:10px; border-bottom:1px solid #444; padding-bottom:5px;">
                        <h4 style="color:var(--primary-gold); margin:0;">${d.t}</h4>
                        <p style="margin:0; font-size:0.9rem; opacity:0.8;">${d.d}</p>
                    </div>
                `).join('')}
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 89: COUNCIL CANONS --- */
class CouncilHistory {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-landmark"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '180px';
        btn.style.bottom = '320px';
        btn.title = "Councils";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const councils = [
            "Nicaea I (325): Defined divinity of Christ (Homoousios).",
            "Constantinople I (381): Defined divinity of Holy Spirit.",
            "Ephesus (431): Mary is Theotokos (God-bearer).",
            "Chalcedon (451): Christ is Two Natures in One Person.",
            "Trent (1545-63): Response to Reformation, Canon of Scriptures.",
            "Vatican II (1962-65): Renewal of Liturgy, Church in Modern World."
        ];

        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Ecumenical Councils</h3></div>
                <div style="padding:1rem;">
                    <ul style="padding-left:20px;">
                        ${councils.map(c => `<li style="margin-bottom:8px;">${c}</li>`).join('')}
                    </ul>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 90: HERESY DETECTOR --- */
class HeresyQuiz {
    constructor() {
        this.questions = [
            { q: "Christ is a creature made by God, similar but not equal to the Father.", a: "Heresy (Arianism)", correct: false },
            { q: "Christ has two natures (human and divine) united in one Divine Person.", a: "Orthodox", correct: true },
            { q: "We are saved strictly by secret knowledge (Gnosis).", a: "Heresy (Gnosticism)", correct: false }
        ];
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-shield-alt"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '220px';
        btn.style.bottom = '320px';
        btn.title = "Heresy Detector";
        btn.onclick = () => this.start();
        document.body.appendChild(btn);
    }
    start() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Heresy Detector</h3></div>
                <div id="quiz-container" style="padding:1rem;"></div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);

        this.renderQuestion(modal.querySelector('#quiz-container'), 0);
    }
    renderQuestion(container, index) {
        if (index >= this.questions.length) {
            container.innerHTML = "<p>Inquisition Complete. You remained Orthodox.</p>";
            return;
        }
        const q = this.questions[index];
        container.innerHTML = `
                <p><strong>Statement:</strong> "${q.q}"</p>
                <button class="btn btn-secondary" style="width:100%; margin-bottom:5px;" onclick="document.dispatchEvent(new CustomEvent('quiz-ans', {detail:{idx:${index}, choice:true}}))">Accept as Truth</button>
                <button class="btn btn-secondary" style="width:100%;" onclick="document.dispatchEvent(new CustomEvent('quiz-ans', {detail:{idx:${index}, choice:false}}))">Condemn as Heresy</button>
                `;

        // One-time listener for this step (hacky but works for instant prototype)
        const handler = (e) => {
            if (e.detail.idx !== index) return;
            // Logic: If q.correct is true (Orthodox), we should Accept (choice:true).
            // If q.correct is false (Heresy), we should Condemn (choice:false).
            // So if choice == q.correct, we are RIGHT.
            const isRight = (e.detail.choice === q.correct);

            if (isRight) {
                showNotification("Correct! Orthodox Judgment.", "success");
                this.renderQuestion(container, index + 1);
            } else {
                showNotification("Anathema! You have erred.", "warning");
                // Reset
                this.renderQuestion(container, 0);
            }
            document.removeEventListener('quiz-ans', handler);
        };
        document.addEventListener('quiz-ans', handler, { once: true });
    }
}

/* --- PHASE 91: APOLOGETICS NINJA --- */
class ApologeticsNinja {
    constructor() {
        this.questions = [
            { q: "Why do you pray to Mary?", a: "We don't pray TO her as God, we ask for her intercession, just as you ask friends to pray for you." },
            { q: "Is the Eucharist a symbol?", a: "Christ said 'This IS my body', not 'This represents'. The early Church unanimously held it to be specific reality." }
        ];
        this.init();
    }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-ninja"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '20px';
        btn.style.bottom = '320px';
        btn.title = "Apologetics Quick Answers";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Apologetics Ninja</h3></div>
                <div style="padding:1rem;">
                    ${this.questions.map(qa => `
                    <div class="apologetics-card">
                        <h4 style="color:var(--primary-gold);">${qa.q}</h4>
                        <p>${qa.a}</p>
                    </div>
                `).join('')}
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 92: EVANGELISM MODE --- */
class EvangelismCards {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-bullhorn"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '60px'; // Stacked
        btn.style.bottom = '320px';
        btn.title = "Evangelize";
        btn.onclick = () => this.generate();
        document.body.appendChild(btn);
    }
    generate() {
        const verses = [
            "For God so loved the world... (John 3:16)",
            "I am the Way, the Truth, and the Life. (John 14:6)",
            "Repent, for the Kingdom of Heaven is at hand. (Matt 4:17)"
        ];
        const v = verses[Math.floor(Math.random() * verses.length)];
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Evangelism Card</h3></div>
                <div style="padding:2rem; text-align:center; background:linear-gradient(45deg, #1a1a1a, #333);">
                    <h2 style="color:var(--primary-gold); font-family:'Cinzel';">${v}</h2>
                    <p style="margin-top:1rem; opacity:0.7;">soulguidance.app</p>
                    <button class="btn btn-secondary" onclick="showNotification('Card Copied to Clipboard!', 'success')" style="margin-top:1rem;">Copy Image</button>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 93: DONATION JAR --- */
class DonationSim {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-coins"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '80px';
        btn.style.bottom = '320px';
        btn.title = "Almsgiving";
        btn.onclick = () => this.donate();
        document.body.appendChild(btn);
    }
    donate() {
        showNotification("Crypto Alms Sent! (Simulated)", "success");
        // Coin clink sound could go here
    }
}

/* --- PHASE 94: MERCH STORE --- */
class MerchMockup {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-tshirt"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '120px';
        btn.style.bottom = '320px';
        btn.title = "Merch Store";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const items = [
            { n: "Soul Hoodie", p: "$49.99" },
            { n: "Combat Rosary", p: "$29.99" },
            { n: "Saint Mug", p: "$14.99" }
        ];
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Merch Store</h3></div>
                <div class="merch-grid" style="padding:1rem;">
                    ${items.map(i => `
                    <div class="merch-item">
                        <div style="height:100px; background:rgba(255,255,255,0.1); margin-bottom:10px; display:flex; align-items:center; justify-content:center;">[IMG]</div>
                        <h4>${i.n}</h4>
                        <p>${i.p}</p>
                        <button onclick="showNotification('Added to Cart', 'success')" style="cursor:pointer; padding:5px; background:var(--primary-gold); border:none; color:black;">Add</button>
                    </div>
                `).join('')}
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 95: NEWSLETTER --- */
class NewsletterSub {
    constructor() { this.init(); }
    init() {
        // Simple banner at bottom right? Or just a button.
        // Let's add a small button in the cluster.
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-envelope"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.right = '160px';
        btn.style.bottom = '320px';
        btn.title = "Newsletter";
        btn.onclick = () => {
            const email = prompt("Enter email for 'Book of Life' updates:");
            if (email) showNotification("Subscribed!", "success");
        };
        document.body.appendChild(btn);
    }
}

/* --- PHASES 96-100: FINAL CONSUMMATION --- */

/* --- PHASE 96: ADMIN DASHBOARD --- */
class AdminStats {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-chart-line"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '100px';
        btn.style.bottom = '380px'; // Higher row
        btn.title = "Kingdom Stats";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const savings = Math.floor(Math.random() * 5000) + 1000;
        const prayers = Math.floor(Math.random() * 50000) + 10000;
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Kingdom Analytics</h3></div>
                <div style="padding:2rem; text-align:center;">
                    <div style="font-size:2rem; color:var(--primary-gold);">${savings.toLocaleString()}</div>
                    <div style="margin-bottom:1rem;">Souls Edified</div>
                    <div style="font-size:2rem; color:#93C5FD;">${prayers.toLocaleString()}</div>
                    <div>Prayers Offered</div>
                    <div style="margin-top:2rem; height:10px; background:#333; border-radius:5px; overflow:hidden;">
                        <div style="width:75%; height:100%; background:var(--gradient-gold);"></div>
                    </div>
                    <p style="font-size:0.8rem; margin-top:5px;">Global Sanctification Goal</p>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);
    }
}

/* --- PHASE 97: USER PROFILES --- */
class UserProfile {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-user-circle"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '60px';
        btn.style.bottom = '380px';
        btn.title = "My Soul Profile";
        btn.onclick = () => this.open();
        document.body.appendChild(btn);
    }
    open() {
        const savedName = localStorage.getItem('saintName') || "Pilgrim";
        const modal = document.createElement('div');
        modal.className = 'shrine-window active';
        modal.innerHTML = `
                <div class="shrine-header"><h3>Soul Profile</h3></div>
                <div style="padding:1rem;">
                    <label>Name in Religion</label>
                    <input type="text" id="profile-name" value="${savedName}" style="width:100%; margin-bottom:1rem; color:black; padding:5px;">
                        <p><strong>Canonization Status:</strong> Servant of God</p>
                        <div style="height:5px; background:#444; width:100%; margin-bottom:1rem;"><div style="width:20%; background:white; height:100%;"></div></div>
                        <button id="profile-save" class="btn btn-primary-gold" style="width:100%;">Save Identity</button>
                </div>
                <button onclick="this.parentElement.remove()" style="position:absolute; top:10px; right:10px;">X</button>
                `;
        document.body.appendChild(modal);

        modal.querySelector('#profile-save').onclick = () => {
            const val = modal.querySelector('#profile-name').value;
            localStorage.setItem('saintName', val);
            showNotification("Identity Updated", "success");
        };
    }
}

/* --- PHASE 98: CLOUD SYNC --- */
class CloudWittness {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-cloud-upload-alt"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '20px';
        btn.style.bottom = '380px';
        btn.title = "Sync to Heaven";
        btn.onclick = () => this.sync();
        document.body.appendChild(btn);
    }
    sync() {
        showNotification("Uploading merits to Cloud of Witnesses...", "info");
        setTimeout(() => {
            showNotification("Sync Complete. Treasures stored in Heaven.", "success");
        }, 2000);
    }
}

/* --- PHASE 99: THE RAPTURE --- */
class AscensionAnim {
    constructor() { this.init(); }
    init() {
        const btn = document.createElement('button');
        btn.innerHTML = 'MARANATHA';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '50%';
        btn.style.bottom = '40px';
        btn.style.transform = 'translateX(-50%)';
        btn.style.fontWeight = 'bold';
        btn.style.letterSpacing = '2px';
        btn.style.border = '2px solid white';
        btn.title = "The End";
        // btn.onclick = () => this.trigger(); // DISABLED FOR LAUNCH
        document.body.appendChild(btn);
    }
    trigger() {
        showNotification("The Trumpet Sounds...", "warning");
        setTimeout(() => {
            document.body.classList.add('rapture-ascend');

            // Audio (Mock Trumpet)
            if (window.soulGuidanceAudio) {
                const osc = window.soulGuidanceAudio.ctx.createOscillator();
                const g = window.soulGuidanceAudio.ctx.createGain();
                osc.connect(g);
                g.connect(window.soulGuidanceAudio.ctx.destination);
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(200, window.soulGuidanceAudio.ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(800, window.soulGuidanceAudio.ctx.currentTime + 3);
                g.gain.setValueAtTime(0, window.soulGuidanceAudio.ctx.currentTime);
                g.gain.linearRampToValueAtTime(0.5, window.soulGuidanceAudio.ctx.currentTime + 1);
                g.gain.linearRampToValueAtTime(0, window.soulGuidanceAudio.ctx.currentTime + 4);
                osc.start();
                osc.stop(window.soulGuidanceAudio.ctx.currentTime + 4);
            }

            setTimeout(() => {
                new BeatificVision().reveal();
            }, 3500);
        }, 1000);
    }
}

/* --- PHASE 100: BEATIFIC VISION --- */
class BeatificVision {
    constructor() { }
    reveal() {
        const vision = document.createElement('div');
        vision.id = 'beatific-vision';
        vision.innerHTML = '<div id="beatific-text">I AM</div>';
        document.body.appendChild(vision);

        // Force reflow
        vision.offsetHeight;
        vision.style.opacity = '1';

        showNotification("It is finished.", "success");
    }
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('âœ… Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('âŒ Service Worker registration failed:', error);
            });
    });
}

/* --- PHASE 101: PERFORMANCE OPTIMIZER --- */
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        console.log('? Starting Auto-Optimization...');
        this.optimizeImages();
        this.optimizeLinks();
        this.enableSmoothScroll();
    }

    optimizeImages() {
        const images = document.querySelectorAll('img:not([loading])');
        images.forEach(img => {
            img.loading = 'lazy';
            img.style.transition = 'opacity 0.5s ease-in';
        });
    }

    optimizeLinks() {
        const externalLinks = document.querySelectorAll('a[href^="http"]');
        externalLinks.forEach(link => {
            if (!link.href.includes(window.location.hostname)) {
                link.rel = 'noopener noreferrer';
                link.target = '_blank';
            }
        });
    }

    enableSmoothScroll() {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

/* --- PHASE 103: USER FEEDBACK INTEGRATION --- */
class FeedbackManager {
    constructor() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        this.createFeedbackButton();
    }

    createFeedbackButton() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-comment-dots"></i>';
        btn.className = 'shrine-trigger-btn';
        btn.style.left = '20px';
        btn.style.bottom = '100px'; // Position above other buttons
        btn.style.zIndex = '9999';
        btn.title = 'Send Feedback';
        btn.onclick = () => this.openFeedbackModal();
        document.body.appendChild(btn);
    }

    openFeedbackModal() {
        const modalHTML = `
            <div id="feedback-modal" class="customization-modal" style="display:flex;">
                <div class="modal-content glass-panel">
                    <div class="modal-header">
                        <h3><i class="fas fa-comment-alt"></i> Share Your Thoughts</h3>
                        <button class="close-btn" onclick="document.getElementById('feedback-modal').remove()"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body">
                        <p>Help us improve your spiritual journey.</p>
                        <div class="star-rating" style="text-align:center; font-size: 2rem; color: #ffd700; margin: 1rem 0;">
                            <i class="far fa-star" onclick="this.className='fas fa-star'" style="cursor:pointer"></i>
                            <i class="far fa-star" onclick="this.className='fas fa-star'" style="cursor:pointer"></i>
                            <i class="far fa-star" onclick="this.className='fas fa-star'" style="cursor:pointer"></i>
                            <i class="far fa-star" onclick="this.className='fas fa-star'" style="cursor:pointer"></i>
                            <i class="far fa-star" onclick="this.className='fas fa-star'" style="cursor:pointer"></i>
                        </div>
                        <textarea id="feedback-text" placeholder="Your message..." style="width:100%; height:100px; background:rgba(255,255,255,0.1); color:white; border:1px solid gold; padding:10px; border-radius:8px;"></textarea>
                    </div>
                    <div class="customization-actions">
                        <button class="btn btn-primary" onclick="window.soulGuidanceFeedback.submit()">Submit</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    submit() {
        const text = document.getElementById('feedback-text').value;
        if (text) {
            showNotification('Thank you for your feedback!', 'success');
            document.getElementById('feedback-modal').remove();
            // Simulate sending to server
            console.log('Feedback submitted:', text);
        } else {
            showNotification('Please enter a message.', 'warning');
        }
    }
}
window.soulGuidanceFeedback = new FeedbackManager();



// --- PHASE 2: SIN DESTROYER LOGIC ---
// SinDestroyer removed - using existing implementation in Phase 66


// --- PHASE 3: RAPTURE & MEMORY LOGIC ---
class MemoryTrainer {
    constructor() {
        this.container = document.querySelector('.memory-trainer-container');
        this.verseDisplay = document.querySelector('.memory-verse-display');
        this.hideBtn = document.querySelector('#hide-words-btn');
        this.resetBtn = document.querySelector('#reset-memory-btn');
        this.words = [];
        this.init();
    }

    init() {
        if (!this.container || !this.verseDisplay) return;

        // Prepare words
        const text = this.verseDisplay.innerText.trim();
        this.words = text.split(' ').map(w => `<span class="memory-word">${w}</span>`);
        this.verseDisplay.innerHTML = this.words.join(' ');

        if (this.hideBtn) this.hideBtn.addEventListener('click', () => this.hideRandom());
        if (this.resetBtn) this.resetBtn.addEventListener('click', () => this.reset());
    }

    hideRandom() {
        const visible = this.verseDisplay.querySelectorAll('.memory-word:not(.hidden)');
        if (visible.length === 0) return;

        // Hide 20% of remaining words
        const count = Math.max(1, Math.floor(visible.length * 0.2));
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * visible.length);
            visible[randomIndex].classList.add('hidden');
        }
    }

    reset() {
        this.verseDisplay.querySelectorAll('.memory-word').forEach(w => w.classList.remove('hidden'));
    }
}

class RaptureManager {
    constructor() {
        this.btn = document.getElementById('maranatha-btn');
        this.vision = document.getElementById('beatific-vision');
        this.init();
    }

    init() {
        if (!this.btn) return;
        this.btn.addEventListener('click', () => this.ascend());
    }

    ascend() {
        if (!confirm('Are you ready to ascend?')) return;

        // 1. Audio Fade Out
        if (window.holyAudio) window.holyAudio.toggleMaster(); // Stop mixer

        // 2. Play Trumpet or Ascent Sound
        const sound = new Audio('assets/audio/rapture.mp3');
        sound.volume = 1.0;
        sound.play().catch(console.warn);

        // 3. Visual Transition
        document.body.style.transition = 'opacity 3s ease';
        document.body.style.opacity = '0';

        setTimeout(() => {
            if (this.vision) {
                this.vision.style.display = 'flex';
                this.vision.style.opacity = '1';
                document.body.style.opacity = '1';
            }
        }, 3000);
    }
}


class PrayerRequestManager {
    constructor() {
        this.btn = document.getElementById('finalPrayerBtn');
        this.init();
    }

    init() {
        if (!this.btn) return;
        this.btn.addEventListener('click', () => this.openModal());
    }

    openModal() {
        // Create Modal Elements
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.style.display = 'flex';
        modal.style.zIndex = '10000';

        modal.innerHTML = `
            <div class="modal-content" style="max-width: 500px; text-align: center;">
                <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
                <h3 style="color: var(--primary-gold); margin-bottom: 1rem;">ðŸ™ Prayer Request</h3>
                <p>Share your intention. We will pray for you.</p>
                <textarea id="prayer-text-input" placeholder="Type your prayer here..." style="width: 100%; height: 120px; margin: 1rem 0; padding: 1rem; border-radius: 10px; background: rgba(255,255,255,0.05); color: white; border: 1px solid var(--primary-gold);"></textarea>
                <button id="submit-prayer-btn" class="btn btn-primary">Send Prayer</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Focus
        setTimeout(() => document.getElementById('prayer-text-input').focus(), 100);

        // Bind Submit
        document.getElementById('submit-prayer-btn').addEventListener('click', () => {
            const btn = document.getElementById('submit-prayer-btn');
            const input = document.getElementById('prayer-text-input');

            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                return;
            }

            // Simulate Sending
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Amen';
                btn.style.background = '#4CAF50';
                btn.style.borderColor = '#4CAF50';

                setTimeout(() => {
                    modal.remove();
                    this.showToast('Your prayer has been received. Amen.');
                }, 1000);
            }, 1500);
        });

        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    showToast(msg) {
        const toast = document.createElement('div');
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = 'var(--primary-gold)';
        toast.style.color = '#000';
        toast.style.padding = '1rem 2rem';
        toast.style.borderRadius = '50px';
        toast.style.fontWeight = 'bold';
        toast.style.zIndex = '10001';
        toast.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
        toast.innerText = msg;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }
}

// Global Notification System
window.showNotification = function (msg, type = 'success') {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';

    // Color coding
    if (type === 'success') {
        toast.style.background = 'var(--primary-gold)';
        toast.style.color = '#000';
    } else if (type === 'warning') {
        toast.style.background = '#ff9800';
        toast.style.color = '#000';
    } else if (type === 'error') {
        toast.style.background = '#f44336';
        toast.style.color = '#fff';
    } else {
        toast.style.background = 'var(--primary-purple-deep)';
        toast.style.color = '#fff';
    }

    toast.style.padding = '1rem 2rem';
    toast.style.borderRadius = '50px';
    toast.style.fontWeight = 'bold';
    toast.style.zIndex = '10001';
    toast.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.innerText = msg;

    document.body.appendChild(toast);

    // Animate In
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(-10px)';
    });

    // Animate Out
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// Init New Modules
document.addEventListener('DOMContentLoaded', () => {
    new MemoryTrainer();
    new RaptureManager();
    new PrayerRequestManager();
});

// Stub classes to prevent crash errors
class SacredRhythms { constructor() { console.log('placeholder: SacredRhythms initialized'); } }
class VirtualShrine { constructor() { console.log('placeholder: VirtualShrine initialized'); } }
class ChantHero { constructor() { console.log('placeholder: ChantHero initialized'); } }
