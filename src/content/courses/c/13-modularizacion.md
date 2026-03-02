---
title: "Modularización"
---

Dividir un programa grande en partes pequeñas y manejables es una práctica fundamental.

### Estructura de un Programa Modular

Normalmente se usan tres tipos de archivos:

1.  **`.h` (Header)**: Declaración de funciones y estructuras (solo lo que la función hace).
    ```c
    // operaciones.h
    int sumar(int a, int b);
    ```
2.  **`.c` (Implementación)**: Código de las funciones definidas en el `.h`.
    ```c
    // operaciones.c
    #include "operaciones.h"
    int sumar(int a, int b) { return a + b; }
    ```
3.  **`main.c`**: Archivo principal que usa los módulos anteriores.

### ¿Por qué modularizar?

-   **Orden**: Código más fácil de entender.
-   **Reutilización**: Puedes usar el mismo módulo en otros proyectos.
-   **Trabajo en equipo**: Varios programadores pueden trabajar en archivos distintos sin interferir.
