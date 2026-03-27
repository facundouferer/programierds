---
title: "While en C - Práctica completa"
description: "Test de práctica sobre el uso del ciclo while en C."
slug: "while-c-02"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "¿Para qué sirve el ciclo while en C?"
    options:
      - "Para repetir código mientras una condición sea verdadera"
      - "Para declarar variables"
      - "Para imprimir texto"
      - "Para definir funciones"
    correctAnswer: 0
    explanation: "while ejecuta un bloque repetidamente mientras la condición sea verdadera."

  - id: "q2"
    prompt: "¿Cuándo se evalúa la condición del while?"
    options:
      - "Después del ciclo"
      - "Antes de cada iteración"
      - "Solo una vez"
      - "Al final del programa"
    correctAnswer: 1
    explanation: "La condición se evalúa antes de ejecutar el cuerpo del ciclo."

  - id: "q3"
    prompt: "¿Qué imprime este código?"
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
    explanation: "Se imprime desde 1 hasta 3."

  - id: "q4"
    prompt: "¿Qué ocurre si la condición del while nunca se vuelve falsa?"
    options:
      - "El programa termina"
      - "Se genera un ciclo infinito"
      - "El compilador lo corrige"
      - "Se ejecuta una sola vez"
    correctAnswer: 1
    explanation: "Un ciclo infinito ocurre cuando la condición nunca cambia."

  - id: "q5"
    prompt: "¿Qué imprime este código?"
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
    explanation: "Comienza en 0 y termina cuando i llega a 3."

  - id: "q6"
    prompt: "¿Cuál es la sintaxis correcta?"
    options:
      - "while i < 5 { }"
      - "while(i < 5) { }"
      - "while i < 5 then"
      - "while [i < 5]"
    correctAnswer: 1
    explanation: "La condición del while siempre va entre paréntesis."

  - id: "q7"
    prompt: "¿Qué imprime este código?"
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
    explanation: "El valor disminuye hasta llegar a 1."

  - id: "q8"
    prompt: "¿Qué hace este código?"
    code: |
      int i = 1;
      while(i <= 5){
          printf("Hola ");
          i++;
      }
    language: "c"
    options:
      - "Imprime Hola 5 veces"
      - "Imprime Hola 1 vez"
      - "Imprime Hola infinitamente"
      - "No imprime nada"
    correctAnswer: 0
    explanation: "El ciclo se ejecuta cinco veces."

  - id: "q9"
    prompt: "¿Qué variable suele controlar el ciclo while?"
    options:
      - "La variable de control"
      - "printf"
      - "main"
      - "scanf"
    correctAnswer: 0
    explanation: "La variable de control cambia en cada iteración."

  - id: "q10"
    prompt: "¿Qué imprime este código?"
    code: |
      int i = 1;
      int suma = 0;
      while(i <= 3){
          suma += i;
          i++;
      }
      printf("%d", suma);
    language: "c"
    options:
      - "3"
      - "6"
      - "9"
      - "1"
    correctAnswer: 1
    explanation: "1 + 2 + 3 = 6."

  - id: "q11"
    prompt: "¿Qué imprime este código?"
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
    explanation: "El valor aumenta de 2 en 2."

  - id: "q12"
    prompt: "¿Qué sucede si no se actualiza la variable del ciclo?"
    options:
      - "El ciclo puede volverse infinito"
      - "El programa termina"
      - "Se ejecuta solo una vez"
      - "El compilador lo corrige"
    correctAnswer: 0
    explanation: "La condición nunca cambia."

  - id: "q13"
    prompt: "¿Qué imprime este código?"
    code: |
      int i = 3;
      while(i > 3){
          printf("%d", i);
      }
    language: "c"
    options:
      - "3"
      - "Nada"
      - "0"
      - "Ciclo infinito"
    correctAnswer: 1
    explanation: "La condición es falsa desde el inicio."

  - id: "q14"
    prompt: "¿Cuántas veces se ejecuta el while?"
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
    explanation: "Se ejecuta 4 veces."

  - id: "q15"
    prompt: "¿Qué imprime?"
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
    explanation: "El ciclo termina cuando i llega a 4."

  - id: "q16"
    prompt: "¿Qué imprime?"
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
    explanation: "Se imprime el doble de cada número."

  - id: "q17"
    prompt: "¿Qué imprime?"
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
    explanation: "Cuenta hacia atrás."

  - id: "q18"
    prompt: "¿Cuántas veces se ejecuta?"
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
    explanation: "Se ejecuta dos veces."

  - id: "q19"
    prompt: "¿Qué imprime?"
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
    explanation: "Se imprime i+1."

  - id: "q20"
    prompt: "¿Cuál es una buena práctica al usar while?"
    options:
      - "No modificar la variable"
      - "Asegurarse de que la condición se vuelva falsa"
      - "Eliminar la condición"
      - "Usar solo printf"
    correctAnswer: 1
    explanation: "Esto evita ciclos infinitos."

  - id: "q21"
    prompt: "¿Qué imprime?"
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
      - "Nada"
    correctAnswer: 0
    explanation: "El ciclo se ejecuta tres veces."

  - id: "q22"
    prompt: "¿Qué imprime?"
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
    explanation: "Se imprime 1 y 2."

  - id: "q23"
    prompt: "¿Qué imprime?"
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
    explanation: "Se incrementa de 2 en 2."

  - id: "q24"
    prompt: "¿Qué imprime?"
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
    explanation: "Cuenta hacia atrás hasta 3."

  - id: "q25"
    prompt: "¿Qué imprime?"
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
      - "Nada"
    correctAnswer: 0
    explanation: "Se ejecuta dos veces."

  - id: "q26"
    prompt: "¿Qué imprime?"
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
    explanation: "Se imprime el triple."

  - id: "q27"
    prompt: "¿Qué imprime?"
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
    explanation: "Cuenta hacia atrás."

  - id: "q28"
    prompt: "¿Cuántas veces se ejecuta?"
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
    explanation: "El ciclo se ejecuta cinco veces."

  - id: "q29"
    prompt: "¿Qué imprime?"
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
    explanation: "Se imprime i+5."

  - id: "q30"
    prompt: "¿Cuál es el propósito principal del while?"
    options:
      - "Repetir instrucciones bajo una condición"
      - "Declarar variables"
      - "Crear funciones"
      - "Leer datos"
    correctAnswer: 0
    explanation: "while se utiliza para repetir código mientras la condición sea verdadera."

---