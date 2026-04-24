---
title: Merging branches and conflicts
---

# 🌿 MERGING BRANCHES — EXPLAINED SLOWLY

## 🧠 Key idea (concept first, commands later)

Imagine this:

* `main` branch → stable version of the project
* `login` branch → you are building a new feature

👉 **Merging** means:

> Bringing the changes from one branch into another

Usually:

* You work on a secondary branch
* You merge **that branch into `main`**

---

# 📊 Visual example (mental model)

```
main:   A --- B --- C
                 \
login:             D --- E
```

After the merge:

```
main:   A --- B --- C --- F
                 \     /
login:             D --- E
```

---

# 🧪 REAL STEP BY STEP EXAMPLE (no conflicts)

## Step 1️⃣ Create a project

```bash
git init
```

Create a file:

```text
message.txt
Hello world
```

```bash
git add .
git commit -m "Initial message"
```

---

## Step 2️⃣ Create a new branch

```bash
git checkout -b login
```

📌 Now you are on the `login` branch.

---

## Step 3️⃣ Change something in the new branch

Edit `message.txt`:

```text
Hello world
Adding login screen
```

Save:

```bash
git add .
git commit -m "Add login"
```

---

## Step 4️⃣ Go back to `main`

```bash
git checkout main
```

📌 Heads up: the file returns to its original version.

---

## Step 5️⃣ Merge the `login` branch

```bash
git merge login
```

🎉 **Merge successful, no conflicts**

---

# ⚠️ NOW: CONFLICTS (the important part)

## 🧠 When do conflicts happen?

A conflict happens when:

* Two branches
* Change **the same line**
* In different ways

Git doesn't know which one to pick 🤯

---

# 💥 REAL CONFLICT EXAMPLE

## Step 1️⃣ Initial state

`message.txt` file on `main`:

```text
Hello world
```

---

## Step 2️⃣ The `login` branch changes the file

```bash
git checkout -b login
```

```text
Hello world from login
```

```bash
git add .
git commit -m "Change text in login"
```

---

## Step 3️⃣ Go back to `main` and change the same thing

```bash
git checkout main
```

```text
Hello world from main
```

```bash
git add .
git commit -m "Change text in main"
```

---

## Step 4️⃣ Try to merge (BOOM 💥)

```bash
git merge login
```

Git answers:

```
CONFLICT (content): Merge conflict in message.txt
```

---

# 🔍 WHAT A CONFLICT LOOKS LIKE (ON THE INSIDE)

Open `message.txt` and you see:

```text
<<<<<<< HEAD
Hello world from main
=======
Hello world from login
>>>>>>> login
```

### What does this mean?

* `<<<<<<< HEAD` → what is in your current branch (`main`)
* `=======` → separator
* `>>>>>>> login` → what comes from the other branch

---

# 🛠️ HOW TO RESOLVE THE CONFLICT (STEP BY STEP)

## Step 1️⃣ Decide what stays

Option A: keep main:

```text
Hello world from main
```

Option B: keep login:

```text
Hello world from login
```

Option C: combine:

```text
Hello world from main and login
```

👉 You decide.

---

## Step 2️⃣ Delete the markers

⚠️ **VERY IMPORTANT**
You must delete:

```
<<<<<<<
=======
>>>>>>>
```

---

## Step 3️⃣ Save the file

The file should look clean:

```text
Hello world from main and login
```

---

## Step 4️⃣ Mark it as resolved

```bash
git add message.txt
```

---

## Step 5️⃣ Create the resolution commit

```bash
git commit -m "Resolve conflict between main and login"
```

🎉 Conflict resolved correctly.

---

# 🔄 FULL merge-with-conflict flow

```bash
git merge login
# conflict
# edit file
git add .
git commit -m "Resolve conflict"
```

---

# 🧠 Professional tips

✔️ Run `git pull` before working
✔️ Make small commits
✔️ Use branches for EVERYTHING
✔️ Read the conflict calmly
✔️ Git NEVER deletes your work

---

# ❌ Common mistakes

❌ Deleting the whole file
❌ Committing without resolving
❌ Panicking and closing everything 😅

---

# 🧠 FINAL RECAP

## Merge without conflict

```bash
git checkout main
git merge branch
```

## Merge with conflict

1. Git alerts you
2. Edit the file
3. Delete the markers
4. `git add`
5. `git commit`
