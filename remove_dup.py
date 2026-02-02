import sys

def remove_lines(filepath, start_line, end_line):
    """
    Removes lines from start_line to end_line (inclusive, 1-based) from the file.
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # Adjust for 0-based indexing
        # start_line 1474 means index 1473
        # end_line 2215 means index 2214
        # We want to keep lines[:1473] and lines[2215:]
        
        start_idx = start_line - 1
        end_idx = end_line # slice is exclusive at the end, so we want up to 2215 (index 2214) removed.
        # Wait, if I want to remove 1474 (index 1473) through 2215 (index 2214).
        # lines[:start_idx] gives 0..1472 (lines 1..1473) -> Correct.
        # lines[end_idx:] gives 2215..end (lines 2216..end) -> Correct.
        
        new_lines = lines[:start_idx] + lines[end_idx:]
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
            
        print(f"Successfully removed lines {start_line} to {end_line} from {filepath}")
        print(f"Original line count: {len(lines)}")
        print(f"New line count: {len(new_lines)}")
        print(f"Lines removed: {len(lines) - len(new_lines)}")
        
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    remove_lines(r'c:/Users/coman/Desktop/1.25.2026 christian website/index.html', 1474, 2215)
