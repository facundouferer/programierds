---
title: Pull and push changes
---
# 🔁 Key idea before we start

When you use Git, there are usually **two copies of the project**:

1️⃣ **Your computer** (local repository)
2️⃣ **The internet (GitHub)** (remote repository, usually on **GitHub**)

👉 **Pull changes** = bring what is on GitHub down to your PC
👉 **Push changes** = send what you did on your PC up to GitHub

---

# 📥 PULLING CHANGES (pull)

## 🧠 When do you need to pull changes?

- When you start working

- When someone else changed the project

- When you work on multiple devices

- To avoid conflicts


💡 **Golden rule**:
👉 _Before working → pull changes_

---

## 🔹 Main command to pull changes

```bash
git pull
```

### What does `git pull` do?

It does **two things automatically**:

1. 📥 Downloads changes from the remote repository

2. 🔀 Merges them with your local project


---

## 📌 Real example (step by step)

### Scenario:

- Your project is on GitHub

- A teammate changed a file

- You want that change


### Steps:

1️⃣ Go into the project folder:

```bash
cd my-project
```

2️⃣ Pull the changes:

```bash
git pull
```

3️⃣ Git responds with something like:

```
Updating a1b2c3d..e4f5g6h
1 file changed
```

🎉 Done, you have the changes.

---

## ❗ Common error when pulling

If Git says something like:

```
error: Your local changes would be overwritten
```

👉 It means:

> You have unsaved changes (not committed)

### Solution:

Save your changes first:

```bash
git add .
git commit -m "Save changes before pulling"
git pull
```

---

# 📤 PUSHING CHANGES (push)

## 🧠 When do you need to push changes?

- When you finished a task

- When you want to back up your work

- When others need your changes


💡 **Golden rule**:
👉 _After working → push changes_

---

## 🔹 Full workflow to push changes

⚠️ **This is VERY important, memorize it**:

```text
Edit → add → commit → push
```

---

## 📌 Full example of pushing changes

### 1️⃣ You modify a file

Edit:

```text
hello.txt
```

---

### 2️⃣ Check status

```bash
git status
```

---

### 3️⃣ Stage changes

```bash
git add .
```

---

### 4️⃣ Save changes (commit)

```bash
git commit -m "Update greeting text"
```

👉 So far **EVERYTHING IS LOCAL** (only on your PC).

---

### 5️⃣ Push to GitHub

```bash
git push
```

🎉 Now the change is on GitHub.

---

## 🌍 First time pushing (important)

The **first time**, Git needs to know **where to push to**.

You do it like this:

```bash
git push -u origin main
```

### What does it mean?

- `origin` → remote repository (GitHub)

- `main` → main branch

- `-u` → remembers it for next time


After this, you just use:

```bash
git push
```

---

# 🔄 REAL workflow cycle (real life)

In a real job you ALWAYS do this:

```bash
git pull
# work
git add .
git commit -m "Clear message"
git push
```

📌 **This cycle saves you from problems**

---

# ⚠️ Conflicts when pulling (explained simply)

A **conflict** happens when:

- You changed a line

- Someone else changed the same line


Git doesn't know which one to keep 😵‍💫

### Git will show you something like:

```text
<<<<<<< HEAD
Your version
=======
Their version
>>>>>>> commit
```

### Solution:

1. Open the file

2. Pick which version stays

3. Delete the markers

4. Save

5. Run:


```bash
git add .
git commit -m "Resolve conflict"
git push
```

---

# 🧠 Essential commands (recap)

|Action|Command|
|---|---|
|See status|`git status`|
|Pull changes|`git pull`|
|Stage changes|`git add .`|
|Save changes|`git commit -m "message"`|
|Push changes|`git push`|

---

# ❌ Typical beginner mistakes

❌ Pushing without pulling first
❌ Not committing
❌ Messages like "changes"
❌ Working directly on `main` in a team

---

# 🧠 Final rule (very important)

📥 **Before working** → `git pull`
📤 **After working** → `git push`
