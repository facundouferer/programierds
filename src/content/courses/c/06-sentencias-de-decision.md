---
title: "Sentencias de Decisión"
---

Las estructuras de decisión permiten que el programa tome caminos distintos según se cumplan o no ciertas condiciones.

### Sentencia `if` y `if-else`

La estructura más básica para evaluar condiciones:

```c
if (numero > 10) {
    printf("Es mayor que 10");
} else if (numero == 10) {
    printf("Es igual a 10");
} else {
    printf("Es menor que 10");
}
```

### Sentencias anidadas

Puedes meter un `if` dentro de otro `if`. Es útil para decisiones complejas (ej. evaluar una nota académica por rangos específicos).

### Sentencia `switch`

Útil cuando tienes múltiples opciones fijas para una sola variable:

```c
int opcion = 1;
switch (opcion) {
    case 1:
        printf("Elegiste la opción 1");
        break; // break es vital para salir del switch
    case 2:
        printf("Elegiste la opción 2");
        break;
    default:
        printf("Opción no válida");
}
```
**Nota**: El `break` evita que se ejecuten los casos siguientes accidentalmente.
