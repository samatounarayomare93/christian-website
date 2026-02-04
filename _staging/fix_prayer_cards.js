// COMPREHENSIVE PRAYER CARDS FIX SCRIPT
// Run this script to fix all prayer cards on the website

console.log('🔧 Starting comprehensive prayer cards fix...');

// Function to fix a single prayer card
function fixPrayerCard(card, index) {
    try {
        // Ensure it has the prayer-card class
        if (!card.classList.contains('prayer-card')) {
            card.classList.add('prayer-card');
        }
        
        // Find or create prayer header
        let header = card.querySelector('.prayer-header');
        if (!header) {
            // Create header from existing content
            const icon = card.querySelector('.card-icon');
            const title = card.querySelector('h3');
            const subtitle = card.querySelector('.subtitle');
            
            if (icon && title) {
                header = document.createElement('div');
                header.className = 'prayer-header';
                header.onclick = function() { togglePrayer(this); };
                
                // Move elements to header
                header.appendChild(icon.cloneNode(true));
                header.appendChild(title.cloneNode(true));
                if (subtitle) {
                    header.appendChild(subtitle.cloneNode(true));
                }
                
                // Add toggle icon
                const toggleIcon = document.createElement('i');
                toggleIcon.className = 'fas fa-chevron-down toggle-icon';
                header.appendChild(toggleIcon);
                
                // Remove original elements
                icon.remove();
                title.remove();
                if (subtitle) subtitle.remove();
                
                // Insert header at beginning
                card.insertBefore(header, card.firstChild);
            }
        } else {
            // Ensure header has click handler
            if (!header.onclick && !header.getAttribute('onclick')) {
                header.onclick = function() { togglePrayer(this); };
            }
            
            // Ensure toggle icon exists
            if (!header.querySelector('.toggle-icon')) {
                const toggleIcon = document.createElement('i');
                toggleIcon.className = 'fas fa-chevron-down toggle-icon';
                header.appendChild(toggleIcon);
            }
        }
        
        // Find or create prayer content
        let content = card.querySelector('.prayer-content');
        if (!content) {
            content = document.createElement('div');
            content.className = 'prayer-content';
            
            // Move remaining content to prayer-content
            const remainingElements = Array.from(card.children).filter(child => 
                !child.classList.contains('prayer-header')
            );
            
            remainingElements.forEach(element => {
                content.appendChild(element);
            });
            
            card.appendChild(content);
        }
        
        console.log(`✅ Fixed prayer card ${index + 1}`);
        return true;
        
    } catch (error) {
        console.error(`❌ Error fixing prayer card ${index + 1}:`, error);
        return false;
    }
}

// Function to fix all prayer cards on the page
function fixAllPrayerCards() {
    console.log('🔍 Searching for prayer cards to fix...');
    
    // Find all potential prayer cards
    const allCards = document.querySelectorAll('.card, .prayer-card');
    let fixedCount = 0;
    let errorCount = 0;
    
    allCards.forEach((card, index) => {
        // Skip testimonial and contact cards
        if (card.classList.contains('testimonial-card') || 
            card.classList.contains('contact-card') ||
            card.closest('#testimonials') ||
            card.closest('#contact')) {
            return;
        }
        
        if (fixPrayerCard(card, index)) {
            fixedCount++;
        } else {
            errorCount++;
        }
    });
    
    console.log(`🎉 Prayer cards fix complete!`);
    console.log(`✅ Fixed: ${fixedCount} cards`);
    console.log(`❌ Errors: ${errorCount} cards`);
    
    return { fixed: fixedCount, errors: errorCount };
}

// Function to test all prayer cards
function testAllPrayerCards() {
    console.log('🧪 Testing all prayer cards...');
    
    const prayerCards = document.querySelectorAll('.prayer-card');
    let workingCount = 0;
    let brokenCount = 0;
    
    prayerCards.forEach((card, index) => {
        const header = card.querySelector('.prayer-header');
        const content = card.querySelector('.prayer-content');
        const toggleIcon = card.querySelector('.toggle-icon');
        const hasClickHandler = header && (header.onclick || header.getAttribute('onclick'));
        
        if (header && content && toggleIcon && hasClickHandler) {
            workingCount++;
            console.log(`✅ Prayer card ${index + 1}: Working`);
        } else {
            brokenCount++;
            console.log(`❌ Prayer card ${index + 1}: Broken`);
            console.log('  - Header:', !!header);
            console.log('  - Content:', !!content);
            console.log('  - Toggle icon:', !!toggleIcon);
            console.log('  - Click handler:', hasClickHandler);
        }
    });
    
    console.log(`🧪 Test complete!`);
    console.log(`✅ Working: ${workingCount} cards`);
    console.log(`❌ Broken: ${brokenCount} cards`);
    
    return { working: workingCount, broken: brokenCount };
}

// Auto-run fix when script loads
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                fixAllPrayerCards();
                testAllPrayerCards();
            }, 1000);
        });
    } else {
        setTimeout(() => {
            fixAllPrayerCards();
            testAllPrayerCards();
        }, 1000);
    }
}

// Export functions for manual use
if (typeof window !== 'undefined') {
    window.fixAllPrayerCards = fixAllPrayerCards;
    window.testAllPrayerCards = testAllPrayerCards;
    window.fixPrayerCard = fixPrayerCard;
}

console.log('🔧 Prayer cards fix script loaded and ready!');