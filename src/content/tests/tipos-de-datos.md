---
title: "Tipos de datos y lectura básica en C"
description: "Test corto para practicar tipos de datos y lectura de valores con scanf en C."
slug: "tipos-datos-input-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 5
questions:

  - id: "q1"
    prompt: "¿Cuál de los siguientes es un tipo de dato entero en C?"
    options:
      - "float"
      - "char"
      - "int"
      - "double"
    correctAnswer: 2
    explanation: "int es el tipo de dato estándar para números enteros."

  - id: "q2"
    prompt: "¿Qué tipo de dato se usa para almacenar números con decimales?"
    options:
      - "int"
      - "float"
      - "char"
      - "void"
    correctAnswer: 1
    explanation: "float permite almacenar números con parte decimal."

  - id: "q3"
    prompt: "¿Qué tipo de dato se utiliza para almacenar un solo carácter?"
    options:
      - "int"
      - "char"
      - "float"
      - "string"
    correctAnswer: 1
    explanation: "char se utiliza para almacenar un único carácter."

  - id: "q4"
    prompt: "¿Cuál de los siguientes tipos ocupa más espacio normalmente?"
    options:
      - "char"
      - "int"
      - "double"
      - "short"
    correctAnswer: 2
    explanation: "double se usa para números de mayor precisión."

  - id: "q5"
    prompt: "¿Qué tipo usarías para guardar la edad de una persona?"
    options:
      - "float"
      - "int"
      - "char"
      - "double"
    correctAnswer: 1
    explanation: "La edad normalmente es un número entero."

  - id: "q6"
    prompt: "¿Qué tipo usarías para guardar la temperatura 36.5?"
    options:
      - "int"
      - "char"
      - "float"
      - "bool"
    correctAnswer: 2
    explanation: "Los números con decimales se almacenan con float o double."

  - id: "q7"
    prompt: "¿Qué valor puede almacenar un tipo char?"
    options:
      - "Un número decimal"
      - "Una letra"
      - "Un número muy grande"
      - "Un arreglo"
    correctAnswer: 1
    explanation: "char almacena un solo carácter como 'a', 'b', etc."

  - id: "q8"
    prompt: "¿Cuál de estas declaraciones es correcta?"
    options:
      - "int edad;"
      - "edad int;"
      - "declare int edad;"
      - "edad = int;"
    correctAnswer: 0
    explanation: "La sintaxis correcta es tipo seguido del nombre de variable."

  - id: "q9"
    prompt: "¿Qué tipo se usa para mayor precisión en números decimales?"
    options:
      - "float"
      - "int"
      - "double"
      - "char"
    correctAnswer: 2
    explanation: "double tiene mayor precisión que float."

  - id: "q10"
    prompt: "¿Cuál de estas variables es correcta para guardar una letra?"
    options:
      - "int letra;"
      - "char letra;"
      - "float letra;"
      - "double letra;"
    correctAnswer: 1
    explanation: "char se usa para almacenar caracteres."

  - id: "q11"
    prompt: "¿Qué función se usa para leer datos desde teclado en C?"
    options:
      - "printf"
      - "scanf"
      - "input"
      - "read"
    correctAnswer: 1
    explanation: "scanf permite leer datos ingresados por el usuario."

  - id: "q12"
    prompt: "¿Qué especificador se usa para leer un entero con scanf?"
    options:
      - "%f"
      - "%d"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%d corresponde a números enteros."

  - id: "q13"
    prompt: "¿Qué imprime este programa si el usuario ingresa 8?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d", x);
    language: "c"
    options:
      - "8"
      - "0"
      - "1"
      - "Error"
    correctAnswer: 0
    explanation: "El valor ingresado se guarda en x y luego se imprime."

  - id: "q14"
    prompt: "¿Qué símbolo se usa para pasar la dirección de memoria a scanf?"
    options:
      - "*"
      - "&"
      - "%"
      - "#"
    correctAnswer: 1
    explanation: "& indica la dirección de memoria de la variable."

  - id: "q15"
    prompt: "¿Qué hace este código?"
    code: |
      int edad;
      scanf("%d",&edad);
    language: "c"
    options:
      - "Lee un número entero desde teclado"
      - "Imprime edad"
      - "Declara una función"
      - "Multiplica edad"
    correctAnswer: 0
    explanation: "scanf guarda el valor ingresado en la variable edad."

  - id: "q16"
    prompt: "¿Qué especificador se usa para leer un float?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%f corresponde a números decimales."

  - id: "q17"
    prompt: "¿Qué imprime este código si el usuario ingresa 5?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d", x*2);
    language: "c"
    options:
      - "5"
      - "10"
      - "2"
      - "Error"
    correctAnswer: 1
    explanation: "Se multiplica el número ingresado por 2."

  - id: "q18"
    prompt: "¿Qué hace este código?"
    code: |
      float numero;
      scanf("%f",&numero);
    language: "c"
    options:
      - "Lee un número decimal"
      - "Lee un entero"
      - "Imprime un número"
      - "Lee un carácter"
    correctAnswer: 0
    explanation: "El tipo float permite leer números con decimales."

  - id: "q19"
    prompt: "¿Qué imprime este programa si ingresas 3 y 4?"
    code: |
      int a,b;
      scanf("%d %d",&a,&b);
      printf("%d", a+b);
    language: "c"
    options:
      - "7"
      - "12"
      - "34"
      - "Error"
    correctAnswer: 0
    explanation: "Se suman los dos números ingresados."

  - id: "q20"
    prompt: "¿Qué especificador se usa para leer un carácter?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 2
    explanation: "%c se utiliza para leer un carácter."
---