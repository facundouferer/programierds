---
title: "Structures (struct)"
---

Arrays work when all data is of the same type. But in many real problems you need to group different pieces of data that belong to the same entity.

That's where the concept of **structure** appears.

In this lesson you will learn:

- what a structure is
- how to declare it in C
- how to create variables of that type
- how to access its fields

## What is a structure?

A **structure** is a composite data type that groups several related pieces of data, even if they're of different types.

### Conceptual example

A person might have:

- name
- age
- height

## Declaration with `struct`

```c
struct Person {
    char name[30];
    int age;
    float height;
};
```

## Creating a structure variable

```c
struct Person student;
```

## Accessing fields

```c
student.age = 20;
student.height = 1.75;
```

## Complete example

```c
#include <stdio.h>

struct Person {
    char name[30];
    int age;
    float height;
};

int main() {
    struct Person student = {"Facu", 20, 1.75};

    printf("Name: %s\n", student.name);
    printf("Age: %d\n", student.age);
    printf("Height: %f\n", student.height);

    return 0;
}
```

## Why do structures matter so much?

Because many dynamic structures are built from nodes represented with `struct`.

## Summary

- a structure groups related data of different types
- it's declared with `struct`
- its fields are accessed with `.`
- it's key for modeling entities and creating more complex structures

## Final idea

Structures are the step that allows you to model information with meaning and not just store isolated values.