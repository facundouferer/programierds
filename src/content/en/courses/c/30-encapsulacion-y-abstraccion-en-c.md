---
title: "Encapsulation and Abstraction"
---

Two central ideas of OOP are **encapsulation** and **abstraction**.

In C they don't appear as language keywords, but their ideas can be applied.

In this lesson you will learn:

- what encapsulation is
- what abstraction is
- how to use `struct` and functions to approximate these ideas in C
- why modules help a lot

## Encapsulation

**Encapsulation** consists of grouping related data and operations.

### Example

```c
struct Account {
    float balance;
};

void deposit(struct Account* account, float amount) {
    account->balance = account->balance + amount;
}
```

Here the account's data and the operations that affect it are conceptually related.

## Abstraction

**Abstraction** consists of showing what's important and hiding unnecessary details.

For example, to use an account, maybe you're interested in knowing you can deposit and withdraw money, not exactly how each piece of data is internally stored.

## Encapsulation and modules

In C, a very useful way to approximate encapsulation is to separate:

- the interface in `.h`
- the implementation in `.c`

That helps whoever uses the module think about "what it can do" and not necessarily about "how everything is implemented".

## Conceptual example

### In `account.h`

```c
struct Account;
void deposit(struct Account* account, float amount);
```

### In `account.c`

```c
struct Account {
    float balance;
};
```

## Summary

- encapsulation groups related data and behavior
- abstraction highlights what's important and hides unnecessary details
- in C they're approximated using `struct`, functions, and modules

## Final idea

Although C doesn't have encapsulation as a native OOP mechanism, it does allow designing programs where data and operations are kept organized with a lot of discipline.