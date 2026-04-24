---
title: "Ordering: largest value in an array in C"
description: "Build a C program that walks through an array and prints the largest value found."
slug: "ordenar-mayor-arreglo-c"
category: "C"
difficulty: "beginner"
timeEstimate: 6
kind: "code-ordering"
algorithm:
  prompt: "Order the lines to find and print the largest value in an integer array. The comparison starts from the second element."
  language: "c"
  lines:
    - "#include <stdio.h>"
    - "int main() {"
    - "    int numbers[5] = {12, 7, 25, 18, 9};"
    - "    int i;"
    - "    int largest = numbers[0];"
    - "    for (i = 1; i < 5; i = i + 1) {"
    - "        if (numbers[i] > largest) {"
    - "            largest = numbers[i];"
    - "        }"
    - "    }"
    - "    printf(\"The largest value is: %d\\n\", largest);"
    - "    return 0;"
    - "}"
  explanation: "We start largest with numbers[0], which is a real value from the array (much better than a made-up value). The for starts at 1 because position 0 is already our baseline. If the current element is bigger, we update largest. At the end we print and return 0."
---

This program introduces a fundamental idea: **to find the largest, start by assuming the first element is the largest, then compare with the rest**.

That is why we do not declare `largest = 0` or a random value: we use a value that is actually in the array.

Algorithm steps:

1. Include `<stdio.h>`.
2. Open `main`.
3. Declare the array and the counter.
4. Initialize `largest` with `numbers[0]`.
5. Loop from `i = 1`.
6. Compare and update when needed.
7. Print and return `0`.

Pay attention to the order: an error declaring `largest` before the array breaks everything.
