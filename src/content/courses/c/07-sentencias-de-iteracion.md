---
title: "Sentencias de Iteración"
---

En programación, muchas veces necesitamos **repetir una o varias instrucciones varias veces**.

Por ejemplo:

- Mostrar los números del 1 al 10.
- Leer varios datos ingresados por el usuario.
- Procesar una lista de valores.
- Ejecutar una acción hasta que se cumpla una condición.

Para esto se utilizan las **sentencias de iteración** o **estructuras repetitivas**.

Estas estructuras permiten que un bloque de código se ejecute **varias veces mientras una condición sea verdadera**.

En el lenguaje **C**, las principales estructuras de iteración son:

- `for`
- `while`
- `do-while`

Estas estructuras también se conocen como **bucles** o **loops**.

---

# ¿Qué es una iteración?

Una **iteración** es cada vez que se repite un conjunto de instrucciones dentro de un ciclo.

Por ejemplo, si un programa imprime los números del 1 al 5:

```

1
2
3
4
5

````

El ciclo se ejecutó **5 veces**, por lo tanto hubo **5 iteraciones**.

---

# Estructura `while`

La estructura `while` repite un bloque de código **mientras una condición sea verdadera**.

Primero se evalúa la condición y, si es verdadera, el código se ejecuta.

## Sintaxis

```c
while (condicion) {
    instrucciones;
}
````

El ciclo continuará ejecutándose **hasta que la condición sea falsa**.

---

## Ejemplo básico

Mostrar los números del 1 al 5.

```c
#include <stdio.h>

int main() {

    int i = 1;

    while (i <= 5) {
        printf("%d\n", i);
        i++;
    }

    return 0;
}
```

### Explicación

1. Se declara la variable `i` con valor 1.
2. Se evalúa la condición `i <= 5`.
3. Si es verdadera, se imprime el número.
4. Luego `i` aumenta en 1.
5. El ciclo continúa hasta que `i` sea mayor que 5.

Salida del programa:

```
1
2
3
4
5
```

---

# Importante: evitar ciclos infinitos

Un **ciclo infinito** ocurre cuando la condición del ciclo **nunca se vuelve falsa**.

Ejemplo incorrecto:

```c
while (i <= 5) {
    printf("%d\n", i);
}
```

Aquí `i` nunca cambia, por lo tanto el ciclo **nunca termina**.

Por eso es importante **actualizar las variables dentro del ciclo**.

---

# Estructura `do-while`

El ciclo `do-while` es muy similar a `while`, pero tiene una diferencia importante:

> El bloque de código se ejecuta **al menos una vez**, incluso si la condición es falsa.

Esto ocurre porque la condición se evalúa **después de ejecutar el código**.

---

## Sintaxis

```c
do {
    instrucciones;
} while (condicion);
```

---

## Ejemplo

```c
#include <stdio.h>

int main() {

    int i = 1;

    do {
        printf("%d\n", i);
        i++;
    } while (i <= 5);

    return 0;
}
```

Salida:

```
1
2
3
4
5
```

---

## Ejemplo donde se ejecuta al menos una vez

```c
#include <stdio.h>

int main() {

    int numero = 10;

    do {
        printf("El numero es %d\n", numero);
    } while (numero < 5);

    return 0;
}
```

Aunque la condición `numero < 5` es falsa, el mensaje se imprime **una vez**.

---

# Estructura `for`

El ciclo `for` se utiliza cuando **sabemos exactamente cuántas veces se repetirá el ciclo**.

Es muy común para recorrer números o arreglos.

---

## Sintaxis

```c
for (inicializacion; condicion; actualizacion) {
    instrucciones;
}
```

Las tres partes del `for` son:

| Parte          | Función                               |
| -------------- | ------------------------------------- |
| Inicialización | Se ejecuta una sola vez al comenzar   |
| Condición      | Se evalúa antes de cada iteración     |
| Actualización  | Se ejecuta al final de cada iteración |

---

## Ejemplo

Mostrar los números del 1 al 5.

```c
#include <stdio.h>

int main() {

    for (int i = 1; i <= 5; i++) {
        printf("%d\n", i);
    }

    return 0;
}
```

### Explicación

1. `int i = 1` → inicializa la variable.
2. `i <= 5` → condición del ciclo.
3. `i++` → aumenta el valor de `i`.

Salida:

```
1
2
3
4
5
```

---

# Ejemplo práctico

Calcular la suma de los primeros 5 números.

```c
#include <stdio.h>

int main() {

    int suma = 0;

    for (int i = 1; i <= 5; i++) {
        suma = suma + i;
    }

    printf("La suma es: %d\n", suma);

    return 0;
}
```

Resultado:

```
La suma es: 15
```

---

# Comparación entre `for`, `while` y `do-while`

| Estructura | Característica                                      |
| ---------- | --------------------------------------------------- |
| `while`    | Se usa cuando no sabemos cuántas repeticiones habrá |
| `do-while` | Se ejecuta al menos una vez                         |
| `for`      | Se usa cuando sabemos el número de iteraciones      |

---

# Ejemplo comparativo

Las tres estructuras pueden hacer lo mismo.

### Con `while`

```c
int i = 1;

while (i <= 5) {
    printf("%d\n", i);
    i++;
}
```

---

### Con `do-while`

```c
int i = 1;

do {
    printf("%d\n", i);
    i++;
} while (i <= 5);
```

---

### Con `for`

```c
for (int i = 1; i <= 5; i++) {
    printf("%d\n", i);
}
```

Todos producen el mismo resultado.

---

# Errores comunes en principiantes

### 1. No actualizar la variable del ciclo

Esto produce **ciclos infinitos**.

---

### 2. Usar mal la condición

Ejemplo:

```c
for (int i = 1; i >= 5; i++)
```

La condición nunca se cumple, por lo que el ciclo **no se ejecuta**.

---

# Importancia de las estructuras de iteración

Las estructuras de iteración son fundamentales porque permiten:

* procesar grandes cantidades de datos
* automatizar tareas repetitivas
* recorrer arreglos y matrices
* implementar algoritmos complejos

Sin ciclos, muchos programas tendrían que repetir manualmente las mismas instrucciones muchas veces.

Por eso, dominar `for`, `while` y `do-while` es una de las habilidades más importantes para aprender programación en C.