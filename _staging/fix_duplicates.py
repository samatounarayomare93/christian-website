#!/usr/bin/env python3
"""
Fix duplicate sections in index.html
Removes lines 1474-2215 (duplicate Prayer Book Section)
"""

def fix_html():
    print("Reading index.html...")
    with open('index.html', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    print(f"Total lines: {len(lines)}")
    print(f"Line 1474: {lines[1473][:50]}...")
    print(f"Line 2215: {lines[2214][:50]}...")
    
    # Remove lines 1474-2215 (Python uses 0-based indexing)
    # Line 1474 in editor = index 1473 in Python
    # Line 2215 in editor = index 2214 in Python
    start_delete = 1473  # Line 1474
    end_delete = 2215    # Line 2215
    
    print(f"\nDeleting lines {start_delete+1} to {end_delete} ({end_delete - start_delete} lines)...")
    
    # Keep everything before and after the duplicate
    fixed_lines = lines[:start_delete] + lines[end_delete:]
    
    print(f"New total lines: {len(fixed_lines)}")
    
    # Write fixed version
    print("\nWriting fixed index.html...")
    with open('index.html', 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)
    
    print("✅ Done! Duplicate section removed.")
    print(f"Removed {end_delete - start_delete} lines")
    print(f"File reduced from {len(lines)} to {len(fixed_lines)} lines")

if __name__ == '__main__':
    fix_html()
