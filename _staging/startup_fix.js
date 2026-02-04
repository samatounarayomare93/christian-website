// Force close any startup modals repeatedly
document.addEventListener('DOMContentLoaded', function () {
    const checkInterval = setInterval(() => {
        const modals = document.querySelectorAll('.modal');
        let closed = false;
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                closed = true;
            }
        });

        if (closed) {
            console.log('🔒 Startup Safeguard: Closed a popup that tried to open');
            document.body.style.overflow = 'auto';
        }
    }, 200); // Check every 200ms

    // Stop checking after 5 seconds
    setTimeout(() => {
        clearInterval(checkInterval);
        console.log('🛡️ Startup Safeguard: Protection period ended');
    }, 5000);
});
