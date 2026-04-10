---
title: "Recursividad"
---

La recursividad es una de esas ideas que al principio parecen raras, pero cuando la entendés bien, te abre la cabeza.

Una función recursiva es una función que se llama a sí misma para resolver una versión más pequeña del mismo problema.

En esta lección vas a aprender:

- qué es recursividad
- qué es el caso base
- qué es el paso recursivo
- cómo leer una llamada recursiva sin perderte
- errores comunes al empezar

> Idea clave: la recursividad consiste en resolver un problema grande reduciéndolo a uno más pequeño del mismo tipo.

## ¿Qué es una función recursiva?

Es una función que se invoca a sí misma.

Pero OJO: no alcanza con que una función se llame sola. Para que la recursividad esté bien diseñada, tiene que cumplir dos cosas:

1. debe existir un **caso base** que detenga las llamadas
2. cada llamada debe acercarse a ese caso base

## Caso base

El **caso base** es la condición que detiene la recursión.

Sin caso base, la función seguiría llamándose indefinidamente.

## Paso recursivo

El **paso recursivo** es la parte donde la función se llama a sí misma con un problema más pequeño.

## Ejemplo clásico: factorial

Matemáticamente:

- `5! = 5 * 4 * 3 * 2 * 1`
- `1! = 1`

### Implementación

```c
int factorial(int n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

## ¿Cómo se lee esto?

Si llamás:

```c
factorial(4)
```

ocurre algo así:

- `factorial(4)` devuelve `4 * factorial(3)`
- `factorial(3)` devuelve `3 * factorial(2)`
- `factorial(2)` devuelve `2 * factorial(1)`
- `factorial(1)` devuelve `1`

Después se reconstruye el resultado:

- `factorial(2) = 2 * 1 = 2`
- `factorial(3) = 3 * 2 = 6`
- `factorial(4) = 4 * 6 = 24`

## Ejemplo con Fibonacci

```c
int fibonacci(int n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

Este ejemplo es útil para entender la idea, aunque no siempre es la forma más eficiente.

## ¿Cuándo conviene pensar recursivamente?

Conviene cuando el problema puede expresarse naturalmente en términos de sí mismo.

Por ejemplo:

- factorial
- Fibonacci
- recorridos de estructuras jerárquicas como árboles

## Errores comunes al empezar

### 1. Olvidar el caso base

Eso produce llamadas infinitas.

### 2. Tener caso base, pero no acercarse a él

Si cada llamada no reduce el problema, la recursión también puede quedar mal.

### 3. Memorizar la sintaxis sin entender el proceso

No sirve. Tenés que entender cómo el problema se descompone y luego se reconstruye.

## Resumen

- una función recursiva se llama a sí misma
- necesita un caso base
- necesita un paso recursivo que acerque al caso base
- la recursividad resuelve un problema reduciéndolo a uno más pequeño del mismo tipo

## Idea final

La recursividad no es magia. Es una forma distinta de pensar la resolución de problemas.

Cuando la entendés de verdad, empezás a ver que algunos problemas se expresan mucho mejor por descomposición que por repetición explícita.
