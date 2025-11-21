param(
    [string]$CommitMessage = "short commit"
)

# Add all changes
git add .

# Commit with the message
git commit -m "$CommitMessage"