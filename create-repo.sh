#!/bin/bash

# Script to help create and push GitHub repository
# Run this after creating the repository on GitHub

echo "=================================="
echo "Sarmad Original Products - GitHub Setup"
echo "=================================="
echo ""

echo "Step 1: Make sure you've created the repository on GitHub"
echo "   Go to: https://github.com/new"
echo "   Name: sarmad-original-products"
echo "   DO NOT initialize with README"
echo ""
read -p "Have you created the repository? (y/n): " created

if [ "$created" != "y" ] && [ "$created" != "Y" ]; then
    echo "Please create the repository first at: https://github.com/new"
    exit 1
fi

echo ""
echo "Step 2: Checking git status..."
cd /var/www/html/SarmadOriginalProducts
git status

echo ""
echo "Step 3: Verifying remote..."
git remote -v

echo ""
echo "Step 4: Ready to push!"
echo ""
echo "Run this command to push:"
echo "   git push -u origin main"
echo ""
echo "When prompted for credentials:"
echo "   Username: adnanjutt12"
echo "   Password: Use your Personal Access Token"
echo ""
echo "Get token at: https://github.com/settings/tokens"
echo ""

