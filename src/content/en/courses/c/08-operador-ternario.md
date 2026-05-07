---
title: "Ternary Operator"
---

After learning `if-else`, another very useful tool appears for solving **simple decisions** in a shorter way: the **ternary operator**.

It is called “ternary” because it works with **three parts**.

In this lesson you will learn:

- what the ternary operator is
- what its syntax looks like
- how it relates to `if-else`
- when it is a good choice
- common beginner mistakes

> Key idea: the ternary operator is used to choose between two values based on a condition. It is useful when the decision is simple, but it does not replace `if-else` in every case.

## What problem does it solve?

Sometimes you want to store a different value depending on a condition.

For example:

- if the grade is 6 or more, store “passed”
- if a number is even, store “even”
- if the age is 18 or more, store `1`, otherwise store `0`

Of course, this can be done with `if-else`.

But when you only need to **choose one value between two options**, the ternary operator can express that idea more directly.

## General syntax

The general form is:

```c
condition ? value_if_true : value_if_false
```

Read it like this:

> if the condition is true, use this value; if it is false, use that other value

## Simple example

```c
int age = 20;
int isAdult = age >= 18 ? 1 : 0;
```

### What happens here?

1. the condition `age >= 18` is evaluated
2. since it is true, the value `1` is used
3. that value is stored in `isAdult`

If `age` were less than `18`, then `0` would be stored.

## Equivalent to `if-else`

This code with a ternary operator:

```c
int number = 8;
char* type = number % 2 == 0 ? "even" : "odd";
```

expresses the same idea as this code with `if-else`:

```c
int number = 8;
char* type;

if (number % 2 == 0) {
    type = "even";
} else {
    type = "odd";
}
```

The difference is not in **what it solves**, but in **how it is written**.

## Complete example in C

```c
#include <stdio.h>

int main() {
    int grade = 7;
    char* result = grade >= 6 ? "Passed" : "Failed";

    printf("%s\n", result);

    return 0;
}
```

If `grade` is `7`, it prints `Passed`.
If `grade` were `4`, it would print `Failed`.

## Why is it called an operator?

And here is a FUNDAMENTAL difference that many beginners do not understand at first.

`if-else` is a **control structure**.

The ternary, on the other hand, is an **operator** that forms an **expression**.

That means the ternary **produces a value**.

That is why you can use it, for example, when assigning a variable:

```c
int smaller = a < b ? a : b;
```

Here the result of the whole ternary expression is a value: `a` or `b`.

## Another useful example: choosing the smaller of two numbers

```c
#include <stdio.h>

int main() {
    int a = 12;
    int b = 5;
    int smaller = a < b ? a : b;

    printf("The smaller number is: %d\n", smaller);

    return 0;
}
```

If `a` is smaller than `b`, `smaller` stores `a`.
If not, it stores `b`.

## When is it a good idea to use it?

It is a good fit when:

- the condition is clear
- there are only two possible results
- you want to obtain a value
- the expression is still easy to read

## When is it NOT a good idea?

It is not a good fit when the logic starts getting messy.

For example, if the condition is very long or if you want to place one ternary inside another, the code becomes harder to read.

And if the code becomes hard to read, you already lost the benefit.

Look at this idea:

```c
int result = age >= 18 ? 1 : 0;
```

That is fine.

But if you start writing things that are too complex in a single line, then it is better to go back to `if-else`.

## Common beginner mistakes

### 1. Thinking it always replaces `if-else`

No. It works for simple decisions that return a value.

If you have multiple steps inside each branch, `if-else` is usually the better choice.

### 2. Not understanding which part belongs to each case

Remember the order:

```c
condition ? true_value : false_value
```

First comes the condition, then the value if it is met, and finally the value if it is not.

### 3. Trying to make it too “smart”

The goal of code is not to look sophisticated. The goal is to be understandable.

If the ternary hurts readability, do not use it.

## Summary

- the ternary operator lets you choose between two values
- its general form is `condition ? value_if_true : value_if_false`
- it looks similar to `if-else`, but it produces a value
- it is useful for simple and clear decisions
- if the expression becomes confusing, `if-else` is better

## Final idea

The ternary operator is a small tool, but a very useful one.

Used well, it lets you write simple decisions in a compact and clear way.

Used poorly, it turns a simple idea into a line that is hard to understand.

And in programming, clarity ALWAYS beats cleverness.
