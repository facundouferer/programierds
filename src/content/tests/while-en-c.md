---
title: "Estructura While en C"
description: "Test para aprender cómo funciona el ciclo while en C."
slug: "while-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 10
questions:

  - id: "q1"
    prompt: "¿Para qué se utiliza el ciclo while en C?"
    options:
      - "Para ejecutar un bloque de código una sola vez"
      - "Para repetir un bloque de código mientras una condición sea verdadera"
      - "Para declarar variables"
      - "Para imprimir datos"
    correctAnswer: 1
    explanation: "El ciclo while repite instrucciones mientras la condición sea verdadera."

  - id: "q2"
    prompt: "¿Qué imprime este programa?"
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
      - "1 1 1"
    correctAnswer: 0
    explanation: "El ciclo se ejecuta mientras i sea menor o igual a 3."

  - id: "q3"
    prompt: "¿Qué ocurre si la condición del while siempre es verdadera?"
    options:
      - "El programa termina normalmente"
      - "Se produce un ciclo infinito"
      - "Se ejecuta solo una vez"
      - "El compilador lo corrige"
    correctAnswer: 1
    explanation: "Si la condición nunca se vuelve falsa, el ciclo nunca termina."

  - id: "q4"
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
    explanation: "El ciclo comienza con i=0 y se ejecuta hasta que i deja de ser menor que 3."

  - id: "q5"
    prompt: "¿Cuál es la sintaxis correcta de un ciclo while?"
    options:
      - "while i < 5 { }"
      - "while(i < 5) { }"
      - "while i < 5 then"
      - "while [i < 5]"
    correctAnswer: 1
    explanation: "La condición debe ir entre paréntesis."

  - id: "q6"
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
      - "0 1 2 3 4"
    correctAnswer: 1
    explanation: "El valor de i va disminuyendo hasta llegar a 1."

  - id: "q7"
    prompt: "¿Qué parte del ciclo while controla cuántas veces se repite?"
    options:
      - "printf"
      - "La condición"
      - "El compilador"
      - "Las llaves"
    correctAnswer: 1
    explanation: "La condición determina si el ciclo continúa o termina."

  - id: "q8"
    prompt: "¿Qué imprime este programa?"
    code: |
      int i = 1;

      while(i <= 5){
          printf("Hola ");
          i++;
      }
    language: "c"
    options:
      - "Hola Hola Hola Hola Hola"
      - "Hola"
      - "Hola Hola"
      - "Hola Hola Hola"
    correctAnswer: 0
    explanation: "El ciclo se ejecuta 5 veces."

  - id: "q9"
    prompt: "¿Qué sucede si olvidas actualizar la variable del ciclo dentro del while?"
    options:
      - "Nada"
      - "El ciclo puede volverse infinito"
      - "El programa se detiene"
      - "Se corrige automáticamente"
    correctAnswer: 1
    explanation: "Si la condición nunca cambia, el ciclo puede no terminar."

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
    explanation: "La suma es 1 + 2 + 3."

  - id: "q11"
    prompt: "¿Cuándo se evalúa la condición del while?"
    options:
      - "Después de ejecutar el ciclo"
      - "Antes de ejecutar el ciclo"
      - "Al final del programa"
      - "Solo una vez"
    correctAnswer: 1
    explanation: "La condición se evalúa antes de cada iteración."

  - id: "q12"
    prompt: "¿Qué imprime este programa?"
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

  - id: "q13"
    prompt: "¿Qué hace este código?"
    code: |
      int i = 0;

      while(i < 3){
          printf("C ");
          i++;
      }
    language: "c"
    options:
      - "Imprime C tres veces"
      - "Imprime C una vez"
      - "Imprime C infinitamente"
      - "No imprime nada"
    correctAnswer: 0
    explanation: "El ciclo se ejecuta 3 veces."

  - id: "q14"
    prompt: "¿Qué imprime este código?"
    code: |
      int i = 3;

      while(i > 3){
          printf("%d", i);
      }
    language: "c"
    options:
      - "3"
      - "0"
      - "Nada"
      - "Ciclo infinito"
    correctAnswer: 2
    explanation: "La condición es falsa desde el inicio."

  - id: "q15"
    prompt: "¿Qué imprime este programa?"
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
      - "2 3 4"
      - "1 2 3 4"
    correctAnswer: 0
    explanation: "Se imprime hasta que i deja de ser menor que 4."

  - id: "q16"
    prompt: "¿Para qué sirve incrementar la variable del ciclo?"
    options:
      - "Para evitar ciclos infinitos"
      - "Para imprimir números"
      - "Para declarar variables"
      - "Para detener el programa"
    correctAnswer: 0
    explanation: "Permite que la condición eventualmente se vuelva falsa."

  - id: "q17"
    prompt: "¿Qué imprime este código?"
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
    explanation: "Se imprime el doble de cada valor."

  - id: "q18"
    prompt: "¿Qué imprime este programa?"
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
      - "0 1"
      - "1 2"
    correctAnswer: 0
    explanation: "Empieza en 0 y termina cuando i llega a 3."

  - id: "q19"
    prompt: "¿Qué imprime este código?"
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
    explanation: "Se imprime el valor mientras disminuye."

  - id: "q20"
    prompt: "¿Cuál es una buena práctica al usar while?"
    options:
      - "No modificar la variable de control"
      - "Asegurarse de que la condición eventualmente se vuelva falsa"
      - "Evitar usar printf"
      - "Eliminar la condición"
    correctAnswer: 1
    explanation: "Esto evita ciclos infinitos y errores lógicos."

---