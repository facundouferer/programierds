---
title: "Objects and the 'this' Keyword"
---

# Objects in JavaScript

An object is a collection of properties (key and value). It's the basis of almost everything in JavaScript.

## Creating and Accessing

```javascript
const person = {
    name: "Juan",
    age: 30,
    greet: function() {
        console.log("Hello!");
    }
};

// Dot notation (Standard)
console.log(person.name);

// Bracket notation (For dynamic names or with spaces)
console.log(person["age"]);
```

## Manipulation
- **Add:** `person.job = "Dev";`
- **Delete:** `delete person.age;`
- **Verify:** `"name" in person; // true`

## The `this` Concept

The reserved word `this` refers to the **current object** in which the code is being executed. Its value changes depending on how the function is called.

```javascript
const user = {
    name: "Facu",
    introduce() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

user.introduce(); // "Hello, I'm Facu"
```

Inside an object's method, `this` allows us to access the other properties of that same object.