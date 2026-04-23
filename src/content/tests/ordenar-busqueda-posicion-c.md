---
title: "Ordenar: busqueda con posicion en C"
description: "Arma un programa en C que busque un valor en un arreglo y reporte en que posicion aparece, cortando el ciclo cuando lo encuentra."
slug: "ordenar-busqueda-posicion-c"
category: "C"
difficulty: "intermediate"
timeEstimate: 8
kind: "code-ordering"
algorithm:
  prompt: "Ordena las lineas para buscar un valor en un arreglo. Usa posicion = -1 como sentinela, corta con break al encontrarlo y despues reporta el resultado con un if/else."
  language: "c"
  lines:
    - "#include <stdio.h>"
    - "int main() {"
    - "    int numeros[6] = {8, 14, 21, 14, 35, 42};"
    - "    int i;"
    - "    int buscado = 14;"
    - "    int posicion = -1;"
    - "    for (i = 0; i < 6; i = i + 1) {"
    - "        if (numeros[i] == buscado) {"
    - "            posicion = i;"
    - "            break;"
    - "        }"
    - "    }"
    - "    if (posicion != -1) {"
    - "        printf(\"El valor %d se encontro en la posicion %d.\\n\", buscado, posicion);"
    - "    } else {"
    - "        printf(\"El valor %d no se encontro.\\n\", buscado);"
    - "    }"
    - "    return 0;"
    - "}"
  explanation: "Usamos posicion = -1 como sentinela: una posicion valida nunca es negativa. Si encontramos el valor, guardamos el indice y cortamos el ciclo con break porque no tiene sentido seguir buscando. Al final el if/else decide que mensaje imprimir segun el valor de posicion."
---

Este test es un salto conceptual: combina **busqueda secuencial**, **sentinela** (`-1`), **break** y **if/else final**.

Fijate el orden mental:

1. Preparar los datos: arreglo, contador, valor buscado y `posicion = -1`.
2. Recorrer con el `for`.
3. Dentro del `for`, `if` que verifica coincidencia, guarda la posicion y hace `break`.
4. Despues del ciclo, `if/else` que decide el mensaje segun si `posicion` cambio o no.

El detalle clave: el `if/else` final va **afuera del for**, no adentro. Si lo pones adentro del ciclo, se ejecuta en cada vuelta y el programa miente.

Arrastra las lineas. Tenes tiempo.
