/* ============================================
   SOUL GUIDANCE - PROFESSIONAL AUDIO SYSTEM
   نظام صوتي احترافي
   ============================================ */

class ProfessionalAudioManager {
    constructor() {
        this.tracks = {
            rain: {
                audio: null,
                url: 'assets/audio/rain.mp3',
                fallbackUrl: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_2c0e5c8c6e.mp3',
                volume: 0,
                isPlaying: false,
                icon: 'fa-cloud-rain'
            },
            chant: {
                audio: null,
                url: 'assets/audio/chant.mp3',
                fallbackUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
                volume: 0,
                isPlaying: false,
                icon: 'fa-music'
            },
            fire: {
                audio: null,
                url: 'assets/audio/wind.mp3',
                fallbackUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c610232532.mp3',
                volume: 0,
                isPlaying: false,
                icon: 'fa-fire-alt'
            }
        };
        
        this.masterVolume = 0.7;
        this.isMuted = false;
        this.initialized = false;
        
        this.init();
    }
    
    init() {
        console.log('🎵 Initializing Professional Audio System...');
        
        // Initialize audio objects
        Object.keys(this.tracks).forEach(trackName => {
            const track = this.tracks[trackName];
            track.audio = new Audio();
            track.audio.loop = true;
            track.audio.volume = 0;
            
            // Try to load the audio file
            track.audio.src = track.url;
            
            // Fallback to CDN if local file fails
            track.audio.addEventListener('error', () => {
                console.warn(`⚠️ Local audio failed for ${trackName}, using fallback`);
                track.audio.src = track.fallbackUrl;
            });
            
            // Preload
            track.audio.preload = 'auto';
        });
        
        this.initialized = true;
        console.log('✅ Professional Audio System initialized');
    }
    
    async toggleTrack(trackName) {
        if (!this.initialized) {
            console.error('❌ Audio system not initialized');
            return;
        }
        
        const track = this.tracks[trackName];
        if (!track) {
            console.error(`❌ Track ${trackName} not found`);
            return;
        }
        
        try {
            if (track.isPlaying) {
                // Stop the track
                await this.fadeOut(trackName);
                track.audio.pause();
                track.isPlaying = false;
                this.updateIcon(trackName, false);
                console.log(`⏸️ Stopped ${trackName}`);
            } else {
                // Start the track
                await track.audio.play();
                track.isPlaying = true;
                await this.fadeIn(trackName);
                this.updateIcon(trackName, true);
                console.log(`▶️ Playing ${trackName}`);
            }
        } catch (error) {
            console.error(`❌ Error toggling ${trackName}:`, error);
            this.showNotification(`Could not play ${trackName}. Please check audio files.`, 'error');
        }
    }
    
    async fadeIn(trackName, duration = 1000) {
        const track = this.tracks[trackName];
        const targetVolume = track.volume / 100 * this.masterVolume;
        const steps = 20;
        const stepDuration = duration / steps;
        const volumeStep = targetVolume / steps;
        
        for (let i = 0; i <= steps; i++) {
            track.audio.volume = volumeStep * i;
            await this.sleep(stepDuration);
        }
    }
    
    async fadeOut(trackName, duration = 1000) {
        const track = this.tracks[trackName];
        const currentVolume = track.audio.volume;
        const steps = 20;
        const stepDuration = duration / steps;
        const volumeStep = currentVolume / steps;
        
        for (let i = steps; i >= 0; i--) {
            track.audio.volume = volumeStep * i;
            await this.sleep(stepDuration);
        }
    }
    
    setVolume(trackName, volume) {
        const track = this.tracks[trackName];
        if (!track) return;
        
        track.volume = volume;
        
        if (track.isPlaying) {
            track.audio.volume = (volume / 100) * this.masterVolume;
        }
        
        console.log(`🔊 ${trackName} volume: ${volume}%`);
    }
    
    setMasterVolume(volume) {
        this.masterVolume = volume / 100;
        
        // Update all playing tracks
        Object.keys(this.tracks).forEach(trackName => {
            const track = this.tracks[trackName];
            if (track.isPlaying) {
                track.audio.volume = (track.volume / 100) * this.masterVolume;
            }
        });
        
        console.log(`🔊 Master volume: ${volume}%`);
    }
    
    toggleMute() {
        this.isMuted = !this.isMuted;
        
        Object.keys(this.tracks).forEach(trackName => {
            const track = this.tracks[trackName];
            if (track.isPlaying) {
                track.audio.muted = this.isMuted;
            }
        });
        
        console.log(`🔇 Muted: ${this.isMuted}`);
        return this.isMuted;
    }
    
    stopAll() {
        Object.keys(this.tracks).forEach(trackName => {
            const track = this.tracks[trackName];
            if (track.isPlaying) {
                track.audio.pause();
                track.audio.currentTime = 0;
                track.isPlaying = false;
                this.updateIcon(trackName, false);
            }
        });
        
        console.log('⏹️ All tracks stopped');
    }
    
    updateIcon(trackName, isActive) {
        const iconElement = document.getElementById(`icon-${trackName}`);
        if (iconElement) {
            if (isActive) {
                iconElement.classList.add('active');
                iconElement.style.background = 'var(--gradient-gold-elegant)';
                iconElement.style.color = 'var(--purple-dark)';
            } else {
                iconElement.classList.remove('active');
                iconElement.style.background = 'var(--gradient-purple-elegant)';
                iconElement.style.color = 'var(--white)';
            }
        }
    }
    
    showNotification(message, type = 'info') {
        // Try to use existing notification system
        if (typeof window.showNotification === 'function') {
            window.showNotification(message, type);
            return;
        }
        
        // Fallback notification
        console.log(`${type.toUpperCase()}: ${message}`);
        
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            background: ${type === 'error' ? '#DC143C' : '#50C878'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            font-family: 'Cairo', sans-serif;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // Get current state
    getState() {
        const state = {};
        Object.keys(this.tracks).forEach(trackName => {
            const track = this.tracks[trackName];
            state[trackName] = {
                isPlaying: track.isPlaying,
                volume: track.volume
            };
        });
        return state;
    }
}

// Initialize and expose globally
window.professionalAudio = new ProfessionalAudioManager();

// Backward compatibility with old system
window.soulGuidanceSanctuary = {
    toggleTrack: (trackName) => window.professionalAudio.toggleTrack(trackName),
    setVolume: (trackName, volume) => window.professionalAudio.setVolume(trackName, volume),
    stopAll: () => window.professionalAudio.stopAll()
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('✅ Professional Audio System loaded and ready!');
