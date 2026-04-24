---
title: "Do-While"
---

The `do-while` statement also repeats instructions, but it has a very important difference with respect to `while`.

In this lesson you will learn:

- how `do-while` works
- how it differs from `while`
- why it executes at least once
- when it's worth using it

## Syntax

```c
do {
    instructions;
} while (condition);
```

## Fundamental difference with `while`

In `while`, the condition is evaluated before entering the block.

In `do-while`, the condition is evaluated after executing the block.

That means the block executes **at least once**.

## Example

```c
#include <stdio.h>

int main() {
    int i = 1;

    do {
        printf("%d\n", i);
        i = i + 1;
    } while (i <= 5);

    return 0;
}
```

## Example where the difference matters

```c
#include <stdio.h>

int main() {
    int number = 10;

    do {
        printf("The number is %d\n", number);
    } while (number < 5);

    return 0;
}
```

Although `number < 5` is false, the block executes once.

## When is `do-while` worth using?

It's worth using when you want the block to execute at least once before checking if it should repeat.

## Common mistakes

### 1. Believing `while` and `do-while` are the same

They're not. The difference is when the condition is evaluated.

### 2. Forgetting the final `;`

```c
} while (condition);
```

That semicolon is part of the syntax.

## Summary

- `do-while` evaluates the condition at the end
- the block executes at least once
- it's useful when you need to guarantee a first execution

## Final idea

`do-while` shows that in programming it matters not just what condition is evaluated, but also **at what moment** it's evaluated.