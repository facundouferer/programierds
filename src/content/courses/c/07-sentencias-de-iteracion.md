---
title: "Sentencias de Iteración"
---

Los bucles permiten repetir un bloque de código mientras una condición sea verdadera.

### Bucle `while`

Se evalúa la condición **antes** de ejecutar:
```c
int contador = 1;
while (contador <= 5) {
    printf("Número %d
", contador);
    contador++; // Importante: actualiza la variable para evitar bucles infinitos
}
```

### Bucle `for`

Ideal cuando ya sabes cuántas veces se va a repetir:
```c
// (inicialización; condición; actualización)
for (int i = 1; i <= 5; i++) {
    printf("Número %d
", i);
}
```

### Bucle `do-while`

Se ejecuta al menos **una vez**, porque la condición se evalúa **después** del bloque de código:
```c
int numero;
do {
    printf("Ingresa un número mayor que 10: ");
    scanf("%d", &numero);
} while (numero <= 10); // Repite si el número es menor o igual a 10
```
