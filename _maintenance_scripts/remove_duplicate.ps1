
$path = "c:\Users\coman\OneDrive\Desktop\1.25.2026 christian website\index.html"
$content = Get-Content $path -Raw -Encoding UTF8

$startMarker = '<div class="book-chapter" id="daily-protection">'
$endMarker = '<div class="prayer-section" id="daily-prayers-section" style="display: none;">'

$startIdx = $content.IndexOf($startMarker)
$endIdx = $content.IndexOf($endMarker)

Write-Host "Start Index: $startIdx"
Write-Host "End Index: $endIdx"

if ($startIdx -ge 0 -and $endIdx -ge 0) {
    if ($startIdx -lt $endIdx) {
        Write-Host "Found valid range. Deleting..."
        $newContent = $content.Substring(0, $startIdx) + $content.Substring($endIdx)
        $newContent | Set-Content $path -Encoding UTF8 -NoNewline
        Write-Host "Successfully removed duplicate section."
    } else {
        Write-Host "Error: Start index is after End index."
    }
} else {
    Write-Host "Error: Markers not found."
}
