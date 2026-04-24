---
title: "Data types and basic input in C"
description: "Short test to practice data types and reading values with scanf in C."
slug: "tipos-datos-input-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 5
questions:

  - id: "q1"
    prompt: "Which of the following is an integer data type in C?"
    options:
      - "float"
      - "char"
      - "int"
      - "double"
    correctAnswer: 2
    explanation: "int is the standard data type for integers."

  - id: "q2"
    prompt: "Which data type is used to store numbers with decimals?"
    options:
      - "int"
      - "float"
      - "char"
      - "void"
    correctAnswer: 1
    explanation: "float stores numbers with a decimal part."

  - id: "q3"
    prompt: "Which data type is used to store a single character?"
    options:
      - "int"
      - "char"
      - "float"
      - "string"
    correctAnswer: 1
    explanation: "char stores a single character."

  - id: "q4"
    prompt: "Which of the following types usually takes more space?"
    options:
      - "char"
      - "int"
      - "double"
      - "short"
    correctAnswer: 2
    explanation: "double is used for higher precision numbers."

  - id: "q5"
    prompt: "Which type would you use to store a person's age?"
    options:
      - "float"
      - "int"
      - "char"
      - "double"
    correctAnswer: 1
    explanation: "Age is usually an integer."

  - id: "q6"
    prompt: "Which type would you use to store the temperature 36.5?"
    options:
      - "int"
      - "char"
      - "float"
      - "bool"
    correctAnswer: 2
    explanation: "Decimal numbers are stored with float or double."

  - id: "q7"
    prompt: "What value can a char type store?"
    options:
      - "A decimal number"
      - "A letter"
      - "A very large number"
      - "An array"
    correctAnswer: 1
    explanation: "char stores a single character like 'a', 'b', etc."

  - id: "q8"
    prompt: "Which of these declarations is correct?"
    options:
      - "int age;"
      - "age int;"
      - "declare int age;"
      - "age = int;"
    correctAnswer: 0
    explanation: "The correct syntax is type followed by the variable name."

  - id: "q9"
    prompt: "Which type is used for higher precision decimals?"
    options:
      - "float"
      - "int"
      - "double"
      - "char"
    correctAnswer: 2
    explanation: "double has higher precision than float."

  - id: "q10"
    prompt: "Which of these variables is correct to store a letter?"
    options:
      - "int letter;"
      - "char letter;"
      - "float letter;"
      - "double letter;"
    correctAnswer: 1
    explanation: "char is used to store characters."

  - id: "q11"
    prompt: "Which function is used to read data from the keyboard in C?"
    options:
      - "printf"
      - "scanf"
      - "input"
      - "read"
    correctAnswer: 1
    explanation: "scanf reads data entered by the user."

  - id: "q12"
    prompt: "Which specifier is used to read an integer with scanf?"
    options:
      - "%f"
      - "%d"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%d is for integers."

  - id: "q13"
    prompt: "What does this program print if the user enters 8?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d", x);
    language: "c"
    options:
      - "8"
      - "0"
      - "1"
      - "Error"
    correctAnswer: 0
    explanation: "The value entered is stored in x and then printed."

  - id: "q14"
    prompt: "Which symbol is used to pass a memory address to scanf?"
    options:
      - "*"
      - "&"
      - "%"
      - "#"
    correctAnswer: 1
    explanation: "& takes the memory address of the variable."

  - id: "q15"
    prompt: "What does this code do?"
    code: |
      int age;
      scanf("%d",&age);
    language: "c"
    options:
      - "Reads an integer from the keyboard"
      - "Prints age"
      - "Declares a function"
      - "Multiplies age"
    correctAnswer: 0
    explanation: "scanf stores the entered value in the age variable."

  - id: "q16"
    prompt: "Which specifier is used to read a float?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%f is for decimal numbers."

  - id: "q17"
    prompt: "What does this code print if the user enters 5?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d", x*2);
    language: "c"
    options:
      - "5"
      - "10"
      - "2"
      - "Error"
    correctAnswer: 1
    explanation: "The entered number is multiplied by 2."

  - id: "q18"
    prompt: "What does this code do?"
    code: |
      float number;
      scanf("%f",&number);
    language: "c"
    options:
      - "Reads a decimal number"
      - "Reads an integer"
      - "Prints a number"
      - "Reads a character"
    correctAnswer: 0
    explanation: "The float type lets you read numbers with decimals."

  - id: "q19"
    prompt: "What does this program print if you enter 3 and 4?"
    code: |
      int a,b;
      scanf("%d %d",&a,&b);
      printf("%d", a+b);
    language: "c"
    options:
      - "7"
      - "12"
      - "34"
      - "Error"
    correctAnswer: 0
    explanation: "The two entered numbers are added."

  - id: "q20"
    prompt: "Which specifier is used to read a character?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 2
    explanation: "%c is used to read a character."
---
