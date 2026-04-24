---
title: "Arrays in Java"
---

# Arrays

An array is a data structure that lets us store multiple values of the same type in a single variable.

## Characteristics
- **Static:** Their size is defined when they are created and cannot change.
- **Homogeneous:** All elements must be of the same type.
- **Indexed:** They are accessed through an index that starts at `0`.

## How to create an Array

```java
// Way 1: Direct values
int[] numbers = {1, 2, 3, 4, 5};

// Way 2: With fixed size
int[] otherNumbers = new int[5];
otherNumbers[0] = 10;
```

## Iterating over an Array

We use loops to access each element:

```java
int[] numbers = {2, 4, 6, 8};
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Position " + i + ": " + numbers[i]);
}
```

## Multidimensional Arrays

We can create tables (matrices) or structures with more dimensions:

```java
// Two-dimensional (3x3)
int[][] matrix = new int[3][3];
matrix[0][0] = 1;

// Three-dimensional (Cube)
int[][][] cube = new int[3][3][3];
```
