---
title: "Modularization and Functions"
---

When a program starts growing, writing everything inside `main` becomes a bad idea.

Yes, it can work for minimal examples. But when the problem grows, you need to divide the program into smaller, more understandable, and reusable parts.

That's where **modularization** appears.

In this lesson you will learn:

- what modularizing means
- what a subprogram is
- what the conceptual difference is between function and procedure
- how to declare and use a function in C
- why modularizing improves program design

> Key idea: modularizing is dividing a large problem into smaller parts to think about, implement, and maintain it better.

## What is modularization?

**Modularizing** means dividing a program into smaller and more organized parts, where each one fulfills a specific task.

Instead of having a huge code block mixing everything together, you separate responsibilities.

For example, instead of writing a giant program that:

- reads data
- validates data
- calculates results
- displays results

mixing everything in a single block, you can separate each task into a different part.

## Why modularize?

Because it improves many things at once:

- the code is easier to understand
- each part has a clearer responsibility
- you can reuse logic
- it's easier to detect errors
- the program grows with more order

## What is a subprogram?

A **subprogram** is a part of the program that performs a specific task.

It's basically a block of code with its own name that the program can call upon when it needs to execute that task.

In C, subprograms are expressed through **functions**.

## Functions and procedures: conceptual difference

Here's a VERY useful distinction at the pedagogical level.

### Function

A **function** is a subprogram that returns a result.

For example, a function that adds two numbers and returns the total.

### Procedure

A **procedure** is a subprogram whose main idea is to perform an action, without focusing on returning a value.

For example, displaying a message on screen.

## Important in C

In C, technically everything is expressed with functions.

That is: even what we conceptually call a "procedure" is usually written as a function with `void` return.

So, the difference between function and procedure in this course is taught as a **conceptual distinction**, not as two different mechanisms of the language.

## Example of a function that returns a value

```c
int add(int a, int b) {
    return a + b;
}
```

This function receives two integers and returns another integer.

## Example of a conceptual procedure in C

```c
void showGreeting() {
    printf("Hello\n");
}
```

Here a useful value isn't returned. The function performs an action.

## General structure of a function

```c
return_type name(parameters) {
    instructions;
}
```

### Parts

- **return type**: what the function returns
- **name**: what it's called
- **parameters**: data it receives
- **body**: instructions it executes

## Complete example

```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

void showResult(int result) {
    printf("The result is %d\n", result);
}

int main() {
    int total;

    total = add(5, 3);
    showResult(total);

    return 0;
}
```

## What is gained with this?

Very much.

Because now the logic is separated:

- one part adds
- another part displays
- `main` coordinates

That makes the program much easier to read.

## Modularization in several files

When the program grows more, modularization can also be reflected in different files.

Generally, these appear:

- `.h` files for declarations
- `.c` files for implementations
- a `main.c` as entry point

### Conceptual example

#### Header file

```c
int add(int a, int b);
```

#### Implementation file

```c
int add(int a, int b) {
    return a + b;
}
```

## When is it worth creating a subprogram?

It's worth when:

- a task makes sense on its own
- logic is repeated
- a block inside `main` is already growing too much
- you want to separate responsibilities

## Common mistakes when starting

### 1. Putting everything in `main`

That makes code hard to read and maintain.

### 2. Creating functions without a clear responsibility

It's not about dividing for the sake of dividing. Each subprogram must have a concrete intention.

### 3. Not distinguishing between "calculate" and "display"

Good modularization separates calculation, input, and output when it makes sense.

## Summary

- modularizing is dividing a program into smaller parts
- a subprogram performs a specific task
- a function returns a value
- a procedure, conceptually, performs an action
- in C, both are represented through functions
- modularizing improves clarity, reuse, and maintenance

## Final idea

Modularization is a sign of maturity when programming.

When you stop thinking about the program as a giant block and start thinking about it as pieces with clear responsibilities, your design improves VERY MUCH.