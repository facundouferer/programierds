---
title: Getting started with Git
---

# What is Git?

**Git is a version control system.**

👉 In simple words:
**Git is used to save the history of changes in a project**, like a "save game" in a video game.

### Simple analogy

Imagine you are writing a paper in Word:

- Version 1

- Version 2

- Final version

- Final FINAL version 😅


Git does this automatically, but:

- Saves **every change**

- Lets you **go back**

- Lets you **work as a team without stepping on each other**

- Works perfectly with code


---

# 🧠 Why is Git so important?

Learning Git lets you:

- Never lose your work

- Work with other people

- Try ideas without breaking anything

- Work like a professional programmer


💡 **ALL** tech companies use Git.

---

# 🧩 Key concepts (very important)

Before using any commands, you need to understand **these key concepts**:

## 1️⃣ Repository (repo)

It's the **project**.

📦 Think of a repository as:

> A special folder that Git controls

It can contain:

- Code

- Images

- Documentation

- Any file


---

## 2️⃣ File

These are normal files:

- `.html`

- `.css`

- `.js`

- `.txt`


Git **watches** these files and detects changes.

---

## 3️⃣ Version / Commit

A **commit** is a **snapshot of the project at a point in time**.

📸 Every commit:

- Has a message ("what I did")

- Has a date

- Has an author


Example of commit message:

```
Add login button
```

---

## 4️⃣ History

Git saves every commit in order.

This lets you:

- See what changed

- Go back to a previous version

- Know who did what


---

# 🧰 Installing Git

### On Windows

Download from:
👉 [https://git-scm.com](https://git-scm.com/)

Install it with default options.

### On macOS

```
brew install git
```

### On Linux

```
sudo apt install git
```

Verify it is installed:

```
git --version
```

---

# 🚀 Getting started with Git (first steps)

## Step 1: Create a project

Create a folder:

```
my-project
```

Enter the folder:

```
cd my-project
```

---

## Step 2: Initialize Git

Inside the folder:

```
git init
```

👉 This creates a Git repository.

💡 Git now controls this folder.

---

# 📂 Git status (very important)

You can always ask:

```
git status
```

This tells you:

- Which files changed

- What is ready to save

- What is not


---

# 📝 Create your first file

Create a file called:

```
hello.txt
```

Content:

```
Hi, this is my first project with Git
```

Check status:

```
git status
```

You will see something like:

> new untracked file

---

# ➕ Adding files (staging)

Git works in **3 areas**:

### 1️⃣ Working Directory

Your normal files

### 2️⃣ Staging Area

Files ready to be saved

### 3️⃣ Repository

Saved files (commits)

To move a file to staging:

```
git add hello.txt
```

Or all of them:

```
git add .
```

---

# 💾 Save changes (commit)

Now save the changes:

```
git commit -m "Add hello.txt file"
```

🎉 First commit done!

---

# 🔁 Basic Git workflow (memorize it)

This is the **most important Git workflow**:

```
Edit → git add → git commit
```

It is always like that.

---

# 🧪 Modify a file

Edit `hello.txt`:

```
Hello world
I am learning Git
```

Check status:

```
git status
```

Add and save:

```
git add .
git commit -m "Update greeting message"
```

---

# ⏪ Go back in time

See history:

```
git log
```

You will see a list of commits.

Each commit has an **ID**.

To go back to a commit:

```
git checkout COMMIT_ID
```

⚠️ This is read-only mode (not for working).

---

# 🌿 Branches

## What is a branch?

A branch is a **parallel line of work**.

🌱 It lets you:

- Try ideas

- Not break the main project


The main branch is called:

```
main
```

---

## Create a branch

```
git branch new-feature
```

Switch to it:

```
git checkout new-feature
```

Or in a single step:

```
git checkout -b new-feature
```

---

## Merge branches

Go back to main:

```
git checkout main
```

Merge:

```
git merge new-feature
```

---

# 🌍 Git vs GitHub (very important)

🚫 **Git is NOT GitHub**

|Git|GitHub|
|---|---|
|Local tool|Online platform|
|Version control|Repository host|
|Works offline|Requires internet|

GitHub uses Git, but **they are not the same**.

---

# ☁️ Upload a project to GitHub (basics)

1. Create a repository on GitHub

2. Connect the local repository:


```
git remote add origin URL
```

3. Push the code:


```
git push -u origin main
```

---

# 📥 Download a project

```
git clone REPO_URL
```

---

# ⚠️ Common mistakes

❌ Not committing often
❌ Bad commit messages
❌ Working without branches
❌ Not using git status

---

# 🧠 What to learn next

Once you master this:

1. `.gitignore`

2. Merge conflicts

3. Rebase

4. GitHub Flow

5. Pull Requests


---

# 📌 Final recap

Git lets you:

- Save versions

- Go back

- Work as a team

- Code professionally


Key workflow:

```
git status
git add .
git commit -m "clear message"
```
