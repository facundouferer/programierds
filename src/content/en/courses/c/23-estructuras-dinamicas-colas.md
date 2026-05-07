---
title: "Queues"
---

A **queue** is a structure where the first one that enters is the first one that leaves.

That's known as **FIFO**: First In, First Out.

Think of it like a real line:

- the first person to arrive is the first to be attended
- new people are added at the end
- nobody leaves from the middle

In this lesson you will learn:

- what a queue is
- traversal in queues
- search in queues
- insertion in queues
- basic extraction

> Key idea: a queue strictly respects the order of arrival.

## What is a queue?

A **queue** is a dynamic structure where normally two ends are managed:

- the **front**
- the **end**

Insertion occurs at the end.
Extraction occurs from the front.

## Node of a linked queue

A common way to implement a queue in C is through linked nodes.

```c
struct Node {
    int data;
    struct Node* next;
};
```

Each node has:

- a piece of data
- a pointer to the next node

## Main queue variables

To manage the queue, two pointers are normally used:

```c
struct Node* front = NULL;
struct Node* end = NULL;
```

- `front` points to the first node
- `end` points to the last node

If both are `NULL`, the queue is empty.

## Insertion in queues: enqueue

Adding an element at the end of the queue is called **enqueue**.

### General idea

If the queue is empty:

- the new node becomes front and end

If the queue already has elements:

- the current end node must point to the new node
- then `end` points to the new node

### Code example

```c
#include <stdlib.h>

void enqueue(struct Node** front, struct Node** end, int value) {
    struct Node* new = malloc(sizeof(struct Node));

    new->data = value;
    new->next = NULL;

    if (*end == NULL) {
        *front = new;
        *end = new;
    } else {
        (*end)->next = new;
        *end = new;
    }
}
```

### What does this function do?

1. creates a new node
2. stores the value in that node
3. if the queue is empty, that node becomes the first and the last
4. if it's not empty, it links to the current end and then becomes the new end

## Basic extraction: dequeue

Removing the element from the front is called **dequeue**.

### General idea

When you dequeue:

- the node from the front is taken
- the front advances to the next node
- if the queue becomes empty, `end` must also be updated

### Code example

```c
#include <stdlib.h>

int dequeue(struct Node** front, struct Node** end) {
    struct Node* temp;
    int value;

    if (*front == NULL) {
        return -1;
    }

    temp = *front;
    value = temp->data;
    *front = (*front)->next;

    if (*front == NULL) {
        *end = NULL;
    }

    free(temp);
    return value;
}
```

### What does this function do?

1. verifies if the queue is empty
2. stores the data from the front
3. moves `front` to the next node
4. if no node remains, also sets `end` to `NULL`
5. frees memory of the removed node
6. returns the extracted value

## Traversal in queues

**Traversal** visits nodes from the front to the end.

### Code example

```c
#include <stdio.h>

void traverseQueue(struct Node* front) {
    struct Node* current = front;

    while (current != NULL) {
        printf("%d\n", current->data);
        current = current->next;
    }
}
```

### What does this traversal do?

- starts at the front
- displays the data of each node
- advances until reaching `NULL`

If the queue contains:

```text
10, 20, 30
```

the traversal will show:

```text
10
20
30
```

## Search in queues

**Search** consists of traversing the queue until finding a value.

### Code example

```c
int searchInQueue(struct Node* front, int searched) {
    struct Node* current = front;

    while (current != NULL) {
        if (current->data == searched) {
            return 1;
        }
        current = current->next;
    }

    return 0;
}
```

### What does this function do?

- traverses node by node
- if it finds the value, returns `1`
- if it reaches the end without finding it, returns `0`

## Complete usage example

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void enqueue(struct Node** front, struct Node** end, int value) {
    struct Node* new = malloc(sizeof(struct Node));

    new->data = value;
    new->next = NULL;

    if (*end == NULL) {
        *front = new;
        *end = new;
    } else {
        (*end)->next = new;
        *end = new;
    }
}

int dequeue(struct Node** front, struct Node** end) {
    struct Node* temp;
    int value;

    if (*front == NULL) {
        return -1;
    }

    temp = *front;
    value = temp->data;
    *front = (*front)->next;

    if (*front == NULL) {
        *end = NULL;
    }

    free(temp);
    return value;
}

void traverseQueue(struct Node* front) {
    struct Node* current = front;

    while (current != NULL) {
        printf("%d\n", current->data);
        current = current->next;
    }
}

int searchInQueue(struct Node* front, int searched) {
    struct Node* current = front;

    while (current != NULL) {
        if (current->data == searched) {
            return 1;
        }
        current = current->next;
    }

    return 0;
}

int main() {
    struct Node* front = NULL;
    struct Node* end = NULL;
    int removed;

    enqueue(&front, &end, 10);
    enqueue(&front, &end, 20);
    enqueue(&front, &end, 30);

    printf("Queue traversal:\n");
    traverseQueue(front);

    if (searchInQueue(front, 20) == 1) {
        printf("Found value 20\n");
    } else {
        printf("Did not find value 20\n");
    }

    removed = dequeue(&front, &end);
    printf("Removed value: %d\n", removed);

    printf("Queue after dequeue:\n");
    traverseQueue(front);

    return 0;
}
```

## Summary

- a queue follows the FIFO rule
- inserting is called **enqueue**
- extracting is called **dequeue**
- traversal goes from front to end
- search traverses node by node until finding the value
- when dequeuing, `front` and, if needed, `end` must be correctly updated

## Final idea

The queue doesn't just serve to understand a dynamic structure: it also teaches a very important design idea.

You can't always access data in any way. Sometimes the structure defines an access discipline. And understanding that discipline is part of learning to program well.