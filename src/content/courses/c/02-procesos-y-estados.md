---
title: "Procesos y Estados"
---

Un **proceso** es simplemente un programa en ejecución. Cuando ejecutas tu programa en C (por ejemplo con `./programa` en Linux), el sistema operativo crea una instancia del programa y le asigna recursos como memoria, tiempo de CPU y acceso a dispositivos.

En otras palabras, el archivo ejecutable es solo código almacenado en disco, mientras que el **proceso** es ese código **activo en memoria y siendo gestionado por el sistema operativo**.

Cada proceso tiene un identificador único llamado **PID (Process ID)** que el sistema utiliza para administrarlo.

### Características de un Proceso

Un proceso no es solo el código del programa. El sistema operativo mantiene varias estructuras de datos para controlarlo.

- **Código ejecutable**  
  Contiene las instrucciones del programa compilado que el procesador ejecuta paso a paso.

- **Memoria asignada**  
  Incluye diferentes regiones de memoria utilizadas por el proceso:
  - **Segmento de código**: donde está el programa.
  - **Segmento de datos**: variables globales y estáticas.
  - **Heap**: memoria dinámica (`malloc`, `calloc`, `free`).
  - **Stack**: variables locales y llamadas a funciones.

- **Contexto del proceso**  
  Representa el estado actual del proceso en la CPU, incluyendo:
  - valores de los registros
  - contador de programa (PC)
  - puntero de pila

- **Recursos del sistema**  
  Un proceso puede utilizar:
  - archivos abiertos
  - sockets de red
  - dispositivos de entrada/salida

### Identificación de Procesos en Sistemas Unix/Linux

En sistemas basados en Unix (como Linux), cada proceso tiene un **PID**.

En C puedes obtener el PID del proceso actual con:

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    printf("Mi PID es: %d\n", getpid());
    return 0;
}