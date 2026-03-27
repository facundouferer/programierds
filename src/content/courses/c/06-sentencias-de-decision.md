---
title: "Estructuras de Decisión"
---

En programación, muchas veces necesitamos que el programa **tome decisiones** dependiendo de ciertas condiciones.

Por ejemplo:

- Si el usuario es mayor de edad, permitir acceso.
- Si la temperatura es muy alta, encender un ventilador.
- Si un número es positivo o negativo, mostrar un mensaje diferente.

Para esto se utilizan las **estructuras de decisión**.

Las estructuras de decisión permiten que el programa **elija qué instrucciones ejecutar según una condición**.

En el lenguaje **C**, las estructuras de decisión más comunes son:

- `if`
- `if - else`
- `if` anidados
- `switch`
- `switch` con estructuras adicionales

---

# ¿Qué es una condición?

Una **condición** es una expresión que puede ser:

- **verdadera (true)**
- **falsa (false)**

En C, las condiciones generalmente utilizan **operadores relacionales**.

Ejemplos:

| Operador | Significado |
|---|---|
| `>` | mayor que |
| `<` | menor que |
| `>=` | mayor o igual |
| `<=` | menor o igual |
| `==` | igual |
| `!=` | diferente |

Ejemplo de condición:

```c
edad >= 18
````

Esto significa:

> ¿La edad es mayor o igual a 18?

---

# Estructura `if`

La estructura `if` permite ejecutar un bloque de código **solo si la condición es verdadera**.

## Sintaxis

```c
if (condicion) {
    instrucciones;
}
```

## Ejemplo simple

```c
#include <stdio.h>

int main() {

    int edad = 20;

    if (edad >= 18) {
        printf("Eres mayor de edad\n");
    }

    return 0;
}
```

### Explicación

1. Se declara la variable `edad`.
2. El `if` verifica la condición `edad >= 18`.
3. Como la condición es verdadera, el mensaje se imprime.

Si la condición fuera falsa, **no pasaría nada**.

---

# Estructura `if - else`

Muchas veces necesitamos ejecutar **una acción si la condición es verdadera y otra si es falsa**.

Para esto se utiliza `else`.

## Sintaxis

```c
if (condicion) {
    instrucciones_si_verdadero;
}
else {
    instrucciones_si_falso;
}
```

## Ejemplo

```c
#include <stdio.h>

int main() {

    int numero = 5;

    if (numero % 2 == 0) {
        printf("El numero es par\n");
    }
    else {
        printf("El numero es impar\n");
    }

    return 0;
}
```

### Explicación

El operador `%` calcula el **resto de una división**.

Si el resto al dividir entre 2 es 0, el número es **par**.

---

# Estructuras `if` anidados

Un **if anidado** ocurre cuando un `if` está dentro de otro `if`.

Esto permite evaluar **varias condiciones paso a paso**.

## Sintaxis

```c
if (condicion1) {

    if (condicion2) {
        instrucciones;
    }

}
```

## Ejemplo

Determinar si un número es **positivo, negativo o cero**.

```c
#include <stdio.h>

int main() {

    int numero = 10;

    if (numero >= 0) {

        if (numero == 0) {
            printf("El numero es cero\n");
        }
        else {
            printf("El numero es positivo\n");
        }

    }
    else {
        printf("El numero es negativo\n");
    }

    return 0;
}
```

### Explicación

1. Primero se verifica si el número es mayor o igual a 0.
2. Si lo es, se revisa si es exactamente 0.
3. Si no es 0, entonces es positivo.
4. Si el primer `if` es falso, el número es negativo.

---

# Estructura `switch`

La estructura `switch` se utiliza cuando hay **muchas opciones posibles basadas en el valor de una variable**.

Es especialmente útil cuando se comparan **valores específicos**.

## Sintaxis

```c
switch(variable) {

    case valor1:
        instrucciones;
        break;

    case valor2:
        instrucciones;
        break;

    default:
        instrucciones;

}
```

El `break` evita que el programa continúe ejecutando los siguientes casos.

---

## Ejemplo

Programa que muestra el **día de la semana**.

```c
#include <stdio.h>

int main() {

    int dia = 3;

    switch(dia) {

        case 1:
            printf("Lunes\n");
            break;

        case 2:
            printf("Martes\n");
            break;

        case 3:
            printf("Miercoles\n");
            break;

        case 4:
            printf("Jueves\n");
            break;

        case 5:
            printf("Viernes\n");
            break;

        default:
            printf("Dia no valido\n");
    }

    return 0;
}
```

### Explicación

Si `dia` vale `3`, el programa ejecuta:

```c
case 3:
    printf("Miercoles");
```

---

# `switch` con múltiples casos

A veces varios valores deben producir el **mismo resultado**.

Ejemplo: identificar si un día es **fin de semana**.

```c
#include <stdio.h>

int main() {

    int dia = 6;

    switch(dia) {

        case 6:
        case 7:
            printf("Es fin de semana\n");
            break;

        default:
            printf("Es un dia de semana\n");
    }

    return 0;
}
```

Si `dia` es `6` o `7`, se ejecuta la misma instrucción.

---

# `switch` combinado con `if`

Dentro de un `switch` también pueden utilizarse estructuras `if`.

Esto permite tomar decisiones más complejas.

## Ejemplo

```c
#include <stdio.h>

int main() {

    int opcion = 1;
    int edad = 16;

    switch(opcion) {

        case 1:

            if (edad >= 18) {
                printf("Puedes entrar al evento\n");
            }
            else {
                printf("No tienes la edad suficiente\n");
            }

            break;

        case 2:
            printf("Opcion de informacion\n");
            break;

        default:
            printf("Opcion no valida\n");
    }

    return 0;
}
```

---

# Comparación entre `if` y `switch`

| Estructura    | Cuándo usarla                                 |
| ------------- | --------------------------------------------- |
| `if`          | Cuando se comparan condiciones complejas      |
| `if - else`   | Cuando hay dos posibles resultados            |
| `if` anidados | Cuando hay varias decisiones dependientes     |
| `switch`      | Cuando se comparan muchos valores específicos |

---

# Errores comunes en principiantes

### 1. Usar `=` en lugar de `==`

Incorrecto:

```c
if (numero = 5)
```

Correcto:

```c
if (numero == 5)
```

---

### 2. Olvidar el `break` en `switch`

Si se olvida el `break`, el programa continuará ejecutando los siguientes casos.

---

# Importancia de las estructuras de decisión

Las estructuras de decisión permiten que los programas:

* reaccionen a la entrada del usuario
* controlen el flujo del programa
* implementen lógica en algoritmos
* resuelvan problemas del mundo real

Sin estructuras de decisión, los programas **ejecutarían siempre las mismas instrucciones**, sin importar las condiciones.

Por eso, dominar `if`, `if-else` y `switch` es uno de los pasos más importantes para aprender programación en C.