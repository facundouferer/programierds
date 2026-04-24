---
title: "Operators and Type Conversion"
---

# Operators and Type Conversion

## Basic Operators

### Arithmetic
- `+`, `-`, `*`, `/`
- `%` (modulus: division remainder)
- `++`, `--` (increment and decrement)

### Comparison
- `==` (equality: ignores the data type).
- `===` (strict equality: recommended! Compares value and type).
- `!=`, `!==` (inequality).
- `>`, `<`, `>=`, `<=`

### Logical
- `&&` (AND)
- `||` (OR)
- `!` (NOT)

### Assignment
- `=`, `+=`, `-=`, `*=`, `/=`

## Data Conversion (Casting)

Sometimes you need to transform one type into another:

```javascript
// To Number
Number("123"); // 123
parseInt("10.5"); // 10
parseFloat("10.5"); // 10.5

// To String
String(123); // "123"
(123).toString(); // "123"

// To Boolean
Boolean(1); // true
Boolean(0); // false
```
