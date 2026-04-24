---
title: "Control Flow"
---

# Control Flow

Control structures allow us to decide which path our program follows based on conditions or by repeating tasks.

## Conditional Structures

### The `if / else` block
It lets us execute code only if a condition is met.

```java
int num = 10;
if (num > 0) {
    System.out.println("It is positive");
} else if (num == 0) {
    System.out.println("It is zero");
} else {
    System.out.println("It is negative");
}
```

### `switch-case` structure
Ideal for evaluating a single variable against multiple possible values.

```java
int day = 1;
switch(day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    default: System.out.println("Another day");
}
```

## Repetition Structures (Loops)

### `while` loop
Repeats while the condition is true.

```java
int i = 0;
while (i < 5) {
    System.out.println("Counting: " + i);
    i++;
}
```

### `for` loop
Ideal when we know how many times we want to repeat something.

```java
for (int j = 0; j < 5; j++) {
    System.out.println("Iteration: " + j);
}
```
