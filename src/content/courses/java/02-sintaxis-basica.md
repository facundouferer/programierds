---
title: "Sintaxis básica de Java"
---

# Sintaxis básica de Java

## Variables y tipos de datos

Java es un lenguaje **fuertemente tipado**. Cada variable debe declarar su tipo.

### Tipos primitivos

```java
int edad = 25;
double precio = 99.99;
boolean activo = true;
char inicial = 'J';
```

### Tipos de referencia

```java
String nombre = "Programierds";
int[] numeros = {1, 2, 3, 4, 5};
```

## Estructuras de control

### Condicionales

```java
if (edad >= 18) {
    System.out.println("Mayor de edad");
} else {
    System.out.println("Menor de edad");
}
```

### Bucles

```java
// for clásico
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// for-each
for (int numero : numeros) {
    System.out.println(numero);
}

// while
int contador = 0;
while (contador < 5) {
    System.out.println(contador);
    contador++;
}
```

## Métodos

```java
public static int sumar(int a, int b) {
    return a + b;
}

public static void main(String[] args) {
    int resultado = sumar(3, 5);
    System.out.println("Resultado: " + resultado);
}
```
