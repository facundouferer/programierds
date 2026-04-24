---
title: "Sorting and Searching"
---

When working with arrays, you don't just want to store data: you also want to organize it and find it efficiently.

In this lesson you will learn:

- what sorting means
- basic sorting methods
- what binary search is
- why it requires sorted data

## What does sorting mean?

Sorting means reorganizing elements according to a criterion.

For example:

- from smallest to largest
- from largest to smallest
- alphabetically

## Bubble sort

It's one of the simplest to understand.

```c
for (i = 0; i < n - 1; i = i + 1) {
    for (j = 0; j < n - 1 - i; j = j + 1) {
        if (numbers[j] > numbers[j + 1]) {
            temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
```

## Selection sort

Finds the smallest element and places it in the correct position.

## Insertion sort

Places each element in the correct position within the already sorted part.

## Binary search

**Binary search** serves to search in a sorted array.

The idea is to compare with the middle element and discard the half that isn't useful.

```c
while (start <= end) {
    middle = (start + end) / 2;

    if (array[middle] == searched) {
        found = 1;
        break;
    } else if (searched < array[middle]) {
        end = middle - 1;
    } else {
        start = middle + 1;
    }
}
```

## Important idea

Binary search only works correctly if the array is already sorted.

## Summary

- sorting is reorganizing data according to a criterion
- there are several simple sorting methods
- binary search divides the problem in halves
- it requires a previously sorted array

## Final idea

Storing data is important. But learning to sort and search well is what starts making your program truly efficient.