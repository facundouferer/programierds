---
title: "Object-Oriented Programming"
---

# Object-Oriented Programming (OOP)

OOP is a paradigm that organizes code into "objects" that contain data (attributes) and behaviors (methods).

## The 4 Pillars of OOP

1. **Encapsulation:** Hide internal details and expose only what is necessary (using `private` and `getters/setters`).
2. **Inheritance:** Create new classes from existing ones (`extends`).
3. **Polymorphism:** The ability of an object to behave in different ways.
4. **Abstraction:** Represent complex concepts in a simplified way (abstract classes and interfaces).

## Classes and Objects

- **Class:** The blueprint or template (for example, the `Dog` class).
- **Object:** The real instance created from the template (for example, `myDog`).

```java
public class Dog {
    String name;
    
    public void bark() {
        System.out.println("Woof!");
    }
}

// Usage:
Dog myDog = new Dog();
myDog.name = "Firulais";
myDog.bark();
```

## Access Modifiers
- `public`: Accessible from anywhere.
- `private`: Accessible only inside the same class.
- `protected`: Accessible within the same package and by subclasses.
- `default`: Only within the same package.

## Constructors
Special methods that run when the object is created (`new`). They have no return type and use the same name as the class.

```java
public Person(String name, int age) {
    this.name = name;
    this.age = age;
}
```

## Wrappers
Classes that wrap primitive types so they can be treated as objects (for example, `Integer` for `int`, `Double` for `double`). They are useful for collections.
