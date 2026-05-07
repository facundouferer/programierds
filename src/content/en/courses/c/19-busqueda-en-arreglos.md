---
title: "Data Searching in Arrays"
---

When working with large amounts of data, storing it is only half the job. The other half, and perhaps the most important one, is knowing how to **find** it quickly.

In this lesson, we will learn how to search for elements in an array and how the order of the data influences the speed of our program.

---

## 1. Linear Search (or Sequential Search)

Imagine you have a list of names written on a piece of paper without any specific order. If you are looking for "John", you have to start from the first one and look at each one until you find him or reach the end.

### How does it work?
We traverse the array from position `0` to the last one, comparing each element with the one we are looking for.

```c
#include <stdio.h>

int main() {
    int numbers[] = {10, 5, 8, 2, 7};
    int n = 5;
    int searched = 8;
    int position = -1; // We use -1 to indicate "not found"

    for (int i = 0; i < n; i++) {
        if (numbers[i] == searched) {
            position = i; // Found it!
            break; // No need to keep searching
        }
    }

    if (position != -1) {
        printf("Element found at position %d\n", position);
    } else {
        printf("Element not found\n");
    }

    return 0;
}
```

*   **Pros:** Works for any array, whether it's sorted or not.
*   **Cons:** It's slow for large lists.

---

## 2. Binary Search

**Binary Search** is extremely fast, but it has a fundamental requirement: the array **must be sorted**.

### The Dictionary Analogy
If you look for the word "Programming" in a dictionary, you open the book in the middle:
1.  If the word you see is "after" the one you are looking for, you discard the entire second half.
2.  If it is "before", you discard the first half.
3.  Repeat the process with the remaining half until you find it.

### Implementation in C

```c
int binarySearch(int arr[], int n, int searched) {
    int start = 0;
    int end = n - 1;

    while (start <= end) {
        int middle = start + (end - start) / 2;

        if (arr[middle] == searched) {
            return middle;
        }

        if (arr[middle] < searched) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1; // Not found
}
```

---

## Key Idea

If your data is unsorted, you are forced to use linear search. If you want to use binary search to be more efficient, you must first go through a **Sorting** process, which we will see in the next lesson.
