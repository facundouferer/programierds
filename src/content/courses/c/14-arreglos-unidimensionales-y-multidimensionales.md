---
title: "Arreglos"
---

Los **arreglos** son una de las estructuras secuenciales más importantes de C.

Permiten guardar varios elementos del mismo tipo bajo un mismo nombre y acceder a cada uno por su posición.

En esta lección vas a aprender:

- qué es un arreglo
- qué es un arreglo unidimensional
- qué es un arreglo multidimensional
- cómo se declaran, inicializan y acceden sus elementos

## ¿Qué es un arreglo?

Un **arreglo** es una colección de datos del mismo tipo almacenados de forma ordenada.

### Ejemplo

```c
int notas[5];
```

Eso significa:

- `notas` es el nombre del arreglo
- `int` es el tipo de cada elemento
- `5` es la cantidad de posiciones

## Índices

En C, los arreglos empiezan en la posición `0`.

Si tenés:

```c
int notas[5];
```

las posiciones válidas son:

- `notas[0]`
- `notas[1]`
- `notas[2]`
- `notas[3]`
- `notas[4]`

## Inicialización

```c
int numeros[5] = {10, 20, 30, 40, 50};
```

## Acceso a los elementos

```c
int primero = numeros[0];
int tercero = numeros[2];
```

## Arreglo unidimensional

Se puede pensar como una fila de elementos.

```text
[10, 20, 30, 40, 50]
```

## Arreglo multidimensional

Un **arreglo multidimensional** organiza datos en más de una dimensión.

El caso más común al comenzar es la matriz o arreglo bidimensional.

### Declaración

```c
int matriz[2][3];
```

Esto representa:

- 2 filas
- 3 columnas

### Inicialización

```c
int matriz[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

### Acceso a un elemento

```c
int valor = matriz[1][2];
```

## ¿Para qué sirven los arreglos multidimensionales?

Sirven cuando los datos se organizan como tabla.

Por ejemplo:

- notas por alumno y materia
- tablero de juego
- matrices matemáticas

## Errores comunes

- olvidar que el índice empieza en `0`
- acceder a una posición que no existe
- confundir un arreglo simple con una matriz

## Resumen

- un arreglo guarda varios datos del mismo tipo
- el arreglo unidimensional funciona como una secuencia lineal
- el arreglo multidimensional organiza datos en filas y columnas
- en C, el índice inicial siempre es `0`

## Idea final

Los arreglos son la primera gran herramienta para manejar colecciones de datos en C. Si entendés bien posiciones, índices y dimensiones, después todo empieza a acomodarse mejor.
