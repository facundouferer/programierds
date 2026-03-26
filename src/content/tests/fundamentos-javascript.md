---
title: "Fundamentos de JavaScript"
description: "Variables, arrays, funciones y pequeños detalles de lectura de código."
slug: "fundamentos-javascript"
category: "JavaScript"
difficulty: "beginner"
timeEstimate: 1
questions:
  - id: "q1"
    prompt: "¿Qué valor imprime este código?"
    code: |
      const x = 2;
      const y = x * 3;
      console.log(y);
    language: "js"
    options:
      - "2"
      - "3"
      - "6"
      - "undefined"
    correctAnswer: 2
    explanation: "x vale 2, y vale 6 y eso es lo que termina imprimiéndose."
  - id: "q2"
    prompt: "¿Cuál método crea un nuevo array sin mutar el original?"
    options:
      - "push()"
      - "splice()"
      - "map()"
      - "pop()"
    correctAnswer: 2
    explanation: "map() devuelve un nuevo array transformado y no modifica el array base."
  - id: "q3"
    prompt: "¿Qué devuelve una función que no tiene `return` explícito?"
    options:
      - "null"
      - "0"
      - "false"
      - "undefined"
    correctAnswer: 3
    explanation: "En JavaScript, una función sin `return` devuelve `undefined`."
---

Un test corto para entrar en ritmo. Hay preguntas conceptuales y otras de lectura de snippets, así que conviene mirar con calma antes de marcar.
