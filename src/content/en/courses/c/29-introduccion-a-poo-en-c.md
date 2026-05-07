---
title: "OOP in C"
---

Here's the complete technical truth: **C is not an object-oriented language natively**.

It doesn't have classes, inheritance, or methods as language mechanisms like C++ or Java.

So, why talk about OOP in C?

Because many ideas of object-oriented programming can be **modeled** in C using:

- `struct`
- functions
- pointers
- modular organization

In this lesson you will learn:

- what OOP is at a conceptual level
- why C doesn't implement it natively
- how it can be simulated in C
- difference between structured programming and object-oriented programming
- benefits of applying object-oriented programming
- which ideas make sense to study in this context

## What is object-oriented programming?

**Object-oriented programming** organizes software around objects that combine:

- **state**
- **behavior**

State is the data.
Behavior is the operations that can be done on that data.

## Pillars of object-oriented programming

When talking about OOP, four classic pillars normally appear:

- encapsulation
- abstraction
- inheritance
- polymorphism

These pillars DON'T mean "four words to memorize". They mean four design ideas.

### 1. Encapsulation

**Encapsulation** consists of grouping related data and operations.

The idea is that an entity keeps together:

- its state
- the operations that act on that state

In C, this can be approximated by combining `struct` with related functions.

### 2. Abstraction

**Abstraction** consists of showing what's important and hiding unnecessary details.

For example, when using a bank account you're interested in knowing it can deposit or withdraw money, not all internal implementation details.

### 3. Inheritance

**Inheritance** allows building new types from others, reusing and extending features.

In C it doesn't exist as a native language mechanism, but some similar ideas can be simulated through structure composition.

### 4. Polymorphism

**Polymorphism** allows the same general idea of operation to adopt different behaviors depending on the context.

In C it also doesn't exist as a native object-oriented mechanism, but certain approximations can be built using function pointers.

## Important about pillars in C

Here's where VERY precise must be said:

- the pillars of OOP exist as design concepts
- C doesn't implement them natively like pure or hybrid object-oriented languages
- in C they're studied as ideas that can be modeled or partially simulated

That's why, when in this course we talk about OOP pillars in C, we talk about:

- **fundamental OOP concepts**
- and **how to approximate them with real C tools**

## Difference between structured programming and object-oriented programming

This part is VERY IMPORTANT, because many students hear "OOP" and think it's just another syntax. No. It's another way of organizing program thought.

### Structured programming

Structured programming mainly organizes the solution around:

- sequence
- decision
- iteration
- functions or procedures

The focus is usually on **the actions** the program performs.

That is: we think a lot about the flow of the algorithm.

For example:

- read data
- process data
- display results

### Object-oriented programming

Object-oriented programming organizes the solution around **entities** that have:

- their own data
- operations associated with that data

The focus is no longer just on "what steps to do", but also on **what objects exist in the problem and how they behave**.

### Short conceptual difference

- in structured programming, the center is usually the **algorithm**
- in object-oriented programming, the center is usually the **object model**

### Intuitive example

Suppose a bank accounts system.

#### In a structured approach

You might think something like:

- read balance
- deposit amount
- withdraw amount
- display balance

The attention is on the operations of the process.

#### In an object-oriented approach

You would think more like:

- there exists an **Account**
- the account has a **balance**
- the account can **deposit**
- the account can **withdraw**

Now the attention is on the entity and its behavior.

## Does it mean one replaces the other?

No.

And this needs to be said well.

Object-oriented programming DOESN'T eliminate structured programming. In fact:

- there still is sequence
- there still are decisions
- there still are iterations
- there still are functions

The difference is in **how the overall program design is organized**.

## Benefits of applying object-oriented programming

OOP became important because it helps organize complex systems better.

### 1. Better modeling of the problem

It allows representing entities from the problem's world in a more natural way.

For example:

- Account
- Student
- Product
- Rectangle

That makes the program look more like what it's trying to model.

### 2. Better code organization

When related data and operations are grouped, code usually ends up clearer.

Instead of having scattered logic, each entity better concentrates its responsibility.

### 3. Better maintenance

A well-thought-out object-oriented design usually makes future changes easier.

Why? Because if a responsibility is well-located, it's easier to modify without breaking everything else.

### 4. Reuse

When a structure or design is well-built, many ideas can be reused in different parts of the system or even in other projects.

### 5. Greater conceptual clarity

OOP helps think about software in terms of components with their own identity.

That doesn't always make code "shorter", but it often makes it **more understandable**.

## Warning: OOP doesn't magically solve everything

Here's also something to be honest about.

Object-oriented programming isn't a magic solution.

A bad object-oriented design can be worse than a simple and clear structured design.

The benefits appear when:

- the problem really justifies it
- the design is well thought out
- OOP isn't forced where it isn't needed

## What's missing in C?

In C there aren't:

- classes
- native objects
- methods tied to type as a language mechanism
- native inheritance
- native polymorphism

So, if someone tells you "C is object-oriented like Java", that's incorrect.

## What CAN be done in C?

A design with object-oriented inspiration can be built.

For example:

- represent an entity with `struct`
- define functions that work on that structure
- hide details through modules
- simulate polymorphism with function pointers

## First conceptual example

```c
struct Account {
    float balance;
};

void deposit(struct Account* account, float amount) {
    account->balance = account->balance + amount;
}
```

Here an idea similar to object already appears:

- the `Account` structure represents state
- the `deposit` function represents behavior

## So, is this real OOP?

Not in the native language sense.

But it IS a valid way to teach and apply object-oriented ideas within C.

## Summary

- structured programming puts a lot of focus on the algorithm and flow
- object-oriented programming puts a lot of focus on entities and their behavior
- OOP helps better model certain problems, organize code, and improve maintenance
- C is not a native object-oriented language
- still, it can model OOP concepts
- `struct` + functions + pointers allow building designs with an object-oriented style

## Final idea

In C, learning OOP doesn't mean learning "magical hidden classes".

It means learning to build abstractions with the real tools of the language.

And understanding the difference with structured programming helps you see that you're not just changing syntax: you're changing the way you think about program design.