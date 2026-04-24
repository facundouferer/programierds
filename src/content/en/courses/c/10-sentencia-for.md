---
title: "For"
---

After learning `while`, a very commonly used structure appears when the repetition has a more compact and controlled form: `for`.

In this lesson you will learn:

- how `for` works
- what parts it has
- how it relates to initial state, condition, and update
- when it's worth using `for`
- how to use `break` and `continue` inside a `for`

## What does `for` do?

The `for` statement repeats a block of code and concentrates in a single line three very important elements of the loop:

- initialization
- condition
- update

### Syntax

```c
for (initialization; condition; update) {
    instructions;
}
```

## Basic example

```c
#include <stdio.h>

int main() {
    int i;

    for (i = 1; i <= 5; i = i + 1) {
        printf("%d\n", i);
    }

    return 0;
}
```

## Correct reading of `for`

### Initialization

```c
i = 1
```

Executes only once, at the beginning.

### Condition

```c
i <= 5
```

Evaluated before each iteration.

### Update

```c
i = i + 1
```

Executes at the end of each round.

## When is `for` worth using?

`for` is great when the repetition is associated with a counter or a fairly clear number of steps.

For example:

- display numbers from 1 to 10
- repeat an action 5 times
- traverse numbered positions

## `for` and `while`: same idea, different form

A `for` and a `while` can often express the same logic.

The main difference is how the reading is organized.

`for` is usually more comfortable when you want to see initialization, condition, and update together.

## Using `break` in `for`

```c
for (i = 1; i <= 10; i = i + 1) {
    if (i == 6) {
        break;
    }
    printf("%d\n", i);
}
```

The loop cuts off when `i` is `6`.

## Using `continue` in `for`

```c
for (i = 1; i <= 5; i = i + 1) {
    if (i == 3) {
        continue;
    }
    printf("%d\n", i);
}
```

When `i` is `3`, that iteration jumps directly to the next step of the loop.

## Frequent conceptual error

Many students believe `for` is "another kind of magic" different from `while`.

No.

The deep idea is the same: repeat a block while a condition allows it.

What changes is the form of organizing the expression of the loop.

## Summary

- `for` organizes initialization, condition, and update in a single line
- it's very useful when working with a counter or a clear number of repetitions
- `break` can cut off the loop
- `continue` can jump to the next iteration
- conceptually, `for` and `while` share the same controlled repetition logic

## Final idea

If `while` teaches you the general logic of repetition, `for` teaches you to write it in a more compact and readable way when the structure of the loop is well defined.