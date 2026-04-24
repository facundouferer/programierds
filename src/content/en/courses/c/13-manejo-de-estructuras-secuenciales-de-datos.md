---
title: "Sequential Data Structures"
---

So far you've worked with individual variables. But when a program needs to handle many related pieces of data, a better way of organizing them is needed.

That's where handling **sequential data structures** appears.

In this lesson you will learn:

- what a sequential data structure is
- why individual variables aren't enough
- what it means for data to be ordered in a sequence
- what operations are commonly done on a sequence

> Key idea: a sequential structure allows thinking of several pieces of data as an ordered set and not as isolated variables.

## What is a sequential data structure?

A **sequential data structure** is an organization where elements are arranged one after another following an order.

For example, a sequence of grades might look like:

```text
8, 6, 10, 7, 9
```

Here you don't think about five separate variables, but about an ordered collection of five values.

## Why aren't individual variables enough?

Look at this example:

```c
int grade1 = 8;
int grade2 = 6;
int grade3 = 10;
int grade4 = 7;
int grade5 = 9;
```

This can work for very few pieces of data, but it has problems:

- it's hard to traverse them in an orderly way
- it's hard to apply the same operation to all of them
- it doesn't scale well if the amount increases
- it makes the program rigid and messy

## Relationship between sequence and operations

When data is organized sequentially, very important operations appear:

- **traversal**: visiting each element one by one
- **search**: finding a value within the sequence
- **insertion**: adding a new element
- **update**: changing an existing element

## Conceptual example

Suppose you have the ages of four people:

```text
20, 18, 25, 19
```

The program can ask questions like:

- what is the first age?
- what is the third?
- is age 25 in the sequence?
- what is the largest?

## What sequential structures will you study?

In this part of the course you will mainly work with:

- arrays
- strings
- lists
- stacks
- queues

Not all work the same, but they all organize data sequentially.

## Summary

- a sequential structure organizes several pieces of data following an order
- it allows treating a collection as a set
- it facilitates traversal, search, and insertion
- it's the foundation for understanding arrays, strings, and various dynamic structures

## Final idea

When you go from individual variables to sequential structures, your program starts handling real data and not just isolated values.