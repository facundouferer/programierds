---
title: "Ordenación y Búsqueda"
---

Cuando trabajás con arreglos, no solo querés guardar datos: también querés organizarlos y encontrarlos con eficiencia.

En esta lección vas a aprender:

- qué significa ordenar
- métodos básicos de ordenación
- qué es la búsqueda binaria
- por qué requiere datos ordenados

## ¿Qué significa ordenar?

Ordenar significa reorganizar los elementos según un criterio.

Por ejemplo:

- de menor a mayor
- de mayor a menor
- alfabéticamente

## Método burbuja

Es uno de los más simples de entender.

```c
for (i = 0; i < n - 1; i = i + 1) {
    for (j = 0; j < n - 1 - i; j = j + 1) {
        if (numeros[j] > numeros[j + 1]) {
            aux = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = aux;
        }
    }
}
```

## Selección

Busca el menor elemento y lo coloca en la posición correcta.

## Inserción

Va ubicando cada elemento en el lugar correcto dentro de la parte ya ordenada.

## Búsqueda binaria

La **búsqueda binaria** sirve para buscar en un arreglo ordenado.

La idea es comparar con el elemento del medio y descartar la mitad que no sirve.

```c
while (inicio <= fin) {
    medio = (inicio + fin) / 2;

    if (arreglo[medio] == buscado) {
        encontrado = 1;
        break;
    } else if (buscado < arreglo[medio]) {
        fin = medio - 1;
    } else {
        inicio = medio + 1;
    }
}
```

## Idea importante

La búsqueda binaria solo funciona correctamente si el arreglo ya está ordenado.

## Resumen

- ordenar es reorganizar datos según un criterio
- existen varios métodos simples de ordenación
- la búsqueda binaria divide el problema en mitades
- requiere un arreglo previamente ordenado

## Idea final

Guardar datos es importante. Pero aprender a ordenarlos y buscarlos bien es lo que empieza a volver a tu programa realmente eficiente.
