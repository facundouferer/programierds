---
title: "Operaciones con Arreglos"
---

Declarar un arreglo no alcanza. Lo importante es saber trabajar con él.

En esta lección vas a aprender tres operaciones fundamentales:

- recorrido
- búsqueda
- inserción

## Recorrido

**Recorrer** un arreglo significa visitar sus elementos uno por uno.

### Ejemplo

```c
#include <stdio.h>

int main() {
    int numeros[5] = {10, 20, 30, 40, 50};
    int i;

    for (i = 0; i < 5; i = i + 1) {
        printf("Elemento %d: %d\n", i, numeros[i]);
    }

    return 0;
}
```

## Búsqueda

**Buscar** significa intentar encontrar un valor dentro del arreglo.

### Búsqueda secuencial

```c
int buscado = 30;
int encontrado = 0;

for (i = 0; i < 5; i = i + 1) {
    if (numeros[i] == buscado) {
        encontrado = 1;
    }
}
```

## Inserción

**Insertar** significa agregar un valor en una posición determinada.

Pero en un arreglo el tamaño es fijo. Por eso muchas veces hay que mover elementos para hacer lugar.

### Ejemplo

```c
int numeros[6] = {10, 20, 40, 50};
int cantidad = 4;
int posicion = 2;
int nuevo = 30;

for (i = cantidad; i > posicion; i = i - 1) {
    numeros[i] = numeros[i - 1];
}

numeros[posicion] = nuevo;
cantidad = cantidad + 1;
```

## Recorrido en matrices

Para recorrer una matriz, normalmente se usan ciclos anidados.

```c
for (i = 0; i < 2; i = i + 1) {
    for (j = 0; j < 3; j = j + 1) {
        printf("%d ", matriz[i][j]);
    }
    printf("\n");
}
```

## Resumen

- recorrer es visitar todos los elementos
- buscar es localizar un valor dentro del arreglo
- insertar implica agregar un elemento y desplazar otros si hace falta
- en matrices el recorrido suele requerir ciclos anidados

## Idea final

Un arreglo empieza a ser realmente útil cuando sabés recorrerlo, buscar dentro de él y reorganizarlo con criterio.
