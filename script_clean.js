
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
        btn.onclick = () => this.trigger();
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
                console.log('✅ Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('❌ Service Worker registration failed:', error);
            });
    });
}
