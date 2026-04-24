---
title: "While in C - Full practice"
description: "Practice test on the use of while loops in C."
slug: "while-c-02"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "What is the while loop used for in C?"
    options:
      - "To repeat code while a condition is true"
      - "To declare variables"
      - "To print text"
      - "To define functions"
    correctAnswer: 0
    explanation: "while runs a block repeatedly while the condition is true."

  - id: "q2"
    prompt: "When is the while condition evaluated?"
    options:
      - "After the loop"
      - "Before each iteration"
      - "Only once"
      - "At the end of the program"
    correctAnswer: 1
    explanation: "The condition is evaluated before running the body."

  - id: "q3"
    prompt: "What does this code print?"
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
      - "3 2 1"
    correctAnswer: 0
    explanation: "It prints from 1 to 3."

  - id: "q4"
    prompt: "What happens if the while condition never becomes false?"
    options:
      - "The program ends"
      - "An infinite loop is produced"
      - "The compiler fixes it"
      - "It runs only once"
    correctAnswer: 1
    explanation: "An infinite loop happens when the condition never changes."

  - id: "q5"
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
    explanation: "Starts at 0 and stops when i reaches 3."

  - id: "q6"
    prompt: "Which is the correct syntax?"
    options:
      - "while i < 5 { }"
      - "while(i < 5) { }"
      - "while i < 5 then"
      - "while [i < 5]"
    correctAnswer: 1
    explanation: "The while condition always goes between parentheses."

  - id: "q7"
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
      - "1 2 3"
    correctAnswer: 1
    explanation: "The value decreases until it reaches 1."

  - id: "q8"
    prompt: "What does this code do?"
    code: |
      int i = 1;
      while(i <= 5){
          printf("Hi ");
          i++;
      }
    language: "c"
    options:
      - "Prints Hi 5 times"
      - "Prints Hi 1 time"
      - "Prints Hi forever"
      - "Prints nothing"
    correctAnswer: 0
    explanation: "The loop runs five times."

  - id: "q9"
    prompt: "Which variable usually controls the while loop?"
    options:
      - "The control variable"
      - "printf"
      - "main"
      - "scanf"
    correctAnswer: 0
    explanation: "The control variable changes on each iteration."

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
    explanation: "1 + 2 + 3 = 6."

  - id: "q11"
    prompt: "What does this code print?"
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

  - id: "q12"
    prompt: "What happens if you do not update the loop variable?"
    options:
      - "The loop can become infinite"
      - "The program ends"
      - "It runs only once"
      - "The compiler fixes it"
    correctAnswer: 0
    explanation: "The condition never changes."

  - id: "q13"
    prompt: "What does this code print?"
    code: |
      int i = 3;
      while(i > 3){
          printf("%d", i);
      }
    language: "c"
    options:
      - "3"
      - "Nothing"
      - "0"
      - "Infinite loop"
    correctAnswer: 1
    explanation: "The condition is false from the start."

  - id: "q14"
    prompt: "How many times does the while run?"
    code: |
      int i = 0;
      while(i < 4){
          i++;
      }
    language: "c"
    options:
      - "4"
      - "3"
      - "5"
      - "1"
    correctAnswer: 0
    explanation: "It runs 4 times."

  - id: "q15"
    prompt: "What does this print?"
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
      - "2 3"
      - "1 2 3 4"
    correctAnswer: 0
    explanation: "The loop ends when i reaches 4."

  - id: "q16"
    prompt: "What does this print?"
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
    explanation: "It prints the double of each number."

  - id: "q17"
    prompt: "What does this print?"
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
    explanation: "Counts down."

  - id: "q18"
    prompt: "How many times does it run?"
    code: |
      int i = 0;
      while(i < 2){
          printf("C ");
          i++;
      }
    language: "c"
    options:
      - "1"
      - "2"
      - "3"
      - "0"
    correctAnswer: 1
    explanation: "It runs twice."

  - id: "q19"
    prompt: "What does this print?"
    code: |
      int i = 1;
      while(i <= 3){
          printf("%d ", i+1);
          i++;
      }
    language: "c"
    options:
      - "2 3 4"
      - "1 2 3"
      - "3 4 5"
      - "2 3"
    correctAnswer: 0
    explanation: "It prints i+1."

  - id: "q20"
    prompt: "Which is a good practice when using while?"
    options:
      - "Never change the variable"
      - "Make sure the condition eventually becomes false"
      - "Remove the condition"
      - "Only use printf"
    correctAnswer: 1
    explanation: "This avoids infinite loops."

  - id: "q21"
    prompt: "What does this print?"
    code: |
      int i = 0;
      while(i < 3){
          printf("A ");
          i++;
      }
    language: "c"
    options:
      - "A A A"
      - "A"
      - "A A"
      - "Nothing"
    correctAnswer: 0
    explanation: "The loop runs three times."

  - id: "q22"
    prompt: "What does this print?"
    code: |
      int i = 1;
      while(i <= 2){
          printf("%d ", i);
          i++;
      }
    language: "c"
    options:
      - "1 2"
      - "2 3"
      - "1"
      - "2"
    correctAnswer: 0
    explanation: "It prints 1 and 2."

  - id: "q23"
    prompt: "What does this print?"
    code: |
      int i = 2;
      while(i <= 6){
          printf("%d ", i);
          i += 2;
      }
    language: "c"
    options:
      - "2 4 6"
      - "2 4"
      - "4 6"
      - "2 4 6 8"
    correctAnswer: 0
    explanation: "It grows by 2."

  - id: "q24"
    prompt: "What does this print?"
    code: |
      int i = 5;
      while(i >= 3){
          printf("%d ", i);
          i--;
      }
    language: "c"
    options:
      - "5 4 3"
      - "5 4"
      - "4 3"
      - "3 4 5"
    correctAnswer: 0
    explanation: "Counts down to 3."

  - id: "q25"
    prompt: "What does this print?"
    code: |
      int i = 1;
      while(i < 3){
          printf("B ");
          i++;
      }
    language: "c"
    options:
      - "B B"
      - "B"
      - "B B B"
      - "Nothing"
    correctAnswer: 0
    explanation: "It runs twice."

  - id: "q26"
    prompt: "What does this print?"
    code: |
      int i = 1;
      while(i <= 3){
          printf("%d ", i*3);
          i++;
      }
    language: "c"
    options:
      - "3 6 9"
      - "1 2 3"
      - "3 6"
      - "9 6 3"
    correctAnswer: 0
    explanation: "It prints the triple."

  - id: "q27"
    prompt: "What does this print?"
    code: |
      int i = 4;
      while(i > 1){
          printf("%d ", i);
          i--;
      }
    language: "c"
    options:
      - "4 3 2"
      - "4 3"
      - "3 2"
      - "2 3 4"
    correctAnswer: 0
    explanation: "Counts down."

  - id: "q28"
    prompt: "How many times does it run?"
    code: |
      int i = 1;
      while(i <= 5){
          i++;
      }
    language: "c"
    options:
      - "5"
      - "4"
      - "6"
      - "1"
    correctAnswer: 0
    explanation: "The loop runs five times."

  - id: "q29"
    prompt: "What does this print?"
    code: |
      int i = 0;
      while(i < 2){
          printf("%d ", i+5);
          i++;
      }
    language: "c"
    options:
      - "5 6"
      - "6 7"
      - "5 6 7"
      - "7 8"
    correctAnswer: 0
    explanation: "It prints i+5."

  - id: "q30"
    prompt: "What is the main purpose of while?"
    options:
      - "Repeat instructions under a condition"
      - "Declare variables"
      - "Create functions"
      - "Read data"
    correctAnswer: 0
    explanation: "while is used to repeat code while the condition is true."

---
