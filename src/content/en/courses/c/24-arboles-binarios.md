---
title: "Binary Trees"
---

A **binary tree** is a hierarchical structure where each node can have at most two children.

In this lesson you will learn:

- what a binary tree is
- what the root is
- what leaves are
- traversal, search, and insertion in binary trees

## Node of a binary tree

```c
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};
```

## Basic concepts

- **root**: main node of the tree
- **leaf**: node without children
- **subtree**: part of the tree that hangs from a node

## Traversal

A very well-known traversal is **inorder**:

1. left subtree
2. current node
3. right subtree

## Search

Searching in a tree depends on how the data is organized.

## Insertion

Inserting means adding a new node respecting the organization's tree.

## Summary

- the binary tree is a hierarchical structure
- each node can have up to two children
- it allows traversal, search, and insertion

## Final idea

The binary tree completely changes the way of thinking about data: it's no longer just in a row, but organized hierarchically.