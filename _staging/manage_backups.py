import os
import shutil
import glob
import datetime
import sys

BACKUP_DIR = "_BACKUPS"
IGNORE_PATTERNS = [
    BACKUP_DIR,
    ".git",
    ".vscode",
    ".kiro",
    "__pycache__",
    "node_modules",
    "manage_backups.py",  # Don't back up the manager itself to avoid version confusion, or do? Let's exclude for now to keep it simple.
    "Brain", # Deepmind artifact dir if it exists locally in root
]

def get_timestamp():
    return datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

def create_backup(label="auto"):
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
    
    timestamp = get_timestamp()
    backup_name = f"{timestamp}_{label}"
    dest_path = os.path.join(BACKUP_DIR, backup_name)
    
    print(f"Creating backup: {backup_name}...")
    
    # Get all files in current directory
    for item in os.listdir("."):
        if item in IGNORE_PATTERNS:
            continue
            
        # Skip if it is a directory starting with . (hidden config dirs) unless specified
        if item.startswith(".") and item not in [".htaccess"]: # common web file
             continue

        s = os.path.join(".", item)
        d = os.path.join(dest_path, item)
        
        if os.path.isdir(s):
            shutil.copytree(s, d)
        else:
            shutil.copy2(s, d)
            
    print(f"Backup created successfully at: {dest_path}")
    return dest_path

def restore_backup(backup_name_fragment):
    # Find the backup
    if not os.path.exists(BACKUP_DIR):
        print("No backups found.")
        return

    backups = sorted(os.listdir(BACKUP_DIR))
    target_backup = None
    
    # If "latest", pick the last one
    if backup_name_fragment.lower() == "latest":
        if backups:
            target_backup = backups[-1]
    else:
        # Search for match
        matches = [b for b in backups if backup_name_fragment in b]
        if len(matches) == 1:
            target_backup = matches[0]
        elif len(matches) > 1:
            print(f"Multiple backups match '{backup_name_fragment}':")
            for m in matches:
                print(f" - {m}")
            return
    
    if not target_backup:
        print(f"No backup found matching '{backup_name_fragment}'")
        return

    print(f"Restoring from: {target_backup}...")
    
    if "--force" not in sys.argv:
        confirmation = input("Are you sure? This will overwrite current files. (yes/no): ")
        if confirmation.lower() != "yes":
            print("Restore cancelled.")
            return

    source_path = os.path.join(BACKUP_DIR, target_backup)
    
    # Verify backup exists
    if not os.path.exists(source_path):
        print("Backup directory missing!")
        return

    # Delete current files (except safe list) to ensure clean restore
    print("Cleaning current directory...")
    for item in os.listdir("."):
        if item in IGNORE_PATTERNS:
            continue
        
        # Don't delete the script itself if it's running!
        if item == os.path.basename(__file__):
            continue

        if os.path.isdir(item):
            try:
                shutil.rmtree(item)
            except Exception as e:
                print(f"Warning: Could not delete directory {item}: {e}")
        else:
            try:
                os.remove(item)
            except Exception as e:
                print(f"Warning: Could not delete file {item}: {e}")

    # Copy files back
    print("Copying files...")
    for item in os.listdir(source_path):
        s = os.path.join(source_path, item)
        d = os.path.join(".", item)
        if os.path.isdir(s):
            shutil.copytree(s, d)
        else:
            shutil.copy2(s, d)

    print("Restore complete.")

def list_backups():
    if not os.path.exists(BACKUP_DIR):
        print("No backups directory.")
        return
    
    print("Available Backups:")
    for b in sorted(os.listdir(BACKUP_DIR)):
        print(f" - {b}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python manage_backups.py [create <label> | restore <name> | list]")
        sys.exit(1)
        
    action = sys.argv[1]
    
    if action == "create":
        label = sys.argv[2] if len(sys.argv) > 2 else "manual"
        create_backup(label)
    elif action == "restore":
        if len(sys.argv) < 3:
            print("Please specify a backup name fragment or 'latest'.")
        else:
            # Skip input confirmation if creating from script wrapper, but here we are CLI.
            # I'll modify restore to accept a flag later if needed, for now standard input is risky for automation.
            # actually, for automation I should bypass input.
            pass # The tool input interaction might fail. I'll modify to assume 'yes' if a huge complexity.
            # Re-writing restore to NOT ask for input for now since I (the agent) am running it.
            # Wait, `run_command` allows input. But to be safe, let's add a --force flag.
            
    elif action == "list":
        list_backups()
