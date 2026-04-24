---
title: "While"
---

So far you've seen how a program can execute actions in sequence and how it can choose between different paths.

Now another fundamental problem appears: **repeating actions**.

That's where iteration statements come in. The first one you'll study is `while`.

In this lesson you will learn:

- what iteration means
- how `while` works
- how to think about a loop with initial state, condition, and update
- what an infinite loop is
- how to use `break` and `continue` inside a loop

## What is an iteration?

An **iteration** is each repetition of a set of instructions.

If a loop prints five numbers, then there were five iterations.

## What does `while` do?

The `while` statement repeats a block of code **as long as a condition is true**.

### Syntax

```c
while (condition) {
    instructions;
}
```

## Correct mental idea for reading a `while`

A `while` loop has three fundamental elements:

1. **initial state**
2. **continuation condition**
3. **state update**

If you forget one of these three, the loop is usually poorly thought out.

## Basic example

```c
#include <stdio.h>

int main() {
    int i = 1;

    while (i <= 5) {
        printf("%d\n", i);
        i = i + 1;
    }

    return 0;
}
```

## Step-by-step reading

- initial state: `i = 1`
- condition: `i <= 5`
- update: `i = i + 1`

As long as the condition is true, the block keeps executing.

## What happens in each iteration?

### Iteration 1

- `i` is `1`
- `1` is printed
- `i` becomes `2`

### Iteration 2

- `i` is `2`
- `2` is printed
- `i` becomes `3`

And so on until `i` no longer satisfies the condition.

## Infinite loop

An **infinite loop** occurs when the condition never becomes false.

### Incorrect example

```c
while (i <= 5) {
    printf("%d\n", i);
}
```

If `i` doesn't change, the loop can repeat forever.

That's why you always have to think:

> what action within the loop brings the program closer to the end of the loop?

## Using `break` in a `while`

`break` allows exiting the loop immediately.

```c
while (i <= 10) {
    if (i == 5) {
        break;
    }
    printf("%d\n", i);
    i = i + 1;
}
```

When `i` is `5`, the loop cuts off.

## Using `continue` in a `while`

`continue` makes the loop jump directly to the next iteration.

```c
while (i <= 5) {
    i = i + 1;

    if (i == 3) {
        continue;
    }

    printf("%d\n", i);
}
```

You don't need to master it in detail yet, but understanding its general idea: it alters the normal flow of the loop.

## When is `while` worth using?

`while` is great when the repetition depends on a condition and you don't want to think about an exact number of repetitions first.

## Summary

- `while` repeats a block as long as a condition is true
- to design a `while` well, you have to think about initial state, condition, and update
- if the condition never becomes false, an infinite loop appears
- `break` cuts off the loop
- `continue` jumps to the next iteration

## Final idea

`while` teaches you one of the deepest ideas in programming: repeating isn't copying code many times, but controlling how a state evolves while a condition continues to be met.