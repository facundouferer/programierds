---
title: "Ingreso de datos en C - Fundamentos"
description: "Test para aprender a leer datos desde teclado en C usando scanf."
slug: "input-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 10
questions:
  - id: "q1"
    prompt: "¿Qué función se usa normalmente para leer datos desde teclado en C?"
    options:
      - "printf()"
      - "scanf()"
      - "read()"
      - "input()"
    correctAnswer: 1
    explanation: "scanf() se utiliza para leer datos ingresados por el usuario."

  - id: "q2"
    prompt: "¿Qué imprime este código si el usuario ingresa 5?"
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
      - "Nada"
    correctAnswer: 1
    explanation: "El valor ingresado se guarda en x y luego se imprime."

  - id: "q3"
    prompt: "¿Qué representa `%d` en scanf?"
    options:
      - "Número decimal entero"
      - "Número flotante"
      - "Carácter"
      - "Texto"
    correctAnswer: 0
    explanation: "%d se usa para leer enteros."

  - id: "q4"
    prompt: "¿Qué símbolo permite guardar el valor leído en una variable?"
    options:
      - "#"
      - "&"
      - "%"
      - "*"
    correctAnswer: 1
    explanation: "& indica la dirección de memoria de la variable."

  - id: "q5"
    prompt: "¿Qué variable es correcta para leer un número entero?"
    options:
      - "float"
      - "int"
      - "char"
      - "double"
    correctAnswer: 1
    explanation: "int es el tipo estándar para números enteros."

  - id: "q6"
    prompt: "¿Qué imprime este programa si el usuario ingresa 7?"
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
    explanation: "Se suma 1 al número ingresado."

  - id: "q7"
    prompt: "¿Qué especificador se usa para leer un float?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%f corresponde a números flotantes."

  - id: "q8"
    prompt: "¿Qué hace este código?"
    code: |
      int edad;
      scanf("%d", &edad);
    language: "c"
    options:
      - "Lee una edad desde teclado"
      - "Imprime la edad"
      - "Declara una función"
      - "Suma valores"
    correctAnswer: 0
    explanation: "scanf lee un valor y lo guarda en edad."

  - id: "q9"
    prompt: "¿Qué tipo de dato se usa para leer un carácter?"
    options:
      - "int"
      - "float"
      - "char"
      - "string"
    correctAnswer: 2
    explanation: "char almacena un solo carácter."

  - id: "q10"
    prompt: "¿Qué imprime el siguiente código si el usuario ingresa 10?"
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
    explanation: "Se multiplica el valor ingresado por 2."

  - id: "q11"
    prompt: "¿Qué función se usa para mostrar texto en pantalla?"
    options:
      - "scanf"
      - "printf"
      - "input"
      - "read"
    correctAnswer: 1
    explanation: "printf muestra texto en consola."

  - id: "q12"
    prompt: "¿Qué imprime este código si se ingresa 4?"
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
    explanation: "Se imprime el cuadrado del número."

  - id: "q13"
    prompt: "¿Qué operador permite obtener la dirección de memoria?"
    options:
      - "*"
      - "&"
      - "%"
      - "#"
    correctAnswer: 1
    explanation: "& se usa para pasar la dirección de memoria."

  - id: "q14"
    prompt: "¿Qué tipo usarías para leer números con decimales?"
    options:
      - "int"
      - "float"
      - "char"
      - "bool"
    correctAnswer: 1
    explanation: "float permite almacenar decimales."

  - id: "q15"
    prompt: "¿Qué hace este código?"
    code: |
      float x;
      scanf("%f",&x);
    language: "c"
    options:
      - "Lee un número decimal"
      - "Lee un carácter"
      - "Imprime un número"
      - "Crea un array"
    correctAnswer: 0
    explanation: "Lee un valor flotante."

  - id: "q16"
    prompt: "¿Qué ocurre si scanf no recibe el &?"
    options:
      - "Funciona igual"
      - "Da error o comportamiento incorrecto"
      - "Se imprime la variable"
      - "Se convierte en string"
    correctAnswer: 1
    explanation: "scanf necesita la dirección de memoria."

  - id: "q17"
    prompt: "¿Qué hace este código?"
    code: |
      int a,b;
      scanf("%d %d",&a,&b);
    language: "c"
    options:
      - "Lee dos números"
      - "Imprime dos números"
      - "Suma números"
      - "Multiplica números"
    correctAnswer: 0
    explanation: "Permite leer dos valores."

  - id: "q18"
    prompt: "¿Qué imprime este programa si ingresas 3 y 4?"
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
    explanation: "Se suman ambos valores."

  - id: "q19"
    prompt: "¿Qué especificador se usa para leer caracteres?"
    options:
      - "%c"
      - "%d"
      - "%f"
      - "%s"
    correctAnswer: 0
    explanation: "%c corresponde a caracteres."

  - id: "q20"
    prompt: "¿Qué imprime este programa si ingresas 6?"
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
    explanation: "Se divide el número por 2."
---