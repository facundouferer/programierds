---
title: "IF en C"
description: "Test introductorio para practicar estructuras condicionales básicas en C."
slug: "test01"
category: "C"
difficulty: "beginner"
timeEstimate: 10
questions:
  - id: "q1"
    prompt: "¿Para qué se usa la estructura `if` en C?"
    options:
      - "Para repetir un bloque de código una cantidad fija de veces"
      - "Para tomar decisiones según una condición"
      - "Para declarar variables"
      - "Para imprimir texto en pantalla"
    correctAnswer: 1
    explanation: "La estructura if permite ejecutar un bloque solo si una condición es verdadera."

  - id: "q2"
    prompt: "¿Qué imprime este programa?"
    code: |
      #include <stdio.h>

      int main() {
          int edad = 20;

          if (edad >= 18) {
              printf("Mayor");
          }

          return 0;
      }
    language: "c"
    options:
      - "Menor"
      - "18"
      - "Mayor"
      - "No imprime nada"
    correctAnswer: 2
    explanation: "Como edad vale 20 y 20 >= 18 es verdadero, se imprime 'Mayor'."

  - id: "q3"
    prompt: "¿Qué ocurre si la condición de un `if` es falsa y no hay `else`?"
    options:
      - "El programa se detiene"
      - "Se ejecuta igual el bloque del if"
      - "Se salta el bloque del if"
      - "Se produce un error de compilación"
    correctAnswer: 2
    explanation: "Si la condición es falsa, el bloque del if simplemente no se ejecuta."

  - id: "q4"
    prompt: "¿Qué imprime este código?"
    code: |
      #include <stdio.h>

      int main() {
          int numero = 3;

          if (numero > 5) {
              printf("A");
          } else {
              printf("B");
          }

          return 0;
      }
    language: "c"
    options:
      - "A"
      - "B"
      - "AB"
      - "No imprime nada"
    correctAnswer: 1
    explanation: "Como 3 > 5 es falso, se ejecuta el bloque else y se imprime 'B'."

  - id: "q5"
    prompt: "¿Cuál es la función de `else` en C?"
    options:
      - "Repetir la condición"
      - "Ejecutar un bloque cuando la condición del if es falsa"
      - "Cerrar el programa"
      - "Declarar otra variable"
    correctAnswer: 1
    explanation: "El else permite ejecutar un bloque alternativo cuando la condición del if no se cumple."

  - id: "q6"
    prompt: "¿Qué imprime este programa?"
    code: |
      #include <stdio.h>

      int main() {
          int x = 10;

          if (x == 10) {
              printf("Igual");
          } else {
              printf("Distinto");
          }

          return 0;
      }
    language: "c"
    options:
      - "10"
      - "Distinto"
      - "Igual"
      - "No compila"
    correctAnswer: 2
    explanation: "La condición x == 10 es verdadera, por lo tanto se imprime 'Igual'."

  - id: "q7"
    prompt: "¿Cuál de las siguientes expresiones representa una comparación de igualdad en C?"
    options:
      - "x = 5"
      - "x == 5"
      - "x := 5"
      - "x === 5"
    correctAnswer: 1
    explanation: "En C, == se usa para comparar igualdad. El = se usa para asignar."

  - id: "q8"
    prompt: "¿Qué imprime este código?"
    code: |
      #include <stdio.h>

      int main() {
          int a = 8;
          int b = 4;

          if (a < b) {
              printf("Menor");
          } else {
              printf("Mayor o igual");
          }

          return 0;
      }
    language: "c"
    options:
      - "Menor"
      - "Mayor o igual"
      - "8"
      - "4"
    correctAnswer: 1
    explanation: "Como 8 < 4 es falso, se ejecuta el else."

  - id: "q9"
    prompt: "¿Qué es un `if` anidado?"
    options:
      - "Un if dentro de otro if o dentro de un else"
      - "Un if que se ejecuta varias veces"
      - "Un if sin llaves"
      - "Un if con una sola condición"
    correctAnswer: 0
    explanation: "Un if anidado es una estructura condicional colocada dentro de otra."

  - id: "q10"
    prompt: "¿Qué imprime este programa?"
    code: |
      #include <stdio.h>

      int main() {
          int n = 15;

          if (n > 0) {
              if (n % 2 == 0) {
                  printf("Positivo y par");
              } else {
                  printf("Positivo e impar");
              }
          }

          return 0;
      }
    language: "c"
    options:
      - "Positivo y par"
      - "Positivo e impar"
      - "Impar"
      - "No imprime nada"
    correctAnswer: 1
    explanation: "15 es mayor que 0 y además 15 % 2 es 1, así que es impar."

  - id: "q11"
    prompt: "En un `if` anidado, ¿qué debe ocurrir para que se evalúe el if interno?"
    options:
      - "Nada, siempre se evalúa"
      - "Debe cumplirse la condición del if externo"
      - "Debe existir un else"
      - "Debe haber dos variables"
    correctAnswer: 1
    explanation: "El if interno solo se evalúa si el flujo entra al bloque donde está contenido."

  - id: "q12"
    prompt: "¿Qué imprime este código?"
    code: |
      #include <stdio.h>

      int main() {
          int nota = 4;

          if (nota >= 6) {
              printf("Aprobado");
          } else {
              printf("Desaprobado");
          }

          return 0;
      }
    language: "c"
    options:
      - "Aprobado"
      - "Desaprobado"
      - "4"
      - "No imprime nada"
    correctAnswer: 1
    explanation: "Como 4 no es mayor o igual a 6, se imprime 'Desaprobado'."

  - id: "q13"
    prompt: "¿Qué imprime este programa?"
    code: |
      #include <stdio.h>

      int main() {
          int x = -2;

          if (x > 0) {
              printf("Positivo");
          } else {
              if (x == 0) {
                  printf("Cero");
              } else {
                  printf("Negativo");
              }
          }

          return 0;
      }
    language: "c"
    options:
      - "Positivo"
      - "Cero"
      - "Negativo"
      - "No compila"
    correctAnswer: 2
    explanation: "x no es mayor que 0, tampoco es 0, por lo tanto se imprime 'Negativo'."

  - id: "q14"
    prompt: "¿Cuál de estas opciones describe mejor el uso de llaves `{}` en un `if`?"
    options:
      - "Son obligatorias solo si hay un printf"
      - "Sirven para delimitar el bloque de instrucciones"
      - "Se usan únicamente con else"
      - "No se pueden usar en C"
    correctAnswer: 1
    explanation: "Las llaves delimitan el bloque que pertenece al if o al else."

  - id: "q15"
    prompt: "¿Qué imprime este código?"
    code: |
      #include <stdio.h>

      int main() {
          int edad = 17;
          int permiso = 1;

          if (edad >= 18) {
              if (permiso == 1) {
                  printf("Puede entrar");
              } else {
                  printf("No puede entrar");
              }
          } else {
              printf("Es menor");
          }

          return 0;
      }
    language: "c"
    options:
      - "Puede entrar"
      - "No puede entrar"
      - "Es menor"
      - "1"
    correctAnswer: 2
    explanation: "Como edad es 17, no entra al if externo y se ejecuta el else."

  - id: "q16"
    prompt: "¿Qué operador se usa para saber si dos valores son distintos en C?"
    options:
      - "!="
      - "<>"
      - "!=="
      - "=!"
    correctAnswer: 0
    explanation: "En C, != significa 'distinto de'."

  - id: "q17"
    prompt: "¿Qué imprime este programa?"
    code: |
      #include <stdio.h>

      int main() {
          int x = 0;

          if (x) {
              printf("Verdadero");
          } else {
              printf("Falso");
          }

          return 0;
      }
    language: "c"
    options:
      - "Verdadero"
      - "Falso"
      - "0"
      - "No compila"
    correctAnswer: 1
    explanation: "En C, 0 se interpreta como falso en una condición."

  - id: "q18"
    prompt: "¿Qué imprime este programa?"
    code: |
      #include <stdio.h>

      int main() {
          int x = 5;

          if (x > 0) {
              printf("A");
          }

          if (x < 10) {
              printf("B");
          }

          return 0;
      }
    language: "c"
    options:
      - "A"
      - "B"
      - "AB"
      - "BA"
    correctAnswer: 2
    explanation: "Las dos condiciones son verdaderas, así que imprime primero A y luego B."

  - id: "q19"
    prompt: "¿Qué imprime este código?"
    code: |
      #include <stdio.h>

      int main() {
          int numero = 12;

          if (numero > 0) {
              if (numero < 10) {
                  printf("Positivo de un dígito");
              } else {
                  printf("Positivo de dos o más dígitos");
              }
          } else {
              printf("No es positivo");
          }

          return 0;
      }
    language: "c"
    options:
      - "Positivo de un dígito"
      - "Positivo de dos o más dígitos"
      - "No es positivo"
      - "12"
    correctAnswer: 1
    explanation: "12 es positivo y además no es menor que 10, así que cae en el else interno."

  - id: "q20"
    prompt: "¿Cuál de los siguientes fragmentos representa correctamente un `if-else` en C?"
    options:
      - "if x > 0 then printf(\"OK\"); else printf(\"NO\");"
      - "if (x > 0) { printf(\"OK\"); } else { printf(\"NO\"); }"
      - "if x > 0 { printf(\"OK\"); } else { printf(\"NO\"); }"
      - "if [x > 0] printf(\"OK\"); else printf(\"NO\");"
    correctAnswer: 1
    explanation: "En C, la condición va entre paréntesis y los bloques pueden ir entre llaves."
---

Un recorrido corto por `if`, `if-else` e `if` anidado para practicar lectura de flujo en C.
