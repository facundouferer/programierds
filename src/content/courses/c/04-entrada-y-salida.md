---
title: "Entrada y Salida"
---

Las operaciones básicas de salida y entrada permiten que tu programa interactúe con el mundo exterior.

### Salida de datos: `printf()`

La función `printf()` sirve para imprimir texto y valores en la pantalla. Se usan **especificadores de formato** según el tipo de dato:

-   `%d`: Enteros (`int`).
-   `%f`: Flotantes (`float`).
-   `%c`: Caracteres (`char`).
-   `%s`: Cadenas de texto (`char[]`).

```c
int edad = 25;
printf("Mi edad es %d años
", edad); // 
 crea un salto de línea
```

### Entrada de datos: `scanf()` y `fgets()`

Para leer datos ingresados por el usuario:

-   **`scanf()`**: Lee datos primitivos (números, palabras sueltas). Es importante usar el símbolo `&` antes de la variable.
    ```c
    int numero;
    printf("Ingresa un número: ");
    scanf("%d", &numero);
    ```
-   **`fgets()`**: Alternativa segura para leer cadenas de texto que contienen espacios.
    ```c
    char nombre[50];
    fgets(nombre, 50, stdin); // Lee hasta 50 caracteres de la entrada estándar
    ```
