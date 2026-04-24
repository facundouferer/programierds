---
title: "JavaScript fundamentals"
description: "Variables, arrays, functions and small code-reading details."
slug: "fundamentos-javascript"
category: "JavaScript"
difficulty: "beginner"
timeEstimate: 1
questions:
  - id: "q1"
    prompt: "What value does this code print?"
    code: |
      const x = 2;
      const y = x * 3;
      console.log(y);
    language: "js"
    options:
      - "2"
      - "3"
      - "6"
      - "undefined"
    correctAnswer: 2
    explanation: "x is 2, y is 6, and that is what gets printed."
  - id: "q2"
    prompt: "Which method creates a new array without mutating the original?"
    options:
      - "push()"
      - "splice()"
      - "map()"
      - "pop()"
    correctAnswer: 2
    explanation: "map() returns a new transformed array and does not modify the base array."
  - id: "q3"
    prompt: "What does a function without an explicit `return` return?"
    options:
      - "null"
      - "0"
      - "false"
      - "undefined"
    correctAnswer: 3
    explanation: "In JavaScript, a function without `return` returns `undefined`."
---

A short test to warm up. There are conceptual questions and code-reading ones, so take your time before picking an answer.
