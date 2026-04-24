---
title: "While structure in C"
description: "Test to learn how the while loop works in C."
slug: "while-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 10
questions:

  - id: "q1"
    prompt: "What is the while loop used for in C?"
    options:
      - "To run a block of code only once"
      - "To repeat a block of code while a condition is true"
      - "To declare variables"
      - "To print data"
    correctAnswer: 1
    explanation: "The while loop repeats instructions while the condition is true."

  - id: "q2"
    prompt: "What does this program print?"
    code: |
      int i = 1;

      while(i <= 3){
          printf("%d ", i);
          i++;
      }
    language: "c"
    options:
      - "1 2 3"
      - "1 2"
      - "2 3"
      - "1 1 1"
    correctAnswer: 0
    explanation: "The loop runs while i is less than or equal to 3."

  - id: "q3"
    prompt: "What happens if the while condition is always true?"
    options:
      - "The program ends normally"
      - "An infinite loop is produced"
      - "It runs only once"
      - "The compiler fixes it"
    correctAnswer: 1
    explanation: "If the condition never becomes false, the loop never ends."

  - id: "q4"
    prompt: "What does this code print?"
    code: |
      int i = 0;

      while(i < 3){
          printf("%d ", i);
          i++;
      }
    language: "c"
    options:
      - "0 1 2"
      - "1 2 3"
      - "0 1 2 3"
      - "1 2"
    correctAnswer: 0
    explanation: "The loop starts with i=0 and runs until i is no longer less than 3."

  - id: "q5"
    prompt: "Which is the correct syntax for a while loop?"
    options:
      - "while i < 5 { }"
      - "while(i < 5) { }"
      - "while i < 5 then"
      - "while [i < 5]"
    correctAnswer: 1
    explanation: "The condition must go between parentheses."

  - id: "q6"
    prompt: "What does this code print?"
    code: |
      int i = 5;

      while(i > 0){
          printf("%d ", i);
          i--;
      }
    language: "c"
    options:
      - "1 2 3 4 5"
      - "5 4 3 2 1"
      - "5 4 3"
      - "0 1 2 3 4"
    correctAnswer: 1
    explanation: "The value of i decreases down to 1."

  - id: "q7"
    prompt: "Which part of the while loop controls how many times it repeats?"
    options:
      - "printf"
      - "The condition"
      - "The compiler"
      - "The braces"
    correctAnswer: 1
    explanation: "The condition determines whether the loop continues or ends."

  - id: "q8"
    prompt: "What does this program print?"
    code: |
      int i = 1;

      while(i <= 5){
          printf("Hi ");
          i++;
      }
    language: "c"
    options:
      - "Hi Hi Hi Hi Hi"
      - "Hi"
      - "Hi Hi"
      - "Hi Hi Hi"
    correctAnswer: 0
    explanation: "The loop runs 5 times."

  - id: "q9"
    prompt: "What happens if you forget to update the loop variable inside the while?"
    options:
      - "Nothing"
      - "The loop can become infinite"
      - "The program stops"
      - "It fixes itself automatically"
    correctAnswer: 1
    explanation: "If the condition never changes, the loop may never end."

  - id: "q10"
    prompt: "What does this code print?"
    code: |
      int i = 1;
      int sum = 0;

      while(i <= 3){
          sum += i;
          i++;
      }

      printf("%d", sum);
    language: "c"
    options:
      - "3"
      - "6"
      - "9"
      - "1"
    correctAnswer: 1
    explanation: "The sum is 1 + 2 + 3."

  - id: "q11"
    prompt: "When is the while condition evaluated?"
    options:
      - "After running the loop"
      - "Before running the loop"
      - "At the end of the program"
      - "Only once"
    correctAnswer: 1
    explanation: "The condition is evaluated before each iteration."

  - id: "q12"
    prompt: "What does this program print?"
    code: |
      int i = 2;

      while(i <= 6){
          printf("%d ", i);
          i += 2;
      }
    language: "c"
    options:
      - "2 4 6"
      - "1 3 5"
      - "2 4"
      - "2 4 6 8"
    correctAnswer: 0
    explanation: "The value grows by 2."

  - id: "q13"
    prompt: "What does this code do?"
    code: |
      int i = 0;

      while(i < 3){
          printf("C ");
          i++;
      }
    language: "c"
    options:
      - "Prints C three times"
      - "Prints C once"
      - "Prints C forever"
      - "Prints nothing"
    correctAnswer: 0
    explanation: "The loop runs 3 times."

  - id: "q14"
    prompt: "What does this code print?"
    code: |
      int i = 3;

      while(i > 3){
          printf("%d", i);
      }
    language: "c"
    options:
      - "3"
      - "0"
      - "Nothing"
      - "Infinite loop"
    correctAnswer: 2
    explanation: "The condition is false from the start."

  - id: "q15"
    prompt: "What does this program print?"
    code: |
      int i = 1;

      while(i < 4){
          printf("%d ", i);
          i++;
      }
    language: "c"
    options:
      - "1 2 3"
      - "1 2"
      - "2 3 4"
      - "1 2 3 4"
    correctAnswer: 0
    explanation: "It prints until i is no longer less than 4."

  - id: "q16"
    prompt: "What is the point of incrementing the loop variable?"
    options:
      - "To avoid infinite loops"
      - "To print numbers"
      - "To declare variables"
      - "To stop the program"
    correctAnswer: 0
    explanation: "It lets the condition eventually become false."

  - id: "q17"
    prompt: "What does this code print?"
    code: |
      int i = 1;

      while(i <= 4){
          printf("%d ", i*2);
          i++;
      }
    language: "c"
    options:
      - "2 4 6 8"
      - "1 2 3 4"
      - "2 4 6"
      - "4 6 8"
    correctAnswer: 0
    explanation: "It prints the double of each value."

  - id: "q18"
    prompt: "What does this program print?"
    code: |
      int i = 0;

      while(i < 3){
          printf("%d ", i);
          i++;
      }
    language: "c"
    options:
      - "0 1 2"
      - "1 2 3"
      - "0 1"
      - "1 2"
    correctAnswer: 0
    explanation: "Starts at 0 and ends when i reaches 3."

  - id: "q19"
    prompt: "What does this code print?"
    code: |
      int i = 3;

      while(i > 0){
          printf("%d ", i);
          i--;
      }
    language: "c"
    options:
      - "1 2 3"
      - "3 2 1"
      - "3 2"
      - "1 2"
    correctAnswer: 1
    explanation: "It prints the value as it decreases."

  - id: "q20"
    prompt: "Which is a good practice when using while?"
    options:
      - "Do not change the control variable"
      - "Make sure the condition eventually becomes false"
      - "Avoid using printf"
      - "Remove the condition"
    correctAnswer: 1
    explanation: "This avoids infinite loops and logic errors."

---
