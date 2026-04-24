---
title: "Loops and Iterators"
---

# Loops and Iterators

Loops allow repeating a block of code while a condition is met or to traverse data sets.

## `for` Loop
Used when you know exactly how many times you want to repeat something.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Number: " + i);
}
```

## `while` Loop
Repeats while the condition is true. Ideal if you don't know how many iterations it will take.

```javascript
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}
```

## `do...while` Loop
Similar to `while`, but guarantees the code executes **at least once**, since the condition is evaluated at the end.

```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```

## `for...in` Loop
Special for traversing the properties of an **object**.

```javascript
const person = { name: "Facu", age: 30 };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

## Loop Control
- **`break`**: Cuts the loop immediately.
- **`continue`**: Jumps to the next iteration ignoring what remains of the current one.