---
title: "Variables en C"
description: "Test para aprender cómo declarar y usar variables en C."
slug: "variables-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "¿Qué es una variable en C?"
    options:
      - "Una función"
      - "Un espacio en memoria para almacenar datos"
      - "Un ciclo"
      - "Un operador"
    correctAnswer: 1
    explanation: "Una variable es un espacio en memoria donde se guarda un valor."

  - id: "q2"
    prompt: "¿Cuál es la forma correcta de declarar una variable?"
    options:
      - "edad int;"
      - "int edad;"
      - "edad = int;"
      - "declare edad int;"
    correctAnswer: 1
    explanation: "Primero va el tipo de dato y luego el nombre."

  - id: "q3"
    prompt: "¿Qué imprime este código?"
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
    explanation: "Se imprime el valor de x."

  - id: "q4"
    prompt: "¿Qué tipo se usa para números enteros?"
    options:
      - "float"
      - "char"
      - "int"
      - "double"
    correctAnswer: 2
    explanation: "int es el tipo estándar para enteros."

  - id: "q5"
    prompt: "¿Qué imprime?"
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
    explanation: "Se suman las variables."

  - id: "q6"
    prompt: "¿Cuál es un nombre válido de variable?"
    options:
      - "2edad"
      - "edad-usuario"
      - "edadUsuario"
      - "int"
    correctAnswer: 2
    explanation: "Los nombres no pueden comenzar con números ni usar palabras reservadas."

  - id: "q7"
    prompt: "¿Qué hace este código?"
    code: |
      int x;
      x = 10;
    language: "c"
    options:
      - "Declara y asigna un valor"
      - "Declara una función"
      - "Imprime x"
      - "Crea un ciclo"
    correctAnswer: 0
    explanation: "Primero se declara y luego se asigna el valor."

  - id: "q8"
    prompt: "¿Qué imprime?"
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
    explanation: "Se multiplica x por 2."

  - id: "q9"
    prompt: "¿Qué operador se usa para asignar valores?"
    options:
      - "=="
      - "="
      - "+"
      - "*"
    correctAnswer: 1
    explanation: "El operador = asigna valores."

  - id: "q10"
    prompt: "¿Qué imprime?"
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
    explanation: "Se suma 3 al valor inicial."

  - id: "q11"
    prompt: "¿Cuál es el propósito de una variable?"
    options:
      - "Guardar datos"
      - "Repetir código"
      - "Crear ciclos"
      - "Compilar el programa"
    correctAnswer: 0
    explanation: "Las variables almacenan información."

  - id: "q12"
    prompt: "¿Qué imprime?"
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
    explanation: "Se calcula la resta."

  - id: "q13"
    prompt: "¿Qué tipo usarías para números decimales?"
    options:
      - "int"
      - "float"
      - "char"
      - "bool"
    correctAnswer: 1
    explanation: "float permite almacenar decimales."

  - id: "q14"
    prompt: "¿Qué imprime?"
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
    explanation: "Se multiplica x por y."

  - id: "q15"
    prompt: "¿Qué hace printf?"
    options:
      - "Lee datos"
      - "Imprime datos"
      - "Declara variables"
      - "Crea ciclos"
    correctAnswer: 1
    explanation: "printf imprime datos en pantalla."

  - id: "q16"
    prompt: "¿Qué imprime?"
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
    explanation: "Se resta 4 al valor."

  - id: "q17"
    prompt: "¿Cuál es un tipo de dato válido?"
    options:
      - "string"
      - "float"
      - "decimal"
      - "number"
    correctAnswer: 1
    explanation: "float es un tipo válido en C."

  - id: "q18"
    prompt: "¿Qué imprime?"
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
    explanation: "Se suma 5 al valor."

  - id: "q19"
    prompt: "¿Qué hace este código?"
    code: |
      int edad = 20;
    language: "c"
    options:
      - "Declara y asigna una variable"
      - "Imprime edad"
      - "Lee datos"
      - "Crea un ciclo"
    correctAnswer: 0
    explanation: "Se declara la variable edad con valor inicial."

  - id: "q20"
    prompt: "¿Qué imprime?"
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
    explanation: "Se divide x por 2."

  - id: "q21"
    prompt: "¿Qué operador suma valores?"
    options:
      - "+"
      - "-"
      - "*"
      - "/"
    correctAnswer: 0
    explanation: "El operador + suma."

  - id: "q22"
    prompt: "¿Qué imprime?"
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
    explanation: "Se incrementa en 1."

  - id: "q23"
    prompt: "¿Qué operador multiplica?"
    options:
      - "+"
      - "-"
      - "*"
      - "%"
    correctAnswer: 2
    explanation: "El operador * multiplica."

  - id: "q24"
    prompt: "¿Qué imprime?"
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
    explanation: "8 dividido 2."

  - id: "q25"
    prompt: "¿Qué imprime?"
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
    explanation: "y toma el valor de x+2."

  - id: "q26"
    prompt: "¿Qué tipo se usa para letras?"
    options:
      - "char"
      - "int"
      - "float"
      - "bool"
    correctAnswer: 0
    explanation: "char almacena caracteres."

  - id: "q27"
    prompt: "¿Qué imprime?"
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
    explanation: "Se calcula el cuadrado."

  - id: "q28"
    prompt: "¿Qué operador resta?"
    options:
      - "-"
      - "+"
      - "*"
      - "/"
    correctAnswer: 0
    explanation: "El operador - resta."

  - id: "q29"
    prompt: "¿Qué imprime?"
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
    explanation: "Se resta 2."

  - id: "q30"
    prompt: "¿Qué hace una variable?"
    options:
      - "Guarda información"
      - "Ejecuta funciones"
      - "Compila código"
      - "Repite ciclos"
    correctAnswer: 0
    explanation: "Las variables almacenan datos."

---