---
title: "For in C"
description: "Test to practice the for loop in C."
slug: "for-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "What is the for loop used for?"
    options:
      - "Repeat code a fixed number of times"
      - "Declare variables"
      - "Read data"
      - "Compare values"
    correctAnswer: 0
    explanation: "for is used for controlled iterations."

  - id: "q2"
    prompt: "Which is the correct syntax?"
    options:
      - "for i=0 to 10"
      - "for(i=0;i<10;i++)"
      - "for i<10"
      - "for(i<10)"
    correctAnswer: 1
    explanation: "The syntax uses initialization, condition and increment."

  - id: "q3"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "1 2 3"
      - "1 2"
      - "2 3"
      - "3 2 1"
    correctAnswer: 0
    explanation: "The loop runs from 1 to 3."

  - id: "q4"
    prompt: "How many times does it run?"
    code: |
      for(int i=0;i<4;i++)
    language: "c"
    options:
      - "4"
      - "3"
      - "5"
      - "1"
    correctAnswer: 0
    explanation: "It runs 4 times."

  - id: "q5"
    prompt: "What does i++ do?"
    options:
      - "Increments i by 1"
      - "Decrements i"
      - "Multiplies i"
      - "Divides i"
    correctAnswer: 0
    explanation: "i++ adds one."

  - id: "q6"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=3;i++){
        printf("Hi ");
      }
    language: "c"
    options:
      - "Hi Hi Hi"
      - "Hi"
      - "Hi Hi"
      - "Nothing"
    correctAnswer: 0
    explanation: "It prints three times."

  - id: "q7"
    prompt: "What does this print?"
    code: |
      for(int i=3;i>0;i--){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "3 2 1"
      - "1 2 3"
      - "3 2"
      - "2 1"
    correctAnswer: 0
    explanation: "Counts down."

  - id: "q8"
    prompt: "What does this print?"
    code: |
      for(int i=2;i<=6;i+=2){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "2 4 6"
      - "2 4"
      - "4 6"
      - "2 4 6 8"
    correctAnswer: 0
    explanation: "Grows by 2."

  - id: "q9"
    prompt: "What controls how many iterations run?"
    options:
      - "The condition"
      - "printf"
      - "scanf"
      - "main"
    correctAnswer: 0
    explanation: "The condition defines when it stops."

  - id: "q10"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i*2);
      }
    language: "c"
    options:
      - "2 4 6"
      - "1 2 3"
      - "2 3 4"
      - "4 6 8"
    correctAnswer: 0
    explanation: "Prints the double."

  - id: "q11"
    prompt: "Which operator increments?"
    options:
      - "++"
      - "--"
      - "+="
      - "*="
    correctAnswer: 0
    explanation: "++ increments by 1."

  - id: "q12"
    prompt: "What does this print?"
    code: |
      for(int i=0;i<3;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "0 1 2"
      - "1 2 3"
      - "0 1"
      - "2 3"
    correctAnswer: 0
    explanation: "Starts at 0."

  - id: "q13"
    prompt: "What does for do?"
    options:
      - "Repeats code"
      - "Declares variables"
      - "Reads data"
      - "Compares data"
    correctAnswer: 0
    explanation: "for repeats instructions."

  - id: "q14"
    prompt: "What does this print?"
    code: |
      for(int i=5;i>2;i--){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "5 4 3"
      - "3 4 5"
      - "5 4"
      - "4 3"
    correctAnswer: 0
    explanation: "Counts down."

  - id: "q15"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=4;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "1 2 3 4"
      - "1 2 3"
      - "2 3 4"
      - "4 3 2 1"
    correctAnswer: 0
    explanation: "Counts up to 4."

  - id: "q16"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=3;i++){
        printf("C ");
      }
    language: "c"
    options:
      - "C C C"
      - "C"
      - "C C"
      - "Nothing"
    correctAnswer: 0
    explanation: "Three iterations."

  - id: "q17"
    prompt: "What does this print?"
    code: |
      for(int i=2;i<=4;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "2 3 4"
      - "3 4 5"
      - "2 3"
      - "4 3 2"
    correctAnswer: 0
    explanation: "Starts at 2."

  - id: "q18"
    prompt: "What does this print?"
    code: |
      for(int i=0;i<2;i++){
        printf("A ");
      }
    language: "c"
    options:
      - "A A"
      - "A"
      - "A A A"
      - "Nothing"
    correctAnswer: 0
    explanation: "Two iterations."

  - id: "q19"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i+1);
      }
    language: "c"
    options:
      - "2 3 4"
      - "1 2 3"
      - "3 4 5"
      - "2 3"
    correctAnswer: 0
    explanation: "Prints i+1."

  - id: "q20"
    prompt: "What does the final part of the for do?"
    options:
      - "Updates the variable"
      - "Declares variable"
      - "Reads data"
      - "Prints data"
    correctAnswer: 0
    explanation: "It updates the control variable."

  - id: "q21"
    prompt: "What does this print?"
    code: |
      for(int i=3;i>=1;i--){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "3 2 1"
      - "1 2 3"
      - "3 2"
      - "2 1"
    correctAnswer: 0
    explanation: "Counts down."

  - id: "q22"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i*i);
      }
    language: "c"
    options:
      - "1 4 9"
      - "1 2 3"
      - "2 3 4"
      - "3 6 9"
    correctAnswer: 0
    explanation: "Computes the square."

  - id: "q23"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i*3);
      }
    language: "c"
    options:
      - "3 6 9"
      - "1 2 3"
      - "2 4 6"
      - "6 9 12"
    correctAnswer: 0
    explanation: "Multiplies by 3."

  - id: "q24"
    prompt: "What does this print?"
    code: |
      for(int i=4;i<=6;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "4 5 6"
      - "6 5 4"
      - "4 5"
      - "5 6"
    correctAnswer: 0
    explanation: "Counts from 4 to 6."

  - id: "q25"
    prompt: "What does this print?"
    code: |
      for(int i=0;i<3;i++){
        printf("B ");
      }
    language: "c"
    options:
      - "B B B"
      - "B"
      - "B B"
      - "Nothing"
    correctAnswer: 0
    explanation: "Three iterations."

  - id: "q26"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i+2);
      }
    language: "c"
    options:
      - "3 4 5"
      - "1 2 3"
      - "2 3 4"
      - "4 5 6"
    correctAnswer: 0
    explanation: "Adds 2."

  - id: "q27"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i-1);
      }
    language: "c"
    options:
      - "0 1 2"
      - "1 2 3"
      - "-1 0 1"
      - "1 1 1"
    correctAnswer: 0
    explanation: "Subtracts 1."

  - id: "q28"
    prompt: "What does this print?"
    code: |
      for(int i=2;i<=4;i++){
        printf("%d ",i*2);
      }
    language: "c"
    options:
      - "4 6 8"
      - "2 4 6"
      - "6 8 10"
      - "2 3 4"
    correctAnswer: 0
    explanation: "Multiplies by 2."

  - id: "q29"
    prompt: "What does this print?"
    code: |
      for(int i=1;i<=2;i++){
        printf("Hi ");
      }
    language: "c"
    options:
      - "Hi Hi"
      - "Hi"
      - "Hi Hi Hi"
      - "Nothing"
    correctAnswer: 0
    explanation: "Two iterations."

  - id: "q30"
    prompt: "What is for used for?"
    options:
      - "Repeat instructions"
      - "Declare variables"
      - "Read data"
      - "Create functions"
    correctAnswer: 0
    explanation: "for repeats code."

---
