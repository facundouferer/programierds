---
title: "Data input in C"
description: "Test to practice reading data with scanf."
slug: "input-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "Which function is used to read data from the keyboard in C?"
    options:
      - "printf"
      - "scanf"
      - "read"
      - "input"
    correctAnswer: 1
    explanation: "scanf reads data entered by the user."

  - id: "q2"
    prompt: "Which specifier is used to read an integer?"
    options:
      - "%f"
      - "%d"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%d is for integers."

  - id: "q3"
    prompt: "What prints if the user enters 5?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x);
    language: "c"
    options:
      - "5"
      - "0"
      - "1"
      - "Error"
    correctAnswer: 0
    explanation: "It prints the entered value."

  - id: "q4"
    prompt: "Which symbol is used to pass a memory address?"
    options:
      - "*"
      - "&"
      - "%"
      - "#"
    correctAnswer: 1
    explanation: "The & operator takes the memory address."

  - id: "q5"
    prompt: "Which specifier is used to read a float?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%f is for floating point numbers."

  - id: "q6"
    prompt: "What prints if 4 is entered?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x+1);
    language: "c"
    options:
      - "5"
      - "4"
      - "3"
      - "1"
    correctAnswer: 0
    explanation: "It adds 1 to the entered value."

  - id: "q7"
    prompt: "What does this code do?"
    code: |
      int age;
      scanf("%d",&age);
    language: "c"
    options:
      - "Reads an integer"
      - "Prints age"
      - "Declares a function"
      - "Multiplies age"
    correctAnswer: 0
    explanation: "scanf stores the entered value."

  - id: "q8"
    prompt: "Which specifier is used to read a char?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 2
    explanation: "%c is for characters."

  - id: "q9"
    prompt: "What does printf do?"
    options:
      - "Reads data"
      - "Prints data"
      - "Creates variables"
      - "Creates loops"
    correctAnswer: 1
    explanation: "printf displays information on screen."

  - id: "q10"
    prompt: "What prints if 6 is entered?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x*2);
    language: "c"
    options:
      - "12"
      - "6"
      - "3"
      - "2"
    correctAnswer: 0
    explanation: "It multiplies by 2."

  - id: "q11"
    prompt: "What allows reading two numbers?"
    code: |
      scanf("%d %d",&a,&b);
    language: "c"
    options:
      - "Two integers"
      - "One integer"
      - "A character"
      - "A decimal"
    correctAnswer: 0
    explanation: "It lets you enter two values."

  - id: "q12"
    prompt: "What prints if 3 and 4 are entered?"
    code: |
      int a,b;
      scanf("%d %d",&a,&b);
      printf("%d",a+b);
    language: "c"
    options:
      - "7"
      - "12"
      - "34"
      - "Error"
    correctAnswer: 0
    explanation: "It adds both values."

  - id: "q13"
    prompt: "Which type is used for decimal numbers?"
    options:
      - "float"
      - "int"
      - "char"
      - "void"
    correctAnswer: 0
    explanation: "float stores decimals."

  - id: "q14"
    prompt: "What does this code do?"
    code: |
      float x;
      scanf("%f",&x);
    language: "c"
    options:
      - "Reads a decimal"
      - "Reads an integer"
      - "Prints a decimal"
      - "Declares a function"
    correctAnswer: 0
    explanation: "scanf reads decimal numbers."

  - id: "q15"
    prompt: "What prints if 5 is entered?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x-2);
    language: "c"
    options:
      - "3"
      - "5"
      - "7"
      - "2"
    correctAnswer: 0
    explanation: "It subtracts 2."

  - id: "q16"
    prompt: "What happens if & is missing in scanf?"
    options:
      - "May cause an error"
      - "Works the same"
      - "Prints the value"
      - "Stops the program"
    correctAnswer: 0
    explanation: "scanf needs the memory address."

  - id: "q17"
    prompt: "What prints if you enter 8?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x/2);
    language: "c"
    options:
      - "4"
      - "16"
      - "8"
      - "2"
    correctAnswer: 0
    explanation: "It divides by 2."

  - id: "q18"
    prompt: "Which type is used for characters?"
    options:
      - "char"
      - "int"
      - "float"
      - "bool"
    correctAnswer: 0
    explanation: "char stores one character."

  - id: "q19"
    prompt: "What prints if 10 is entered?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x+5);
    language: "c"
    options:
      - "15"
      - "10"
      - "5"
      - "20"
    correctAnswer: 0
    explanation: "It adds 5."

  - id: "q20"
    prompt: "What does scanf do?"
    options:
      - "Reads data"
      - "Prints data"
      - "Declares variables"
      - "Creates loops"
    correctAnswer: 0
    explanation: "scanf lets you enter data."

  - id: "q21"
    prompt: "What prints if 4 is entered?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x*x);
    language: "c"
    options:
      - "16"
      - "8"
      - "4"
      - "2"
    correctAnswer: 0
    explanation: "It calculates the square."

  - id: "q22"
    prompt: "What prints if 9 is entered?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x-1);
    language: "c"
    options:
      - "8"
      - "9"
      - "7"
      - "1"
    correctAnswer: 0
    explanation: "It subtracts 1."

  - id: "q23"
    prompt: "What does printf(\"%d\",x) do?"
    options:
      - "Prints x"
      - "Reads x"
      - "Declares x"
      - "Multiplies x"
    correctAnswer: 0
    explanation: "It shows the value."

  - id: "q24"
    prompt: "What prints if 2 is entered?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x+10);
    language: "c"
    options:
      - "12"
      - "10"
      - "2"
      - "20"
    correctAnswer: 0
    explanation: "It adds 10."

  - id: "q25"
    prompt: "What does scanf(\"%d\",&x) do?"
    options:
      - "Reads an integer"
      - "Prints integer"
      - "Declares variable"
      - "Multiplies variable"
    correctAnswer: 0
    explanation: "It reads an integer number."

  - id: "q26"
    prompt: "What prints if 3 is entered?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x*3);
    language: "c"
    options:
      - "9"
      - "3"
      - "6"
      - "1"
    correctAnswer: 0
    explanation: "It multiplies by 3."

  - id: "q27"
    prompt: "What does this code do?"
    code: |
      char c;
      scanf("%c",&c);
    language: "c"
    options:
      - "Reads a character"
      - "Reads an integer"
      - "Prints a character"
      - "Declares a function"
    correctAnswer: 0
    explanation: "It reads a character."

  - id: "q28"
    prompt: "What prints if you enter 7?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x+2);
    language: "c"
    options:
      - "9"
      - "7"
      - "5"
      - "14"
    correctAnswer: 0
    explanation: "It adds 2."

  - id: "q29"
    prompt: "What prints if you enter 4?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x*4);
    language: "c"
    options:
      - "16"
      - "8"
      - "4"
      - "2"
    correctAnswer: 0
    explanation: "It multiplies by 4."

  - id: "q30"
    prompt: "What does scanf allow?"
    options:
      - "Entering data"
      - "Printing data"
      - "Creating functions"
      - "Creating loops"
    correctAnswer: 0
    explanation: "It lets you enter data from the keyboard."

---
