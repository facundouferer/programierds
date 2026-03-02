---
title: "Funciones y Recursividad"
---

Las funciones son bloques de código reutilizables que realizan una tarea específica.

### Estructura de una función

```c
// tipo_retorno nombre(parametros)
int sumar(int a, int b) {
    return a + b; // Devuelve el resultado
}

int main() {
    int resultado = sumar(5, 3);
    printf("La suma es: %d", resultado);
}
```

### Pasaje de parámetros

-   **Por valor**: La función recibe una copia. Si se modifica dentro, el original no cambia. (Es el más común).
-   **Por referencia**: Se pasan punteros. Esto permite modificar la variable original.

### Recursividad

Una función **recursiva** se llama a sí misma para resolver un problema más pequeño (ej. calcular un factorial o la serie de Fibonacci).

-   **Caso base**: Condición que detiene las llamadas infinitas.
-   **Llamada recursiva**: La función se invoca a sí misma con un nuevo valor.
