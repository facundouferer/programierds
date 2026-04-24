---
title: "Variables and Constants"
---

**Variables** and **constants** are the foundation of almost every program. Before asking the user for data, before making decisions, and before repeating tasks, a program needs to **store information**.

In C, that information is stored in memory using names we choose.

In this lesson you will learn:

- what a variable is
- what declaring, initializing, and assigning mean
- how to name variables correctly in C
- what basic data types are used most frequently
- what a constant is and when to use it

> Key idea: if you don't understand variables and constants well, everything that comes after becomes harder. This part is FUNDAMENTAL.

## What is a variable?

A **variable** is a memory space that has:

1. a **data type**
2. a **name**
3. a **value** that can change

Think of it like a box with a label.

- The **label** is the name of the variable.
- The **contents** of the box is the stored value.
- The **data type** indicates what kind of value can be stored there.

For example:

```c
int age = 18;
```

In that line:

- `int` indicates the variable will store an integer
- `age` is the name of the variable
- `18` is the initial value

## Why do we need variables?

Because programs work with data.

For example, a program might need to store:

- a person's age
- a product's price
- the initial of a name
- the number of students in a course

If we couldn't store those values, the program would have nothing to work with.

Look at this example:

```c
int studentCount = 30;
float price = 1499.50;
char initial = 'F';
```

There the program is storing three different pieces of data:

- `studentCount` stores an integer
- `price` stores a decimal number
- `initial` stores a single character

## Variables and memory

When a program runs, it uses RAM memory.

Each variable occupies part of that memory. You don't need to know the exact address where it's stored yet, but you should understand the general idea: **each variable reserves a place to store a data item**.

We can imagine it like this:

```text
age              -> 18
price            -> 1499.50
initial          -> F
```

This doesn't mean memory actually looks like this, but it serves as a mental model to start with.

The important thing is understanding that the variable name allows the program to find the stored value.

## Declaring a variable

**Declaring** a variable means informing the compiler that this variable will exist and what data type it will store.

The general form is:

```c
type variableName;
```

Example:

```c
int age;
```

This line declares a variable called `age` that can store integer numbers.

We haven't given it a value yet. We've only said that this variable exists.

## Initializing a variable

**Initializing** a variable means giving it a value at the same moment it's declared.

Example:

```c
int age = 18;
```

Two things happen at once:

1. the variable `age` is declared
2. the value `18` is assigned to it

Initializing is usually a very good practice, because it makes the code clearer and avoids using variables without a valid value.

## Assigning a value

**Assigning** a value means storing data inside a variable that already exists.

Example:

```c
int age;
age = 18;
```

First we declare the variable.
Then we assign a value to it.

This is different from initializing, because initialization occurs on the same line as the declaration.

## Declaring, initializing, and assigning: important difference

These three ideas are similar, but they are NOT the same.

### Declaration only

```c
int age;
```

The variable exists, but it hasn't received a value by our decision yet.

### Declaration with initialization

```c
int age = 18;
```

The variable is created and already starts with a value.

### Later assignment

```c
int age;
age = 18;
```

The variable is created first and receives the value afterward.

Understanding this difference is extremely important, because in programming the moment when a value appears also matters.

## Basic data types you will use when starting

In C, every variable needs a type. The type defines what kind of data can be stored.

For now, the most important ones to start with are:

### `int`

It's used for integer numbers, that is, numbers without a decimal part.

```c
int count = 25;
int year = 2026;
int minTemperature = 8;
```

### `float`

It's used for numbers with decimals.

```c
float height = 1.75;
float price = 2500.50;
float average = 8.4;
```

### `char`

It's used to store **a single character**.

```c
char letter = 'A';
char initial = 'F';
char symbol = '#';
```

Notice something important: `char` values are written between **single quotes**.

```c
char letter = 'A';
```

That represents a single character.

> Later you'll see how to work with complete text. For now it's enough to understand that `char` stores a single character.

## Complete and explained example

Look at this simple program:

```c
int main() {
    int age = 18;
    float height = 1.72;
    char initial = 'F';

    return 0;
}
```

What's happening there?

- `age` stores an integer
- `height` stores a decimal number
- `initial` stores a character

The program doesn't display anything on screen yet. And that's fine. In this lesson the goal isn't to display data, but to understand how data is stored.

## The value of a variable can change

The word **variable** precisely indicates that its value can vary.

Example:

```c
int age = 18;
age = 19;
```

At the end of that fragment, the value stored in `age` is `19`.

The variable is the same, but its contents changed.

Another example:

```c
float price = 1500.00;
price = 1750.00;
```

Now `price` is no longer `1500.00`, but `1750.00`.

## Don't use variables without giving them a reliable value

One of the most dangerous bad habits when starting is declaring a variable and using it without having assigned a clear value.

For example:

```c
int age;
```

That variable exists, yes. But if you haven't given it a value with an assignment, you shouldn't assume it contains useful data for your program.

That's why, when possible, it's better to initialize:

```c
int age = 0;
float price = 0.0;
char initial = ' ';
```

The initial value won't always be zero or a space, but the important idea is this: **the program must know what value it starts working with**.

## Rules for naming variables in C

You can't just put any name. C has rules.

A variable name:

- can use letters
- can use numbers
- can use underscore `_`
- must start with a letter or with `_`
- cannot start with a number
- cannot have spaces
- cannot be a reserved word of the language

### Valid examples

```c
age
studentAge
number1
_total
finalPrice
```

### Invalid examples

```c
1age
my age
float
price-final
```

Why are they invalid?

- `1age` starts with a number
- `my age` has a space
- `float` is a reserved word of the language
- `price-final` has a hyphen, which isn't part of the name

## Good practices when naming variables

One thing is that a name is valid and another very different thing is that it's clear.

Look at these examples:

```c
int x;
float a;
char z;
```

That can compile, but it communicates very little.

Now look at this:

```c
int studentCount;
float productPrice;
char nameInitial;
```

Much better.

A good name helps understand the program without having to guess.

### Recommendations

- use names that describe the data
- avoid names that are too short if they don't add clarity
- keep a consistent naming approach

## What is a constant?

A **constant** is data whose value should not change during program execution.

That is:

- a variable can change
- a constant must remain the same

This is useful when there are fixed values that have important meaning in the program.

For example:

- the number of days in a week
- the number of months in a year
- the approximate value of PI

## Declaring constants with `const`

In C, a constant can be declared using the `const` keyword.

Example:

```c
const int daysInWeek = 7;
const int monthsInYear = 12;
const float PI = 3.14159;
```

In these cases, those values are defined to not be modified afterward.

## Difference between variable and constant

Look at this example:

```c
int age = 18;
const int daysInWeek = 7;
```

- `age` can change
- `daysInWeek` shouldn't change

If later in the code you write:

```c
daysInWeek = 8;
```

that's wrong, because it contradicts the idea of having declared that data as a constant.

The important teaching here isn't memorizing a compiler error, but understanding the concept: **if a value shouldn't change, declaring it as a constant makes the program clearer and safer**.

## When is it worth using a constant?

It's worth using a constant when a value:

- represents a fixed rule
- has the same meaning throughout the program
- shouldn't be accidentally modified

Example:

```c
const int bicycleWheelCount = 2;
const int hoursInDay = 24;
```

If those values are part of the program's logic, declaring them as constants better communicates the intention.

## Example comparing variables and constants

```c
int age = 18;
const int monthsInYear = 12;
```

In that code:

- `age` represents data that could change
- `monthsInYear` represents fixed data

That conceptual difference is more important than the syntax.

## Common mistakes when starting

### 1. Confusing the name with the value

```c
int age = 18;
```

- `age` is the name
- `18` is the value

They are not the same.

### 2. Believing that declaring is the same as initializing

No.

```c
int age;
```

That only declares.

```c
int age = 18;
```

That declares and initializes.

### 3. Using unclear names

```c
int a;
int data;
```

That says very little.

Better:

```c
int studentCount;
```

### 4. Using a variable without having decided what value it starts with

When you're just starting, it's best if each important variable has a clear initial value.

### 5. Declaring as a variable something that should actually be a constant

If a value isn't going to change, using `const` makes the code better express its intention.

## Summary

- a **variable** stores data that can change
- a **constant** stores data that should not change
- in C, every variable needs a **type** and a **name**
- **declaring** is creating the variable
- **initializing** is giving it a value when declaring it
- **assigning** is giving it a value after having declared it
- `int`, `float`, and `char` are basic types very used when starting
- a good name makes code much more understandable
- `const` is used to represent fixed values

## Final idea

When you program, you're not writing code for the sake of it: you're telling the computer **what data exists** and **how it should be treated**.

Variables and constants are the first great tool for modeling that information.

If this is clear to you, the rest of the path starts to make sense.