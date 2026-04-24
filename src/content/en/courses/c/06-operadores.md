---
title: "Operators"
---

Once you understand what data types exist, the natural next step is learning **what you can do with that data**.

That's where **operators** come in.

An operator is a symbol that tells the program what action to perform with one or more values.

In this lesson you will learn:

- what an operator is
- math operators
- relational operators
- logical operators
- assignment operators
- precedence between operators

> Key idea: operators are part of the language with which you build expressions. If you don't understand what each one does and in what order they act, code becomes confusing very fast.

## What is an operator?

An **operator** is a symbol that represents an operation.

For example, in math you already know symbols like:

- `+`
- `-`
- `*`
- `/`

In programming it's similar, but in addition there are operators to:

- compare values
- combine logical conditions
- assign values to variables

## What is an expression?

Before continuing, you need this idea.

An **expression** is a combination of values, variables, and operators that produces a result.

For example:

```c
5 + 3
```

That's an expression.

Also:

```c
age + 1
```

And also:

```c
grade >= 6
```

Operators are part of those expressions.

## Math operators

Math operators allow performing numeric calculations.

The most important when starting are:

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` remainder of integer division

## Addition `+`

```c
int a = 10;
int b = 5;
int result = a + b;
```

Here, `result` is `15`.

## Subtraction `-`

```c
int a = 10;
int b = 5;
int result = a - b;
```

Here, `result` is `5`.

## Multiplication `*`

```c
int a = 4;
int b = 3;
int result = a * b;
```

Here, `result` is `12`.

## Division `/`

```c
int a = 10;
int b = 2;
int result = a / b;
```

Here, `result` is `5`.

### Attention with integer division

Look at this example:

```c
int result = 5 / 2;
```

If you're working with integers, the result doesn't preserve the decimal part.

That is, in this context the result will be `2`.

This surprises many people at first, but it needs to be understood well: **the data type influences the result of the operation**.

## Remainder `%`

The `%` operator returns the remainder of integer division.

```c
int remainder = 10 % 3;
```

Here, `remainder` is `1`, because:

- `10 / 3` gives `3`
- `1` remains

This operator only makes sense with integer values at the level we're working.

## Assignment operators

Assignment operators serve to store a value in a variable.

The most important and fundamental is:

- `=` simple assignment

## Simple assignment `=`

```c
int age;
age = 18;
```

Here, the `=` operator takes the value `18` and stores it in the variable `age`.

This is VERY IMPORTANT: in programming, `=` doesn't mean the same as in school math.

In C:

```c
age = 18;
```

doesn't mean "age equals 18" as an abstract statement, but:

> store 18 inside the variable `age`

## Assignment using the previous value of the variable

```c
int age = 18;
age = age + 1;
```

This can be read like this:

1. take the current value of `age`
2. add `1` to it
3. store the result back in `age`

At the end, `age` is `19`.

## Combined assignment operators

Besides `=`, there are very commonly used shorthand forms:

- `+=`
- `-=`
- `*=`
- `/=`
- `%=`

### `+=`

```c
int points = 10;
points += 5;
```

Is equivalent to:

```c
points = points + 5;
```

### `-=`

```c
int stock = 20;
stock -= 3;
```

Is equivalent to:

```c
stock = stock - 3;
```

### `*=`

```c
int value = 4;
value *= 2;
```

Is equivalent to:

```c
value = value * 2;
```

### `/=`

```c
int number = 20;
number /= 4;
```

Is equivalent to:

```c
number = number / 4;
```

### `%=`

```c
int remainder = 10;
remainder %= 3;
```

Is equivalent to:

```c
remainder = remainder % 3;
```

## What are relational operators?

Relational operators serve to **compare values**.

They're used to answer questions like:

- is it equal?
- is it different?
- is it greater?
- is it less?

The main ones are:

- `==` equal to
- `!=` not equal to
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to

## Examples of relational operators

```c
age == 18
age != 18
grade > 6
price < 1000
quantity >= 10
quantity <= 20
```

Although you'll use them later with decision structures, for now the important thing is understanding the meaning of each comparison.

## Difference between `=` and `==`

This is one of the most common mistakes when starting.

- `=` assigns a value
- `==` compares two values

Look at the difference:

```c
age = 18;
```

That assigns.

```c
age == 18
```

That compares.

Don't confuse these two things because they completely change the meaning of the code.

## What are logical operators?

Logical operators allow combining or modifying relational expressions.

The most important are:

- `&&` means "and"
- `||` means "or"
- `!` means "not" or negation

## Logical operator `&&`

It's used when you want two expressions to be true at the same time.

```c
age >= 18 && age <= 65
```

The conceptual idea is:

- the first comparison must be true
- and the second must also be true

## Logical operator `||`

It's used when it's enough that at least one of the expressions is true.

```c
letter == 'a' || letter == 'A'
```

## Logical operator `!`

It's used to negate an expression.

```c
!(age == 18)
```

This expresses the negation of that comparison.

## Important: for now understand the meaning, don't jump ahead

Relational and logical operators are very commonly used together with decision statements.

But DON'T jump ahead to that lesson.

At this stage the important thing is understanding what each operator means and what kind of conceptual result a comparison or logical combination produces.

## Precedence between operators

When an expression has several operators, it doesn't always evaluate from left to right without more.

There's an **order of precedence**, that is, an order of priority.

Think of it like the rules of a math calculation.

For example, in math you know multiplication has priority over addition.

In C something similar happens.

## General simplified rule for starting

Without going into all the advanced rules yet, you can start with this general order:

1. parentheses `()`
2. arithmetic operators like `*`, `/`, `%`
3. arithmetic operators like `+`, `-`
4. relational operators like `>`, `<`, `>=`, `<=`
5. equality operators like `==`, `!=`
6. logical operator `&&`
7. logical operator `||`
8. assignment `=` and combined assignment operators

This simplified version is very good for starting to read expressions.

## Precedence example

```c
int result = 2 + 3 * 4;
```

First this is resolved:

```c
3 * 4
```

Then:

```c
2 + 12
```

Therefore, `result` is `14`.

## Using parentheses for clarity

If you want to make an expression clearer, use parentheses.

```c
int result = (2 + 3) * 4;
```

Now first this is resolved:

```c
2 + 3
```

And then multiplied by `4`.

The result will be `20`.

Parentheses don't just serve to change the order. They also serve to make code clearer when reading it.

## Common mistakes when starting

### 1. Confusing `=` with `==`

It's the classic beginner error.

- `=` assigns
- `==` compares

### 2. Forgetting precedence

```c
int result = 2 + 3 * 4;
```

If you assume this gives `20`, you're wrong.

### 3. Believing division always preserves decimals

```c
int result = 5 / 2;
```

With integers, that result doesn't preserve the decimal part.

### 4. Using operators without thinking about the data type

The data type influences the operation and the result.

### 5. Writing too-confusing expressions

When an expression starts to look tangled, parentheses help a lot to make the intention explicit.

## Summary

- an **operator** is a symbol that represents an action on values
- math operators allow doing calculations
- relational operators allow comparing values
- logical operators allow combining or negating comparisons
- assignment operators allow storing results in variables
- `=` and `==` don't mean the same thing
- **precedence** defines the order in which operators are evaluated
- parentheses help control and clarify that order

## Final idea

Operators are the internal language with which you start building more powerful expressions.

But be careful: it's not just about memorizing symbols.

It's about understanding:

- what each operator does
- with what type of data it makes sense to use it
- what result it produces
- in what order it acts within an expression

If that's clear to you, then more complex structures are understood MUCH better.