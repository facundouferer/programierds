---
title: "Data Types and Weird Values"
---

# Data Types

## Primitive Types
- **Number:** Numbers of any kind (integers or decimals).
- **String:** Text values.
- **Boolean:** `true` or `false`.

## The "Weird Values"
JavaScript has unique behavior with certain values that can be confusing at first:

### 1. NaN (Not-a-Number)
It happens when you perform an invalid math operation (for example, `"hello" * 2`).
- Fun fact: `typeof NaN` is `"number"`.
- `NaN === NaN` is `false`! You must use `isNaN()` to check it.

### 2. null
It represents the intentional absence of a value. It is an object (`typeof null` is `"object"`).

### 3. undefined
It means a variable has been declared but has not been assigned any value yet.

### 4. Falsy Values
In boolean contexts (such as an `if`), these values evaluate to `false`:
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `false`

### The `typeof` operator
It is used to know the type of data a variable has at that moment.

```javascript
let x = 10;
console.log(typeof x); // "number"
```
