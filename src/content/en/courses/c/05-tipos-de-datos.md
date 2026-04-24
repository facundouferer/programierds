---
title: "Data Types"
---

In previous lessons you saw that a C program needs a basic structure, can store information in variables, and can display or receive data.

Now a FUNDAMENTAL question appears:

> What kind of data am I actually storing?

The answer to that question has to do with **data types**.

In C, it's not enough to say "I want to store a value." You also have to say **what type of value it is**.

In this lesson you will learn:

- what a data type is
- what primitive data types are
- what the domain of each type is
- what operations are valid according to the type
- how types relate to memory
- what composite data is
- what data structures are
- what the difference is between static and dynamic structures
- how constants and variables relate to data types

> Key idea: the data type defines what a variable can store, what operations make sense on that value, and how it's represented in memory.

## What is a data type?

A **data type** is a classification that tells the language:

- what kind of value will be stored
- what operations can be done with that value
- how much memory space it might need
- how that content should be interpreted

For example, it's not the same to store:

- an integer number
- a number with decimals
- a character

Even though all are "data," they're not represented the same way or worked with the same way.

## Why does C need data types?

Because C is a language where data handling must be explicit.

If you want to store an age, you'll normally use an integer.
If you want to store a height, you'll probably use a decimal.
If you want to store an initial, you'll use a character.

That means the program needs to know in advance how to treat each value.

## Primitive data types

**Primitive** types are the basic types the language offers to represent simple data.

At a first stage, the most important ones are:

- `int`
- `float`
- `double`
- `char`

### `int`

It's used to represent integer numbers, that is, numbers without a decimal part.

```c
int age = 18;
int studentCount = 32;
int year = 2026;
```

### `float`

It's used to represent numbers with decimals.

```c
float height = 1.75;
float price = 1499.50;
float average = 8.4;
```

### `double`

It also represents numbers with decimals, but with greater precision than `float`.

```c
double distance = 12345.6789;
double temperature = 21.4567;
```

### `char`

It's used to represent a single character.

```c
char initial = 'F';
char letter = 'A';
char symbol = '#';
```

Notice something important: a `char` represents **a single character**, not a complete word.

## Domain of each type

The **domain** of a data type is the set of values that type can represent.

Put more simply: each type has a range or universe of possible values.

### Domain of `int`

`int` represents integer numbers.

For example:

- positive values
- negative values
- zero

```c
int temperature = -3;
int count = 0;
int age = 20;
```

### Domain of `float` and `double`

`float` and `double` represent approximated real numbers, that is, values with a decimal part.

```c
float height = 1.72;
double distance = 1500.3456;
```

### Domain of `char`

`char` represents a single character.

```c
char letter = 'Z';
char digit = '7';
char symbol = '*';
```

Be careful with this: `'7'` is not the same as `7`.

- `'7'` is a character
- `7` is an integer number

That completely changes the data type.

## Valid operations according to type

Not all types admit the same operations in the same way.

Here's one of the most important ideas of the lesson: **the data type determines what operations make sense**.

### Valid operations with `int`

With integers it makes sense to do math operations like:

- add
- subtract
- multiply
- divide

```c
int a = 10;
int b = 5;
int result = a + b;
```

### Valid operations with `float` and `double`

They also admit math operations.

```c
float price1 = 10.5;
float price2 = 2.5;
float total = price1 + price2;
```

### Operations with `char`

With `char`, the basic initial use isn't "doing math," but representing characters.

```c
char initial = 'F';
```

Although internally a character has a numeric representation, when starting it's better to think of `char` as a type for storing **an individual symbol**.

## When an operation doesn't make pedagogical sense

Here's something important: not everything the language allows is worth teaching from the start.

For example, at more advanced levels you'll discover that certain types can participate in automatic conversions or more complex behaviors.

But when starting, the correct thing is to understand this:

- `int`, `float`, and `double` are used to work with numeric values
- `char` is used to represent a character

First we build the correct idea. Later there's time to refine it.

## Memory occupation

Each data type occupies space in memory.

That means not all types store information the same way or with the same size.

### Important idea about size

The exact size of a type can depend on the implementation, the compiler, and the architecture where the program runs.

That is: it's NOT serious to teach that all sizes are absolutely fixed on any machine.

However, for starting, you can stick with this idea:

- `char` usually occupies less memory than `int`
- `int` usually occupies less memory than `double`
- the more complex or precise the data, the more memory it might require

### Relationship between type and memory

Choosing a type isn't just choosing a "technical name." It's also deciding:

- what kind of value you want to represent
- how much precision you need
- how that value will be stored

That will matter a lot later when you work with larger structures and with data collections.

## Conceptual memory example

Think about these declarations:

```c
char initial = 'F';
int age = 18;
double distance = 1234.5678;
```

Although the three variables store data, they don't do it the same way.

- `initial` stores a single character
- `age` stores an integer
- `distance` stores a decimal number with greater precision

That's why it wouldn't make sense to assume all three occupy the same space in memory.

## Data types: constants and variables

Data types relate to both **variables** and **constants**.

### Typed variable

```c
int age = 18;
```

Here:

- `int` is the type
- `age` is the variable
- `18` is the value

### Typed constant

```c
const int daysInWeek = 7;
```

Here:

- `int` is still the data type
- `daysInWeek` is a constant
- `7` is the fixed value

The difference between variable and constant doesn't change the concept of type. What changes is whether that value can be modified or not.

## What is composite data?

Until now we've talked about simple or basic data.

But often a single piece of data isn't enough.

For example, a person might need:

- name
- age
- height
- initial

That's no longer an isolated simple piece of data, but a set of related data.

We can connect that general idea with **composite data**.

A **composite data** item is data formed by several elements or by a more complex organization than an individual primitive value.

## Conceptual examples of composite data

Without going into technical detail yet, some examples of composite data or structures that group data are:

- arrays
- strings
- records or structures
- lists
- stacks
- queues
- trees

You don't need to master them now. The important thing is to understand that there are levels of organization more complex than a single `int` or a single `char`.

## What is a data structure?

A **data structure** is a way of organizing data so it can be stored, accessed, and worked with in an orderly manner.

That is: it's not just about "having data," but about **how we organize it**.

For example:

- sometimes you want to store several values of the same type
- other times you want to group different data that belongs to the same entity
- other times you need an organization that facilitates certain operations

That's exactly the terrain of data structures.

## Static and dynamic structures

Data structures can generally be classified into **static** and **dynamic**.

### Static structures

Those whose size or capacity is defined in a fixed way.

The main idea is that their size is predetermined.

You'll see clear examples of this later.

### Dynamic structures

Those whose organization can grow or change during program execution.

This allows more flexibility, but also requires more careful handling.

For now there's no need to go deeper. These two ideas are enough:

- static: more fixed or predefined size
- dynamic: more flexible size or organization during execution

## Why does this distinction matter?

Because it's not the same to store:

- a single number
- several numbers
- a collection of elements whose size you already know
- a collection whose size can change

Each need calls for a different organization.

And all of that starts, precisely, by first understanding what a simple data type is.

## Common mistakes when starting

### 1. Believing all data is the same

No.

It's not the same to store an integer, a decimal, or a character.

### 2. Choosing a type without thinking about what it represents

The type should be chosen by the actual data you want to model.

### 3. Confusing a character with a number

```c
char digit = '7';
int number = 7;
```

They don't represent the same thing.

### 4. Thinking the size of each type is universal and fixed

In real programming, the exact size can depend on the environment.

### 5. Mixing the concept of type with variable

The type describes the nature of the data.
The variable is the name of the space where you store it.

## Summary

- a **data type** defines what kind of value can be stored
- the most important primitive types when starting are `int`, `float`, `double`, and `char`
- each type has a **domain** of possible values
- not all types admit the same operations with the same meaning
- types are also related to **memory occupation**
- variables and constants always have a data type
- besides primitive data, there are **composite data** and **data structures**
- structures can be **static** or **dynamic**

## Final idea

When you choose a data type, you're not writing a technical word for the sake of it.

You're making a design decision about:

- what the data represents
- how it's stored
- what can be done with it
- how the program should interpret it

And that, my friend, is one of the most important foundations of all programming.