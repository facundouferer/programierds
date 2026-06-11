---
title: "Recursion"
---

Recursion is one of those ideas that at first seem confusing or "magical", but when you manage to visualize what happens behind the scenes in the computer's memory, it changes the way you program forever.

In its simplest definition: **a recursive function is a function that calls itself.**

In this lesson you will learn:
- What recursion is through a simple real-world analogy.
- The two mandatory rules of every recursive function (Base Case and Recursive Step).
- What the **Call Stack** is and how RAM behaves during recursion.
- What a **Stack Overflow** is (and how to prevent your program from crashing).
- Practical examples in C: Factorial and Fibonacci analyzed step by step.
- When to use recursion and when it is better to use a simple loop (`for` or `while`).

---

## The Nested Boxes Analogy

Imagine you are given a large wooden box. Upon opening it, you discover that inside is another smaller box. And inside that one, another even smaller one. You are told that in one of these nested boxes is the **treasure key**.

How would you write an algorithm to find it? You have two ways to solve it:

### Option 1: The Iterative Approach (Loops)
1. Build a pile with the boxes you find.
2. While the pile is not empty:
   - Grab a box.
   - If there is another box inside, add it to your pile.
   - If the key is inside, you are done!

### Option 2: The Recursive Approach (Calling Yourself)
1. Look at the contents of the current box.
2. If you find another box, **you do exactly the same thing** (call the search function on that new box).
3. If you find the key, you are done!

```text
Function FindKey(Box)
   1. Open Box
   2. If what is inside is the KEY -> Done! (Base Case)
   3. If what is inside is another BOX -> FindKey(NewBox) (Recursive Step)
```

In the recursive option, you don't need to keep a manual list of the remaining boxes to check. The computer takes care of remembering which box you were in automatically.

---

## The Two Golden Rules of Recursion

If you write a function that calls itself without control, you will freeze the computer. Every correct recursive function must meet two strict rules:

1. **The Base Case (The emergency exit)**: This is the condition that tells the function when to stop and start returning values. Without this, the function would call itself infinitely.
2. **The Recursive Step (Approaching the exit)**: This is the call of the function to itself, but **with a modified argument** that is closer to the base case. If you always call the function with the same value, you will never reach the stop condition.

---

## What Happens in Memory? The Call Stack

To understand recursion, you must understand the **Call Stack**.

When your program executes a function, the computer reserves a block of memory (called a *Stack Frame*) to store the local variables and parameters of that function. This block is placed on top of a stack, like a stack of plates.

* If function `A` calls function `B`, the plate for `B` is placed on top of the plate for `A`.
* The computer can only work with the plate that is **at the very top**.
* When function `B` finishes, its plate is removed, and the computer returns to function `A` right where it left off.

### Memory Trace with Factorial

The factorial of a number $N$ (written as $N!$) is the product of all numbers from $1$ to $N$. For example, $3! = 3 \times 2 \times 1 = 6$.

Let's see the C implementation:

```c
int factorial(int n) {
    // 1. Base Case: If n is 1, no further calculation is needed
    if (n == 1) {
        return 1;
    } 
    // 2. Recursive Step: n is greater than 1, we multiply n by the factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }
}
```

If we call `factorial(3)`, look at how the functions pile up in the Call Stack:

```text
Step 1: We call factorial(3)
[ factorial(3) -> waiting for factorial(2) to reply ]  <-- Top of the Stack

Step 2: factorial(3) calls factorial(2)
[ factorial(2) -> waiting for factorial(1) to reply ]  <-- Top of the Stack
[ factorial(3) -> waiting... ]

Step 3: factorial(2) calls factorial(1)
[ factorial(1) -> Base case! Returns 1 ]               <-- Top of the Stack
[ factorial(2) -> waiting... ]
[ factorial(3) -> waiting... ]
```

Once we reach the base case (`factorial(1)` returning `1`), the stack starts to **unwind** and resolve the pending operations from top to bottom:

```text
Step 4: factorial(1) returns 1. factorial(2) calculates: 2 * 1 = 2
[ factorial(2) -> returns 2 ]                          <-- Top of the Stack
[ factorial(3) -> waiting... ]

Step 5: factorial(2) returns 2. factorial(3) calculates: 3 * 2 = 6
[ factorial(3) -> returns 6 ]                          <-- Top of the Stack

Final Result: 6. The stack is now empty.
```

---

## The Number One Danger: Stack Overflow

What happens if we forget the base case or if the recursive step does not get closer to it?

```c
// WARNING! Infinite recursion
void infiniteFunction() {
    infiniteFunction(); 
}
```

Each call to `infiniteFunction()` will place a new plate on the memory stack without removing the previous ones. Since the computer's physical memory is limited, the stack will eventually fill up completely.

When this occurs, the operating system interrupts the program by throwing a fatal error: **Stack Overflow**. Your program will crash instantly.

---

## Advanced Example: The Fibonacci Sequence

The famous Fibonacci sequence starts with $0$ and $1$, and each subsequent term is the sum of the two preceding ones: $0, 1, 1, 2, 3, 5, 8, 13...$

```c
int fibonacci(int n) {
    // Base cases
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    // Recursive step (double call)
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### Why is Recursive Fibonacci Inefficient?
If you call `fibonacci(5)`, the function splits into two calls (`fibonacci(4)` and `fibonacci(3)`), and these in turn split into two more, creating a **call tree**:

```text
                     fib(5)
                   /        \
               fib(4)        fib(3)
              /      \      /      \
          fib(3)   fib(2) fib(2)   fib(1)
          /    \
      fib(2)  fib(1)
```

Notice that `fibonacci(3)` is calculated **2 times**, and `fibonacci(2)` is calculated **3 times** completely independently. For large numbers (like `fibonacci(50)`), the computer will have to perform billions of duplicate calculations and will take minutes or even hours to reply.

---

## Recursion vs. Iteration: Which One to Choose?

| Criterion | Recursion | Iteration (Loops like `for`/`while`) |
|---|---|---|
| **Structure** | Elegant, clean, and easier-to-read code in hierarchical problems (like trees or graphs). | Requires more manual control variables, but the code is highly sequential. |
| **Memory** | **High Cost**. Consumes Call Stack space for each recursive call. | **Low Cost**. Uses a constant amount of memory regardless of the number of repetitions. |
| **Speed** | Slower due to the overhead of creating and destroying stack frames in memory. | Faster, as they are direct instruction jumps in the processor. |

### General Rule:
* Use **iteration** for simple and linear tasks (traversing an array, counting numbers, accumulators).
* Use **recursion** when working with structures that are recursively defined (like binary trees, file system folders) or advanced sorting algorithms (*Merge Sort*, *Quick Sort*).

---

## Summary of Learnings

- Recursion consists of solving a problem by dividing it into smaller versions of itself.
- **Base Case**: Stops the function and prevents a Stack Overflow.
- **Recursive Step**: Calls the function again by modifying the argument.
- The computer's memory uses a **Call Stack** to remember where each suspended function was going.
- The elegance of recursion has a cost in speed and memory usage.