const fs = require('fs');

const FILE_PATH = 'c:\\Users\\coman\\OneDrive\\Desktop\\1.25.2026 christian website\\styles.css';

console.log('Analyzing CSS for corruption...');
let content = fs.readFileSync(FILE_PATH, 'utf8');
const lines = content.split('\n');

let corruptedCount = 0;

const fixedLines = lines.map((line, index) => {
    // Only target the problematic tail of the file
    if (index < 3500) return line;

    const trimmed = line.trim();
    if (!trimmed) return line;

    // Heuristic: If valid CSS char count is low compared to length
    // Corrupted: "p a d d i n g" (13 chars) vs "padding" (7 chars). Ratio ~1.8
    // Normal: "padding: 0;" (11 chars) vs "padding:0;" (10 chars). Ratio ~1.1

    // Check if it has spaced-out characters
    // Regex: look for "char space char space char" pattern
    // e.g. /\w \w \w/
    if (/\w \w \w/.test(trimmed) && trimmed.length > 5) {
        // It's likely corrupted.
        // STRATEGY: 
        // 1. Replace ALL sequence of spaces with a placeholder.
        // 2. Remove ALL single spaces.
        // 3. Restore placeholders.

        // However, the spaces might be different (tabs, nbsp).
        // Let's just strip ALL whitespace between word chars.

        let cleaned = "";
        let inString = false;

        // Simple aggressive approach:
        // Turn "p a d d i n g :    1 0 p x" into "padding:    10px"
        // Then normalize constraints.

        // Let's use the remove-all-spaces then re-insert approach for common CSS tokens? No too hard.

        // Let's go with the previous logic but debug why it failed.
        // Maybe the file wasn't written correctly?

        // New Approach: 
        // 1. Tokenize by 3+ spaces (preserve these as real gaps)
        // 2. In each token, remove ALL spaces.

        const parts = line.split(/   +/); // Split by 3 or more spaces
        const fixedParts = parts.map(part => {
            // Remove all internal spaces in this part
            // "p a d d i n g" -> "padding"
            // "- w e b k i t -" -> "-webkit-"
            return part.replace(/\s+/g, '');
        });

        let recovered = fixedParts.join(' ');

        // Post-processing fixes
        recovered = recovered.replace(/:/g, ': ');
        recovered = recovered.replace(/;/g, ';\n');
        recovered = recovered.replace(/{/g, ' {\n');
        recovered = recovered.replace(/}/g, '}\n');
        recovered = recovered.replace(/1pxsolid/g, '1px solid');
        recovered = recovered.replace(/solidrgba/g, 'solid rgba');
        recovered = recovered.replace(/solidvar/g, 'solid var');
        recovered = recovered.replace(/!important/g, ' !important');

        corruptedCount++;
        return recovered;
    }

    return line;
});

console.log(`Recovered ${corruptedCount} corrupted lines.`);

fs.writeFileSync(FILE_PATH, fixedLines.join('\n'), 'utf8');
console.log('Write complete.');
