---
title: "Estructuras"
---

Una **estructura (`struct`)** es un tipo de dato propio que permite agrupar varias variables de diferentes tipos bajo un mismo nombre.

### Definición y Uso

Es como una caja que guarda distintos tipos de cosas (ej. datos de una persona).

```c
struct Persona {
    char nombre[30];
    int edad;
    float altura;
};

int main() {
    struct Persona p1; // Declaración
    p1.edad = 25; // Accedemos a los campos con el punto '.'
    strcpy(p1.nombre, "Lucía");
}
```

### ¿Cuándo usar estructuras?

Cuando tienes datos relacionados entre sí, como:
-   Los datos de un estudiante (nombre, legajo, nota).
-   Una fecha (día, mes, año).
-   Un producto (nombre, precio, stock).
-   Un punto en el espacio (x, y, z).
