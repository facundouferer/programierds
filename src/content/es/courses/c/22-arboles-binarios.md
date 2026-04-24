---
title: "Árboles Binarios"
---

Un **árbol binario** es una estructura jerárquica donde cada nodo puede tener como máximo dos hijos.

En esta lección vas a aprender:

- qué es un árbol binario
- qué es la raíz
- qué son las hojas
- recorrido, búsqueda e inserción en árboles binarios

## Nodo de un árbol binario

```c
struct Nodo {
    int dato;
    struct Nodo* izquierdo;
    struct Nodo* derecho;
};
```

## Conceptos básicos

- **raíz**: nodo principal del árbol
- **hoja**: nodo sin hijos
- **subárbol**: parte del árbol que cuelga de un nodo

## Recorrido

Un recorrido muy conocido es el **inorden**:

1. subárbol izquierdo
2. nodo actual
3. subárbol derecho

## Búsqueda

Buscar en un árbol depende de cómo estén organizados los datos.

## Inserción

Insertar significa agregar un nuevo nodo respetando la organización del árbol.

## Resumen

- el árbol binario es una estructura jerárquica
- cada nodo puede tener hasta dos hijos
- admite recorrido, búsqueda e inserción

## Idea final

El árbol binario cambia completamente la forma de pensar los datos: ya no están solo en una fila, sino organizados jerárquicamente.
