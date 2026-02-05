
import os

file_path = r"c:\Users\coman\OneDrive\Desktop\1.25.2026 christian website\index.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '<div class="book-chapter" id="daily-protection">'
end_marker = '<div class="prayer-section" id="daily-prayers-section" style="display: none;">'

print(f"Start Marker Count: {content.count(start_marker)}")
print(f"End Marker Count: {content.count(end_marker)}")

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

print(f"Start Index: {start_idx}")
print(f"End Index: {end_idx}")

if content.count(start_marker) == 1 and content.count(end_marker) == 1:
    if start_idx < end_idx:
        print("Found valid range. Deleting...")
        new_content = content[:start_idx] + content[end_idx:]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully removed duplicate section.")
    else:
        print("Error: Start index is after End index.")
else:
    print("Warning: Marker counts are not 1-to-1. Proceed with caution.")
    # If multiple end markers, we need to know which one to stop at.
    # We want to delete the *duplicate block*.
    # If daily-prayers-section is at 2836, and duplicate is at 2000?
    # I haven't seen duplicate daily-prayers-section in my views.
    # I'll just print indices of all occurrences.
    
    import re
    end_indices = [m.start() for m in re.finditer(re.escape(end_marker), content)]
    print(f"End Indices: {end_indices}")
