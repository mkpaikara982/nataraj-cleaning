#!/bin/bash

# Initialize a counter
i=1

# Loop through all files in the current directory
for file in *; do
    # Check if the file is a regular file (not a directory)
    if [ -f "$file" ]; then
        # Rename the file using the counter
        mv -- "$file" "slide_cleaning_$(printf "%02d" "$i").jpg"
        # Increment the counter
        ((i++))
    fi
done

echo "Files have been renamed successfully."