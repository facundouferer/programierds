---
title: "Objects and Methods in C"
---

If you want to think in an object-oriented style within C, there's a fundamental idea:

> a `struct` can represent state, and a set of functions can represent methods.

In this lesson you will learn:

- how to think of an "object" in C
- how to associate behavior with a structure
- how to better design functions that operate on an entity

## State + behavior

### State

```c
struct Rectangle {
    float base;
    float height;
};
```

### Behavior

```c
float calculateArea(struct Rectangle r) {
    return r.base * r.height;
}
```

## Where would the "method" be here?

In C, the method isn't embedded within the structure like in native object-oriented languages.

But conceptually, `calculateArea` fulfills a similar role: it's an operation propre to `Rectangle`.

## Clearer design with pointers

```c
void scale(struct Rectangle* r, float factor) {
    r->base = r->base * factor;
    r->height = r->height * factor;
}
```

Here the function directly modifies the state of the structure.

## Summary

- in C, a `struct` can represent the state of an entity
- related functions can be thought of as its conceptual methods
- this approach helps design clearer and more organized software

## Final idea

OOP in C isn't about imitating foreign syntax, but about building a design where each entity has clear data and coherent operations on that data.