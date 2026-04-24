---
title: "Arrays"
---

So far you've often worked with one variable at a time.

For example:

```c
int age;
float price;
char initial;
```

That's fine when you need to store a single piece of data.

But what happens if you need to store:

- 5 grades
- 10 ages
- 30 temperatures
- 7 numbers entered by the user

Are you going to create a variable for each piece of data?

```c
int grade1;
int grade2;
int grade3;
int grade4;
int grade5;
```

You could do it, yes. But it would be uncomfortable, messy, and impractical.

That's where **arrays** appear.

## What is an array?

An **array** is a structure that allows storing several pieces of data of the same type under a single name.

Each piece of data is stored in a **position** and accessed through an **index**.

### Simple example

```c
int grades[5];
```

This means:

- `int` is the data type of each element
- `grades` is the name of the array
- `5` is the number of positions reserved

That is: `grades` can store 5 integer values.

## Why is an array useful?

Because it allows grouping many related pieces of data.

For example, if you want to store 5 grades, instead of having:

```c
int grade1, grade2, grade3, grade4, grade5;
```

you can have:

```c
int grades[5];
```

That better organizes the program and makes subsequent work much easier.

## All elements must be of the same type

In an array, all elements have the same type.

For example:

```c
int numbers[4];
```

here all elements are `int`.

And in:

```c
char letters[6];
```

here all elements are `char`.

You can't store an `int`, a `float`, and a `char` mixed in the same array.

## Indices: the positions of the array

In C, arrays start at index `0`.

This is FUNDAMENTAL. If you don't understand this well, everything starts breaking later.

If we have:

```c
int grades[5];
```

the valid positions are:

- `grades[0]`
- `grades[1]`
- `grades[2]`
- `grades[3]`
- `grades[4]`

### Be careful with this

If the array has 5 elements:

- the number of elements is `5`
- the last index is `4`

They're not the same.

## Mental way to imagine an array

You can think of an array as a row of lockers.

```text
Index:   0    1    2    3    4
Value:  [ ]  [ ]  [ ]  [ ]  [ ]
```

Each locker has:

- a position
- a possible value

## Declaration of an array

Declaring an array means reserving space for its elements.

```c
int numbers[5];
```

Here we reserve space for 5 integers.

## Assigning values to positions

After declaring the array, we can load values into its positions.

```c
#include <stdio.h>

int main() {
    int numbers[5];

    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;

    printf("First value: %d\n", numbers[0]);
    printf("Last value: %d\n", numbers[4]);

    return 0;
}
```

## Initialization of an array

We can also declare and load values at the same time.

```c
int numbers[5] = {10, 20, 30, 40, 50};
```

That means exactly this:

- `numbers[0] = 10`
- `numbers[1] = 20`
- `numbers[2] = 30`
- `numbers[3] = 40`
- `numbers[4] = 50`

## Accessing elements

To read or use a value from the array, we write the name of the array and in brackets the index.

```c
int first = numbers[0];
int third = numbers[2];
```

## Complete example with position access

```c
#include <stdio.h>

int main() {
    int ages[4] = {15, 18, 20, 22};

    printf("Age at position 0: %d\n", ages[0]);
    printf("Age at position 1: %d\n", ages[1]);
    printf("Age at position 2: %d\n", ages[2]);
    printf("Age at position 3: %d\n", ages[3]);

    return 0;
}
```

## Modifying an array element

Array values can also change.

```c
#include <stdio.h>

int main() {
    int grades[3] = {6, 7, 8};

    printf("Before: %d\n", grades[1]);

    grades[1] = 10;

    printf("After: %d\n", grades[1]);

    return 0;
}
```

## One-dimensional array

A **one-dimensional array** is the simplest array.

It has a single dimension and can be imagined as a row of elements.

```text
[10, 20, 30, 40, 50]
```

Or more visually:

```text
Index:   0    1    2    3    4
Value:   10   20   30   40   50
```

## Example with `float`

```c
#include <stdio.h>

int main() {
    float prices[3] = {1250.5, 980.0, 1500.75};

    printf("Price 1: %.2f\n", prices[0]);
    printf("Price 2: %.2f\n", prices[1]);
    printf("Price 3: %.2f\n", prices[2]);

    return 0;
}
```

This shows something important:

> an array doesn't always have to be of integers. It can be of any type, as long as all its elements are of the same type.

## Loading data into an array with a loop

One of the great advantages of arrays is that they combine very well with repetitive structures.

```c
#include <stdio.h>

int main() {
    int numbers[5];
    int i;

    for (i = 0; i < 5; i = i + 1) {
        printf("Enter a number: ");
        scanf("%d", &numbers[i]);
    }

    printf("\nStored values:\n");

    for (i = 0; i < 5; i = i + 1) {
        printf("numbers[%d] = %d\n", i, numbers[i]);
    }

    return 0;
}
```

### What's good about this example?

Very much.

Because it shows you don't need to write:

```c
scanf("%d", &numbers[0]);
scanf("%d", &numbers[1]);
scanf("%d", &numbers[2]);
```

That would be repetitive and uncomfortable. With a loop, we work on all positions in an orderly way.

## Multidimensional arrays

A **multidimensional array** is an array with more than one dimension.

The most common case when starting to program is the **two-dimensional array**, also called a **matrix**.

## What is a matrix?

A matrix organizes data in:

- rows
- columns

So, instead of imagining a single row of lockers, we imagine a table.

## Declaration of a matrix

```c
int matrix[2][3];
```

This means:

- 2 rows
- 3 columns

That is, there's room for 6 integers total.

## Mental way to imagine a matrix

```text
        Column 0  Column 1  Column 2
Row 0     [ ]        [ ]        [ ]
Row 1     [ ]        [ ]        [ ]
```

## Initialization of a matrix

```c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

This means:

- `matrix[0][0] = 1`
- `matrix[0][1] = 2`
- `matrix[0][2] = 3`
- `matrix[1][0] = 4`
- `matrix[1][1] = 5`
- `matrix[1][2] = 6`

## Accessing an element of the matrix

To access an element of a matrix we need two indices:

- one for the row
- another for the column

```c
int value = matrix[1][2];
```

That value is `6`.

### Why?

Because:

- row `1` is the second row
- column `2` is the third column

## Complete example with matrix

```c
#include <stdio.h>

int main() {
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    printf("matrix[0][0] = %d\n", matrix[0][0]);
    printf("matrix[0][2] = %d\n", matrix[0][2]);
    printf("matrix[1][1] = %d\n", matrix[1][1]);
    printf("matrix[1][2] = %d\n", matrix[1][2]);

    return 0;
}
```

## Modifying a position in a matrix

We can also change a value of the matrix.

```c
#include <stdio.h>

int main() {
    int board[2][2] = {
        {1, 0},
        {0, 1}
    };

    board[0][1] = 9;

    printf("New value: %d\n", board[0][1]);

    return 0;
}
```

## What are multidimensional arrays for?

They serve when data has table organization.

For example:

- grades of several students in several subjects
- theater seats
- game board
- mathematical matrices
- temperatures by day and shift

## Conceptual example: grades by student and subject

```c
int grades[3][2];
```

Could mean:

- 3 students
- 2 subjects

So:

- `grades[0][0]` = grade of student 1 in subject 1
- `grades[0][1]` = grade of student 1 in subject 2
- `grades[1][0]` = grade of student 2 in subject 1
- and so on

## Difference between one-dimensional and multidimensional array

### One-dimensional

It has a single line of positions.

```c
int numbers[5];
```

Accessed with a single index.

```c
numbers[2]
```

### Multidimensional

It has more than one dimension.

```c
int matrix[2][3];
```

Accessed with more than one index.

```c
matrix[1][2]
```

## Common mistakes

### Forgetting that the index starts at `0`

This is the classic mistake.

If the array has 5 elements, the last index is `4`, not `5`.

### Accessing a position that doesn't exist

This is wrong:

```c
int numbers[5];
int x = numbers[5];
```

Because `numbers[5]` is outside the array.

### Confusing quantity with last index

If there are 3 rows and 2 columns:

```c
int grades[3][2];
```

the valid rows are:

- `0`
- `1`
- `2`

And the valid columns are:

- `0`
- `1`

### Thinking a matrix is handled the same as a simple array

No. In a matrix you need two indices.

## Summary

- an array allows storing several pieces of data of the same type
- each element is identified by its index
- in C, the first index is always `0`
- a one-dimensional array looks like a row of data
- a two-dimensional array looks like a table with rows and columns
- to access a matrix, two indices are needed

## Final idea

Arrays are one of the first truly powerful tools for working with several related pieces of data.

If you understand these three ideas well:

- that data shares a single name
- that each position is identified by an index
- that a matrix adds rows and columns

then you already have a very solid foundation for everything that comes next.