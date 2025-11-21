# PowerShell script to add, commit, and push changes

# Add all changes
git add .

# Prompt for commit message
$commitMessage = Read-Host "Enter commit message"

# Commit with the message
git commit -m "$commitMessage"

# Push to origin master (or current branch)
git push