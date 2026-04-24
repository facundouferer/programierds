---
title: "Functions and Higher Order"
---

# Advanced Functions

## Declaration vs. Expression (Arrow)

There are two main ways to write functions:

```javascript
// Traditional function (Old syntax)
function add(a, b) {
    return a + b;
}

// Arrow Function (Modern syntax - ES6)
const add = (a, b) => a + b;
```

**Advantages of Arrow Functions:**
- Shorter and cleaner syntax.
- The return is implicit if it's a single line.
- They don't create their own `this` context (they inherit it from the parent).

## Higher Order Functions

These are functions that can receive other functions as arguments or return them. This allows much more modular code.

### `setTimeout()`
Executes a function after a determined time (in milliseconds).

```javascript
setTimeout(() => {
    console.log("1 second passed");
}, 1000);
```

### Map, Filter, and Reduce
As we saw in the Arrays section, these methods are the heart of functional programming in JavaScript since they operate using other functions (callbacks).