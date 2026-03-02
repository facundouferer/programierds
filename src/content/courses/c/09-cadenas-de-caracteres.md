---
title: "Cadenas de Caracteres"
---

En C, no existe un tipo de dato "string" como tal. Una **cadena es un arreglo de caracteres (`char[]`)** que siempre termina con el carácter nulo `\0`.

### Declaración e Inicialización

```c
char nombre[] = "Juan"; // Contiene: 'J', 'u', 'a', 'n', '\0'
```

### Funciones de la librería `<string.h>`

Para manipular cadenas, se usan funciones de esta biblioteca estándar:

-   **`strcpy(destino, origen)`**: Copia el contenido de una cadena en otra.
-   **`strlen(cadena)`**: Devuelve la longitud (número de caracteres) sin contar el `\0`.
-   **`strcmp(cad1, cad2)`**: Compara dos cadenas carácter por carácter. Devuelve 0 si son iguales.
-   **`strcat(destino, origen)`**: Concatena (une) una cadena al final de otra.

### Entrada de cadenas con espacios

Recuerda que `scanf("%s", ...)` solo captura hasta el primer espacio. Para leer una frase completa con espacios, usa **`fgets()`**:
```c
char frase[100];
fgets(frase, 100, stdin);
```
