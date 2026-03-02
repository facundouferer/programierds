---
title: "Archivos"
---

Los archivos son espacios en el disco donde se puede guardar información de forma permanente. A diferencia de las variables en memoria, los archivos no se pierden al cerrar el programa.

### Tipos de Operaciones

Se usa el tipo `FILE*` para manejar archivos:

1.  **Abrir**: `fopen("datos.txt", "w")`. Modos: `"r"` (leer), `"w"` (escribir), `"a"` (agregar).
2.  **Leer**: `fscanf()` o `fgets()`.
3.  **Escribir**: `fprintf()`.
4.  **Cerrar**: `fclose()`. **¡Es fundamental para no perder datos!**

### Ejemplo de Escritura

```c
FILE* archivo = fopen("saludo.txt", "w");
if (archivo != NULL) {
    fprintf(archivo, "Hola Mundo!");
    fclose(archivo);
}
```
Manejar archivos es crucial para que tus aplicaciones puedan guardar y cargar datos de forma persistente.
