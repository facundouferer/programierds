---
title: "Ordering: position search in C"
description: "Build a C program that searches for a value in an array and reports the position where it appears, breaking the loop as soon as it is found."
slug: "ordenar-busqueda-posicion-c"
category: "C"
difficulty: "intermediate"
timeEstimate: 8
kind: "code-ordering"
algorithm:
  prompt: "Order the lines to search for a value in an array. Use position = -1 as a sentinel, break when found, and then report the result with an if/else."
  language: "c"
  lines:
    - "#include <stdio.h>"
    - "int main() {"
    - "    int numbers[6] = {8, 14, 21, 14, 35, 42};"
    - "    int i;"
    - "    int target = 14;"
    - "    int position = -1;"
    - "    for (i = 0; i < 6; i = i + 1) {"
    - "        if (numbers[i] == target) {"
    - "            position = i;"
    - "            break;"
    - "        }"
    - "    }"
    - "    if (position != -1) {"
    - "        printf(\"The value %d was found at position %d.\\n\", target, position);"
    - "    } else {"
    - "        printf(\"The value %d was not found.\\n\", target);"
    - "    }"
    - "    return 0;"
    - "}"
  explanation: "We use position = -1 as a sentinel: a valid position is never negative. If we find the value, we save the index and break the loop because there is no point in going further. At the end, the if/else decides which message to print based on the value of position."
---

This test is a conceptual leap: it combines **sequential search**, a **sentinel** (`-1`), **break** and a **final if/else**.

Check the mental order:

1. Prepare the data: array, counter, target value and `position = -1`.
2. Loop with `for`.
3. Inside the `for`, an `if` that checks the match, saves the position and does `break`.
4. After the loop, an `if/else` that decides the message based on whether `position` changed.

Key detail: the final `if/else` goes **outside the for**, not inside. If you put it inside the loop, it runs every iteration and the program lies.

Drag the lines. You have time.
