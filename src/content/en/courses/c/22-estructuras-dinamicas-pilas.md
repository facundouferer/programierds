---
title: "Stacks"
---

A **stack** is a structure where the last element that enters is the first one that leaves.

That's known as **LIFO**: Last In, First Out.

In this lesson you will learn:

- what a stack is
- traversal in stacks
- search in stacks
- insertion in stacks
- basic extraction

## Insertion: push

Adding an element to the stack is known as `push`.

## Extraction: pop

Removing the top element is known as `pop`.

## Traversal

Traversal visits elements from the top downward.

## Search

Search is done by traversing the stack element by element.

## Node example

```c
struct Node {
    int data;
    struct Node* next;
};
```

## Summary

- a stack follows the LIFO rule
- inserting is called `push`
- extracting is called `pop`
- it can also be traversed and searched

## Final idea

The stack is excellent for understanding that not all structures allow accessing data in any way. Each has its own logic of use.