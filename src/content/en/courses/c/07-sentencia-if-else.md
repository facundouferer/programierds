---
title: "If-Else"
---

So far you've seen sequential programs: instructions execute one after another. But sometimes that's not enough.

Often a program needs to **choose** between two or more paths based on a condition.

That's where the `if-else` statement appears.

In this lesson you will learn:

- what it means to make a decision in a program
- what `if` does
- what `if-else` does
- how to use code blocks with braces
- what nested statements are
- common mistakes when working with decisions

> Key idea: `if-else` breaks the simple linear sequence to choose which block to execute based on a condition.

## What is a decision in programming?

A decision occurs when the program must evaluate a condition and, from that, execute one block or another.

For example:

- if the age is 18 or more, display "adult"
- if the grade is less than 6, display "failed"
- if the number is 0, display "zero"

## Reminder: what is a condition?

A **condition** is an expression that can result in true or false.

Examples:

```c
age >= 18
number == 0
grade < 6
```

These expressions use relational operators, which you saw in the previous lesson.

## The `if` statement

The `if` statement executes a block of code only if the condition is true.

### Syntax

```c
if (condition) {
    instructions;
}
```

## Simple example

```c
#include <stdio.h>

int main() {
    int age = 20;

    if (age >= 18) {
        printf("Is adult\n");
    }

    return 0;
}
```

If the condition is true, the block executes.
If it's false, that block is skipped.

## The `if-else` statement

The `if-else` structure allows executing one block if the condition is true and a different block if it's false.

### Syntax

```c
if (condition) {
    instructions_if_true;
} else {
    instructions_if_false;
}
```

## Example

```c
#include <stdio.h>

int main() {
    int number = 5;

    if (number % 2 == 0) {
        printf("The number is even\n");
    } else {
        printf("The number is odd\n");
    }

    return 0;
}
```

## What role do braces play?

The braces `{}` delimit the block of instructions belonging to `if` or `else`.

```c
if (age >= 18) {
    printf("Adult\n");
    printf("Can continue\n");
}
```

Here both statements belong to the same block.

Although in C there's the possibility of writing an `if` without braces when there's only one instruction, for teaching and writing clear code it's best to always use braces.

## Nested statements

A **nested statement** is a control statement placed inside another.

For example, an `if` inside another `if`.

### Example

```c
#include <stdio.h>

int main() {
    int number = 0;

    if (number >= 0) {
        if (number == 0) {
            printf("The number is zero\n");
        } else {
            printf("The number is positive\n");
        }
    } else {
        printf("The number is negative\n");
    }

    return 0;
}
```

## When is nesting worth it?

Nesting is worth it when a second decision depends on the first already being met.

But don't overdo it either.

If you start nesting too many levels, the code becomes hard to read.

## Program flow with `if-else`

Look at this example:

```c
int age = 16;

if (age >= 18) {
    printf("Adult\n");
} else {
    printf("Minor\n");
}
```

### Flow

1. `age >= 18` is evaluated
2. since it's false, the `if` block doesn't execute
3. the `else` block executes

The key is understanding that the program doesn't execute both paths: it chooses one.

## Common mistakes when starting

### 1. Confusing `=` with `==`

```c
if (age = 18) {
```

That's conceptually wrong for a comparison. To compare, use `==`.

### 2. Forgetting braces in blocks that grow

Today you have one line, tomorrow you add two more and chaos appears.

### 3. Not thinking about the flow

It's not enough to write the condition. You have to understand which block executes when the condition is true and which when it's false.

### 4. Nesting without need

Nesting is useful, but abusing it makes code harder.

## Summary

- `if` executes a block only if the condition is true
- `if-else` allows choosing between two paths
- braces delimit the block of instructions
- nested statements allow decisions inside other decisions
- the program chooses one path based on the result of the condition

## Final idea

`if-else` is the first great break from simple sequence.

From here on, the program no longer always does the same thing: it starts adapting based on the data.

And that's exactly what makes a huge number of real programs useful.