---
title: "Lists"
---

**Linked lists** are dynamic structures. That means they can grow or change during program execution.

In this lesson you will learn:

- what a linked list is
- what a node is
- traversal in lists
- search in lists
- insertion in lists

## What is a linked list?

It's a structure formed by nodes.

Each node usually contains:

- a piece of data
- a pointer to the next node

## Node in C

```c
struct Node {
    int data;
    struct Node* next;
};
```

## Traversal

Traversing a list means visiting node by node until reaching the end.

```c
current = head;
while (current != NULL) {
    printf("%d\n", current->data);
    current = current->next;
}
```

## Search

Searching in a list implies traversing it until finding the searched value.

```c
while (current != NULL) {
    if (current->data == searched) {
        found = 1;
    }
    current = current->next;
}
```

## Insertion

Insertion can be done at the beginning, at the end, or at an intermediate position.

### Insertion at the beginning

```c
new->next = head;
head = new;
```

## Summary

- a linked list is formed by nodes
- it allows traversal, search, and insertion
- it's more flexible than a fixed-size array

## Final idea

The linked list shows a very strong mindset change: you no longer think in fixed positions, but in links between nodes.