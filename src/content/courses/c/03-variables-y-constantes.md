---
title: "Variables y Constantes"
---

En programación, una **variable** es un espacio en memoria que se utiliza para almacenar un valor que puede cambiar durante la ejecución del programa.

Las variables son uno de los conceptos más importantes en programación, porque permiten guardar información que el programa necesita utilizar, modificar o mostrar.

En el lenguaje **C**, cada variable debe tener:

- un **tipo de dato**
- un **nombre**
- opcionalmente un **valor inicial**

Por ejemplo:

```c
int edad = 20;
````

En este caso:

* `int` es el **tipo de dato**
* `edad` es el **nombre de la variable**
* `20` es el **valor almacenado**

El programa puede usar ese valor posteriormente en cálculos o decisiones.

---

## ¿Qué es la memoria en un programa?

Cuando ejecutas un programa en C, el sistema operativo reserva un espacio de **memoria RAM** para él.

Cada variable ocupa un pequeño espacio en esa memoria.

Podemos imaginarlo como cajas etiquetadas:

```
edad -> 20
altura -> 175
temperatura -> 22.5
```

Cada caja tiene un **nombre** (la variable) y guarda un **valor**.

El programa puede **leer o modificar** ese valor cuando lo necesite.

---

## Declaración de Variables

Antes de utilizar una variable en C, es necesario **declararla**.

Declarar una variable significa decirle al compilador:

* qué tipo de dato almacenará
* cuál será su nombre

La sintaxis general es:

```
tipo nombre_variable;
```

Ejemplo:

```c
int edad;
```

Aquí estamos indicando que existe una variable llamada `edad` que almacenará números enteros.

También se puede declarar e inicializar al mismo tiempo:

```c
int edad = 18;
```

---

## Tipos de Datos Básicos en C

El **tipo de dato** indica qué tipo de información se puede guardar en una variable.

Los tipos más comunes son:

### int (Enteros)

Se utiliza para números **sin decimales**.

Ejemplo:

```c
int cantidad = 10;
int anio = 2025;
```

---

### float (Decimales)

Se utiliza para números con **decimales**.

Ejemplo:

```c
float temperatura = 23.5;
float precio = 10.99;
```

---

### double

Es similar a `float`, pero permite **mayor precisión**.

```c
double distancia = 12345.6789;
```

---

### char (Caracteres)

Se utiliza para almacenar **un solo carácter**.

Ejemplo:

```c
char letra = 'A';
char simbolo = '#';
```

Es importante notar que los caracteres se escriben entre **comillas simples**.

---

## Reglas para Nombrar Variables

En C existen ciertas reglas para nombrar variables:

### Reglas básicas

* Deben comenzar con una **letra** o **_**
* No pueden comenzar con números
* No pueden contener espacios
* No pueden usar palabras reservadas del lenguaje

Ejemplos válidos:

```
edad
numero1
temperaturaActual
_total
```

Ejemplos incorrectos:

```
1numero
mi edad
int
```

---

## Buenas Prácticas para Nombrar Variables

Elegir buenos nombres facilita la lectura del código.

Malo:

```c
int x;
```

Mejor:

```c
int cantidadEstudiantes;
```

Un buen nombre describe **qué representa la variable**.

---

## Modificar el Valor de una Variable

El valor de una variable puede cambiar durante la ejecución del programa.

Ejemplo:

```c
int contador = 0;

contador = contador + 1;
contador = contador + 1;
```

Después de estas operaciones, el valor de `contador` será `2`.

También existe una forma abreviada:

```c
contador++;
```

Esto significa **incrementar la variable en 1**.

---

## Inicialización de Variables

Inicializar una variable significa **asignarle un valor inicial al declararla**.

Ejemplo:

```c
int puntos = 0;
```

Esto es recomendable porque evita errores cuando se utilizan variables sin valor definido.

---

## ¿Qué es una Constante?

Una **constante** es un valor que **no puede cambiar durante la ejecución del programa**.

Se utiliza cuando un valor debe permanecer fijo.

Por ejemplo:

* el número de días de la semana
* el valor de PI
* la cantidad de meses del año

---

## Constantes con `const`

En C se pueden declarar constantes utilizando la palabra clave `const`.

Ejemplo:

```c
const float PI = 3.1416;
```

Esto significa que el valor de `PI` **no puede modificarse**.

Intentar cambiarlo produciría un error:

```c
PI = 4.0; // ERROR
```

---

## Uso de Constantes con `#define`

Otra forma común de definir constantes en C es usando el preprocesador.

Ejemplo:

```c
#define PI 3.1416
```

Luego puede utilizarse en el programa:

```c
float area = PI * radio * radio;
```

A diferencia de `const`, `#define` no crea una variable en memoria, sino que el compilador **reemplaza el valor antes de compilar**.

---

## Diferencia entre Variables y Constantes

| Característica | Variable          | Constante             |
| -------------- | ----------------- | --------------------- |
| Puede cambiar  | Sí                | No                    |
| Se usa para    | datos que cambian | valores fijos         |
| Declaración    | `int edad = 20;`  | `const int DIAS = 7;` |

---

## Ejemplo Completo

El siguiente programa muestra el uso de variables y constantes:

```c
#include <stdio.h>

int main() {

    const float PI = 3.1416;

    float radio = 5.0;
    float area;

    area = PI * radio * radio;

    printf("El area del circulo es: %.2f\n", area);

    return 0;
}
```

### Explicación del programa

1. Se define la constante `PI`.
2. Se declara la variable `radio`.
3. Se declara la variable `area`.
4. Se calcula el área del círculo.
5. Se muestra el resultado en pantalla.

---

## Importancia de las Variables y Constantes

Las variables y constantes son la base de cualquier programa porque permiten:

* almacenar datos
* realizar cálculos
* controlar el flujo del programa
* representar información del mundo real

Comprender bien estos conceptos es fundamental para avanzar hacia temas más complejos como:

* estructuras de control
* funciones
* estructuras de datos
* algoritmos más avanzados.
