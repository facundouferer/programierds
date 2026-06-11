---
title: "Binary Trees"
---

So far, you have learned to organize your data in **linear** structures: lists, stacks, and queues. In these, each element has a single successor (like a line at the supermarket). But the real world is not always a straight line. Sometimes data is organized **hierarchically**, like a company's organizational chart, the files on your computer, or the branches of a tree.

That is where the **binary tree** comes in.

In this lesson you will learn:
- What a binary tree is and why it is so powerful.
- The anatomy of a tree (root, leaves, subtrees).
- How to define a node in C using structures and pointers.
- What a Binary Search Tree (BST) is and how to organize data in it.
- How to insert, search, and traverse elements using the magic of **recursion**.

---

## Why Do We Need Binary Trees?

Imagine you have a linked list with 1,000,000 numbers sorted from smallest to largest and you want to search for the number `999,999`. You will have to traverse almost the entire million nodes, one by one, to find it. That is slow!

A **binary search tree** allows us to split the problem in half at each step. It is like looking up a word in the dictionary: if you open the book in the middle and see that the word starts with 'Z', you immediately discard the entire left half. Instead of asking a million questions, in a well-balanced tree you can find your data in about **20 steps**.

---

## Anatomy of a Tree

Visualize a tree upside down (with the root at the top and the branches growing downward):

```text
       [ Root: 50 ]          <-- The main node, where everything begins
       /          \
  [ 30 ]          [ 70 ]     <-- Internal nodes (they have parents and children)
  /    \          /    \
[20]  [40]      [60]  [80]   <-- Leaves (final nodes, they have no children)
```

Key concepts to remember:
- **Root**: The topmost node of the tree. It has no "parent".
- **Child**: A node that hangs from another higher node. In a **binary** tree, each node can have at most **two children** (left child and right child).
- **Parent**: A node that has branches to lower nodes.
- **Leaf**: Nodes that have no children (their left and right pointers point to `NULL`).
- **Subtree**: Each child of a node can be considered the root of its own smaller tree. This is the foundation of recursion!

---

## Defining a Node in C

To build this structure in C, we need to define a `struct` that stores the value (the data) and two pointers: one for the left child and one for the right child.

```c
#include <stdio.h>
#include <stdlib.h> // To use malloc and free

// Definition of the Node structure
struct Node {
    int data;                  // The value stored in the node
    struct Node* left;         // Pointer to the left subtree
    struct Node* right;        // Pointer to the right subtree
};
```

> [!NOTE]
> Pay attention to this: `struct Node*` is a pointer to another node of the same type. It is a self-referential structure. This is how we link nodes together.

---

## Creating a New Node

To add elements to the tree, we must first be able to create nodes in the system's memory (the *Heap*) using `malloc`.

```c
// Helper function to create a new node
struct Node* createNode(int value) {
    // 1. Allocate memory for the node
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    
    // 2. Assign the value
    newNode->data = value;
    
    // 3. Initialize children as empty (NULL)
    newNode->left = NULL;
    newNode->right = NULL;
    
    return newNode;
}
```

---

## The Golden Rule: Binary Search Tree (BST)

An ordinary binary tree has no established order. But to search for data quickly, we use the **Binary Search Tree (BST)**. Its rule is very simple and strict:

For any node in the tree:
1. All values in its **left subtree** must be **smaller** than the node's value.
2. All values in its **right subtree** must be **greater** than the node's value.

### Inserting Data

To insert an element respecting this rule, we use **recursion**:

```c
// Function to insert a value into the tree
struct Node* insert(struct Node* root, int value) {
    // Base case: if the tree (or subtree) is empty, we create the node there
    if (root == NULL) {
        return createNode(value);
    }
    
    // If the value is smaller, it goes to the left subtree
    if (value < root->data) {
        root->left = insert(root->left, value);
    }
    // If the value is greater, it goes to the right subtree
    else if (value > root->data) {
        root->right = insert(root->right, value);
    }
    
    // Return the (unchanged) node pointer
    return root;
}
```

---

## Searching for an Element

Searching in a BST is extremely efficient because at each node we decide whether to go left or right, discarding the other half of the tree.

```c
// Function to search for a value in the tree
struct Node* search(struct Node* root, int targetValue) {
    // Base case: if the tree is empty or if we find the value
    if (root == NULL || root->data == targetValue) {
        return root;
    }
    
    // If the value is smaller, we search in the left subtree
    if (targetValue < root->data) {
        return search(root->left, targetValue);
    }
    
    // If the value is greater, we search in the right subtree
    return search(root->right, targetValue);
}
```

---

## Traversals (How to read the tree)

In a linear list, you read from beginning to end. In a tree, you have different ways of visiting it. The three main ones are recursive:

1. **Pre-order**: Visit the root first, then the left subtree, and then the right subtree. (Root -> Left -> Right).
2. **In-order**: Visit the left subtree first, then the root, and then the right subtree. (Left -> Root -> Right).
   > [!TIP]
   > In a BST, the **in-order** traversal will always show you the numbers sorted from smallest to largest!
3. **Post-order**: Visit the left subtree first, then the right subtree, and finally the root. (Left -> Right -> Root).

### In-order Traversal Implementation in C

```c
// Function to print the tree in-order
void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);          // 1. Traverse left subtree
        printf("%d ", root->data);     // 2. Visit current node (root)
        inorder(root->right);         // 3. Traverse right subtree
    }
}
```

---

## A Complete Example to Try

Here is a complete, working C program that you can compile and run. This program creates a tree, inserts some values, prints them sorted, and performs a search:

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

struct Node* insert(struct Node* root, int value) {
    if (root == NULL) return createNode(value);
    
    if (value < root->data) {
        root->left = insert(root->left, value);
    } else if (value > root->data) {
        root->right = insert(root->right, value);
    }
    return root;
}

void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

struct Node* search(struct Node* root, int value) {
    if (root == NULL || root->data == value) return root;
    if (value < root->data) return search(root->left, value);
    return search(root->right, value);
}

int main() {
    struct Node* root = NULL;
    
    // Insert elements
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 70);
    insert(root, 20);
    insert(root, 40);
    insert(root, 60);
    insert(root, 80);
    
    // Print in-order traversal (should come out sorted from smallest to largest)
    printf("Elements in the tree (In-order traversal): ");
    inorder(root);
    printf("\n");
    
    // Search for an element
    int numberToSearch = 40;
    struct Node* found = search(root, numberToSearch);
    if (found != NULL) {
        printf("The number %d was found in the tree.\n", numberToSearch);
    } else {
        printf("The number %d does not exist in the tree.\n", numberToSearch);
    }
    
    return 0;
}
```

---

## Summary of Learnings

- A **binary tree** organizes information in hierarchies, not in rows.
- A node consists of a value and **two self-referential pointers** (`left` and `right`).
- In a **BST**, smaller values go to the left of the node and larger ones to the right, achieving ultra-fast searches.
- **Recursion** is the natural tool for working with trees, since each subtree is itself an independent tree.