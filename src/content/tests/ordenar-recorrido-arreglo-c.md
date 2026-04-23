---
title: "Ordenar: recorrido de un arreglo en C"
description: "Arma un programa en C que recorra un arreglo de 5 enteros e imprima cada posicion con su valor."
slug: "ordenar-recorrido-arreglo-c"
category: "C"
difficulty: "beginner"
timeEstimate: 5
kind: "code-ordering"
algorithm:
  prompt: "Ordena las lineas para recorrer un arreglo de 5 enteros e imprimir cada posicion con su valor usando un for."
  language: "c"
  lines:
    - "#include <stdio.h>"
    - "int main() {"
    - "    int numeros[5] = {10, 20, 30, 40, 50};"
    - "    int i;"
    - "    for (i = 0; i < 5; i = i + 1) {"
    - "        printf(\"Posicion %d -> %d\\n\", i, numeros[i]);"
    - "    }"
    - "    return 0;"
    - "}"
  explanation: "Primero la cabecera para usar printf, despues abrimos main. Declaramos el arreglo con sus 5 valores y el contador i. El for arranca en 0 y termina cuando i ya no sea menor que 5, asi visitamos las posiciones 0 a 4. Dentro imprimimos indice y valor. Cerramos el for, retornamos 0 y cerramos main."
---

Este test te pide reconstruir uno de los programas mas importantes cuando aprendes arreglos: **el recorrido**. Si no entendes como recorrer, no podes sumar, buscar ni procesar nada.

La estructura es siempre la misma:

1. Incluir `<stdio.h>` para `printf`.
2. Abrir `main`.
3. Declarar el arreglo con sus valores.
4. Declarar el contador `i`.
5. For que va de `0` a la cantidad - 1.
6. Usar `numeros[i]` dentro del ciclo.
7. Retornar `0`.

Arrastra las lineas hasta armar el programa. Tenes tiempo limitado.
