---
title: "Ordenar: mayor valor de un arreglo en C"
description: "Arma un programa en C que recorra un arreglo e imprima el mayor valor encontrado."
slug: "ordenar-mayor-arreglo-c"
category: "C"
difficulty: "beginner"
timeEstimate: 6
kind: "code-ordering"
algorithm:
  prompt: "Ordena las lineas para encontrar e imprimir el mayor valor de un arreglo de enteros. La comparacion arranca desde el segundo elemento."
  language: "c"
  lines:
    - "#include <stdio.h>"
    - "int main() {"
    - "    int numeros[5] = {12, 7, 25, 18, 9};"
    - "    int i;"
    - "    int mayor = numeros[0];"
    - "    for (i = 1; i < 5; i = i + 1) {"
    - "        if (numeros[i] > mayor) {"
    - "            mayor = numeros[i];"
    - "        }"
    - "    }"
    - "    printf(\"El mayor valor es: %d\\n\", mayor);"
    - "    return 0;"
    - "}"
  explanation: "Iniciamos mayor con numeros[0], que es un valor real del arreglo (mucho mejor que un valor inventado). El for arranca en 1 porque la posicion 0 ya la usamos como punto de partida. Si el elemento actual es mas grande, actualizamos mayor. Al final imprimimos y retornamos 0."
---

Este programa introduce una idea fundamental: **para encontrar el mayor, arrancas suponiendo que el primer elemento es el mayor, y despues comparas con el resto**.

Por eso no declaramos `mayor = 0` ni un valor al azar: usamos un valor que realmente esta en el arreglo.

Los pasos del algoritmo:

1. Incluir `<stdio.h>`.
2. Abrir `main`.
3. Declarar el arreglo y el contador.
4. Inicializar `mayor` con `numeros[0]`.
5. Recorrer desde `i = 1`.
6. Comparar y actualizar si corresponde.
7. Imprimir y retornar `0`.

Ponete las pilas con el orden: un error al declarar `mayor` antes del arreglo rompe todo.
