const fs = require('fs');
const filepath = 'c:/Users/coman/Desktop/1.25.2026 christian website/index.html';

try {
    const buffer = fs.readFileSync(filepath);

    // Find the index of '<'
    const startIndex = buffer.indexOf('<');

    if (startIndex > 0) {
        console.log(`Found '<' at index ${startIndex}. Stripping ${startIndex} bytes.`);
        const newBuffer = buffer.slice(startIndex);
        fs.writeFileSync(filepath, newBuffer);
        console.log('Sanitized file start.');
    } else if (startIndex === 0) {
        console.log('File already starts with <');
    } else {
        console.error('Could not find < in file!');
    }

} catch (err) {
    console.error(err);
}
