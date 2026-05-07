---
title: "Schematic Programming"
---

You've seen sequence, decision, and iteration. Now comes a bigger idea: **how to think complete programs combining these structures without losing clarity**.

That connects with **schematic programming** and the controlled use of **nested statements**.

In this lesson you will learn:

- what schematic programming is
- how to use successive refinement to design programs
- how to combine sequence, decision, and iteration
- what nested statements are
- when nesting is worthwhile and when it starts becoming messy

## What is schematic programming?

**Schematic programming** is a way of designing programs from well-known control schemes.

Instead of improvising, you think about the problem using base structures like:

- sequence
- selection
- iteration

That is: you don't invent the logic from scratch each time. You recognize construction patterns.

## The three great basic schemes

### 1. Sequence

One action after another.

### 2. Selection

Choosing between possible paths.

### 3. Iteration

Repeating actions while a condition indicates.

A huge number of programs can be thought about by combining these three schemes.

## Example of schematic thinking

Suppose you want a program that:

1. reads numbers
2. adds only the positive ones
3. ends when the user enters 0
4. displays the final sum

If you think schematically, you can see:

- there's **iteration**: reading several times
- there's **selection**: adding only if the number is positive
- there's **sequence**: initialize, read, process, display

That orders the mind before writing code.

## Successive refinement applied to flow control

### General scheme

1. initialize data
2. repeat reading and processing
3. decide what to do with each data
4. end and display result

### More detailed refinement

1. declare `number` and `sum`
2. initialize `sum` to 0
3. read a number
4. while the number is not 0:
   - if it's positive, accumulate it
   - read another number
5. display the sum

Only then would you write the code.

## Nested statements

A **nested statement** is a control structure placed inside another.

It can be:

- an `if` inside another `if`
- an `if` inside a `while`
- a `while` inside another `while`
- a `switch` inside an `if`

## Example: `if` inside `while`

```c
#include <stdio.h>

int main() {
    int number;
    int sum = 0;

    printf("Enter a number (0 to end): ");
    scanf("%d", &number);

    while (number != 0) {
        if (number > 0) {
            sum = sum + number;
        }

        printf("Enter a number (0 to end): ");
        scanf("%d", &number);
    }

    printf("The sum is %d\n", sum);

    return 0;
}
```

## Why is this example important?

Because it shows how schemes combine:

- sequence to initialize and display
- iteration to repeat reading
- selection to decide whether to add or not

That's schematic programming in action.

## When is nesting reasonable?

It's reasonable when it truly expresses clear logical dependencies.

For example:

- repeat an action several times
- and inside each repetition decide something

That makes sense.

## When does nesting start becoming a problem?

When you accumulate too many levels and you no longer understand what controls what.

If when reading the code you get lost among braces, levels, and paths, the design probably needs to be simplified.

## Good practices

- indent correctly
- always use braces
- keep each block with a clear intention
- think about the scheme before the code first
- refine the solution from general to particular

## Summary

- schematic programming organizes solutions using sequence, selection, and iteration
- successive refinement helps go from problem to code
- nested statements allow combining control structures
- nesting is fine when it improves logic, but poorly used it makes code confusing

## Final idea

Programming well isn't chaining structures randomly.

It's recognizing schemes, combining them with criteria, and refining the solution until the code clearly expresses the logic of the problem.

That's where you stop "trying things" and start actually designing programs.