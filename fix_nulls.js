const fs = require('fs');

const FILE_PATH = 'c:\\Users\\coman\\OneDrive\\Desktop\\1.25.2026 christian website\\styles.css';

console.log('Reading file...');
let content = fs.readFileSync(FILE_PATH, 'utf8');

// Check for null bytes
if (content.includes('\0')) {
    console.log('Null bytes detected! Fixing...');
    // Remove all null bytes
    const fixed = content.replace(/\0/g, '');
    fs.writeFileSync(FILE_PATH, fixed, 'utf8');
    console.log('File cleaned of null bytes.');
} else {
    console.log('No null bytes found.');
}
