---
title: "Data Input in C - Fundamentals"
description: "Test to learn how to read data from keyboard in C using scanf."
slug: "input-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 10
questions:
  - id: "q1"
    prompt: "What function is commonly used to read data from keyboard in C?"
    options:
      - "printf()"
      - "scanf()"
      - "read()"
      - "input()"
    correctAnswer: 1
    explanation: "scanf() is used to read data entered by the user."

  - id: "q2"
    prompt: "What does this code print if the user enters 5?"
    code: |
      #include <stdio.h>

      int main() {
          int x;
          scanf("%d", &x);
          printf("%d", x);
          return 0;
      }
    language: "c"
    options:
      - "0"
      - "5"
      - "Error"
      - "Nothing"
    correctAnswer: 1
    explanation: "The entered value is stored in x and then printed."

  - id: "q3"
    prompt: "What does `%d` represent in scanf?"
    options:
      - "Integer decimal number"
      - "Float number"
      - "Character"
      - "Text"
    correctAnswer: 0
    explanation: "%d is used to read integers."

  - id: "q4"
    prompt: "What symbol allows saving the read value in a variable?"
    options:
      - "#"
      - "&"
      - "%"
      - "*"
    correctAnswer: 1
    explanation: "& indicates the memory address of the variable."

  - id: "q5"
    prompt: "What variable type is correct to read an integer?"
    options:
      - "float"
      - "int"
      - "char"
      - "double"
    correctAnswer: 1
    explanation: "int is the standard type for integer numbers."

  - id: "q6"
    prompt: "What does this program print if the user enters 7?"
    code: |
      int n;
      scanf("%d", &n);
      printf("%d", n + 1);
    language: "c"
    options:
      - "7"
      - "8"
      - "6"
      - "Error"
    correctAnswer: 1
    explanation: "1 is added to the entered number."

  - id: "q7"
    prompt: "What specifier is used to read a float?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%f corresponds to floating point numbers."

  - id: "q8"
    prompt: "What does this code do?"
    code: |
      int age;
      scanf("%d", &age);
    language: "c"
    options:
      - "Reads an age from keyboard"
      - "Prints the age"
      - "Declares a function"
      - "Adds values"
    correctAnswer: 0
    explanation: "scanf reads a value and stores it in age."

  - id: "q9"
    prompt: "What data type is used to read a character?"
    options:
      - "int"
      - "float"
      - "char"
      - "string"
    correctAnswer: 2
    explanation: "char stores a single character."

  - id: "q10"
    prompt: "What does the following code print if the user enters 10?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d", x*2);
    language: "c"
    options:
      - "20"
      - "10"
      - "5"
      - "Error"
    correctAnswer: 0
    explanation: "The entered value is multiplied by 2."

  - id: "q11"
    prompt: "What function is used to display text on screen?"
    options:
      - "scanf"
      - "printf"
      - "input"
      - "read"
    correctAnswer: 1
    explanation: "printf displays text on the console."

  - id: "q12"
    prompt: "What does this code print if 4 is entered?"
    code: |
      int a;
      scanf("%d",&a);
      printf("%d", a*a);
    language: "c"
    options:
      - "8"
      - "4"
      - "16"
      - "2"
    correctAnswer: 2
    explanation: "The square of the number is printed."

  - id: "q13"
    prompt: "What operator allows getting the memory address?"
    options:
      - "*"
      - "&"
      - "%"
      - "#"
    correctAnswer: 1
    explanation: "& is used to pass the memory address."

  - id: "q14"
    prompt: "What type would you use to read numbers with decimals?"
    options:
      - "int"
      - "float"
      - "char"
      - "bool"
    correctAnswer: 1
    explanation: "float allows storing decimals."

  - id: "q15"
    prompt: "What does this code do?"
    code: |
      float x;
      scanf("%f",&x);
    language: "c"
    options:
      - "Reads a decimal number"
      - "Reads a character"
      - "Prints a number"
      - "Creates an array"
    correctAnswer: 0
    explanation: "Reads a floating point value."

  - id: "q16"
    prompt: "What happens if scanf doesn't receive the &?"
    options:
      - "It works the same"
      - "Gives an error or incorrect behavior"
      - "The variable is printed"
      - "It becomes a string"
    correctAnswer: 1
    explanation: "scanf needs the memory address."

  - id: "q17"
    prompt: "What does this code do?"
    code: |
      int a,b;
      scanf("%d %d",&a,&b);
    language: "c"
    options:
      - "Reads two numbers"
      - "Prints two numbers"
      - "Adds numbers"
      - "Multiplies numbers"
    correctAnswer: 0
    explanation: "Allows reading two values."

  - id: "q18"
    prompt: "What does this program print if you enter 3 and 4?"
    code: |
      int a,b;
      scanf("%d %d",&a,&b);
      printf("%d",a+b);
    language: "c"
    options:
      - "7"
      - "12"
      - "1"
      - "Error"
    correctAnswer: 0
    explanation: "Both values are added."

  - id: "q19"
    prompt: "What specifier is used to read characters?"
    options:
      - "%c"
      - "%d"
      - "%f"
      - "%s"
    correctAnswer: 0
    explanation: "%c corresponds to characters."

  - id: "q20"
    prompt: "What does this program print if you enter 6?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d", x/2);
    language: "c"
    options:
      - "3"
      - "12"
      - "6"
      - "2"
    correctAnswer: 0
    explanation: "The number is divided by 2."
---