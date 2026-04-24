---
title: "Classes and Inheritance"
---

# Classes in JavaScript

Classes are "templates" for creating objects that share the same structure and behavior.

## Defining a Class

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const p1 = new Person("Juan", 30);
p1.greet();
```

## Inheritance

Allows creating a class from another, inheriting its characteristics and adding or modifying what we need. Uses `extends`.

```javascript
class Student extends Person {
    constructor(name, age, career) {
        super(name, age); // Calls the parent's constructor
        this.career = career;
    }

    study() {
        console.log(`${this.name} is studying ${this.career}`);
    }
}

const e1 = new Student("Pedro", 20, "Engineering");
e1.greet(); // Inherited
e1.study(); // Own method
```

**Note:** By convention, class names always start with **Capital letter**.