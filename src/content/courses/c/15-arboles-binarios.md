---
title: "Árboles Binarios"
---

Un **árbol binario** es una estructura jerárquica donde cada nodo tiene, como máximo, dos hijos: izquierdo y derecho.

### Estructura de un Nodo

```c
struct Nodo {
    int dato;
    struct Nodo* izquierdo;
    struct Nodo* derecho;
};
```

### Conceptos Clave

-   **Raíz**: El nodo superior de todo el árbol.
-   **Hojas**: Nodos que no tienen hijos (los extremos).
-   **Recorrido Inorden**: Visitar primero el subárbol izquierdo, luego la raíz y finalmente el subárbol derecho.

### Utilidad de los Árboles

-   Búsquedas rápidas (ej. búsquedas eficientes en bases de datos).
-   Representar jerarquías o decisiones complejas de forma visual.
