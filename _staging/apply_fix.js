// Node.js script to fix duplicate section in index.html
const fs = require('fs');

console.log('Reading index.html...');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

console.log(`Total lines: ${lines.length}`);

// Remove lines 1474-2215 (array indices 1473-2214)
const startDelete = 1473; // Line 1474
const endDelete = 2214;   // Line 2215

console.log(`Deleting lines ${startDelete + 1} to ${endDelete + 1}...`);

const fixedLines = [
    ...lines.slice(0, startDelete),
    ...lines.slice(endDelete + 1)
];

console.log(`New total lines: ${fixedLines.length}`);
console.log(`Removed ${lines.length - fixedLines.length} lines`);

// Write fixed version
fs.writeFileSync('index.html', fixedLines.join('\n'), 'utf8');

console.log('✅ Done! Duplicate section removed.');
console.log('\nVerifying fix...');

// Verify no duplicate IDs
const fixed = fs.readFileSync('index.html', 'utf8');
const prayerBookMatches = (fixed.match(/id="prayer-book"/g) || []).length;
const bookCoverMatches = (fixed.match(/id="bookCover"/g) || []).length;
const bookContentMatches = (fixed.match(/id="bookContent"/g) || []).length;

console.log(`\nID occurrences:`);
console.log(`  id="prayer-book": ${prayerBookMatches} (should be 1)`);
console.log(`  id="bookCover": ${bookCoverMatches} (should be 1)`);
console.log(`  id="bookContent": ${bookContentMatches} (should be 1)`);

if (prayerBookMatches === 1 && bookCoverMatches === 1 && bookContentMatches === 1) {
    console.log('\n✅ All IDs are now unique! Fix successful!');
} else {
    console.log('\n⚠️ Warning: Some IDs may still be duplicated');
}
