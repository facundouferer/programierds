---
title: "Control de flujo en C"
description: "Decisiones, iteraciones y lectura rápida de pequeños fragmentos en C."
slug: "control-de-flujo-c"
category: "C"
difficulty: "intermediate"
timeEstimate: 1
questions:
  - id: "q1"
    prompt: "¿Cuántas veces se ejecuta el `printf`?"
    code: |
      for (int i = 0; i < 3; i++) {
          printf("%d\n", i);
      }
    language: "c"
    options:
      - "2"
      - "3"
      - "4"
      - "Depende del compilador"
    correctAnswer: 1
    explanation: "El `for` corre con i = 0, 1 y 2. Son tres iteraciones."
  - id: "q2"
    prompt: "¿Qué estructura conviene cuando querés ejecutar un bloque al menos una vez?"
    options:
      - "if"
      - "while"
      - "switch"
      - "do while"
    correctAnswer: 3
    explanation: "El `do while` evalúa la condición después de ejecutar el bloque."
  - id: "q3"
    prompt: "¿Qué imprime este programa?"
    code: |
      int x = 5;

      if (x > 10) {
          printf("A");
      } else {
          printf("B");
      }
    language: "c"
    options:
      - "A"
      - "B"
      - "AB"
      - "Nada"
    correctAnswer: 1
    explanation: "Como `x` no es mayor que 10, se ejecuta la rama `else`."
---

Acá se mezclan conceptos básicos con lectura de flujo. Ideal para practicar antes de meterse con ejercicios más largos.
