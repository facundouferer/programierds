---
title: "Variables in C"
description: "Test to learn how to declare and use variables in C."
slug: "variables-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "What is a variable in C?"
    options:
      - "A function"
      - "A memory slot that stores data"
      - "A loop"
      - "An operator"
    correctAnswer: 1
    explanation: "A variable is a memory slot where a value is stored."

  - id: "q2"
    prompt: "What is the correct way to declare a variable?"
    options:
      - "age int;"
      - "int age;"
      - "age = int;"
      - "declare age int;"
    correctAnswer: 1
    explanation: "The type comes first, then the name."

  - id: "q3"
    prompt: "What does this code print?"
    code: |
      int x = 5;
      printf("%d", x);
    language: "c"
    options:
      - "5"
      - "0"
      - "1"
      - "Error"
    correctAnswer: 0
    explanation: "It prints the value of x."

  - id: "q4"
    prompt: "Which type is used for integer numbers?"
    options:
      - "float"
      - "char"
      - "int"
      - "double"
    correctAnswer: 2
    explanation: "int is the standard integer type."

  - id: "q5"
    prompt: "What does this print?"
    code: |
      int a = 3;
      int b = 2;
      printf("%d", a+b);
    language: "c"
    options:
      - "5"
      - "6"
      - "1"
      - "3"
    correctAnswer: 0
    explanation: "It adds the variables."

  - id: "q6"
    prompt: "Which is a valid variable name?"
    options:
      - "2age"
      - "age-user"
      - "userAge"
      - "int"
    correctAnswer: 2
    explanation: "Names cannot start with numbers and cannot use reserved words."

  - id: "q7"
    prompt: "What does this code do?"
    code: |
      int x;
      x = 10;
    language: "c"
    options:
      - "Declares and assigns a value"
      - "Declares a function"
      - "Prints x"
      - "Creates a loop"
    correctAnswer: 0
    explanation: "First it declares then assigns the value."

  - id: "q8"
    prompt: "What does this print?"
    code: |
      int x = 4;
      printf("%d", x*2);
    language: "c"
    options:
      - "8"
      - "6"
      - "4"
      - "2"
    correctAnswer: 0
    explanation: "It multiplies x by 2."

  - id: "q9"
    prompt: "Which operator is used to assign values?"
    options:
      - "=="
      - "="
      - "+"
      - "*"
    correctAnswer: 1
    explanation: "The = operator assigns values."

  - id: "q10"
    prompt: "What does this print?"
    code: |
      int x = 7;
      x = x + 3;
      printf("%d", x);
    language: "c"
    options:
      - "10"
      - "7"
      - "3"
      - "4"
    correctAnswer: 0
    explanation: "3 is added to the initial value."

  - id: "q11"
    prompt: "What is the purpose of a variable?"
    options:
      - "Store data"
      - "Repeat code"
      - "Create loops"
      - "Compile the program"
    correctAnswer: 0
    explanation: "Variables store information."

  - id: "q12"
    prompt: "What does this print?"
    code: |
      int a = 2;
      int b = 5;
      printf("%d", b-a);
    language: "c"
    options:
      - "3"
      - "7"
      - "2"
      - "5"
    correctAnswer: 0
    explanation: "It computes the subtraction."

  - id: "q13"
    prompt: "Which type would you use for decimals?"
    options:
      - "int"
      - "float"
      - "char"
      - "bool"
    correctAnswer: 1
    explanation: "float stores decimals."

  - id: "q14"
    prompt: "What does this print?"
    code: |
      int x = 3;
      int y = 4;
      printf("%d", x*y);
    language: "c"
    options:
      - "12"
      - "7"
      - "1"
      - "4"
    correctAnswer: 0
    explanation: "It multiplies x by y."

  - id: "q15"
    prompt: "What does printf do?"
    options:
      - "Reads data"
      - "Prints data"
      - "Declares variables"
      - "Creates loops"
    correctAnswer: 1
    explanation: "printf prints data on screen."

  - id: "q16"
    prompt: "What does this print?"
    code: |
      int x = 9;
      printf("%d", x-4);
    language: "c"
    options:
      - "5"
      - "9"
      - "4"
      - "13"
    correctAnswer: 0
    explanation: "4 is subtracted from the value."

  - id: "q17"
    prompt: "Which is a valid data type?"
    options:
      - "string"
      - "float"
      - "decimal"
      - "number"
    correctAnswer: 1
    explanation: "float is a valid type in C."

  - id: "q18"
    prompt: "What does this print?"
    code: |
      int x = 2;
      printf("%d", x+5);
    language: "c"
    options:
      - "7"
      - "5"
      - "2"
      - "3"
    correctAnswer: 0
    explanation: "5 is added to the value."

  - id: "q19"
    prompt: "What does this code do?"
    code: |
      int age = 20;
    language: "c"
    options:
      - "Declares and assigns a variable"
      - "Prints age"
      - "Reads data"
      - "Creates a loop"
    correctAnswer: 0
    explanation: "It declares the age variable with an initial value."

  - id: "q20"
    prompt: "What does this print?"
    code: |
      int x = 10;
      x = x/2;
      printf("%d", x);
    language: "c"
    options:
      - "5"
      - "10"
      - "2"
      - "20"
    correctAnswer: 0
    explanation: "x is divided by 2."

  - id: "q21"
    prompt: "Which operator adds values?"
    options:
      - "+"
      - "-"
      - "*"
      - "/"
    correctAnswer: 0
    explanation: "The + operator adds."

  - id: "q22"
    prompt: "What does this print?"
    code: |
      int x = 6;
      printf("%d", x+1);
    language: "c"
    options:
      - "7"
      - "6"
      - "5"
      - "1"
    correctAnswer: 0
    explanation: "It increments by 1."

  - id: "q23"
    prompt: "Which operator multiplies?"
    options:
      - "+"
      - "-"
      - "*"
      - "%"
    correctAnswer: 2
    explanation: "The * operator multiplies."

  - id: "q24"
    prompt: "What does this print?"
    code: |
      int x = 8;
      printf("%d", x/2);
    language: "c"
    options:
      - "4"
      - "16"
      - "8"
      - "2"
    correctAnswer: 0
    explanation: "8 divided by 2."

  - id: "q25"
    prompt: "What does this print?"
    code: |
      int x = 5;
      int y = x + 2;
      printf("%d", y);
    language: "c"
    options:
      - "7"
      - "5"
      - "2"
      - "10"
    correctAnswer: 0
    explanation: "y takes the value of x+2."

  - id: "q26"
    prompt: "Which type is used for letters?"
    options:
      - "char"
      - "int"
      - "float"
      - "bool"
    correctAnswer: 0
    explanation: "char stores characters."

  - id: "q27"
    prompt: "What does this print?"
    code: |
      int x = 4;
      printf("%d", x*x);
    language: "c"
    options:
      - "16"
      - "8"
      - "4"
      - "12"
    correctAnswer: 0
    explanation: "It computes the square."

  - id: "q28"
    prompt: "Which operator subtracts?"
    options:
      - "-"
      - "+"
      - "*"
      - "/"
    correctAnswer: 0
    explanation: "The - operator subtracts."

  - id: "q29"
    prompt: "What does this print?"
    code: |
      int x = 12;
      printf("%d", x-2);
    language: "c"
    options:
      - "10"
      - "12"
      - "2"
      - "14"
    correctAnswer: 0
    explanation: "2 is subtracted."

  - id: "q30"
    prompt: "What does a variable do?"
    options:
      - "Stores information"
      - "Runs functions"
      - "Compiles code"
      - "Repeats loops"
    correctAnswer: 0
    explanation: "Variables store data."

---
