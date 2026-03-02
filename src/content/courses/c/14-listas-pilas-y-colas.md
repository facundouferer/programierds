---
title: "Listas, Pilas y Colas"
---

Las estructuras dinámicas pueden crecer y reducir su tamaño en tiempo de ejecución usando **punteros**.

### Lista Simplemente Enlazada

Es una colección de **nodos**. Cada nodo tiene:
1.  **Dato**: El valor guardado.
2.  **Puntero**: Dirección del siguiente nodo.

```c
struct Nodo {
    int dato;
    struct Nodo* siguiente;
};
```

### Pila (Stack) - LIFO

El último que entra es el primero que sale (Last In, First Out).
-   **push()**: Agrega arriba.
-   **pop()**: Saca de arriba.

### Cola (Queue) - FIFO

El primero que entra es el primero que sale (First In, First Out). Como una fila real.
-   **encolar()**: Agrega al final.
-   **desencolar()**: Saca del frente.
