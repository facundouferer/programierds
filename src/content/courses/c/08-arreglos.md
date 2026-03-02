---
title: "Arreglos (Vectores y Matrices)"
---

Un arreglo es una **colección de variables del mismo tipo** almacenadas en posiciones contiguas de memoria.

### Arreglos Unidimensionales (Vectores)

Se definen por su tipo y tamaño. Importante: los arreglos en C **siempre empiezan en la posición 0**.

```c
int notas[5]; // Espacio para 5 enteros
notas[0] = 10; // Accedemos al primer elemento
int numeros[3] = {10, 20, 30}; // Inicialización directa
```

### Recorrido de un arreglo con `for`

Para imprimir o procesar todos los elementos de un arreglo, usamos un bucle `for`:

```c
for (int i = 0; i < 5; i++) {
    printf("Elemento %d: %d
", i, numeros[i]);
}
```

### Arreglos Bidimensionales (Matrices)

Son como tablas con filas y columnas:

```c
int matriz[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
// Acceso: matriz[fila][columna]
```
Se usan dos bucles `for` (uno dentro del otro) para recorrer una matriz.
