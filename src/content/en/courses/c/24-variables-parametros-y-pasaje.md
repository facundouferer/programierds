---
title: "Variables and Parameters"
---

Once you start working with functions, a central question appears:

> what data does each function know and how is that data passed to it?

That's where local variables, global variables, and parameter passing come into play.

In this lesson you will learn:

- what local and global variables are
- what formal and actual parameters are
- what pass by value is
- what pass by reference is
- how data changes inside and outside a function

## Local variables

A **local variable** is a variable declared inside a function.

It only exists inside that function and can only be used directly there.

### Example

```c
void greet() {
    int times = 1;
    printf("Hello %d\n", times);
}
```

The variable `times` is local to `greet`.

## Global variables

A **global variable** is declared outside all functions.

It can be used by several functions of the program.

### Example

```c
int counter = 0;

void increase() {
    counter = counter + 1;
}
```

## Conceptual difference

- the local variable belongs to a function
- the global variable belongs to the entire program or a much broader region

## Is it worth using global variables?

They can be useful in some cases, but they must be used with criteria.

Why? Because if many functions modify the same global variable, the program can become harder to understand and control.

For beginners, a good rule is:

> prefer local variables unless there's a clear reason to share the data.

## What is a parameter?

A **parameter** is data that a function receives to be able to work.

### Example

```c
int add(int a, int b) {
    return a + b;
}
```

Here, `a` and `b` are parameters of the function.

## Formal and actual parameters

This distinction is very important.

### Formal parameters

They are the names that appear in the function definition.

```c
int add(int a, int b)
```

Here, `a` and `b` are formal parameters.

### Actual parameters

They are the real values or variables passed when the function is invoked.

```c
result = add(5, 3);
```

Here, `5` and `3` are actual parameters.

## Pass by value

In **pass by value**, the function receives a copy of the data.

That means if the function modifies that parameter, the original doesn't change.

### Example

```c
#include <stdio.h>

void change(int x) {
    x = 100;
}

int main() {
    int number = 5;
    change(number);
    printf("%d\n", number);
    return 0;
}
```

The displayed value will still be `5`.

Why? Because `change` received a copy of `number`, not the original.

## Pass by reference

In C there isn't native "pass by reference" like in other languages, but the same practical effect can be achieved using **pointers**.

This is important to say well to not teach wrong.

When in introductory courses "pass by reference" is talked about in C, it's normally about passing the address of a variable through pointers, so the function can modify the original data.

### Conceptual example

```c
void change(int *x) {
    *x = 100;
}
```

And the call:

```c
change(&number);
```

## What changes here?

Now the function doesn't work on a simple copy of the value, but on the address of the original data.

That allows modifying the real variable.

## Complete example

```c
#include <stdio.h>

void change(int *x) {
    *x = 100;
}

int main() {
    int number = 5;
    change(&number);
    printf("%d\n", number);
    return 0;
}
```

Now the displayed value will be `100`.

## Comparison between both passes

### By value

- the function receives a copy
- the original doesn't change

### By simulated reference with pointers

- the function works on the address of the data
- the original can change

## When is each worth using?

### Pass by value

It's worth when you only want to use the data to calculate or query something.

### Pass by reference with pointers

It's worth when you want the function to be able to modify the original data.

## Common mistakes when starting

### 1. Believing that changing a parameter by value modifies the original

No. If it was passed by value, what is modified is the copy.

### 2. Using too many global variables

That makes it harder to understand where data comes from and who modifies it.

### 3. Confusing formal parameters with actual parameters

One belongs to the function definition. The other belongs to the call.

## Summary

- a local variable lives inside a function
- a global variable has broader scope
- formal parameters appear in the definition
- actual parameters appear in the invocation
- by value, a copy is passed
- in C, the pass by reference effect is achieved using pointers

## Final idea

Understanding scope and parameter passing completely changes the way you read functions.

Because from here on it not only matters what a function does, but also **with what data it works and what data it might modify**.