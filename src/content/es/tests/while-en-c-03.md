---
title: "For en C"
description: "Test para practicar el ciclo for en C."
slug: "for-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "¿Para qué se usa el ciclo for?"
    options:
      - "Repetir código un número de veces"
      - "Declarar variables"
      - "Leer datos"
      - "Comparar valores"
    correctAnswer: 0
    explanation: "for se usa para iteraciones controladas."

  - id: "q2"
    prompt: "¿Cuál es la sintaxis correcta?"
    options:
      - "for i=0 to 10"
      - "for(i=0;i<10;i++)"
      - "for i<10"
      - "for(i<10)"
    correctAnswer: 1
    explanation: "La sintaxis usa inicialización, condición e incremento."

  - id: "q3"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "1 2 3"
      - "1 2"
      - "2 3"
      - "3 2 1"
    correctAnswer: 0
    explanation: "El ciclo va de 1 a 3."

  - id: "q4"
    prompt: "¿Cuántas veces se ejecuta?"
    code: |
      for(int i=0;i<4;i++)
    language: "c"
    options:
      - "4"
      - "3"
      - "5"
      - "1"
    correctAnswer: 0
    explanation: "Se ejecuta 4 veces."

  - id: "q5"
    prompt: "¿Qué hace i++?"
    options:
      - "Incrementa i en 1"
      - "Disminuye i"
      - "Multiplica i"
      - "Divide i"
    correctAnswer: 0
    explanation: "i++ aumenta el valor en uno."

  - id: "q6"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=3;i++){
        printf("Hola ");
      }
    language: "c"
    options:
      - "Hola Hola Hola"
      - "Hola"
      - "Hola Hola"
      - "Nada"
    correctAnswer: 0
    explanation: "Se imprime tres veces."

  - id: "q7"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=3;i>0;i--){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "3 2 1"
      - "1 2 3"
      - "3 2"
      - "2 1"
    correctAnswer: 0
    explanation: "Cuenta hacia atrás."

  - id: "q8"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=2;i<=6;i+=2){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "2 4 6"
      - "2 4"
      - "4 6"
      - "2 4 6 8"
    correctAnswer: 0
    explanation: "Aumenta de 2 en 2."

  - id: "q9"
    prompt: "¿Qué controla el número de iteraciones?"
    options:
      - "La condición"
      - "printf"
      - "scanf"
      - "main"
    correctAnswer: 0
    explanation: "La condición define cuándo termina."

  - id: "q10"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i*2);
      }
    language: "c"
    options:
      - "2 4 6"
      - "1 2 3"
      - "2 3 4"
      - "4 6 8"
    correctAnswer: 0
    explanation: "Se imprime el doble."

  - id: "q11"
    prompt: "¿Qué operador incrementa?"
    options:
      - "++"
      - "--"
      - "+="
      - "*="
    correctAnswer: 0
    explanation: "++ incrementa en 1."

  - id: "q12"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=0;i<3;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "0 1 2"
      - "1 2 3"
      - "0 1"
      - "2 3"
    correctAnswer: 0
    explanation: "Empieza en 0."

  - id: "q13"
    prompt: "¿Qué hace el for?"
    options:
      - "Repite código"
      - "Declara variables"
      - "Lee datos"
      - "Compara datos"
    correctAnswer: 0
    explanation: "for repite instrucciones."

  - id: "q14"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=5;i>2;i--){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "5 4 3"
      - "3 4 5"
      - "5 4"
      - "4 3"
    correctAnswer: 0
    explanation: "Cuenta hacia atrás."

  - id: "q15"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=4;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "1 2 3 4"
      - "1 2 3"
      - "2 3 4"
      - "4 3 2 1"
    correctAnswer: 0
    explanation: "Cuenta hasta 4."

  - id: "q16"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=3;i++){
        printf("C ");
      }
    language: "c"
    options:
      - "C C C"
      - "C"
      - "C C"
      - "Nada"
    correctAnswer: 0
    explanation: "Tres iteraciones."

  - id: "q17"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=2;i<=4;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "2 3 4"
      - "3 4 5"
      - "2 3"
      - "4 3 2"
    correctAnswer: 0
    explanation: "Empieza en 2."

  - id: "q18"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=0;i<2;i++){
        printf("A ");
      }
    language: "c"
    options:
      - "A A"
      - "A"
      - "A A A"
      - "Nada"
    correctAnswer: 0
    explanation: "Dos iteraciones."

  - id: "q19"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i+1);
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
    prompt: "¿Qué hace la parte final del for?"
    options:
      - "Actualiza la variable"
      - "Declara variable"
      - "Lee datos"
      - "Imprime datos"
    correctAnswer: 0
    explanation: "Actualiza la variable de control."

  - id: "q21"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=3;i>=1;i--){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "3 2 1"
      - "1 2 3"
      - "3 2"
      - "2 1"
    correctAnswer: 0
    explanation: "Cuenta hacia atrás."

  - id: "q22"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i*i);
      }
    language: "c"
    options:
      - "1 4 9"
      - "1 2 3"
      - "2 3 4"
      - "3 6 9"
    correctAnswer: 0
    explanation: "Se calcula el cuadrado."

  - id: "q23"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i*3);
      }
    language: "c"
    options:
      - "3 6 9"
      - "1 2 3"
      - "2 4 6"
      - "6 9 12"
    correctAnswer: 0
    explanation: "Se multiplica por 3."

  - id: "q24"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=4;i<=6;i++){
        printf("%d ",i);
      }
    language: "c"
    options:
      - "4 5 6"
      - "6 5 4"
      - "4 5"
      - "5 6"
    correctAnswer: 0
    explanation: "Cuenta del 4 al 6."

  - id: "q25"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=0;i<3;i++){
        printf("B ");
      }
    language: "c"
    options:
      - "B B B"
      - "B"
      - "B B"
      - "Nada"
    correctAnswer: 0
    explanation: "Tres iteraciones."

  - id: "q26"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i+2);
      }
    language: "c"
    options:
      - "3 4 5"
      - "1 2 3"
      - "2 3 4"
      - "4 5 6"
    correctAnswer: 0
    explanation: "Se suma 2."

  - id: "q27"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=3;i++){
        printf("%d ",i-1);
      }
    language: "c"
    options:
      - "0 1 2"
      - "1 2 3"
      - "-1 0 1"
      - "1 1 1"
    correctAnswer: 0
    explanation: "Se resta 1."

  - id: "q28"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=2;i<=4;i++){
        printf("%d ",i*2);
      }
    language: "c"
    options:
      - "4 6 8"
      - "2 4 6"
      - "6 8 10"
      - "2 3 4"
    correctAnswer: 0
    explanation: "Se multiplica por 2."

  - id: "q29"
    prompt: "¿Qué imprime?"
    code: |
      for(int i=1;i<=2;i++){
        printf("Hola ");
      }
    language: "c"
    options:
      - "Hola Hola"
      - "Hola"
      - "Hola Hola Hola"
      - "Nada"
    correctAnswer: 0
    explanation: "Dos iteraciones."

  - id: "q30"
    prompt: "¿Para qué sirve el for?"
    options:
      - "Repetir instrucciones"
      - "Declarar variables"
      - "Leer datos"
      - "Crear funciones"
    correctAnswer: 0
    explanation: "for repite código."

---