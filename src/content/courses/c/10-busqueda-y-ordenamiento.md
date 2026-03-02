---
title: "Búsqueda y Ordenamiento"
---

Manipular datos de manera eficiente es vital. Aquí aprenderás cómo encontrar elementos y cómo organizarlos.

### Búsqueda Binaria

Es un algoritmo eficiente para encontrar un elemento en un arreglo **ya ordenado**. Divide el arreglo por la mitad en cada paso.

```c
while (inicio <= fin) {
    medio = (inicio + fin) / 2;
    if (arreglo[medio] == buscado) {
        printf("Encontrado!"); break;
    } else if (buscado < arreglo[medio]) {
        fin = medio - 1;
    } else {
        inicio = medio + 1;
    }
}
```

### Métodos de Ordenamiento Comunes

Organizar elementos de menor a mayor (o viceversa):

1.  **Burbuja (Bubble Sort)**: Compara elementos adyacentes y los intercambia si están en el orden incorrecto. Es el más fácil pero lento con muchos datos.
2.  **Selección (Selection Sort)**: Encuentra el valor más pequeño en cada pasada y lo coloca en su posición correcta.
3.  **Inserción (Insertion Sort)**: Inserta cada elemento en su lugar correcto (como ordenar cartas en una mano).
