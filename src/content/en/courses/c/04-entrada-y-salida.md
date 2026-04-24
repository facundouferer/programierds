---
title: "Input and Output"
---

So far you've seen that a program can store information in variables. But a program really starts to be useful when it can **display information** and also **receive data**.

That's what we call **output** and **input**.

- **Output**: when the program sends information outward, for example to the screen.
- **Input**: when the program receives information from outside, for example when a person types with the keyboard.

In this lesson you will learn:

- what input and output mean in a program
- how to display messages and values with `printf`
- what format specifiers are
- how to read simple data with `scanf`
- why the `&` symbol sometimes appears
- common mistakes when starting with input and output

> Key idea: a program without input or output is like a person who thinks but doesn't speak or listen. It may have data inside, but it doesn't interact with anyone.

## What is data output?

**Data output** occurs when the program sends information outward.

In introductory C programs, the most common output is displaying text or values on the screen.

For example, a program can show:

- a welcome message
- the value of a variable
- the result of a calculation

In C, the most used function for this is `printf`.

## `printf`: displaying information on screen

The `printf()` function prints text on screen.

Example:

```c
#include <stdio.h>

int main() {
    printf("Hello, world\n");
    return 0;
}
```

That program displays the message `Hello, world`.

### What does `\n` mean?

Inside the text this appears:

```c
\n
```

That represents a **line break**.

That is, after displaying the text, the cursor moves to the next line.

For example:

```c
printf("First line\n");
printf("Second line\n");
```

The output would be:

```text
First line
Second line
```

## `printf` displaying only text

At first, `printf` can be used simply to display messages.

```c
printf("Welcome to the program\n");
printf("C is a powerful language\n");
```

Notice the text is between **double quotes**.

That indicates we're writing a literal message to display on screen.

## Displaying the value of a variable

`printf` isn't just for fixed text. It can also display the value stored in a variable.

Look at this example:

```c
#include <stdio.h>

int main() {
    int age = 18;
    printf("The age is %d\n", age);
    return 0;
}
```

Something new appears here:

```c
%d
```

That's called a **format specifier**.

## What is a format specifier?

A format specifier tells `printf` what data type it should display in that position of the text.

Think of it like this: inside the message we leave a reserved space so the value of a variable appears there later.

In this example:

```c
printf("The age is %d\n", age);
```

- the text is `The age is `
- `%d` tells `printf` that an integer goes there
- `age` is the variable whose value will be displayed

If `age` is `18`, the output will be:

```text
The age is 18
```

## Most common format specifiers when starting

For now, the most important ones are:

### `%d`

It's used to display `int` values.

```c
int quantity = 25;
printf("Quantity: %d\n", quantity);
```

### `%f`

It's used to display `float` values.

```c
float height = 1.75;
printf("Height: %f\n", height);
```

### `%c`

It's used to display `char` values.

```c
char initial = 'F';
printf("Initial: %c\n", initial);
```

## Examples separated by data type

### Displaying an integer

```c
#include <stdio.h>

int main() {
    int age = 20;
    printf("Age: %d\n", age);
    return 0;
}
```

### Displaying a decimal

```c
#include <stdio.h>

int main() {
    float price = 1499.50;
    printf("Price: %f\n", price);
    return 0;
}
```

### Displaying a character

```c
#include <stdio.h>

int main() {
    char letter = 'A';
    printf("Letter: %c\n", letter);
    return 0;
}
```

## Mixing text and values

One of the most useful things about `printf` is that it allows combining text with values.

```c
#include <stdio.h>

int main() {
    int age = 18;
    float height = 1.72;
    char initial = 'F';

    printf("Age: %d\n", age);
    printf("Height: %f\n", height);
    printf("Initial: %c\n", initial);

    return 0;
}
```

This makes the program's information visible in a clear way for whoever uses it.

## What is data input?

**Data input** occurs when the program receives information from outside.

In basic C programs, that usually happens when the user types data with the keyboard.

For example, the program can ask for:

- an age
- a number
- a letter
- a price

In C, one of the most well-known functions for reading basic data is `scanf()`.

## `scanf`: reading data entered by the user

The `scanf()` function reads data the user types.

Example:

```c
#include <stdio.h>

int main() {
    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("You are %d years old\n", age);

    return 0;
}
```

## What does this program do?

Step by step:

1. declares a variable called `age`
2. displays the message `Enter your age:`
3. waits for the user to type a number
4. stores that number in the variable `age`
5. displays the stored value

This already allows real interaction between the user and the program.

## The basic structure of `scanf`

The general form is:

```c
scanf("specifier", &variable);
```

For example:

```c
scanf("%d", &age);
```

Here:

- `%d` indicates an integer is expected
- `&age` indicates where the read value will be stored

## Why does `&` appear in `scanf`?

Great question. And yes, this part usually confuses beginners.

When you use `scanf`, the program needs to know **where to store** the data the user typed.

That's why the `&` symbol appears before the variable name.

At this stage, this idea is enough:

> `&variable` allows `scanf` to work directly with that variable to store the read data there.

No need to dive into more advanced explanations yet.

For now, stick with this practical rule:

- with `scanf`, to read `int`, `float`, and `char`, you normally use `&` before the variable

## Reading an integer with `scanf`

```c
#include <stdio.h>

int main() {
    int number;

    printf("Enter an integer: ");
    scanf("%d", &number);

    printf("The entered number is %d\n", number);

    return 0;
}
```

## Reading a decimal with `scanf`

```c
#include <stdio.h>

int main() {
    float price;

    printf("Enter a price: ");
    scanf("%f", &price);

    printf("The entered price is %f\n", price);

    return 0;
}
```

## Reading a character with `scanf`

```c
#include <stdio.h>

int main() {
    char initial;

    printf("Enter a letter: ");
    scanf(" %c", &initial);

    printf("The entered letter is %c\n", initial);

    return 0;
}
```

Notice this detail:

```c
" %c"
```

There's a space before `%c`.

And it's not there for nothing.

## A very common problem with `scanf` and `%c`

When we first read a number and then a character, this often happens:

- the program asks for a number
- we type the number and press Enter
- then the program asks for a letter
- but it seems to "skip" reading the character

Look at this example:

```c
#include <stdio.h>

int main() {
    int wheels;
    char brandInitial;

    printf("Enter the number of wheels: ");
    scanf("%d", &wheels);

    printf("Enter the initial of the brand: ");
    scanf("%c", &brandInitial);

    printf("Wheels: %d\n", wheels);
    printf("Initial: %c\n", brandInitial);

    return 0;
}
```

At first glance it looks correct. But it can fail.

## What's actually happening?

When you type a number like `4` and then press Enter, not only is the `4` entered.

The line break produced by the Enter key is also registered.

So, after this:

```c
scanf("%d", &wheels);
```

the number is stored in `wheels`, but the `\n` from Enter can remain in the input buffer.

Then, when you do this:

```c
scanf("%c", &brandInitial);
```

`scanf` takes the next available character.

And that next character can be exactly the line break `\n` that was left pending.

That's why it seems the program "skips" the prompt, when in reality it did read something: it read the previous Enter as a valid character.

## Simple solution

The most common practical solution when starting is to write a space before `%c`.

Like this:

```c
scanf(" %c", &brandInitial);
```

That space tells `scanf` to ignore any previous whitespace before reading the actual character.

### What does whitespace mean?

It means blank characters, for example:

- spaces
- tabs
- line breaks

So, if a `\n` from a previous Enter was left, that space makes `scanf` discard it and keep waiting for a real letter.

## Corrected example

```c
#include <stdio.h>

int main() {
    int wheels;
    char brandInitial;

    printf("Enter the number of wheels: ");
    scanf("%d", &wheels);

    printf("Enter the initial of the brand: ");
    scanf(" %c", &brandInitial);

    printf("Wheels: %d\n", wheels);
    printf("Initial: %c\n", brandInitial);

    return 0;
}
```

## Practical idea for beginners

When you use `scanf` to read a `char`, this form is a very good habit:

```c
scanf(" %c", &charVariable);
```

Not because there's always a problem, but because it avoids one of the most common mistakes when starting.

## Relationship between types and specifiers

There's a direct relationship between the data type and the specifier you use.

### For displaying with `printf`

- `int` → `%d`
- `float` → `%f`
- `char` → `%c`

### For reading with `scanf`

- `int` → `%d`
- `float` → `%f`
- `char` → `%c`

This needs to be learned well, because if you mix types and specifiers, the program stops behaving as expected.

## A complete input and output example

```c
#include <stdio.h>

int main() {
    int age;
    float height;
    char initial;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your height: ");
    scanf("%f", &height);

    printf("Enter the initial of your name: ");
    scanf(" %c", &initial);

    printf("Age: %d\n", age);
    printf("Height: %f\n", height);
    printf("Initial: %c\n", initial);

    return 0;
}
```

This program:

- receives data from the user
- stores it in variables
- then displays it on screen

There you clearly see how the lessons connect:

- first you learned variables
- now you see how to load them and how to display their contents

## Common mistakes when starting

### 1. Forgetting to include `stdio.h`

If you use `printf` or `scanf`, you need:

```c
#include <stdio.h>
```

### 2. Forgetting the semicolon

```c
printf("Hello")
```

That's wrong. In C, the statement must end with `;`.

Correct:

```c
printf("Hello");
```

### 3. Using the wrong format specifier

This is wrong:

```c
int age = 18;
printf("%f\n", age);
```

Why? Because `age` is `int`, and `%f` is used for `float`.

The correct way would be:

```c
printf("%d\n", age);
```

### 4. Forgetting `&` in `scanf`

This is wrong:

```c
scanf("%d", age);
```

The correct way is:

```c
scanf("%d", &age);
```

### 5. Wanting to read full text before the right time

Many beginners want to jump straight to full names or phrases.

But that should be covered later, when the strings lesson appears.

At this stage, the important thing is to master input and output of:

- integers
- decimals
- characters

## Summary

- **output** allows the program to display information
- **input** allows the program to receive information
- `printf()` is used to display text and values on screen
- `scanf()` is used to read simple data entered by the user
- `%d`, `%f`, and `%c` are fundamental specifiers when starting
- in `scanf()`, `&` normally appears before the variable
- input and output connect the program with whoever uses it

## Final idea

When a program can display and receive data, it stops being a closed sequence of instructions and starts becoming an interactive tool.

And that's a huge step.

Because programming isn't just about storing things in memory: it's also about being able to communicate with the user clearly.