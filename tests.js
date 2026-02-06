
// Lightweight Test Suite for Soul Guidance
// Usage: Copy/Paste into Console or include <script src="tests.js"></script>

console.group('🧪 Soul Guidance Test Suite');

// Test 1: ProfileManager Sanitization
console.group('Test 1: ProfileManager XSS Protection');
try {
    const pm = new ProfileManager();
    const maliciousInput = '<img src=x onerror=alert(1)>';
    pm.setUserName(maliciousInput);

    const heroTitle = document.querySelector('.hero-title span.text-gradient-gold');
    if (heroTitle.innerHTML.includes('<img')) {
        console.error('❌ FAILED: Image tag injected!');
    } else {
        console.log('✅ PASSED: HTML tags escaped/removed.');
    }
} catch (e) {
    console.error('Error in Test 1:', e);
}
console.groupEnd();

// Test 2: BadgeManager Unlock Logic
console.group('Test 2: BadgeManager Unlock');
try {
    localStorage.removeItem('soulGuidance_stats');
    localStorage.removeItem('soulGuidance_badges');

    const am = new AnalyticsManager();
    const bm = new BadgeManager();

    // Simulate 10 prayers
    am.stats.prayersCompleted = 10;
    am.save();

    // Check badges
    bm.checkBadges();

    const unlocked = JSON.parse(localStorage.getItem('soulGuidance_badges'));
    if (unlocked.includes('warrior') && unlocked.includes('novice')) {
        console.log('✅ PASSED: Warrior and Novice badges unlocked.');
    } else {
        console.error('❌ FAILED: Badges not unlocked correctly.', unlocked);
    }
} catch (e) {
    console.error('Error in Test 2:', e);
}
console.groupEnd();

// Test 3: Language Toggle
console.group('Test 3: Language Toggle');
try {
    const tm = new TranslationManager();
    const initialLang = tm.currentLang; // 'ar'

    tm.toggleLang();
    if (document.documentElement.lang === 'en' && document.documentElement.dir === 'ltr') {
        console.log('✅ PASSED: Switched to EN/LTR');
    } else {
        console.error('❌ FAILED: DOM attributes not updated.');
    }

    // Reset
    tm.toggleLang();
} catch (e) {
    console.error('Error in Test 3:', e);
}
console.groupEnd();

console.log('🏁 Test Suite Completed');
console.groupEnd();
