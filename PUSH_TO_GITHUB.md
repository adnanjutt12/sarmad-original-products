# Push Sarmad Original Products to GitHub

## Option 1: Create Repository on GitHub First (Recommended)

### Step 1: Create the Repository on GitHub

1. Go to: **https://github.com/new**
2. Fill in the form:
   - **Repository name**: `sarmad-original-products`
   - **Description**: `Sarmad Original Products - E-commerce website for pure honey, premium ittar, and desi ghee`
   - **Visibility**: Choose **Public** or **Private** (your choice)
   - **DO NOT** check "Add a README file"
   - **DO NOT** check "Add .gitignore"
   - **DO NOT** check "Choose a license"
3. Click **"Create repository"**

### Step 2: Push Your Code

After creating the repository, run:

```bash
cd /var/www/html/SarmadOriginalProducts
git push -u origin main
```

**When prompted:**
- **Username**: `adnanjutt12`
- **Password**: Use a **Personal Access Token** (not your GitHub password)

### How to Create Personal Access Token:

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name it: `Sarmad Products Push`
4. Select scope: **`repo`** (check the box)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again)
7. Use this token as your password when pushing

---

## Option 2: Using GitHub CLI (if installed)

If you have GitHub CLI installed, run:

```bash
cd /var/www/html/SarmadOriginalProducts
gh repo create sarmad-original-products --public --source=. --remote=origin --push
```

---

## Option 3: Using SSH (More Secure)

### Setup SSH Key:

1. Generate SSH key (if you don't have one):
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. Copy your public key:
```bash
cat ~/.ssh/id_ed25519.pub
```

3. Add to GitHub:
   - Go to: **https://github.com/settings/keys**
   - Click **"New SSH key"**
   - Paste your public key
   - Click **"Add SSH key"**

4. Change remote URL to SSH:
```bash
cd /var/www/html/SarmadOriginalProducts
git remote set-url origin git@github.com:adnanjutt12/sarmad-original-products.git
```

5. Push:
```bash
git push -u origin main
```

---

## Verify After Push

Once pushed, visit:
**https://github.com/adnanjutt12/sarmad-original-products**

You should see all your files there!

---

## Quick Commands Reference

```bash
# Check status
cd /var/www/html/SarmadOriginalProducts
git status

# Check remote
git remote -v

# Push to GitHub
git push -u origin main

# View commit history
git log --oneline
```

