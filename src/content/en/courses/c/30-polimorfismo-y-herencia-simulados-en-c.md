---
title: "Inheritance and Polymorphism in C"
---

Two of the most famous OOP ideas are **inheritance** and **polymorphism**.

C doesn't offer them natively, but certain behaviors can be simulated with design and function pointers.

In this lesson you will learn:

- why inheritance and polymorphism aren't native in C
- how they can be conceptually approximated
- what role function pointers play

## Simulated inheritance

A simple way to approximate inheritance in C is to compose related structures.

### Conceptual example

```c
struct Person {
    char name[30];
};

struct Student {
    struct Person person;
    int studentId;
};
```

Here `Student` contains a `Person` and adds more information.

It's not native inheritance, but it resembles an extension of behavior or structure.

## Polymorphism simulated with function pointers

Function pointers allow choosing which behavior to execute.

### Conceptual example

```c
typedef void (*GreetingAction)();
```

And then different functions could fulfill different behaviors under the same general idea.

## Why does this matter?

Because it shows that design ideas can survive even though the language doesn't have the specific syntax.

But it's also important to be honest:

- it's not the same as native OOP
- it requires more manual work
- it requires more design discipline

## Summary

- C doesn't have native inheritance or polymorphism
- some ideas can be approximated with composition and function pointers
- this allows building more flexible designs within the real limits of the language

## Final idea

Learning OOP in C is learning to separate concept from syntax.

And that makes you a better programmer, because you stop depending on "magic words" of the language and start understanding the design behind it.