---
title: "Array Sorting"
---

Sorting data is not just a matter of aesthetics. It is a fundamental tool that allows our programs to process information logically and efficiently.

In this lesson, we will learn the three most common sorting methods for beginners.

---

## The Concept of Swapping (Swap)

Before looking at the methods, you have to understand how we "swap" two numbers in C. Imagine you have a glass with **juice** and another with **water**, and you want to exchange their contents. You need a **third empty glass** (an auxiliary variable).

```c
int aux = a; // We store the value of 'a' in the auxiliary glass
a = b;       // We put the value of 'b' into 'a'
b = aux;     // We put the value stored in the auxiliary into 'b'
```

---

## 1. Bubble Sort

It is the most famous one to learn. It is called like that because the larger numbers "float up" to the end of the array like bubbles.

### How does it work?
It compares pairs of neighboring numbers. If the one on the left is greater than the one on the right, it swaps them. This process is repeated by traversing the entire array several times until no swaps are left to be made.

```c
void bubbleSort(int arr[], int n) {
    int i, j, aux;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
}
```

---

## 2. Selection Sort

This method is very intuitive: it consists of looking for the smallest number and "selecting" it to put it at the beginning.

### How does it work?
1. Find the smallest element in the entire array.
2. Swap it with the element in the first position.
3. Then look for the second smallest and put it in the second position, and so on.

```c
void selectionSort(int arr[], int n) {
    int i, j, min_idx, aux;
    for (i = 0; i < n - 1; i++) {
        min_idx = i; // We assume the current one is the minimum
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j; // We found a smaller one
            }
        }
        // Swap the found minimum with the one in the current position
        aux = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = aux;
    }
}
```

---

## 3. Insertion Sort

It is the way most people sort a hand of cards.

### How does it work?
You take one element at a time and "insert" it into its correct position by comparing it with those you already have to its left (which are already sorted).

```c
void insertionSort(int arr[], int n) {
    int i, j, current;
    for (i = 1; i < n; i++) {
        current = arr[i];
        j = i - 1;

        // Move the elements that are greater than the current one
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = current; // Insert the element in its place
    }
}
```

---

## Summary: Which one to use?

- **Bubble Sort:** Very easy to understand, but the slowest of all.
- **Selection Sort:** Performs fewer data swaps than bubble sort, which makes it a bit more efficient in certain cases.
- **Insertion Sort:** It is very fast if the array is already "almost" sorted.

Mastering these methods gives you total control over how to organize information in your programs!
