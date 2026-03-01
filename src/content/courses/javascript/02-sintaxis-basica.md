---
title: "Sintaxis básica de JavaScript"
---

# Sintaxis básica de JavaScript

## Variables

JavaScript tiene tres formas de declarar variables:

```javascript
const PI = 3.14159;   // No se puede reasignar
let contador = 0;     // Se puede reasignar
var antiguo = "evitar"; // Evitar: tiene problemas de scope
```

**Regla de oro**: Usá `const` siempre. Solo usá `let` cuando necesites reasignar.

## Tipos de datos

### Primitivos

```javascript
const texto = "Hola";          // string
const numero = 42;              // number
const decimal = 3.14;           // number (no hay int/float)
const activo = true;            // boolean
const nada = null;              // null
let sinDefinir;                 // undefined
const id = Symbol("id");        // symbol
const grande = 9007199254740991n; // bigint
```

### Objetos y arrays

```javascript
const persona = {
    nombre: "Ana",
    edad: 30,
};

const lenguajes = ["JavaScript", "TypeScript", "Python"];
```

## Estructuras de control

### Condicionales

```javascript
const edad = 18;

if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

// Ternario
const mensaje = edad >= 18 ? "Mayor" : "Menor";
```

### Bucles

```javascript
// for clásico
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of (para iterables)
const frutas = ["manzana", "banana", "naranja"];
for (const fruta of frutas) {
    console.log(fruta);
}

// for...in (para propiedades de objetos)
const auto = { marca: "Toyota", modelo: "Corolla" };
for (const clave in auto) {
    console.log(`${clave}: ${auto[clave]}`);
}
```

## Funciones

```javascript
// Declaración
function sumar(a, b) {
    return a + b;
}

// Expresión (arrow function)
const restar = (a, b) => a - b;

// Con valores por defecto
const saludar = (nombre = "Mundo") => {
    console.log(`¡Hola, ${nombre}!`);
};

saludar();         // ¡Hola, Mundo!
saludar("Ana");    // ¡Hola, Ana!
```
