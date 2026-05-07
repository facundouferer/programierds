---
title: "Operations with Arrays"
---

In the previous lesson you learned what an array is and how to declare one-dimensional and multidimensional arrays. But declaring an array isn't enough. An array becomes really useful when you learn to **work with its elements**.

That means, for example:

- traversing it to read all its values
- searching for data within it
- inserting a new value at a determined position
- processing information to obtain results

In this lesson we'll focus on those basic operations, step by step and with examples in C.

## What does it mean to operate with an array?

An array stores several pieces of data of the same type in consecutive memory positions.

For example:

```c
int numbers[5] = {10, 20, 30, 40, 50};
```

In this case:

- `numbers[0]` is `10`
- `numbers[1]` is `20`
- `numbers[2]` is `30`
- `numbers[3]` is `40`
- `numbers[4]` is `50`

Working with an array means using its name and indices to read or modify its elements.

## Traversal of an array

**Traversing** an array means visiting its elements one by one.

This is the most important operation, because almost everything we do with arrays starts from a traversal.

### Basic example: displaying all elements

```c
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int i;

    for (i = 0; i < 5; i = i + 1) {
        printf("Position %d -> %d\n", i, numbers[i]);
    }

    return 0;
}
```

### What does this program do?

- the variable `i` starts at `0`
- while `i` is less than `5`, the loop continues
- in each round `numbers[i]` is displayed
- then `i` increases by `1`

So the program visits these positions:

- `numbers[0]`
- `numbers[1]`
- `numbers[2]`
- `numbers[3]`
- `numbers[4]`

### Expected output

```text
Position 0 -> 10
Position 1 -> 20
Position 2 -> 30
Position 3 -> 40
Position 4 -> 50
```

## Traversal to process data

Traversing doesn't always mean displaying values. Often we traverse an array to do calculations.

### Example: summing elements

```c
#include <stdio.h>

int main() {
    int numbers[5] = {3, 5, 2, 8, 4};
    int i;
    int sum = 0;

    for (i = 0; i < 5; i = i + 1) {
        sum = sum + numbers[i];
    }

    printf("The sum is: %d\n", sum);

    return 0;
}
```

### What's happening here?

- `sum` starts at `0`
- in each round the current value of the array is added
- at the end, `sum` contains the total

### Step by step

If the array is `{3, 5, 2, 8, 4}`:

- at the start, `sum = 0`
- after reading `3`, `sum = 3`
- after reading `5`, `sum = 8`
- after reading `2`, `sum = 10`
- after reading `8`, `sum = 18`
- after reading `4`, `sum = 22`

## Traversal to find the largest value

Another very common case is traversing an array to discover which is the largest element.

```c
#include <stdio.h>

int main() {
    int numbers[5] = {12, 7, 25, 18, 9};
    int i;
    int largest = numbers[0];

    for (i = 1; i < 5; i = i + 1) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    printf("The largest value is: %d\n", largest);

    return 0;
}
```

### Important idea

Notice this:

```c
int largest = numbers[0];
```

We don't start with a made-up value. We start by assuming the first element is the largest. Then we compare the rest.

That's a good practice. Why? Because we work with a real value from the array.

## Search in an array

**Searching** means trying to find a value within the array.

The simplest form is **sequential search**. It's called that because it checks positions one by one, from the beginning to the end.

### Example: search for a number

```c
#include <stdio.h>

int main() {
    int numbers[5] = {10, 25, 30, 45, 50};
    int i;
    int searched = 30;
    int found = 0;

    for (i = 0; i < 5; i = i + 1) {
        if (numbers[i] == searched) {
            found = 1;
        }
    }

    if (found == 1) {
        printf("The value %d is in the array.\n", searched);
    } else {
        printf("The value %d is not in the array.\n", searched);
    }

    return 0;
}
```

### How does it work?

- `searched` stores the value we want to find
- `found` starts at `0`, which means "haven't found it yet"
- if a match appears, `found` becomes `1`

## Search showing the position

Often it's not enough to know if the data exists. We also want to know **in what position** it is.

```c
#include <stdio.h>

int main() {
    int numbers[6] = {8, 14, 21, 14, 35, 42};
    int i;
    int searched = 14;
    int position = -1;

    for (i = 0; i < 6; i = i + 1) {
        if (numbers[i] == searched) {
            position = i;
            break;
        }
    }

    if (position != -1) {
        printf("The value %d was found at position %d.\n", searched, position);
    } else {
        printf("The value %d was not found.\n", searched);
    }

    return 0;
}
```

### Why do we use `-1`?

Because a valid position of an array can never be `-1`.

So:

- if `position` still equals `-1`, the data didn't appear
- if `position` changes to `0`, `1`, `2`, etc., we found the data

### And what does `break` do?

`break` cuts the loop at that moment.

In this example it serves us because, once the value is found, there's no need to keep searching.

## Insertion in an array

**Inserting** means adding new data at a determined position.

Here a VERY important idea appears:

> in an array, positions are already occupied or reserved, and if you want to insert in the middle, you have to move elements.

Also, remember that the array has a fixed size. That means to insert data there must be available space.

## Example: insert in the middle

```c
#include <stdio.h>

int main() {
    int numbers[6] = {10, 20, 40, 50};
    int count = 4;
    int position = 2;
    int newValue = 30;
    int i;

    for (i = count; i > position; i = i - 1) {
        numbers[i] = numbers[i - 1];
    }

    numbers[position] = newValue;
    count = count + 1;

    for (i = 0; i < count; i = i + 1) {
        printf("%d ", numbers[i]);
    }

    printf("\n");

    return 0;
}
```

### What was there at the beginning?

The array contained:

```text
10 20 40 50
```

And we wanted to insert `30` at position `2`.

### Why do elements have to be moved?

Because at position `2` there was already `40`.

So we make room by shifting to the right:

- `50` moves to the next position
- `40` moves to the next position
- only then can `30` be saved

### Final result

```text
10 20 30 40 50
```

## Step-by-step explanation of the shift

Let's look at this loop:

```c
for (i = count; i > position; i = i - 1) {
    numbers[i] = numbers[i - 1];
}
```

If `count = 4` and `position = 2`:

- when `i = 4`, `numbers[4] = numbers[3]` → copies `50`
- when `i = 3`, `numbers[3] = numbers[2]` → copies `40`

After that, position `2` is free for the new value.

## Common error when inserting

A very common error is moving elements from left to right.

That's wrong in this case, because values are overwritten before being copied.

When inserting in an array, the shift must be done **from the end toward the insertion position**.

## Two-dimensional arrays

A two-dimensional array, also called a **matrix**, has rows and columns.

Example:

```c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

Here there are:

- 2 rows
- 3 columns

## Traversal of a matrix

To traverse a matrix, two loops are normally used:

- one for the rows
- another for the columns

```c
#include <stdio.h>

int main() {
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    int i;
    int j;

    for (i = 0; i < 2; i = i + 1) {
        for (j = 0; j < 3; j = j + 1) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

### Expected output

```text
1 2 3
4 5 6
```

## Example: summing all elements of a matrix

```c
#include <stdio.h>

int main() {
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    int i;
    int j;
    int sum = 0;

    for (i = 0; i < 2; i = i + 1) {
        for (j = 0; j < 3; j = j + 1) {
            sum = sum + matrix[i][j];
        }
    }

    printf("The total sum is: %d\n", sum);

    return 0;
}
```

## Common mistakes when working with arrays

### Using a position that doesn't exist

If the array has 5 elements, the valid positions are:

- `0`
- `1`
- `2`
- `3`
- `4`

Position `5` no longer belongs to the array.

### Confusing number of elements with last index

If there are 5 elements:

- the number is `5`
- the last index is `4`

They're not the same.

### Forgetting to initialize auxiliary variables

If you do a sum, a search, or a comparison, auxiliary variables must start with a correct value.

For example:

- `sum` usually starts at `0`
- `found` usually starts at `0`
- `position` can start at `-1`

## Summary

- traversing an array is visiting its elements one by one
- a traversal can serve to display, sum, compare, or process data
- sequential search checks the array from the beginning to the end
- inserting in an array implies moving elements when not added at the end
- a matrix is traversed with nested loops

## Final idea

Arrays aren't just "boxes with several pieces of data". They're structures on which we perform concrete operations.

If you understand well how to traverse, search, and insert, you're no longer looking at an array as a static list: you start using it as a real tool for solving problems.