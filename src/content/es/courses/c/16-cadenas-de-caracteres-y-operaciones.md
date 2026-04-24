---
title: "Cadenas"
---

En muchos programas no alcanza con trabajar solo con números. También necesitamos trabajar con texto: nombres, apellidos, ciudades, mensajes, contraseñas, frases y mucho más.

En C, ese texto no se maneja con un tipo especial llamado `string`, como pasa en otros lenguajes. En C, una cadena de caracteres se representa como un **arreglo de caracteres**.

Y esto es CLAVE entenderlo desde el comienzo.

> Una cadena en C no es magia. Es un arreglo de `char` con una marca de final.

En esta lección vas a aprender:

- qué es una cadena de caracteres
- cómo se relaciona con los arreglos
- qué significa `\0`
- cómo declarar e inicializar cadenas
- cómo leer cadenas desde el teclado
- cómo recorrer una cadena carácter por carácter
- operaciones comunes con cadenas
- funciones útiles de `<string.h>`

## ¿Qué es una cadena de caracteres?

Una **cadena de caracteres** es una secuencia de caracteres guardada en un arreglo de tipo `char`.

Por ejemplo:

```c
char nombre[] = "Juan";
```

Acá parece que guardamos una sola cosa, pero en realidad se guardan varios caracteres:

- `J`
- `u`
- `a`
- `n`
- y un carácter especial más: `\0`

## ¿Qué significa `\0`?

`\0` se llama **carácter nulo**.

No es una letra, no es un número visible, no se imprime como texto común. Su función es marcar el final de la cadena.

Eso significa que una cadena como `"Juan"` en memoria se representa así:

```text
J u a n \0
```

## ¿Por qué `\0` es tan importante?

Porque muchas funciones en C no saben cuántos caracteres querés usar. Entonces leen carácter por carácter hasta encontrar `\0`.

Si ese carácter de final no está donde corresponde, el programa puede leer basura o comportarse mal.

Y eso, hermano, es una de las cosas que más confunden al que recién empieza.

## Una cadena es un arreglo de `char`

Como una cadena es un arreglo, podemos acceder a sus posiciones igual que con cualquier otro arreglo.

```c
char nombre[] = "Ana";
```

Entonces:

- `nombre[0]` es `'A'`
- `nombre[1]` es `'n'`
- `nombre[2]` es `'a'`
- `nombre[3]` es `\0`

Fijate algo importante:

- `'A'` con comillas simples representa un **carácter**
- `"Ana"` con comillas dobles representa una **cadena**

No es lo mismo.

## Declaración de cadenas

### Declaración con tamaño fijo

```c
char ciudad[20];
```

Esto reserva espacio para guardar hasta 19 caracteres visibles y el `\0` final.

### Declaración con inicialización directa

```c
char nombre[] = "Lucia";
```

En este caso, el compilador calcula automáticamente el tamaño necesario.

### Declaración indicando tamaño e inicialización

```c
char apellido[10] = "Perez";
```

Acá se reserva espacio para 10 caracteres, aunque la palabra use menos.

## Ejemplo: mostrar una cadena

```c
#include <stdio.h>

int main() {
    char nombre[] = "Martina";

    printf("Nombre: %s\n", nombre);

    return 0;
}
```

### ¿Qué significa `%s`?

`%s` es el especificador de formato que se usa en `printf` para mostrar cadenas.

## Acceder a caracteres individuales

Como la cadena es un arreglo, podemos leer cada carácter por separado.

```c
#include <stdio.h>

int main() {
    char palabra[] = "Sol";

    printf("Primer caracter: %c\n", palabra[0]);
    printf("Segundo caracter: %c\n", palabra[1]);
    printf("Tercer caracter: %c\n", palabra[2]);

    return 0;
}
```

### Salida esperada

```text
Primer caracter: S
Segundo caracter: o
Tercer caracter: l
```

Fijate que ahora usamos `%c`, porque mostramos un solo carácter cada vez.

## Recorrer una cadena carácter por carácter

También podemos recorrer una cadena con un ciclo.

```c
#include <stdio.h>

int main() {
    char palabra[] = "Hola";
    int i;

    for (i = 0; palabra[i] != '\0'; i = i + 1) {
        printf("Caracter %d: %c\n", i, palabra[i]);
    }

    return 0;
}
```

## ¿Por qué la condición es `palabra[i] != '\0'`?

Porque no siempre necesitamos saber el tamaño exacto del arreglo completo. Lo que nos importa es recorrer la cadena hasta su final real.

El final real de la cadena está marcado por `\0`.

Entonces el ciclo dice:

> seguí mientras el carácter actual no sea el carácter nulo.

Fantástico. Esa es la idea correcta.

## Entrada de cadenas

Leer texto desde el teclado requiere más cuidado que leer un número.

## Leer una palabra con `scanf`

```c
#include <stdio.h>

int main() {
    char nombre[20];

    printf("Ingresa tu nombre: ");
    scanf("%s", nombre);

    printf("Hola, %s\n", nombre);

    return 0;
}
```

### ¿Qué hace bien este ejemplo?

- `nombre` tiene espacio reservado
- `scanf` guarda allí la palabra ingresada
- `%s` indica que vamos a leer una cadena

### Limitación importante de `scanf("%s", ...)`

Lee solo hasta el primer espacio.

Entonces:

- si escribís `Ana`, lee `Ana`
- si escribís `Ana Maria`, solo lee `Ana`

## Leer una línea completa con `fgets`

Cuando necesitamos leer texto con espacios, usamos `fgets`.

```c
#include <stdio.h>

int main() {
    char frase[100];

    printf("Escribi una frase: ");
    fgets(frase, 100, stdin);

    printf("La frase ingresada fue: %s", frase);

    return 0;
}
```

### ¿Qué recibe `fgets`?

```c
fgets(frase, 100, stdin);
```

- `frase`: dónde se guarda el texto
- `100`: cantidad máxima de caracteres a leer
- `stdin`: entrada estándar, o sea, el teclado

## Diferencia entre `scanf` y `fgets`

### `scanf("%s", cadena)`

- sirve para una sola palabra
- se detiene en el primer espacio
- es simple, pero limitada

### `fgets(cadena, tamanio, stdin)`

- permite leer una línea completa
- acepta espacios
- suele ser más útil para frases

## Operaciones comunes con cadenas

Como una cadena es un arreglo, muchas operaciones podrían hacerse manualmente con ciclos. Pero C también ofrece funciones en la biblioteca `<string.h>`.

## Longitud de una cadena: `strlen`

`strlen` devuelve la cantidad de caracteres de la cadena, sin contar el `\0`.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char palabra[] = "computadora";

    printf("Longitud: %d\n", strlen(palabra));

    return 0;
}
```

### Resultado

La longitud es `11`, porque la palabra tiene 11 letras. El `\0` no se cuenta.

## Copiar una cadena: `strcpy`

No podemos copiar cadenas con el signo `=` como si fueran números.

Esto NO es correcto para copiar contenido:

```c
/* destino = origen; */
```

Para copiar una cadena usamos `strcpy`.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char origen[] = "Hola";
    char destino[20];

    strcpy(destino, origen);

    printf("Destino: %s\n", destino);

    return 0;
}
```

### Idea importante

- `origen` contiene el texto original
- `destino` debe tener espacio suficiente
- `strcpy` copia carácter por carácter, incluyendo el `\0`

## Comparar cadenas: `strcmp`

Para comparar si dos cadenas son iguales no debemos usar `==`.

Eso sería un error conceptual.

Para comparar contenido usamos `strcmp`.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char clave1[] = "casa";
    char clave2[] = "casa";

    if (strcmp(clave1, clave2) == 0) {
        printf("Las cadenas son iguales.\n");
    } else {
        printf("Las cadenas son diferentes.\n");
    }

    return 0;
}
```

### ¿Por qué se compara con `0`?

Porque `strcmp`:

- devuelve `0` si las cadenas son iguales
- devuelve otro valor si son diferentes

Para este nivel, con entender que `0` significa “son iguales” alcanza perfecto.

## Concatenar cadenas: `strcat`

**Concatenar** significa unir una cadena con otra.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char nombre[30] = "Ana";

    strcat(nombre, " Maria");

    printf("Nombre completo: %s\n", nombre);

    return 0;
}
```

### Resultado

La variable `nombre` pasa a contener:

```text
Ana Maria
```

### Cuidado

El arreglo destino debe tener espacio suficiente para guardar:

- su contenido original
- la cadena que agregamos
- el `\0` final

## Ejemplo completo con varias operaciones

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

    if (strcmp(nombre, "Juan") == 0) {
        printf("El nombre guardado es Juan.\n");
    }

    return 0;
}
```

## Recorrer una cadena para contar vocales

Además de usar funciones de biblioteca, también podemos resolver problemas recorriendo la cadena manualmente.

```c
#include <stdio.h>

int main() {
    char palabra[] = "murcielago";
    int i;
    int cantidadVocales = 0;

    for (i = 0; palabra[i] != '\0'; i = i + 1) {
        if (palabra[i] == 'a' || palabra[i] == 'e' || palabra[i] == 'i' || palabra[i] == 'o' || palabra[i] == 'u') {
            cantidadVocales = cantidadVocales + 1;
        }
    }

    printf("Cantidad de vocales: %d\n", cantidadVocales);

    return 0;
}
```

Este ejemplo es muy valioso porque muestra algo clave:

> una cadena no solo se imprime o se copia; también puede procesarse carácter por carácter.

## Errores comunes al trabajar con cadenas

### Confundir carácter con cadena

- `'A'` es un carácter
- `"A"` es una cadena

No son lo mismo.

### No dejar espacio suficiente

```c
char nombre[4] = "Juan";
```

Esto está mal, porque `"Juan"` necesita:

- `J`
- `u`
- `a`
- `n`
- `\0`

O sea, necesita 5 posiciones.

### Comparar cadenas con `==`

Para comparar contenido, usá `strcmp`.

### Olvidarse de que `scanf("%s", ...)` no lee espacios

Si necesitás leer una frase completa, usá `fgets`.

## Resumen

- una cadena en C es un arreglo de `char`
- toda cadena termina en `\0`
- `%s` se usa para mostrar cadenas completas
- `%c` se usa para mostrar un solo carácter
- una cadena puede recorrerse con un ciclo como cualquier arreglo
- `strlen` mide longitud
- `strcpy` copia
- `strcmp` compara
- `strcat` concatena

## Idea final

Si entendés que una cadena en C es un arreglo de caracteres con un final marcado por `\0`, se ordena TODO.

Y cuando eso se entiende de verdad, dejás de memorizar funciones sueltas y empezás a comprender qué está pasando en memoria y en el programa.
