const fs = require('fs');

const filepath = 'c:/Users/coman/Desktop/1.25.2026 christian website/index.html';

try {
    // Read the file as binary buffer
    const buffer = fs.readFileSync(filepath);

    // The current file content on disk is UTF-8 encoded, but the characters are wrong.
    // It contains the UTF-8 seq for 'Ù', which is 0xC3 0x99.
    // The original byte was 0xD9 (from Windows-1252 'Ù').
    // So we have the bytes C3 99 on disk.
    // We want 0xD9.
    // So we need to take the string "Ù...", encode it as Windows-1252 (or Latin1) to get the byte 0xD9.

    // Step 1: Read as UTF-8 string (which preserves the "wrong" characters)
    const wrongString = buffer.toString('utf8');

    // Step 2: Convert that string back to binary using 'binary' (latin1) encoding
    // This effectively takes the character code (0xD9) and puts it as a byte (0xD9).
    // Node's 'binary' is basically latin1.
    // However, if the file was saved as UTF-8 with BOM or something, we might have issues.
    // But let's assume standard UTF-8.

    // We want to map Char 'Ù' (0x00D9) -> Byte 0xD9.
    // Buffer.from(string, 'binary') does exactly this (truncates to lower 8 bits).
    const recoveredBuffer = Buffer.from(wrongString, 'binary');

    // Step 3: Now we have the original UTF-8 bytes (0xD9 0x85 for 'م') in the buffer.
    // We can just write this buffer back to disk.

    fs.writeFileSync(filepath, recoveredBuffer);
    console.log('Successfully fixed encoding for index.html');

} catch (err) {
    console.error('Error fixing encoding:', err);
    process.exit(1);
}
