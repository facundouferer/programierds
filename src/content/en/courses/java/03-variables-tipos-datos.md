---
title: "Variables and Data Types"
---

# Variables and Data Types

## Variables

Variables are memory spaces where we temporarily store data. Imagine them as "containers" labeled with a name and a data type.

```java
int age = 25;
age = 30; // We can change its value at any time
```

## Primitive Data Types

Java has 8 built-in basic data types:

### 1. Integers (Numbers without decimals)
| Type | Size | Range |
|---|---|---|
| `byte` | 8 bits | -128 to 127 |
| `short` | 16 bits | -32,768 to 32,767 |
| `int` | 32 bits | ~-2 billion to ~2 billion |
| `long` | 64 bits | Huge range (use 'L' at the end: `100L`) |

### 2. Floating-point numbers (Numbers with decimals)
| Type | Size | Use |
|---|---|---|
| `float` | 32 bits | Single precision (use 'f' at the end: `3.14f`) |
| `double` | 64 bits | Double precision (standard for decimals) |

### 3. Characters
- `char`: Stores a single Unicode character (use single quotes: `'a'`).

### 4. Booleans
- `boolean`: Can only be `true` or `false`.

## Summary table

| Type | Group | Size | Range |
|---|---|---|---|
| `boolean` | Logical | 1 bit | `true` or `false` |
| `byte` | Integer | 8 bits | -128 to 127 |
| `char` | Character | 16 bits | '\u0000' to '\uffff' |
| `int` | Integer | 32 bits | -2,147,483,648 to 2,147,483,647 |
| `double` | Real | 64 bits | ~1.7e308 |
