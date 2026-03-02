---
title: "Introducción y Estructura"
---

El lenguaje **C** es uno de los más influyentes en la historia de la programación. Fue creado para desarrollar sistemas operativos y sigue siendo fundamental hoy en día por su eficiencia y cercanía al hardware.

### Estructura de un programa en C

Un programa básico en C sigue esta estructura:

```c
#include <stdio.h> // Directiva del preprocesador

// Función principal: punto de entrada del programa
int main() {
    printf("Hola, Mundo!
"); // Instrucción para mostrar texto
    return 0; // Código de salida (0 significa éxito)
}
```

### Componentes principales

1.  **Directivas de preprocesador**: Líneas que comienzan con `#`. Se usan para incluir librerías (como `stdio.h` para entrada/salida).
2.  **Función `main()`**: Es el corazón del programa. Todo lo que esté dentro de sus llaves `{}` se ejecutará al iniciar.
3.  **Sentencias**: Cada instrucción termina con un punto y coma `;`.
4.  **Comentarios**: Se usan para explicar el código.
    -   `//` para comentarios de una sola línea.
    -   `/* ... */` para comentarios de varias líneas.
