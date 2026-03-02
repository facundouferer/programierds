---
title: "Procesos y Estados"
---

Un **proceso** es simplemente un programa en ejecución. Cuando corres tu programa C, el sistema operativo le asigna memoria y recursos.

### Características de un Proceso

-   **Código ejecutable**: Las instrucciones que escribiste.
-   **Memoria asignada**: Espacio para variables y datos.
-   **Contexto**: El estado actual del procesador.

### Estados de un Proceso en C

Durante su ejecución, un proceso pasa por varias etapas:

1.  **Nuevo**: Se crea el proceso.
2.  **Listo**: Espera a que el sistema le asigne la CPU.
3.  **Ejecución**: Se está ejecutando activamente.
4.  **Espera**: Pausado (ej. esperando que el usuario ingrese algo).
5.  **Terminado**: Ha finalizado y libera sus recursos.

Este ciclo de vida es fundamental para entender cómo interactúa tu código con el sistema operativo.
