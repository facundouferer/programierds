---
title: "Conditionals in C"
description: "Test to learn how to use if, if-else and nested if in C."
slug: "condicionales-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "What is the if structure used for in C?"
    options:
      - "To repeat code"
      - "To make decisions based on a condition"
      - "To declare variables"
      - "To read data"
    correctAnswer: 1
    explanation: "if runs code depending on whether a condition is true."

  - id: "q2"
    prompt: "What does this code print?"
    code: |
      int x = 10;
      if(x > 5){
        printf("Greater");
      }
    language: "c"
    options:
      - "Greater"
      - "Smaller"
      - "10"
      - "Nothing"
    correctAnswer: 0
    explanation: "10 is greater than 5."

  - id: "q3"
    prompt: "What happens if the if condition is false and there is no else?"
    options:
      - "The block runs"
      - "An error is raised"
      - "The block does not run"
      - "The code repeats"
    correctAnswer: 2
    explanation: "The block simply does not run."

  - id: "q4"
    prompt: "What does this print?"
    code: |
      int x = 3;
      if(x > 5){
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
    explanation: "3 is not greater than 5."

  - id: "q5"
    prompt: "Which operator compares equality?"
    options:
      - "="
      - "=="
      - "!="
      - ">"
    correctAnswer: 1
    explanation: "== compares equality."

  - id: "q6"
    prompt: "What does this print?"
    code: |
      int x = 7;
      if(x == 7){
        printf("Correct");
      }
    language: "c"
    options:
      - "Correct"
      - "Error"
      - "7"
      - "Nothing"
    correctAnswer: 0
    explanation: "The condition is true."

  - id: "q7"
    prompt: "Which operator means 'different from'?"
    options:
      - "=="
      - "!="
      - "="
      - "<>"
    correctAnswer: 1
    explanation: "!= means different."

  - id: "q8"
    prompt: "What does this print?"
    code: |
      int x = 4;
      if(x != 5){
        printf("Different");
      }
    language: "c"
    options:
      - "Different"
      - "Equal"
      - "Error"
      - "Nothing"
    correctAnswer: 0
    explanation: "4 is different from 5."

  - id: "q9"
    prompt: "What is a nested if?"
    options:
      - "A loop"
      - "An if inside another if"
      - "A variable"
      - "An operator"
    correctAnswer: 1
    explanation: "An if inside another."

  - id: "q10"
    prompt: "What does this print?"
    code: |
      int x = 8;
      if(x > 5){
        if(x < 10){
          printf("Between 5 and 10");
        }
      }
    language: "c"
    options:
      - "Between 5 and 10"
      - "Greater"
      - "Nothing"
      - "Error"
    correctAnswer: 0
    explanation: "Both conditions are met."

  - id: "q11"
    prompt: "Which operator represents 'greater than'?"
    options:
      - ">"
      - "<"
      - ">="
      - "=="
    correctAnswer: 0
    explanation: "The > operator compares greater than."

  - id: "q12"
    prompt: "What does this print?"
    code: |
      int x = 2;
      if(x < 5){
        printf("Smaller");
      }
    language: "c"
    options:
      - "Smaller"
      - "Greater"
      - "Nothing"
      - "Error"
    correctAnswer: 0
    explanation: "2 is smaller than 5."

  - id: "q13"
    prompt: "What does else do?"
    options:
      - "Runs code when if is false"
      - "Runs always"
      - "Declares variables"
      - "Reads data"
    correctAnswer: 0
    explanation: "else runs when if is false."

  - id: "q14"
    prompt: "What does this print?"
    code: |
      int x = 6;
      if(x > 10){
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
    explanation: "6 is not greater than 10."

  - id: "q15"
    prompt: "What does this print?"
    code: |
      int x = 10;
      if(x >= 10){
        printf("OK");
      }
    language: "c"
    options:
      - "OK"
      - "Error"
      - "Nothing"
      - "10"
    correctAnswer: 0
    explanation: "10 is greater than or equal to 10."

  - id: "q16"
    prompt: "What does >= mean?"
    options:
      - "Greater or equal"
      - "Smaller"
      - "Different"
      - "Equal"
    correctAnswer: 0
    explanation: ">= compares greater or equal."

  - id: "q17"
    prompt: "What does this print?"
    code: |
      int x = 1;
      if(x == 0){
        printf("Zero");
      } else {
        printf("Not zero");
      }
    language: "c"
    options:
      - "Not zero"
      - "Zero"
      - "Error"
      - "Nothing"
    correctAnswer: 0
    explanation: "x is not 0."

  - id: "q18"
    prompt: "Which operator represents less than?"
    options:
      - "<"
      - ">"
      - "<="
      - "!="
    correctAnswer: 0
    explanation: "The < operator means less than."

  - id: "q19"
    prompt: "What does this print?"
    code: |
      int x = 4;
      if(x <= 4){
        printf("OK");
      }
    language: "c"
    options:
      - "OK"
      - "Error"
      - "Nothing"
      - "4"
    correctAnswer: 0
    explanation: "4 is less than or equal to 4."

  - id: "q20"
    prompt: "What does if do?"
    options:
      - "Repeats code"
      - "Makes decisions"
      - "Declares variables"
      - "Creates functions"
    correctAnswer: 1
    explanation: "if lets you make decisions."

  - id: "q21"
    prompt: "What does this print?"
    code: |
      int x = 3;
      if(x > 1){
        printf("A");
      }
    language: "c"
    options:
      - "A"
      - "B"
      - "Error"
      - "Nothing"
    correctAnswer: 0
    explanation: "3 is greater than 1."

  - id: "q22"
    prompt: "What does this print?"
    code: |
      int x = 2;
      if(x == 3){
        printf("A");
      } else {
        printf("B");
      }
    language: "c"
    options:
      - "B"
      - "A"
      - "Error"
      - "Nothing"
    correctAnswer: 0
    explanation: "2 is not equal to 3."

  - id: "q23"
    prompt: "What does this print?"
    code: |
      int x = 9;
      if(x > 5){
        printf("Greater");
      }
    language: "c"
    options:
      - "Greater"
      - "Smaller"
      - "Error"
      - "Nothing"
    correctAnswer: 0
    explanation: "9 is greater than 5."

  - id: "q24"
    prompt: "What does this print?"
    code: |
      int x = 0;
      if(x){
        printf("True");
      }
    language: "c"
    options:
      - "Nothing"
      - "True"
      - "Error"
      - "0"
    correctAnswer: 0
    explanation: "0 is interpreted as false."

  - id: "q25"
    prompt: "What does this print?"
    code: |
      int x = 1;
      if(x){
        printf("True");
      }
    language: "c"
    options:
      - "True"
      - "Nothing"
      - "Error"
      - "1"
    correctAnswer: 0
    explanation: "1 is interpreted as true."

  - id: "q26"
    prompt: "What does the { } block do?"
    options:
      - "Groups instructions"
      - "Declares variables"
      - "Reads data"
      - "Repeats code"
    correctAnswer: 0
    explanation: "Braces group code."

  - id: "q27"
    prompt: "What does this print?"
    code: |
      int x = 5;
      if(x == 5){
        printf("Five");
      }
    language: "c"
    options:
      - "Five"
      - "Error"
      - "Nothing"
      - "5"
    correctAnswer: 0
    explanation: "The condition is true."

  - id: "q28"
    prompt: "What does this print?"
    code: |
      int x = 8;
      if(x > 10){
        printf("A");
      }
    language: "c"
    options:
      - "Nothing"
      - "A"
      - "Error"
      - "10"
    correctAnswer: 0
    explanation: "The condition is false."

  - id: "q29"
    prompt: "What does this print?"
    code: |
      int x = 7;
      if(x < 10){
        printf("Smaller");
      }
    language: "c"
    options:
      - "Smaller"
      - "Greater"
      - "Error"
      - "Nothing"
    correctAnswer: 0
    explanation: "7 is smaller than 10."

  - id: "q30"
    prompt: "What does if let you do?"
    options:
      - "Make decisions"
      - "Create variables"
      - "Repeat loops"
      - "Read data"
    correctAnswer: 0
    explanation: "if lets you control the flow of the program."

---
