---
title: "Recursion"
---

Recursion is one of those ideas that at first seem strange, but when you understand it well, it opens your mind.

A recursive function is a function that calls itself to solve a smaller version of the same problem.

In this lesson you will learn:

- what recursion is
- what the base case is
- what the recursive step is
- how to read a recursive call without getting lost
- common mistakes when starting

> Key idea: recursion consists of solving a large problem by reducing it to a smaller one of the same type.

## What is a recursive function?

It's a function that invokes itself.

But WARNING: it's not enough for a function to just call itself. For recursion to be well-designed, it must meet two things:

1. there must be a **base case** that stops the calls
2. each call must get closer to that base case

## Base case

The **base case** is the condition that stops the recursion.

Without a base case, the function would keep calling itself indefinitely.

## Recursive step

The **recursive step** is the part where the function calls itself with a smaller problem.

## Classic example: factorial

Mathematically:

- `5! = 5 * 4 * 3 * 2 * 1`
- `1! = 1`

### Implementation

```c
int factorial(int n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

## How is this read?

If you call:

```c
factorial(4)
```

this happens:

- `factorial(4)` returns `4 * factorial(3)`
- `factorial(3)` returns `3 * factorial(2)`
- `factorial(2)` returns `2 * factorial(1)`
- `factorial(1)` returns `1`

Then the result is reconstructed:

- `factorial(2) = 2 * 1 = 2`
- `factorial(3) = 3 * 2 = 6`
- `factorial(4) = 4 * 6 = 24`

## Example with Fibonacci

```c
int fibonacci(int n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

This example is useful for understanding the idea, although it's not always the most efficient way.

## When is it worth thinking recursively?

It's worth when the problem can naturally be expressed in terms of itself.

For example:

- factorial
- Fibonacci
- traversals of hierarchical structures like trees

## Common mistakes when starting

### 1. Forgetting the base case

That produces infinite calls.

### 2. Having a base case, but not getting closer to it

If each call doesn't reduce the problem, recursion can also go wrong.

### 3. Memorizing syntax without understanding the process

That doesn't work. You need to understand how the problem decomposes and then reconstructs.

## Summary

- a recursive function calls itself
- it needs a base case
- it needs a recursive step that gets closer to the base case
- recursion solves a problem by reducing it to a smaller one of the same type

## Final idea

Recursion isn't magic. It's a different way of thinking about problem solving.

When you truly understand it, you start seeing that some problems express themselves much better through decomposition than through explicit repetition.