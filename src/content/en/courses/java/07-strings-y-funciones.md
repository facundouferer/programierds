---
title: "Strings and Functions"
---

# Strings and Functions

## The String type

Unlike primitive types, `String` is an object that represents a sequence of characters.

### Immutability
Strings in Java are immutable. If you change the value of a String, Java creates a new object in memory.

```java
String greeting = "Hello";
greeting = greeting + " world"; // A new "Hello world" object is created
```

### Useful String methods
- `length()`: Length of the text.
- `toUpperCase()` / `toLowerCase()`: Change to uppercase/lowercase.
- `contains("text")`: Checks whether it contains a word.
- `indexOf("a")`: Finds the position of a character.
- `equals("other")`: Compares contents (do not use `==`!).

## Functions (Methods)

A function is a reusable block of code that performs a specific task.

```java
public static int sum(int a, int b) {
    return a + b;
}

// Call:
int result = sum(5, 3);
```

### Structure of a function:
1. **Return type:** The data it returns (`int`, `String`, `void` if it returns nothing).
2. **Name:** To identify it.
3. **Parameters:** Data it receives to work with.
4. **Body:** The code inside `{ }`.
