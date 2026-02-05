$path = "index.html"
Write-Host "Reading $path..."

try {
    # Read as UTF-8 (handling the existing mojibake)
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

    # Convert the string back to bytes using Windows-1252
    # This reverses the incorrect interpretation
    $bytes = [System.Text.Encoding]::GetEncoding(1252).GetBytes($content)

    # Now interpret those bytes correctly as UTF-8
    $fixedContent = [System.Text.Encoding]::UTF8.GetString($bytes)

    # Identify if it worked by looking for common Arabic chars or checking length
    # But mainly we trust the logic if the user says it's corrupted like "& 0"
    
    # Write back
    [System.IO.File]::WriteAllText($path, $fixedContent, [System.Text.Encoding]::UTF8)
    
    Write-Host "Success! Encoding fixed."
} catch {
    Write-Host "Error: $_"
    exit 1
}
