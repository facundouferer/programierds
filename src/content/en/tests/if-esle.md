---
title: "IF in C"
description: "Introductory test to practice basic conditional structures in C."
slug: "test01"
category: "C"
difficulty: "beginner"
timeEstimate: 10
questions:
  - id: "q1"
    prompt: "What is the `if` structure used for in C?"
    options:
      - "To repeat a block of code a fixed number of times"
      - "To make decisions based on a condition"
      - "To declare variables"
      - "To print text on screen"
    correctAnswer: 1
    explanation: "if lets you run a block only if a condition is true."

  - id: "q2"
    prompt: "What does this program print?"
    code: |
      #include <stdio.h>

      int main() {
          int age = 20;

          if (age >= 18) {
              printf("Adult");
          }

          return 0;
      }
    language: "c"
    options:
      - "Minor"
      - "18"
      - "Adult"
      - "Prints nothing"
    correctAnswer: 2
    explanation: "Since age is 20 and 20 >= 18 is true, it prints 'Adult'."

  - id: "q3"
    prompt: "What happens if the `if` condition is false and there is no `else`?"
    options:
      - "The program stops"
      - "The if block still runs"
      - "The if block is skipped"
      - "A compile error happens"
    correctAnswer: 2
    explanation: "If the condition is false, the if block simply does not run."

  - id: "q4"
    prompt: "What does this code print?"
    code: |
      #include <stdio.h>

      int main() {
          int number = 3;

          if (number > 5) {
              printf("A");
          } else {
              printf("B");
          }

          return 0;
      }
    language: "c"
    options:
      - "A"
      - "B"
      - "AB"
      - "Prints nothing"
    correctAnswer: 1
    explanation: "Since 3 > 5 is false, the else block runs and prints 'B'."

  - id: "q5"
    prompt: "What is the role of `else` in C?"
    options:
      - "Repeat the condition"
      - "Run a block when the if condition is false"
      - "Close the program"
      - "Declare another variable"
    correctAnswer: 1
    explanation: "else lets you run an alternative block when the if condition is not met."

  - id: "q6"
    prompt: "What does this program print?"
    code: |
      #include <stdio.h>

      int main() {
          int x = 10;

          if (x == 10) {
              printf("Equal");
          } else {
              printf("Different");
          }

          return 0;
      }
    language: "c"
    options:
      - "10"
      - "Different"
      - "Equal"
      - "Does not compile"
    correctAnswer: 2
    explanation: "The condition x == 10 is true, so it prints 'Equal'."

  - id: "q7"
    prompt: "Which of the following expressions represents an equality comparison in C?"
    options:
      - "x = 5"
      - "x == 5"
      - "x := 5"
      - "x === 5"
    correctAnswer: 1
    explanation: "In C, == compares equality. = is for assignment."

  - id: "q8"
    prompt: "What does this code print?"
    code: |
      #include <stdio.h>

      int main() {
          int a = 8;
          int b = 4;

          if (a < b) {
              printf("Smaller");
          } else {
              printf("Greater or equal");
          }

          return 0;
      }
    language: "c"
    options:
      - "Smaller"
      - "Greater or equal"
      - "8"
      - "4"
    correctAnswer: 1
    explanation: "Since 8 < 4 is false, the else runs."

  - id: "q9"
    prompt: "What is a nested `if`?"
    options:
      - "An if inside another if or inside an else"
      - "An if that runs multiple times"
      - "An if without braces"
      - "An if with a single condition"
    correctAnswer: 0
    explanation: "A nested if is a conditional placed inside another."

  - id: "q10"
    prompt: "What does this program print?"
    code: |
      #include <stdio.h>

      int main() {
          int n = 15;

          if (n > 0) {
              if (n % 2 == 0) {
                  printf("Positive and even");
              } else {
                  printf("Positive and odd");
              }
          }

          return 0;
      }
    language: "c"
    options:
      - "Positive and even"
      - "Positive and odd"
      - "Odd"
      - "Prints nothing"
    correctAnswer: 1
    explanation: "15 is greater than 0 and 15 % 2 is 1, so it is odd."

  - id: "q11"
    prompt: "In a nested `if`, what must happen for the inner if to be evaluated?"
    options:
      - "Nothing, it is always evaluated"
      - "The outer if condition must be met"
      - "There must be an else"
      - "There must be two variables"
    correctAnswer: 1
    explanation: "The inner if is only evaluated if the flow enters the block that contains it."

  - id: "q12"
    prompt: "What does this code print?"
    code: |
      #include <stdio.h>

      int main() {
          int grade = 4;

          if (grade >= 6) {
              printf("Passed");
          } else {
              printf("Failed");
          }

          return 0;
      }
    language: "c"
    options:
      - "Passed"
      - "Failed"
      - "4"
      - "Prints nothing"
    correctAnswer: 1
    explanation: "Since 4 is not greater or equal to 6, it prints 'Failed'."

  - id: "q13"
    prompt: "What does this program print?"
    code: |
      #include <stdio.h>

      int main() {
          int x = -2;

          if (x > 0) {
              printf("Positive");
          } else {
              if (x == 0) {
                  printf("Zero");
              } else {
                  printf("Negative");
              }
          }

          return 0;
      }
    language: "c"
    options:
      - "Positive"
      - "Zero"
      - "Negative"
      - "Does not compile"
    correctAnswer: 2
    explanation: "x is not greater than 0, and it is not 0 either, so it prints 'Negative'."

  - id: "q14"
    prompt: "Which option best describes the use of braces `{}` in an `if`?"
    options:
      - "They are only required if there is a printf"
      - "They delimit the block of instructions"
      - "They are only used with else"
      - "They cannot be used in C"
    correctAnswer: 1
    explanation: "Braces delimit the block that belongs to the if or the else."

  - id: "q15"
    prompt: "What does this code print?"
    code: |
      #include <stdio.h>

      int main() {
          int age = 17;
          int permission = 1;

          if (age >= 18) {
              if (permission == 1) {
                  printf("Can enter");
              } else {
                  printf("Cannot enter");
              }
          } else {
              printf("Too young");
          }

          return 0;
      }
    language: "c"
    options:
      - "Can enter"
      - "Cannot enter"
      - "Too young"
      - "1"
    correctAnswer: 2
    explanation: "Since age is 17, it does not enter the outer if and the else runs."

  - id: "q16"
    prompt: "Which operator is used to check if two values are different in C?"
    options:
      - "!="
      - "<>"
      - "!=="
      - "=!"
    correctAnswer: 0
    explanation: "In C, != means 'different from'."

  - id: "q17"
    prompt: "What does this program print?"
    code: |
      #include <stdio.h>

      int main() {
          int x = 0;

          if (x) {
              printf("True");
          } else {
              printf("False");
          }

          return 0;
      }
    language: "c"
    options:
      - "True"
      - "False"
      - "0"
      - "Does not compile"
    correctAnswer: 1
    explanation: "In C, 0 is interpreted as false in a condition."

  - id: "q18"
    prompt: "What does this program print?"
    code: |
      #include <stdio.h>

      int main() {
          int x = 5;

          if (x > 0) {
              printf("A");
          }

          if (x < 10) {
              printf("B");
          }

          return 0;
      }
    language: "c"
    options:
      - "A"
      - "B"
      - "AB"
      - "BA"
    correctAnswer: 2
    explanation: "Both conditions are true, so it prints A first and then B."

  - id: "q19"
    prompt: "What does this code print?"
    code: |
      #include <stdio.h>

      int main() {
          int number = 12;

          if (number > 0) {
              if (number < 10) {
                  printf("Positive, single digit");
              } else {
                  printf("Positive, two or more digits");
              }
          } else {
              printf("Not positive");
          }

          return 0;
      }
    language: "c"
    options:
      - "Positive, single digit"
      - "Positive, two or more digits"
      - "Not positive"
      - "12"
    correctAnswer: 1
    explanation: "12 is positive and not smaller than 10, so it falls into the inner else."

  - id: "q20"
    prompt: "Which of these snippets correctly represents an `if-else` in C?"
    options:
      - "if x > 0 then printf(\"OK\"); else printf(\"NO\");"
      - "if (x > 0) { printf(\"OK\"); } else { printf(\"NO\"); }"
      - "if x > 0 { printf(\"OK\"); } else { printf(\"NO\"); }"
      - "if [x > 0] printf(\"OK\"); else printf(\"NO\");"
    correctAnswer: 1
    explanation: "In C, the condition goes in parentheses and the blocks can go inside braces."
---

A short tour through `if`, `if-else` and nested `if` to practice reading flow in C.
