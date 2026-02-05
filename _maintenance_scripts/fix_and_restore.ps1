
$path = "c:\Users\coman\OneDrive\Desktop\1.25.2026 christian website\index.html"
$injectPath = "c:\Users\coman\OneDrive\Desktop\1.25.2026 christian website\injection.html"

$content = Get-Content $path -Raw -Encoding UTF8
$injection = Get-Content $injectPath -Raw -Encoding UTF8

# Use a unique substring for start
$startTarget = 'id="saint-anthony-section"'

# Find start index of that line or tag
$tagIdx = $content.IndexOf($startTarget)

if ($tagIdx -ge 0) {
    # Backtrack to the start of the <div tag.
    # The tag starts with <div class="prayer-section" ...
    # We can search backwards for "<div" or just search for the specific full string if we are confident.
    # In index.html line 1493: <div class="prayer-section" id="saint-anthony-section" style="display: none;">
    # Let's try to find that specific full string to be safe.
    $fullStartString = '<div class="prayer-section" id="saint-anthony-section" style="display: none;">'
    $startIdx = $content.IndexOf($fullStartString)
    
    if ($startIdx -lt 0) {
        Write-Host "Could not find exact start string. Trying partial."
        # If indentation is different, we might fail match.
        # Let's try matching without indentation.
        # But we need the index.
        # Let's trust the relative location if we just searched for ID.
        # But removing "cleanly" requires finding the start of the block.
        # I'll rely on the marker I injected last time.
        # Last time I injected:
        # $anthonyContent = @'
        #                 <!-- Saint Anthony Section -->
        #                 <div class="prayer-section" id="saint-anthony-section" style="display: none;">
        
        $startIdx = $content.IndexOf('<!-- Saint Anthony Section -->')
    }
    
    $endMarker = '<div class="prayer-section" id="daily-prayers-section" style="display: none;">'
    $endIdx = $content.IndexOf($endMarker)

    if ($startIdx -ge 0 -and $endIdx -ge 0) {
        if ($startIdx -lt $endIdx) {
            Write-Host "Found range to replace. Start: $startIdx, End: $endIdx"
            $prefix = $content.Substring(0, $startIdx)
            $suffix = $content.Substring($endIdx)
            $newContent = $prefix + $injection + $suffix
            $newContent | Set-Content $path -Encoding UTF8 -NoNewline
            Write-Host "Successfully fixed sections."
        }
        else {
            Write-Host "Start index after End index."
        }
    }
    else {
        Write-Host "Markers not found. Start: $startIdx, End: $endIdx"
    }

}
else {
    Write-Host "Saint Anthony ID not found."
}
