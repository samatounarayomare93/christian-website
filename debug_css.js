const fs = require('fs');

const FILE_PATH = 'c:\\Users\\coman\\OneDrive\\Desktop\\1.25.2026 christian website\\styles.css';

console.log('Reading file...');
let content = fs.readFileSync(FILE_PATH, 'utf8');
const lines = content.split('\n');

// Inspect line 3557 (index 3556)
// "               b a c k d r o p - f i l t e r :    b l u r ( 1 0 p x ) ;"

const lineIndex = 3556;
if (lines.length > lineIndex) {
    const line = lines[lineIndex];
    console.log(`Line ${lineIndex}: "${line}"`);
    console.log(`Length: ${line.length}`);

    // Print first 50 char codes
    let codes = [];
    for (let i = 0; i < Math.min(line.length, 50); i++) {
        codes.push(`${line[i]}(${line.charCodeAt(i)})`);
    }
    console.log('Char codes:', codes.join(' '));
} else {
    console.log('Line 3556 not found.');
}
