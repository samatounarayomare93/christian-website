param (
    [string]$action = "help",
    [string]$label = "manual"
)

$backupRoot = "_BACKUPS"
$excludeList = @("_BACKUPS", ".git", ".vscode", ".idea", "node_modules", "manage_backups.ps1", "manage_backups.py")

function Get-Timestamp {
    return Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
}

function Create-Backup {
    param ($name)
    if (!(Test-Path -Path $backupRoot)) {
        New-Item -ItemType Directory -Path $backupRoot | Out-Null
    }

    $timestamp = Get-Timestamp
    $backupName = "${timestamp}_${name}"
    $destPath = Join-Path $backupRoot $backupName

    Write-Host "Creating backup: $backupName..."

    New-Item -ItemType Directory -Path $destPath | Out-Null

    # Get items to copy
    $items = Get-ChildItem -Path . | Where-Object { $excludeList -notcontains $_.Name }

    foreach ($item in $items) {
        Copy-Item -Path $item.FullName -Destination $destPath -Recurse -Force
    }

    Write-Host "Backup created successfully at: $destPath"
}

function Restore-Backup {
    param ($fragment)
    
    if (!(Test-Path -Path $backupRoot)) {
        Write-Host "No backups found."
        return
    }

    $backups = Get-ChildItem -Path $backupRoot | Sort-Object Name
    $target = $null

    if ($fragment -eq "latest") {
        $target = $backups | Select-Object -Last 1
    } else {
        $matches = $backups | Where-Object { $_.Name -like "*$fragment*" }
        if ($matches.Count -eq 1) {
            $target = $matches[0]
        } elseif ($matches.Count -gt 1) {
            Write-Host "Multiple backups match '$fragment':"
            $matches | ForEach-Object { Write-Host " - $($_.Name)" }
            return
        }
    }

    if ($null -eq $target) {
        Write-Host "No backup found matching '$fragment'"
        return
    }

    Write-Host "Restoring from: $($target.Name)..."
    
    # Check for force flag in arguments (simple check)
    if ($args -notcontains "-force" -and $global:Args -notcontains "-force") {
        # Interactive check not reliable in all agent contexts, but keeping it for manual usage.
        # For agent usage, we will assume user wants it if they call it, or we add -Force param later.
        # For now, let's just proceed or add a simple safety delay.
        Write-Host "Overwriting current files in 3 seconds... (Ctrl+C to cancel)"
        Start-Sleep -Seconds 3
    }

    # Clean current directory
    Write-Host "Cleaning current directory..."
    $items = Get-ChildItem -Path . | Where-Object { $excludeList -notcontains $_.Name }
    foreach ($item in $items) {
        Remove-Item -Path $item.FullName -Recurse -Force -ErrorAction SilentlyContinue
    }

    # Copy back
    Write-Host "Copying files..."
    $sourcePath = $target.FullName
    $sourceItems = Get-ChildItem -Path $sourcePath
    foreach ($item in $sourceItems) {
        Copy-Item -Path $item.FullName -Destination . -Recurse -Force
    }

    Write-Host "Restore complete."
}

function List-Backups {
    if (Test-Path -Path $backupRoot) {
        Write-Host "Available Backups:"
        Get-ChildItem -Path $backupRoot | Sort-Object Name | ForEach-Object { Write-Host " - $($_.Name)" }
    } else {
        Write-Host "No backups directory."
    }
}

# Main Dispatch
switch ($action) {
    "create" { Create-Backup $label }
    "restore" { Restore-Backup $label }
    "list" { List-Backups }
    "help" { 
        Write-Host "Usage: .\manage_backups.ps1 [create <label> | restore <name> | list]" 
    }
    default { 
        Write-Host "Unknown action. Usage: .\manage_backups.ps1 [create <label> | restore <name> | list]" 
    }
}
