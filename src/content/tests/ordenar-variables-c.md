---
title: "Ordenar: variables y constantes en C"
description: "Arrastra las lineas hasta reconstruir un programa en C que declara variables, las usa y define una constante."
slug: "ordenar-variables-c"
category: "C"
difficulty: "beginner"
timeEstimate: 5
kind: "code-ordering"
algorithm:
  prompt: "Ordena las lineas para armar un programa en C que declare una variable, la modifique, declare una constante e imprima ambos valores."
  language: "c"
  lines:
    - "#include <stdio.h>"
    - "int main() {"
    - "    int edad = 18;"
    - "    const int mesesAnio = 12;"
    - "    edad = 19;"
    - "    printf(\"Edad: %d\\n\", edad);"
    - "    printf(\"Meses del anio: %d\\n\", mesesAnio);"
    - "    return 0;"
    - "}"
  explanation: "Primero se incluye la cabecera estandar para usar printf. Despues abre main, declara la variable edad inicializada en 18, una constante mesesAnio en 12, reasigna edad a 19, imprime ambas y retorna 0."
---

Este test te pide reconstruir, linea por linea, un programa en C que repasa lo que viste en la leccion de variables y constantes.

La idea:

1. Incluir la cabecera necesaria para `printf`.
2. Abrir `main`.
3. Declarar e inicializar la variable `edad`.
4. Declarar la constante `mesesAnio`.
5. Reasignar `edad`.
6. Imprimir primero `edad` y despues `mesesAnio`.
7. Retornar `0`.

Arrastra las lineas o usa las flechas hasta que quede en el orden correcto. Tenes tiempo limitado.
