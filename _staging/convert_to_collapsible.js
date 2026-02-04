// SCRIPT TO CONVERT ALL PRAYER CARDS TO COLLAPSIBLE FORMAT
// This script will be used to systematically convert all prayer sections

function convertPrayerSectionToCollapsible() {
    console.log('🔄 Converting all prayer sections to collapsible format...');
    
    // Find all prayer cards that need conversion
    const allCards = document.querySelectorAll('.card:not(.prayer-card)');
    
    allCards.forEach((card, index) => {
        // Skip testimonial cards and contact cards
        if (card.classList.contains('testimonial-card') || 
            card.classList.contains('contact-card') ||
            card.closest('#testimonials') ||
            card.closest('#contact')) {
            return;
        }
        
        // Convert to prayer card format
        card.classList.add('prayer-card');
        card.classList.remove('card');
        
        // Get existing content
        const icon = card.querySelector('.card-icon');
        const title = card.querySelector('h3');
        const subtitle = card.querySelector('.subtitle');
        const content = card.innerHTML;
        
        if (title && icon) {
            // Create new structure
            const headerHTML = `
                <div class="prayer-header" onclick="togglePrayer(this)">
                    ${icon.outerHTML}
                    ${title.outerHTML}
                    ${subtitle ? subtitle.outerHTML : ''}
                    <i class="fas fa-chevron-down toggle-icon"></i>
                </div>
            `;
            
            // Get content after title and subtitle
            const contentDiv = document.createElement('div');
            contentDiv.className = 'prayer-content';
            
            // Clone all content except icon, title, subtitle
            const tempDiv = card.cloneNode(true);
            tempDiv.querySelector('.card-icon')?.remove();
            tempDiv.querySelector('h3')?.remove();
            tempDiv.querySelector('.subtitle')?.remove();
            
            contentDiv.innerHTML = tempDiv.innerHTML;
            
            // Replace card content
            card.innerHTML = headerHTML + contentDiv.outerHTML;
            
            console.log(`✅ Converted prayer card ${index + 1}: ${title.textContent}`);
        }
    });
    
    console.log('🎉 All prayer sections converted to collapsible format!');
}

// Function to add expand/collapse buttons to all sections
function addExpandCollapseButtons() {
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        // Skip if already has controls
        if (header.querySelector('.prayer-controls')) {
            return;
        }
        
        // Check if this section has prayer cards
        const nextElement = header.nextElementSibling;
        if (nextElement && nextElement.classList.contains('card-grid')) {
            const hasPrayerCards = nextElement.querySelector('.prayer-card');
            
            if (hasPrayerCards) {
                const controlsHTML = `
                    <div class="prayer-controls">
                        <button class="expand-all-btn" onclick="expandAllPrayers()">
                            <i class="fas fa-expand-alt"></i> Expand All
                        </button>
                        <button class="collapse-all-btn" onclick="collapseAllPrayers()">
                            <i class="fas fa-compress-alt"></i> Collapse All
                        </button>
                    </div>
                `;
                
                header.insertAdjacentHTML('beforeend', controlsHTML);
                console.log('✅ Added controls to section:', header.querySelector('.section-title')?.textContent);
            }
        }
    });
}

// Auto-run conversion when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        convertPrayerSectionToCollapsible();
        addExpandCollapseButtons();
    }, 1000);
});

console.log('📜 Prayer conversion script loaded');