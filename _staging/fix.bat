@echo off
echo Fixing index.html...
powershell -Command "$lines = Get-Content 'index.html'; $fixed = $lines[0..1472] + $lines[2215..($lines.Count-1)]; $fixed | Out-File 'index.html' -Encoding UTF8; Write-Host 'Fixed! Removed' ($lines.Count - $fixed.Count) 'lines'"
echo Done!
pause
