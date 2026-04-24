---
title: "Lambdas and Functional Interfaces"
---

# Lambdas and Functional Interfaces

Java supports the functional programming paradigm since version 8.

## Functional Interfaces

It is an interface that has exactly one abstract method. They are usually marked with `@FunctionalInterface`.

```java
@FunctionalInterface
public interface Operation {
    int execute(int a, int b);
}
```

## Lambda Expressions

They are a concise way to implement a functional interface without creating a full class.

**Syntax:** `(parameters) -> expression`

```java
// Lambda example for addition
Operation sum = (a, b) -> a + b;
System.out.println(sum.execute(5, 3)); // 8
```

## Stream API and Applications

Lambdas are very powerful when used with collections:

- `forEach`: Iterates through elements.
- `filter`: Filters elements according to a condition.
- `map`: Transforms elements.
- `anyMatch` / `allMatch`: Checks conditions.

### Example:
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
List<Integer> even = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
// Result: [2, 4, 6]
```
