---
title: "Entrada de datos en C"
description: "Test para practicar lectura de datos con scanf."
slug: "input-c-01"
category: "C"
difficulty: "beginner"
timeEstimate: 15
questions:

  - id: "q1"
    prompt: "¿Qué función se usa para leer datos desde teclado en C?"
    options:
      - "printf"
      - "scanf"
      - "read"
      - "input"
    correctAnswer: 1
    explanation: "scanf permite leer datos ingresados por el usuario."

  - id: "q2"
    prompt: "¿Qué especificador se usa para leer un entero?"
    options:
      - "%f"
      - "%d"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%d se usa para enteros."

  - id: "q3"
    prompt: "¿Qué imprime si el usuario ingresa 5?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x);
    language: "c"
    options:
      - "5"
      - "0"
      - "1"
      - "Error"
    correctAnswer: 0
    explanation: "Se imprime el valor ingresado."

  - id: "q4"
    prompt: "¿Qué símbolo se usa para pasar la dirección de memoria?"
    options:
      - "*"
      - "&"
      - "%"
      - "#"
    correctAnswer: 1
    explanation: "El operador & obtiene la dirección de memoria."

  - id: "q5"
    prompt: "¿Qué especificador se usa para leer float?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 1
    explanation: "%f se usa para números con decimales."

  - id: "q6"
    prompt: "¿Qué imprime si se ingresa 4?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x+1);
    language: "c"
    options:
      - "5"
      - "4"
      - "3"
      - "1"
    correctAnswer: 0
    explanation: "Se suma 1 al valor ingresado."

  - id: "q7"
    prompt: "¿Qué hace este código?"
    code: |
      int edad;
      scanf("%d",&edad);
    language: "c"
    options:
      - "Lee un entero"
      - "Imprime edad"
      - "Declara una función"
      - "Multiplica edad"
    correctAnswer: 0
    explanation: "scanf guarda el valor ingresado."

  - id: "q8"
    prompt: "¿Qué especificador se usa para leer char?"
    options:
      - "%d"
      - "%f"
      - "%c"
      - "%s"
    correctAnswer: 2
    explanation: "%c corresponde a caracteres."

  - id: "q9"
    prompt: "¿Qué hace printf?"
    options:
      - "Lee datos"
      - "Imprime datos"
      - "Crea variables"
      - "Crea ciclos"
    correctAnswer: 1
    explanation: "printf muestra información en pantalla."

  - id: "q10"
    prompt: "¿Qué imprime si se ingresa 6?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x*2);
    language: "c"
    options:
      - "12"
      - "6"
      - "3"
      - "2"
    correctAnswer: 0
    explanation: "Se multiplica por 2."

  - id: "q11"
    prompt: "¿Qué permite leer dos números?"
    code: |
      scanf("%d %d",&a,&b);
    language: "c"
    options:
      - "Dos enteros"
      - "Un entero"
      - "Un carácter"
      - "Un decimal"
    correctAnswer: 0
    explanation: "Permite ingresar dos valores."

  - id: "q12"
    prompt: "¿Qué imprime si se ingresan 3 y 4?"
    code: |
      int a,b;
      scanf("%d %d",&a,&b);
      printf("%d",a+b);
    language: "c"
    options:
      - "7"
      - "12"
      - "34"
      - "Error"
    correctAnswer: 0
    explanation: "Se suman ambos valores."

  - id: "q13"
    prompt: "¿Qué tipo se usa para números decimales?"
    options:
      - "float"
      - "int"
      - "char"
      - "void"
    correctAnswer: 0
    explanation: "float almacena decimales."

  - id: "q14"
    prompt: "¿Qué hace este código?"
    code: |
      float x;
      scanf("%f",&x);
    language: "c"
    options:
      - "Lee un decimal"
      - "Lee un entero"
      - "Imprime un decimal"
      - "Declara función"
    correctAnswer: 0
    explanation: "scanf lee números decimales."

  - id: "q15"
    prompt: "¿Qué imprime si se ingresa 5?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x-2);
    language: "c"
    options:
      - "3"
      - "5"
      - "7"
      - "2"
    correctAnswer: 0
    explanation: "Se resta 2."

  - id: "q16"
    prompt: "¿Qué ocurre si falta & en scanf?"
    options:
      - "Puede producir error"
      - "Funciona igual"
      - "Imprime valor"
      - "Se detiene el programa"
    correctAnswer: 0
    explanation: "scanf necesita la dirección de memoria."

  - id: "q17"
    prompt: "¿Qué imprime si ingresas 8?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x/2);
    language: "c"
    options:
      - "4"
      - "16"
      - "8"
      - "2"
    correctAnswer: 0
    explanation: "Se divide por 2."

  - id: "q18"
    prompt: "¿Qué tipo se usa para caracteres?"
    options:
      - "char"
      - "int"
      - "float"
      - "bool"
    correctAnswer: 0
    explanation: "char almacena un carácter."

  - id: "q19"
    prompt: "¿Qué imprime si se ingresa 10?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x+5);
    language: "c"
    options:
      - "15"
      - "10"
      - "5"
      - "20"
    correctAnswer: 0
    explanation: "Se suma 5."

  - id: "q20"
    prompt: "¿Qué hace scanf?"
    options:
      - "Lee datos"
      - "Imprime datos"
      - "Declara variables"
      - "Crea ciclos"
    correctAnswer: 0
    explanation: "scanf permite ingresar datos."

  - id: "q21"
    prompt: "¿Qué imprime si se ingresa 4?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x*x);
    language: "c"
    options:
      - "16"
      - "8"
      - "4"
      - "2"
    correctAnswer: 0
    explanation: "Se calcula el cuadrado."

  - id: "q22"
    prompt: "¿Qué imprime si se ingresa 9?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x-1);
    language: "c"
    options:
      - "8"
      - "9"
      - "7"
      - "1"
    correctAnswer: 0
    explanation: "Se resta 1."

  - id: "q23"
    prompt: "¿Qué hace printf(\"%d\",x)?"
    options:
      - "Imprime x"
      - "Lee x"
      - "Declara x"
      - "Multiplica x"
    correctAnswer: 0
    explanation: "Muestra el valor."

  - id: "q24"
    prompt: "¿Qué imprime si se ingresa 2?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x+10);
    language: "c"
    options:
      - "12"
      - "10"
      - "2"
      - "20"
    correctAnswer: 0
    explanation: "Se suma 10."

  - id: "q25"
    prompt: "¿Qué hace scanf(\"%d\",&x)?"
    options:
      - "Lee un entero"
      - "Imprime entero"
      - "Declara variable"
      - "Multiplica variable"
    correctAnswer: 0
    explanation: "Lee un número entero."

  - id: "q26"
    prompt: "¿Qué imprime si se ingresa 3?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x*3);
    language: "c"
    options:
      - "9"
      - "3"
      - "6"
      - "1"
    correctAnswer: 0
    explanation: "Se multiplica por 3."

  - id: "q27"
    prompt: "¿Qué hace este código?"
    code: |
      char c;
      scanf("%c",&c);
    language: "c"
    options:
      - "Lee un carácter"
      - "Lee un entero"
      - "Imprime un carácter"
      - "Declara función"
    correctAnswer: 0
    explanation: "Lee un carácter."

  - id: "q28"
    prompt: "¿Qué imprime si ingresas 7?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x+2);
    language: "c"
    options:
      - "9"
      - "7"
      - "5"
      - "14"
    correctAnswer: 0
    explanation: "Se suma 2."

  - id: "q29"
    prompt: "¿Qué imprime si ingresas 4?"
    code: |
      int x;
      scanf("%d",&x);
      printf("%d",x*4);
    language: "c"
    options:
      - "16"
      - "8"
      - "4"
      - "2"
    correctAnswer: 0
    explanation: "Se multiplica por 4."

  - id: "q30"
    prompt: "¿Qué permite scanf?"
    options:
      - "Ingresar datos"
      - "Imprimir datos"
      - "Crear funciones"
      - "Crear ciclos"
    correctAnswer: 0
    explanation: "Permite ingresar datos desde teclado."

---