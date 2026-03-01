---
title: "Programación Orientada a Objetos"
---

# Programación Orientada a Objetos

La POO es el paradigma central de Java. Todo en Java gira alrededor de clases y objetos.

## Clases y objetos

Una **clase** es un molde o plantilla. Un **objeto** es una instancia concreta de esa clase.

```java
public class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }
}
```

```java
Persona persona = new Persona("Ana", 30);
System.out.println(persona.getNombre());
```

## Los 4 pilares de la POO

### Encapsulamiento

Proteger los datos internos de un objeto usando modificadores de acceso (`private`, `public`, `protected`).

### Herencia

Permite que una clase hija reutilice atributos y métodos de una clase padre.

```java
public class Estudiante extends Persona {
    private String carrera;

    public Estudiante(String nombre, int edad, String carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }
}
```

### Polimorfismo

Un mismo método puede comportarse diferente según el objeto que lo invoque.

```java
public class Animal {
    public void hablar() {
        System.out.println("...");
    }
}

public class Perro extends Animal {
    @Override
    public void hablar() {
        System.out.println("¡Guau!");
    }
}

public class Gato extends Animal {
    @Override
    public void hablar() {
        System.out.println("¡Miau!");
    }
}
```

### Abstracción

Definir contratos sin implementación usando clases abstractas o interfaces.

```java
public interface Vehiculo {
    void acelerar();
    void frenar();
}

public class Auto implements Vehiculo {
    @Override
    public void acelerar() {
        System.out.println("El auto acelera");
    }

    @Override
    public void frenar() {
        System.out.println("El auto frena");
    }
}
```
