---
title: "Control flow in C"
description: "Decisions, loops and quick reading of small C snippets."
slug: "control-de-flujo-c"
category: "C"
difficulty: "intermediate"
timeEstimate: 1
questions:
  - id: "q1"
    prompt: "How many times does `printf` run?"
    code: |
      for (int i = 0; i < 3; i++) {
          printf("%d\n", i);
      }
    language: "c"
    options:
      - "2"
      - "3"
      - "4"
      - "Depends on the compiler"
    correctAnswer: 1
    explanation: "The `for` runs with i = 0, 1 and 2. Three iterations."
  - id: "q2"
    prompt: "Which structure is best when you want to run a block at least once?"
    options:
      - "if"
      - "while"
      - "switch"
      - "do while"
    correctAnswer: 3
    explanation: "`do while` evaluates the condition after running the block."
  - id: "q3"
    prompt: "What does this program print?"
    code: |
      int x = 5;

      if (x > 10) {
          printf("A");
      } else {
          printf("B");
      }
    language: "c"
    options:
      - "A"
      - "B"
      - "AB"
      - "Nothing"
    correctAnswer: 1
    explanation: "Since `x` is not greater than 10, the `else` branch runs."
---

Here basic concepts are mixed with flow reading. Perfect practice before tackling longer exercises.
