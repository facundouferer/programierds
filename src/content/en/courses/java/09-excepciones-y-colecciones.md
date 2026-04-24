---
title: "Exceptions and Collections"
---

# Exceptions and Collections

## Exceptions

Exceptions are events that occur during execution and break the normal flow of the program.

### Handling with `try-catch-finally`

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: You cannot divide by zero.");
} finally {
    System.out.println("This code always runs.");
}
```

- **Checked:** The compiler forces you to handle them (for example, `IOException`).
- **Unchecked:** Logical errors (for example, `NullPointerException`).

## Collections

They are structures that allow us to manage groups of objects flexibly (unlike arrays).

- **Lists (`ArrayList`):** Allow duplicate elements and keep order.
- **Sets:** Do not allow duplicates.
- **Maps:** Store key-value pairs.

```java
List<String> names = new ArrayList<>();
names.add("Java");
names.add("Spring");
```
