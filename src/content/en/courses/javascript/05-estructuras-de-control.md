---
title: "Control Structures"
---

# Control Structures

Control structures allow your code to make decisions based on conditions.

## Conditionals

### if / else if / else
It's the most common way to branch the flow of the program.

```javascript
let age = 18;

if (age >= 18) {
    console.log("You can enter");
} else if (age >= 16) {
    console.log("You can enter with a guardian");
} else {
    console.log("You cannot enter");
}
```

### Ternary Operator
A short way to write a simple `if/else`.
`condition ? value_if_true : value_if_false`

```javascript
const message = age >= 18 ? "Adult" : "Minor";
```

### switch
Ideal for comparing a variable against multiple fixed values.

```javascript
let day = 1;
switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Another day");
}
```

## When to use each one?
- **`if`**: When you have complex conditions (`a > 10 && b < 5`) or ranges.
- **`switch`**: When comparing a single value against many specific options (e.g.: days of the week, user types).