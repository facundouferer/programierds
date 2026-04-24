---
title: "Design Patterns"
---

# Design Patterns

Design patterns are proven solutions to common problems in software development. They are not rigid rules, but guidelines.

## Classification

1. **Creational Patterns:** Focus on how objects are created (for example, `Singleton`, `Factory`).
2. **Structural Patterns:** How objects are organized and composed (for example, `Adapter`, `Composite`).
3. **Behavioral Patterns:** How objects interact and communicate.

## State Pattern
Allows an object to change its behavior when its internal state changes. Ideal for avoiding many complex `if/else` blocks.

**Example:** A music player with `Playing`, `Paused`, and `Stopped` states.

## Template Method Pattern
Defines the structure of an algorithm in a superclass, but allows subclasses to override specific steps without changing the overall structure.

**Example:** A board game where all games have the steps `start()`, `play()`, and `finish()`, but each game implements them differently.
