---
title: "Ordering: variables and constants in C"
description: "Drag the lines until you reconstruct a C program that declares variables, uses them and defines a constant."
slug: "ordenar-variables-c"
category: "C"
difficulty: "beginner"
timeEstimate: 5
kind: "code-ordering"
algorithm:
  prompt: "Order the lines to build a C program that declares a variable, modifies it, declares a constant and prints both values."
  language: "c"
  lines:
    - "#include <stdio.h>"
    - "int main() {"
    - "    int age = 18;"
    - "    const int monthsPerYear = 12;"
    - "    age = 19;"
    - "    printf(\"Age: %d\\n\", age);"
    - "    printf(\"Months per year: %d\\n\", monthsPerYear);"
    - "    return 0;"
    - "}"
  explanation: "First we include the standard header to use printf. Then we open main, declare the age variable initialized to 18, a constant monthsPerYear set to 12, reassign age to 19, print both and return 0."
---

This test asks you to reconstruct, line by line, a C program that reviews what you saw in the lesson on variables and constants.

The idea:

1. Include the header needed for `printf`.
2. Open `main`.
3. Declare and initialize the `age` variable.
4. Declare the `monthsPerYear` constant.
5. Reassign `age`.
6. Print `age` first and then `monthsPerYear`.
7. Return `0`.

Drag the lines or use the arrows until they are in the correct order. You have a time limit.
