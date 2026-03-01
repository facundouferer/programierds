---
title: "Introducción a Java"
---

# Introducción a Java

Java es un lenguaje de programación orientado a objetos, fuertemente tipado y multiplataforma. Fue creado por James Gosling en Sun Microsystems en 1995 y hoy es uno de los lenguajes más utilizados en el mundo.

## ¿Por qué aprender Java?

- **Multiplataforma**: "Write once, run anywhere" gracias a la JVM (Java Virtual Machine).
- **Ecosistema maduro**: Frameworks como Spring, herramientas como Maven y Gradle, y una comunidad enorme.
- **Demanda laboral**: Uno de los lenguajes más solicitados en el mercado.

## Instalación del JDK

Para programar en Java necesitás instalar el JDK (Java Development Kit). Podés descargarlo desde [Adoptium](https://adoptium.net/) o usar un gestor de versiones como SDKMAN.

```bash
# Verificar instalación
java --version
javac --version
```

## Tu primer programa

```java
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, Mundo!");
    }
}
```

Para compilar y ejecutar:

```bash
javac HolaMundo.java
java HolaMundo
```
