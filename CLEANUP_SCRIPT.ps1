# ============================================
# Soul Guidance - Professional Cleanup Script
# سكريبت التنظيف الاحترافي
# ============================================

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Soul Guidance Cleanup Script" -ForegroundColor Yellow
Write-Host "سكريبت تنظيف الموقع" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Create backup before cleanup
$backupDate = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$backupFolder = "BACKUP_BEFORE_CLEANUP_$backupDate"

Write-Host "Creating safety backup..." -ForegroundColor Green
Write-Host "إنشاء نسخة احتياطية للأمان..." -ForegroundColor Green

# Copy important files only
New-Item -ItemType Directory -Path $backupFolder -Force | Out-Null
Copy-Item "index.html" -Destination $backupFolder -Force
Copy-Item "script.js" -Destination $backupFolder -Force
Copy-Item "styles.css" -Destination $backupFolder -Force
Copy-Item "theme.css" -Destination $backupFolder -Force

Write-Host "✓ Backup created: $backupFolder" -ForegroundColor Green
Write-Host ""

# Step 1: Remove old backups
Write-Host "Step 1: Removing old backups..." -ForegroundColor Yellow
Write-Host "الخطوة 1: حذف النسخ الاحتياطية القديمة..." -ForegroundColor Yellow

if (Test-Path "_BACKUPS") {
    Remove-Item "_BACKUPS" -Recurse -Force
    Write-Host "✓ Removed _BACKUPS/" -ForegroundColor Green
}

if (Test-Path "_staging") {
    Remove-Item "_staging" -Recurse -Force
    Write-Host "✓ Removed _staging/" -ForegroundColor Green
}

Write-Host ""

# Step 2: Remove duplicate files
Write-Host "Step 2: Removing duplicate files..." -ForegroundColor Yellow
Write-Host "الخطوة 2: حذف الملفات المكررة..." -ForegroundColor Yellow

$duplicatePatterns = @(
    "*Copy*.html",
    "*Copy*.js",
    "*Copy*.css",
    "*Copy*.md",
    "*- Copy*"
)

foreach ($pattern in $duplicatePatterns) {
    $files = Get-ChildItem -Path . -Filter $pattern -File
    foreach ($file in $files) {
        Remove-Item $file.FullName -Force
        Write-Host "✓ Removed: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host ""


# Step 3: Remove demo files
Write-Host "Step 3: Removing demo files..." -ForegroundColor Yellow
Write-Host "الخطوة 3: حذف الملفات التجريبية..." -ForegroundColor Yellow

$demoFiles = @(
    "consolidated-prayer-demo.html",
    "prayer-library-demo.html",
    "prayer-scheduler-demo.html",
    "test*.html",
    "test*.js"
)

foreach ($pattern in $demoFiles) {
    $files = Get-ChildItem -Path . -Filter $pattern -File
    foreach ($file in $files) {
        Remove-Item $file.FullName -Force
        Write-Host "✓ Removed: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host ""

# Step 4: Remove utility scripts
Write-Host "Step 4: Removing utility scripts..." -ForegroundColor Yellow
Write-Host "الخطوة 4: حذف السكريبتات المساعدة..." -ForegroundColor Yellow

$utilityFiles = @(
    "debug*.js",
    "fix*.js",
    "rescue*.js",
    "sanitize.js",
    "apply_fix.js",
    "convert_to_collapsible.js",
    "fix_nulls.js"
)

foreach ($pattern in $utilityFiles) {
    $files = Get-ChildItem -Path . -Filter $pattern -File
    foreach ($file in $files) {
        Remove-Item $file.FullName -Force
        Write-Host "✓ Removed: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host ""

# Step 5: Clean up documentation
Write-Host "Step 5: Organizing documentation..." -ForegroundColor Yellow
Write-Host "الخطوة 5: تنظيم الوثائق..." -ForegroundColor Yellow

# Create docs folder
if (-not (Test-Path "docs")) {
    New-Item -ItemType Directory -Path "docs" -Force | Out-Null
}

# Move important docs
$docsToKeep = @(
    "ARCHITECTURE.md",
    "CONTRIBUTING.md",
    "DEPLOYMENT_GUIDE.md",
    "ROADMAP.md"
)

foreach ($doc in $docsToKeep) {
    if (Test-Path $doc) {
        Move-Item $doc -Destination "docs\" -Force
        Write-Host "✓ Moved $doc to docs/" -ForegroundColor Green
    }
}

# Remove unnecessary docs
$docsToRemove = @(
    "README-ARCHIVE.md",
    "FINAL_REPORT.md",
    "HANDOVER.md",
    "JOURNAL.md",
    "PRESS_RELEASE.md",
    "WEBSITE_HEALTH_REPORT.md",
    "*REPORT*.md",
    "*GUIDE*.md",
    "*SUMMARY*.md"
)

foreach ($pattern in $docsToRemove) {
    $files = Get-ChildItem -Path . -Filter $pattern -File
    foreach ($file in $files) {
        if ($file.Name -ne "README.md" -and $file.Name -ne "COMPREHENSIVE_ANALYSIS_REPORT.md") {
            Remove-Item $file.FullName -Force
            Write-Host "✓ Removed: $($file.Name)" -ForegroundColor Green
        }
    }
}

Write-Host ""


# Step 6: Summary
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Cleanup Complete! / التنظيف مكتمل!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Calculate space saved
$currentSize = (Get-ChildItem -Path . -Recurse -File | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "Current project size: $([math]::Round($currentSize, 2)) MB" -ForegroundColor Yellow
Write-Host "حجم المشروع الحالي: $([math]::Round($currentSize, 2)) ميجابايت" -ForegroundColor Yellow
Write-Host ""

Write-Host "✓ Removed old backups" -ForegroundColor Green
Write-Host "✓ Removed duplicate files" -ForegroundColor Green
Write-Host "✓ Removed demo files" -ForegroundColor Green
Write-Host "✓ Removed utility scripts" -ForegroundColor Green
Write-Host "✓ Organized documentation" -ForegroundColor Green
Write-Host ""

Write-Host "Safety backup saved in: $backupFolder" -ForegroundColor Cyan
Write-Host "النسخة الاحتياطية محفوظة في: $backupFolder" -ForegroundColor Cyan
Write-Host ""

Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "الخطوات التالية:" -ForegroundColor Yellow
Write-Host "1. Test the website (اختبر الموقع)" -ForegroundColor White
Write-Host "2. Fix JavaScript error in script.js line 11673 (أصلح خطأ JavaScript)" -ForegroundColor White
Write-Host "3. Review COMPREHENSIVE_ANALYSIS_REPORT.md (راجع التقرير الشامل)" -ForegroundColor White
Write-Host ""

Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
