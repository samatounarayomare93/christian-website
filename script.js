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
        new DivineInteractions();
        new HolyAudioPlayer();
        new DivineContent();
        new DivineContent();
        new FocusManager();
        window.soulGuidancePrayerBoard = new PrayerBoardManager();
        window.soulGuidanceRosary = new RosaryTracker();
        new CandleManager();
        new ThemeManager();

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
        // new VirtueManager(); already initialized above

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
        this.isPlaying = false;
        this.volume = 0.5;
        this.track = 'https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f792cb.mp3'; // Placeholder Gregorian/Ambient
        this.audio = new Audio(this.track);
        this.audio.loop = true;

        // UI Elements
        this.container = null;
        this.playBtn = null;
        this.muteBtn = null;

        this.init();
    }

    init() {
        console.log('🎵 Initializing Holy Audio Player...');
        this.createPlayerUI();
        this.setupListeners();
    }

    createPlayerUI() {
        const div = document.createElement('div');
        div.className = 'holy-player-container active';
        div.innerHTML = `
            <div class="holy-player">
                <div class="player-controls">
                    <button class="player-btn" id="playPauseBtn" aria-label="Play Ambient Music">
                        <i class="fas fa-play"></i>
                    </button>
                    <span class="player-track-info">Gregorian Chant - Anima Christi</span>
                    <button class="player-btn" id="muteBtn" aria-label="Mute">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(div);

        this.container = div;
        this.playBtn = div.querySelector('#playPauseBtn');
        this.muteBtn = div.querySelector('#muteBtn');
    }

    setupListeners() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.muteBtn.addEventListener('click', () => this.toggleMute());
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
            this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
            this.isPlaying = false;
        } else {
            this.audio.play().catch(e => console.log('Audio autoplay blocked:', e));
            this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            this.isPlaying = true;
        }
    }

    toggleMute() {
        if (this.audio.muted) {
            this.audio.muted = false;
            this.muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            this.audio.muted = true;
            this.muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
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
        console.log('📖 Initializing Divine Content...');
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
                { en: "The Annunciation", ar: "البشارة" },
                { en: "The Visitation", ar: "الزيارة" },
                { en: "The Nativity", ar: "الميلاد" },
                { en: "The Presentation", ar: "التقدمة" },
                { en: "Finding Jesus in the Temple", ar: "وجود يسوع في الهيكل" }
            ],
            // Add other mysteries as needed (Sorrowful, Glorious, Luminous)
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
                <div class="current-mystery-badge">Joyful Mysteries - الأسرار الفرحة</div>
                <button class="close-rosary-btn">&times;</button>
                
                <div class="rosary-beads-display" id="rosary-beads"></div>
                
                <div class="rosary-text-display">
                    <h2 class="rosary-text-primary" id="rosary-en">Start the Rosary</h2>
                    <h3 class="rosary-text-secondary" id="rosary-ar">ابدأ المسبحة</h3>
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
            arText = "أبانا الذي في السماوات";
            beadHTML = `<div class="bead large completed"></div>`;
            for (let i = 0; i < 10; i++) beadHTML += `<div class="bead"></div>`;
        } else if (this.state.beadIndex >= 1 && this.state.beadIndex <= 10) {
            // Hail Mary
            enText = "Hail Mary";
            arText = "السلام عليك يا مريم";
            beadHTML = `<div class="bead large completed"></div>`;
            for (let i = 1; i <= 10; i++) {
                const status = i < this.state.beadIndex ? 'completed' : (i === this.state.beadIndex ? 'active' : '');
                beadHTML += `<div class="bead ${status}"></div>`;
            }
        } else {
            // Glory Be
            enText = "Glory Be";
            arText = "المجد للآب والابن والروح القدس";
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

        // Update UI
        const badge = document.getElementById('season-text');
        if (badge) badge.innerText = season.name;

        // Set Theme Attribute
        if (season.code !== 'ordinary') {
            document.documentElement.setAttribute('data-season', season.code);
            console.log(`📅 Liturgical Season: ${season.name}`);
        }
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
        if (date >= ashWednesday && date < easter) return { name: "Lent - زمن الصوم", code: "lent" };
        if (date >= easter && date <= pentecost) return { name: "Eastertide - زمن القيامة", code: "easter" }; // Gold default
        if (date >= adventStart && date < christmas) return { name: "Advent - زمن المجيء", code: "advent" };
        if (date.getMonth() === 11 && date.getDate() >= 25) return { name: "Christmas Season - زمن الميلاد", code: "easter" }; // Gold

        // Simple check for Fridays (Mini-Lent/Penance)
        if (date.getDay() === 5) return { name: "Friday Penance - توبة الجمعة", code: "lent" };

        return { name: "Ordinary Time - الزمن العادي", code: "ordinary" };
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

class DivineSearch {
    constructor() {
        this.input = document.getElementById('divine-search-input');
        this.init();
    }

    init() {
        if (!this.input) return;

        this.input.addEventListener('input', (e) => this.filter(e.target.value.toLowerCase()));
    }

    filter(term) {
        const cards = document.querySelectorAll('.prayer-card');
        let hasResults = false;

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            const section = card.closest('.prayer-section');

            if (text.includes(term)) {
                card.style.display = 'block';
                card.classList.add('animate__animated', 'animate__fadeIn');
                hasResults = true;
                if (section) section.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Hide empty sections
        document.querySelectorAll('.prayer-section').forEach(section => {
            const visibleCards = section.querySelectorAll('.prayer-card[style="display: block;"]');
            // If search is active, rely on visible cards. If empty, rely on original toggles
            if (term.length > 0) {
                section.style.display = visibleCards.length > 0 ? 'block' : 'none';
            } else {
                // Reset: Show only if it was originally open? 
                // For simplicity, showing all section HEADERS, but typically we want to revert state.
                // Better approach: Just show accordion headers, hide content. 
                // Assuming accordion logic handles display, so we just reset card visibility.
            }
        });

        // Reset Logic if term is cleared
        if (term === "") {
            cards.forEach(c => c.style.display = ''); // Revert to CSS default
            document.querySelectorAll('.prayer-section').forEach(s => s.style.display = ''); // Revert
        }
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

class PilgrimageManager {
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
            { name: "St. Thérèse of Lisieux", quote: "I will spend my heaven doing good on earth." },
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

        // Observer for visiting sections
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id || 'section-' + Array.from(this.sections).indexOf(entry.target);
                    if (!this.visited.has(id)) {
                        this.visited.add(id);
                        localStorage.setItem('sg_visited_sections', JSON.stringify([...this.visited]));
                        this.checkProgress();
                    }
                }
            });
        }, { threshold: 0.5 }); // 50% visible

        this.sections.forEach(s => observer.observe(s));

        // Halo Follow
        document.addEventListener('mousemove', (e) => {
            if (this.unlocked && this.halo) {
                this.halo.style.left = e.clientX + 'px';
                this.halo.style.top = e.clientY + 'px';
            }
        });
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
constructor() {
    this.init();
}

init() {
    this.updateDivinceOffice();
    this.updateSoulStats();
    this.trackVisit();
}

updateDivinceOffice() {
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
    if (streakEl) streakEl.innerHTML = `🔥 ${Math.min(visits, 999)} Visits`;
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
            btn.innerHTML = '<i class="fas fa-spa"></i> Meditate on this Word / تأمل في الكلمة';
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
                <h3 class="board-title"><i class="fas fa-bookmark"></i> My Prayer Journal</h3>
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
        btn.innerHTML = '<i class="fas fa-book-open"></i> Journal';
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
        document.querySelectorAll('.prayer-card, .card').forEach((card, index) => {
            if (card.querySelector('.save-prayer-btn')) return;

            const title = card.querySelector('h3, h4')?.innerText || `Prayer ${index + 1}`;
            const btn = document.createElement('button');
            btn.className = 'save-prayer-btn';
            btn.innerHTML = '<i class="far fa-bookmark"></i> Save';
            btn.onclick = (e) => {
                e.stopPropagation();
                this.savePrayer(title, card.innerText.substring(0, 100) + '...');
            };
            card.appendChild(btn);
        });
    }

    savePrayer(title, preview) {
        if (this.savedPrayers.some(p => p.title === title)) {
            showNotification('Prayer already in journal!', 'info');
            return;
        }

        this.savedPrayers.push({
            id: Date.now(),
            title,
            preview,
            date: new Date().toLocaleDateString(),
            reflection: "" // New Journal Field
        });
        this.persist();
        showNotification('Added to Prayer Journal', 'success');
        this.toggleBoard(true);
    }

    deletePrayer(id) {
        this.savedPrayers = this.savedPrayers.filter(p => p.id !== id);
        this.persist();
        this.renderSavedPrayers();
    }

    updateReflection(id, text) {
        const prayer = this.savedPrayers.find(p => p.id === id);
        if (prayer) {
            prayer.reflection = text;
            this.persist();
        }
    }

    persist() {
        localStorage.setItem('soulGuidance_savedPrayers', JSON.stringify(this.savedPrayers));
    }

    renderSavedPrayers() {
        const list = document.getElementById('saved-prayers-list');
        if (!list) return;

        if (this.savedPrayers.length === 0) {
            list.innerHTML = '<p style="color:var(--text-silver); text-align:center; margin-top:2rem;">Your journal is empty.<br>Save prayers to write reflections.</p>';
            return;
        }

        list.innerHTML = this.savedPrayers.map(p => `
            <div class="saved-prayer-card" id="p-card-${p.id}">
                <h4 style="color:var(--primary-gold); margin-bottom:0.5rem; font-size:1.1rem;">${p.title}</h4>
                <p style="font-size:0.9rem; color:var(--text-silver); margin-bottom:0.5rem;">${p.preview}</p>
                
                <!-- Journal Section -->
                <div>
                    <button class="journal-toggle-btn" onclick="document.getElementById('journal-${p.id}').style.display = document.getElementById('journal-${p.id}').style.display === 'block' ? 'none' : 'block'">
                        <i class="fas fa-pen-nib"></i> Write Reflection
                    </button>
                    <textarea id="journal-${p.id}" class="journal-area" style="display:${p.reflection ? 'block' : 'none'}" placeholder="What is God saying to you through this prayer?..." 
                    oninput="window.soulGuidancePrayerBoard.updateReflection(${p.id}, this.value)">${p.reflection || ''}</textarea>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem;">
                    <small style="color:var(--primary-gold-dark);">${p.date}</small>
                    <button class="delete-prayer-btn" onclick="window.soulGuidancePrayerBoard.deletePrayer(${p.id})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

class SaintOracle {
    constructor() {
        this.card = document.getElementById('wisdom-card');
        this.text = document.getElementById('wisdom-text');
        this.author = document.getElementById('wisdom-author');

        this.quotes = [
            { text: "Our hearts are restless, until they can find rest in you.", author: "St. Augustine of Hippo" },
            { text: "تأخرت في حبك، أيها الجمال القديم الجديد، تأخرت في حبك.", author: "القديس أغوسطينوس" },
            { text: "Prayer is the place of refuge for every worry, a foundation for cheerfulness.", author: "St. John Chrysostom" },
            { text: "الصلاة هي ميناء الهدوء للنفوس المضطربة.", author: "الذهبي الفم" },
            { text: "Spread love everywhere you go. Let no one ever come to you without leaving better and happier.", author: "Mother Teresa" },
            { text: "انشر الحـب أينما ذهبت. لا تدع أحدًا يأتي إليك دون أن يغادر أفضل وأسعد.", author: "الأم تريزا" },
            { text: "To love is to will the good of the other.", author: "St. Thomas Aquinas" },
            { text: "Preach the Gospel at all times. Use words if necessary.", author: "St. Francis of Assisi" },
            { text: "بشّروا بالإنجيل في كل حين. استخدموا الكلمات إذا لزم الأمر.", author: "القديس فرنسيس الأسيزي" }
        ];

        this.init();
    }

    init() {
        if (!this.card) return;

        this.card.addEventListener('click', () => {
            if (this.card.classList.contains('flipped')) {
                // Reset if already flipped (optional: separate reset button or toggle)
                this.card.classList.remove('flipped');
                setTimeout(() => this.setNewQuote(), 300); // Change while hiding
            } else {
                this.setNewQuote();
                this.card.classList.add('flipped');
            }
        });
    }

    setNewQuote() {
        const idx = Math.floor(Math.random() * this.quotes.length);
        this.text.innerText = `"${this.quotes[idx].text}"`;
        this.author.innerText = `- ${this.quotes[idx].author}`;
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

        const subject = encodeURIComponent(`🙏 PRAYER REQUEST: ${type}`);
        const body = encodeURIComponent(
            `Dear Soul Guidance Ministry,

I submit this prayer intention with faith.

TYPE: ${type}
FROM: ${name}

MESSAGE:
${msg}

"Lord, hear my prayer."`
        );

        window.location.href = `mailto:soulguidances@hotmail.com?subject=${subject}&body=${body}`;

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
        console.log('✨ Initializing Divine Interactions (Phase 3)...');
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

            console.log('🎵 Heavenly Audio Initialized');
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

                particle.style.setProperty('--tx', `${tx}px`);
                particle.style.setProperty('--ty', `${ty}px`);
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