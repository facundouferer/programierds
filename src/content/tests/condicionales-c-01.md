---
title: "Condicionales en C"
description: "Test para aprender el uso de if, if-else e if anidado en C."
slug: "condicionales-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "¿Para qué se utiliza la estructura if en C?"
    options:
      - "Para repetir código"
      - "Para tomar decisiones según una condición"
      - "Para declarar variables"
      - "Para leer datos"
    correctAnswer: 1
    explanation: "if ejecuta código dependiendo de si una condición es verdadera."

  - id: "q2"
    prompt: "¿Qué imprime este código?"
    code: |
      int x = 10;
      if(x > 5){
        printf("Mayor");
      }
    language: "c"
    options:
      - "Mayor"
      - "Menor"
      - "10"
      - "Nada"
    correctAnswer: 0
    explanation: "10 es mayor que 5."

  - id: "q3"
    prompt: "¿Qué ocurre si la condición de un if es falsa y no existe else?"
    options:
      - "Se ejecuta el bloque"
      - "Se produce error"
      - "No se ejecuta el bloque"
      - "Se repite el código"
    correctAnswer: 2
    explanation: "El bloque simplemente no se ejecuta."

  - id: "q4"
    prompt: "¿Qué imprime?"
    code: |
      int x = 3;
      if(x > 5){
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
    explanation: "3 no es mayor que 5."

  - id: "q5"
    prompt: "¿Cuál operador compara igualdad?"
    options:
      - "="
      - "=="
      - "!="
      - ">"
    correctAnswer: 1
    explanation: "== compara igualdad."

  - id: "q6"
    prompt: "¿Qué imprime?"
    code: |
      int x = 7;
      if(x == 7){
        printf("Correcto");
      }
    language: "c"
    options:
      - "Correcto"
      - "Error"
      - "7"
      - "Nada"
    correctAnswer: 0
    explanation: "La condición es verdadera."

  - id: "q7"
    prompt: "¿Qué operador significa 'distinto de'?"
    options:
      - "=="
      - "!="
      - "="
      - "<>"
    correctAnswer: 1
    explanation: "!= significa diferente."

  - id: "q8"
    prompt: "¿Qué imprime?"
    code: |
      int x = 4;
      if(x != 5){
        printf("Distinto");
      }
    language: "c"
    options:
      - "Distinto"
      - "Igual"
      - "Error"
      - "Nada"
    correctAnswer: 0
    explanation: "4 es distinto de 5."

  - id: "q9"
    prompt: "¿Qué es un if anidado?"
    options:
      - "Un ciclo"
      - "Un if dentro de otro if"
      - "Una variable"
      - "Un operador"
    correctAnswer: 1
    explanation: "Un if dentro de otro."

  - id: "q10"
    prompt: "¿Qué imprime?"
    code: |
      int x = 8;
      if(x > 5){
        if(x < 10){
          printf("Entre 5 y 10");
        }
      }
    language: "c"
    options:
      - "Entre 5 y 10"
      - "Mayor"
      - "Nada"
      - "Error"
    correctAnswer: 0
    explanation: "Cumple ambas condiciones."

  - id: "q11"
    prompt: "¿Qué operador representa 'mayor que'?"
    options:
      - ">"
      - "<"
      - ">="
      - "=="
    correctAnswer: 0
    explanation: "El operador > compara mayor que."

  - id: "q12"
    prompt: "¿Qué imprime?"
    code: |
      int x = 2;
      if(x < 5){
        printf("Menor");
      }
    language: "c"
    options:
      - "Menor"
      - "Mayor"
      - "Nada"
      - "Error"
    correctAnswer: 0
    explanation: "2 es menor que 5."

  - id: "q13"
    prompt: "¿Qué hace else?"
    options:
      - "Ejecuta código si if es falso"
      - "Ejecuta siempre"
      - "Declara variables"
      - "Lee datos"
    correctAnswer: 0
    explanation: "else se ejecuta cuando if es falso."

  - id: "q14"
    prompt: "¿Qué imprime?"
    code: |
      int x = 6;
      if(x > 10){
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
    explanation: "6 no es mayor que 10."

  - id: "q15"
    prompt: "¿Qué imprime?"
    code: |
      int x = 10;
      if(x >= 10){
        printf("OK");
      }
    language: "c"
    options:
      - "OK"
      - "Error"
      - "Nada"
      - "10"
    correctAnswer: 0
    explanation: "10 es mayor o igual que 10."

  - id: "q16"
    prompt: "¿Qué significa >= ?"
    options:
      - "Mayor o igual"
      - "Menor"
      - "Distinto"
      - "Igual"
    correctAnswer: 0
    explanation: ">= compara mayor o igual."

  - id: "q17"
    prompt: "¿Qué imprime?"
    code: |
      int x = 1;
      if(x == 0){
        printf("Cero");
      } else {
        printf("No cero");
      }
    language: "c"
    options:
      - "No cero"
      - "Cero"
      - "Error"
      - "Nada"
    correctAnswer: 0
    explanation: "x no es 0."

  - id: "q18"
    prompt: "¿Qué operador representa menor que?"
    options:
      - "<"
      - ">"
      - "<="
      - "!="
    correctAnswer: 0
    explanation: "El operador < significa menor que."

  - id: "q19"
    prompt: "¿Qué imprime?"
    code: |
      int x = 4;
      if(x <= 4){
        printf("OK");
      }
    language: "c"
    options:
      - "OK"
      - "Error"
      - "Nada"
      - "4"
    correctAnswer: 0
    explanation: "4 es menor o igual que 4."

  - id: "q20"
    prompt: "¿Qué hace if?"
    options:
      - "Repite código"
      - "Toma decisiones"
      - "Declara variables"
      - "Crea funciones"
    correctAnswer: 1
    explanation: "if permite tomar decisiones."

  - id: "q21"
    prompt: "¿Qué imprime?"
    code: |
      int x = 3;
      if(x > 1){
        printf("A");
      }
    language: "c"
    options:
      - "A"
      - "B"
      - "Error"
      - "Nada"
    correctAnswer: 0
    explanation: "3 es mayor que 1."

  - id: "q22"
    prompt: "¿Qué imprime?"
    code: |
      int x = 2;
      if(x == 3){
        printf("A");
      } else {
        printf("B");
      }
    language: "c"
    options:
      - "B"
      - "A"
      - "Error"
      - "Nada"
    correctAnswer: 0
    explanation: "2 no es igual a 3."

  - id: "q23"
    prompt: "¿Qué imprime?"
    code: |
      int x = 9;
      if(x > 5){
        printf("Mayor");
      }
    language: "c"
    options:
      - "Mayor"
      - "Menor"
      - "Error"
      - "Nada"
    correctAnswer: 0
    explanation: "9 es mayor que 5."

  - id: "q24"
    prompt: "¿Qué imprime?"
    code: |
      int x = 0;
      if(x){
        printf("Verdadero");
      }
    language: "c"
    options:
      - "Nada"
      - "Verdadero"
      - "Error"
      - "0"
    correctAnswer: 0
    explanation: "0 se interpreta como falso."

  - id: "q25"
    prompt: "¿Qué imprime?"
    code: |
      int x = 1;
      if(x){
        printf("Verdadero");
      }
    language: "c"
    options:
      - "Verdadero"
      - "Nada"
      - "Error"
      - "1"
    correctAnswer: 0
    explanation: "1 se interpreta como verdadero."

  - id: "q26"
    prompt: "¿Qué hace el bloque { }?"
    options:
      - "Agrupa instrucciones"
      - "Declara variables"
      - "Lee datos"
      - "Repite código"
    correctAnswer: 0
    explanation: "Las llaves agrupan código."

  - id: "q27"
    prompt: "¿Qué imprime?"
    code: |
      int x = 5;
      if(x == 5){
        printf("Cinco");
      }
    language: "c"
    options:
      - "Cinco"
      - "Error"
      - "Nada"
      - "5"
    correctAnswer: 0
    explanation: "La condición es verdadera."

  - id: "q28"
    prompt: "¿Qué imprime?"
    code: |
      int x = 8;
      if(x > 10){
        printf("A");
      }
    language: "c"
    options:
      - "Nada"
      - "A"
      - "Error"
      - "10"
    correctAnswer: 0
    explanation: "La condición es falsa."

  - id: "q29"
    prompt: "¿Qué imprime?"
    code: |
      int x = 7;
      if(x < 10){
        printf("Menor");
      }
    language: "c"
    options:
      - "Menor"
      - "Mayor"
      - "Error"
      - "Nada"
    correctAnswer: 0
    explanation: "7 es menor que 10."

  - id: "q30"
    prompt: "¿Qué permite hacer if?"
    options:
      - "Tomar decisiones"
      - "Crear variables"
      - "Repetir ciclos"
      - "Leer datos"
    correctAnswer: 0
    explanation: "if permite controlar el flujo del programa."

---