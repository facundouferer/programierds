---
title: "Variables, Constants, and Comments"
---

# Variables, Constants, and Comments

## Comments
Comments are notes we leave in the code for ourselves or other developers. They are not executed.

- **Single line:** Use `//`.
- **Block (multiple lines):** Use `/* ... */`.

```javascript
// This is a single-line comment
/*
   This is a comment
   that spans multiple lines
*/
```

## Declaring variables

JavaScript has three keywords to create data containers:

1. **`var`**: The old way. It has function scope and can cause confusing behavior (avoid using it).
2. **`let`**: The modern way. It allows reassignment and has block scope.
3. **`const`**: For values that should not change. Once assigned, it cannot be modified.

### Scope
It is the place where a variable lives and can be accessed.
- **Global:** Outside any function or block.
- **Local / Block:** Inside `{ }`, such as within an `if` or a function.

```javascript
if (true) {
    let message = "Hello"; // Only lives inside this block
    var greeting = "Good morning"; // Escapes the block (problem with var)
}
console.log(greeting); // Works
console.log(message); // Error! ReferenceError
```

**Golden rule:** Use `const` by default. If you need to change the value later, use `let`.
