---
title: "Cadenas"
---

En C no existe un tipo nativo llamado `string`. En cambio, una cadena se representa como un arreglo de `char` terminado en un carácter especial.

En esta lección vas a aprender:

- qué es una cadena de caracteres
- qué significa `\0`
- cómo se declara e inicializa
- operaciones comunes con cadenas
- funciones útiles de `<string.h>`

## ¿Qué es una cadena?

Una **cadena de caracteres** es una secuencia de caracteres guardada en un arreglo de `char`.

### Ejemplo

```c
char nombre[] = "Juan";
```

## ¿Qué es `\0`?

`\0` es el carácter nulo. Marca el final de la cadena.

Eso permite que muchas funciones sepan hasta dónde leer.

## Declaración

```c
char ciudad[20];
char nombre[] = "Ana";
```

## Entrada de cadenas

### Con `scanf`

```c
scanf("%s", nombre);
```

Lee solo hasta el primer espacio.

### Con `fgets`

```c
fgets(frase, 100, stdin);
```

Permite leer una línea completa.

## Operaciones con cadenas

### Longitud

```c
int longitud = strlen(nombre);
```

### Copia

```c
strcpy(destino, origen);
```

### Comparación

```c
strcmp(cadena1, cadena2);
```

### Concatenación

```c
strcat(destino, origen);
```

## Ejemplo completo

```c
#include <stdio.h>
#include <string.h>

int main() {
    char nombre[20] = "Juan";
    char apellido[20] = "Perez";
    char completo[50] = "";

    strcpy(completo, nombre);
    strcat(completo, " ");
    strcat(completo, apellido);

    printf("Nombre completo: %s\n", completo);
    printf("Longitud: %d\n", strlen(completo));

    return 0;
}
```

## Resumen

- una cadena en C es un arreglo de `char`
- termina en `\0`
- puede copiarse, compararse, concatenarse y medirse
- `<string.h>` ofrece funciones muy útiles para trabajar con cadenas

## Idea final

En C, entender cadenas significa entender arreglos de caracteres. Si eso no te queda claro, después terminás usando funciones sin comprender qué datos estás manipulando.
