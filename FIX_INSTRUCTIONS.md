# 🔧 MANUAL FIX INSTRUCTIONS

## Problem
Your `index.html` has a DUPLICATE section that breaks everything!

## What to Delete
**Delete lines 1474 to 2215** (742 lines total)

## How to Fix (Manual Method):

### Step 1: Open index.html in a text editor
Use Notepad++, VS Code, or any editor that shows line numbers

### Step 2: Find Line 1474
Look for this text:
```html
        <!-- Consolidated Prayer Book Section -->
        <section class="section" id="prayer-book"
```

### Step 3: Select from Line 1474 to Line 2215
Line 2215 should be:
```html
        </section>
```
(Right before "<!-- Saint Anthony of Padua Protection Book Section -->")

### Step 4: Delete All Selected Lines
Press Delete or Backspace

### Step 5: Save the File
Ctrl+S or File > Save

## What Should Remain:
- Line 1473: `</section>` (end of Saint Faustina section)
- Line 1474 (NEW): `<!-- Saint Anthony of Padua Protection Book Section -->`

## Verify the Fix:
1. Search for `id="prayer-book"` - should appear ONLY ONCE
2. Search for `id="bookCover"` - should appear ONLY ONCE  
3. Search for `id="bookContent"` - should appear ONLY ONCE

## After Fix:
- File will be ~742 lines shorter
- All buttons should work
- No duplicate content
- Valid HTML

---

## Alternative: Use Find & Replace

### In VS Code or Notepad++:
1. Press Ctrl+H (Find & Replace)
2. Enable "Regular Expression" mode
3. This is complex - manual deletion is easier!

---

## Need Help?
The duplicate section is the ENTIRE "Prayer Book Section" appearing twice.
Keep the FIRST one (around line 862), DELETE the SECOND one (line 1474-2215).

---

## Quick Check:
After deleting, your file should go from ~4400 lines to ~3658 lines.
