class DivineBibleEngine {
    constructor() {
        this.data = BIBLE_DATA;
        this.currentEmotion = null;
        this.init();
    }

    init() {
        console.log('📖 Divine Bible Engine Initializing...');
        this.injectUI();
    }

    injectUI() {
        const container = document.getElementById('bible-engine-container');
        if (!container) return;

        container.innerHTML = `
            <div class="bible-engine glass-panel" data-aos="fade-up">
                <div class="engine-header">
                    <i class="fas fa-book-bible engine-icon"></i>
                    <h3>Biblical Guidance • إرشاد كتابي</h3>
                    <p>How are you feeling today? • بماذا تشعر اليوم؟</p>
                </div>
                
                <div class="emotion-grid">
                    ${Object.keys(this.data.emotions).map(key => {
            const emo = this.data.emotions[key];
            return `
                            <button class="emotion-btn" onclick="window.divineBible.showVerse('${key}')">
                                <span class="emo-en">${emo.label_en}</span>
                                <span class="emo-ar">${emo.label_ar}</span>
                            </button>
                        `;
        }).join('')}
                </div>

                <div id="verse-display-area" class="verse-display hidden">
                    <div class="verse-content">
                        <p id="verse-text-en" class="verse-en"></p>
                        <hr class="verse-divider">
                        <p id="verse-text-ar" class="verse-ar"></p>
                        <p id="verse-ref" class="verse-ref"></p>
                    </div>
                </div>
            </div>
        `;
    }

    showVerse(emotionKey) {
        const emotion = this.data.emotions[emotionKey];
        if (!emotion) return;

        // Pick random verse
        const verse = emotion.verses[Math.floor(Math.random() * emotion.verses.length)];

        // Update UI
        const display = document.getElementById('verse-display-area');
        const textEn = document.getElementById('verse-text-en');
        const textAr = document.getElementById('verse-text-ar');
        const ref = document.getElementById('verse-ref');

        // Hide first to trigger animation
        display.classList.add('hidden');

        setTimeout(() => {
            textEn.textContent = `"${verse.text_en}"`;
            textAr.textContent = `"${verse.text_ar}"`;
            ref.textContent = verse.ref;

            // Highlight active button
            document.querySelectorAll('.emotion-btn').forEach(btn => btn.classList.remove('active'));
            event.currentTarget.classList.add('active'); // Note: 'event' usage relies on inline onclick

            display.classList.remove('hidden');
            display.classList.add('animate__animated', 'animate__fadeInUp');
        }, 300);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.divineBible = new DivineBibleEngine();
});
