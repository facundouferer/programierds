---
title: "Getting Started with Java"
---

# Getting Started with Java

Java is a powerful and versatile general-purpose programming language. It is used for everything from mobile applications (Android) to large enterprise systems and servers.

## What is Java?

Unlike languages such as JavaScript (which is interpreted), Java is a compiled language. This means the code you write is translated into an intermediate format called **bytecode**, which the Java Virtual Machine (JVM) then runs on any platform.

## The advantages of learning Java

- **High job demand:** It is one of the most widely used languages in the industry.
- **Portability:** "Write once, run anywhere".
- **Flexibility:** It adapts to many types of projects.
- **Active community:** Thousands of libraries and plenty of support available.

## The first Java program

```java
public class MyProgram {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

### What did we just do?

1. `public class MyProgram`: Defines a public class called `MyProgram`.
2. `public static void main(String[] args)`: The program entry point. It is the first thing that runs.
3. `System.out.println("Hello, world!")`: Prints the text to the console and moves to the next line.

## Standard output

In Java we use the `System.out` class to display information:

- `System.out.println()`: Prints and adds a newline.
- `System.out.print()`: Prints without adding a newline.
- `System.out.printf()`: Lets you print with formatting (like in C).
- `System.out.write()`: Writes a single character (less common).

### `printf` example:
```java
String name = "Juan";
int age = 25;
System.out.printf("Name: %s, Age: %d\n", name, age);
```
