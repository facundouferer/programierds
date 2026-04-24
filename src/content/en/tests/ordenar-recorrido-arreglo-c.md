---
title: "Ordering: walking through an array in C"
description: "Build a C program that iterates over an array of 5 integers and prints each index with its value."
slug: "ordenar-recorrido-arreglo-c"
category: "C"
difficulty: "beginner"
timeEstimate: 5
kind: "code-ordering"
algorithm:
  prompt: "Order the lines to iterate over an array of 5 integers and print each index with its value using a for loop."
  language: "c"
  lines:
    - "#include <stdio.h>"
    - "int main() {"
    - "    int numbers[5] = {10, 20, 30, 40, 50};"
    - "    int i;"
    - "    for (i = 0; i < 5; i = i + 1) {"
    - "        printf(\"Index %d -> %d\\n\", i, numbers[i]);"
    - "    }"
    - "    return 0;"
    - "}"
  explanation: "First the header to use printf, then we open main. We declare the array with its 5 values and the counter i. The for starts at 0 and ends when i is no longer less than 5, so we visit indexes 0 to 4. Inside we print the index and the value. We close the for, return 0 and close main."
---

This test asks you to reconstruct one of the most important programs when learning arrays: **the walk-through**. If you do not understand how to walk through, you cannot sum, search or process anything.

The structure is always the same:

1. Include `<stdio.h>` for `printf`.
2. Open `main`.
3. Declare the array with its values.
4. Declare the counter `i`.
5. A for that goes from `0` to size - 1.
6. Use `numbers[i]` inside the loop.
7. Return `0`.

Drag the lines until you have the program. You have a time limit.
