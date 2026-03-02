---
title: "Variables y Constantes"
---

Las **variables** son espacios en memoria para guardar valores que pueden cambiar. Las **constantes** son valores fijos que no varían.

### Declaración de Variables

Para declarar una variable en C, indicas el **tipo** y el **nombre**:

```c
int edad = 25; // Número entero
float precio = 15.99; // Número decimal (coma flotante)
char letra = 'A'; // Carácter individual
```

### Definición de Constantes

Se usan dos métodos comunes:

1.  **`const`**: Declaras una variable inamovible.
    ```c
    const float PI = 3.1416;
    ```
2.  **`#define`**: Es una directiva de preprocesador (antes de `main`).
    ```c
    #define GRAVEDAD 9.81
    ```

**Diferencia clave:** Una constante nunca puede reasignarse después de su definición inicial. Intentar hacerlo provocará un error de compilación.
