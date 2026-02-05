import sys

def fix_encoding(filepath):
    try:
        # Read the file as UTF-8 (which it technically is now, but with wrong chars)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # The content is currently displayed as e.g. "Ù..."
        # We need to get the raw bytes that these characters represent in Latin-1/Windows-1252
        # and then interpret those bytes as UTF-8.
        
        # Trying Windows-1252 first as it's common on Windows
        try:
            # ex: The character 'Ù' (U+00D9) maps to byte 0xD9 in Windows-1252.
            # So if we encode to 'windows-1252', we get the original bytes back.
            raw_bytes = content.encode('windows-1252')
        except UnicodeEncodeError:
            # Fallback to latin-1 which maps 1:1 to first 256 unicode points
            raw_bytes = content.encode('latin-1')
            
        # Now decode these bytes as the intended UTF-8
        fixed_content = raw_bytes.decode('utf-8')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
            
        print(f"Successfully fixed encoding for {filepath}")
        
    except Exception as e:
        print(f"Error fixing encoding: {e}")
        sys.exit(1)

if __name__ == "__main__":
    fix_encoding(r'c:/Users/coman/Desktop/1.25.2026 christian website/index.html')
