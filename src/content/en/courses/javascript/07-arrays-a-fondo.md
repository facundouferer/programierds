---
title: "Arrays in Depth"
---

# Arrays

An Array is an object that allows storing multiple values in a single variable. Indices start at `0`.

## Basic Operations

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Orange"); // Adds at the end
fruits.pop(); // Removes the last
fruits.unshift("Pear"); // Adds at the beginning
fruits.shift(); // Removes the first

console.log(fruits.length); // Size of the array
```

## Modification and Copy
- **`slice(start, end)`**: Creates a copy of a portion of the array without modifying the original.
- **`splice(start, count, item1...)`**: Changes the content by removing, replacing, or adding elements. **Modifies the original**.

## Modern Methods (Higher Order)

These are the most powerful for working with data:

- **`map()`**: Transforms each element and returns a new array.
- **`filter()`**: Creates a new array with elements that meet a condition.
- **`reduce()`**: Reduces the array to a single value (e.g.: sum everything).
- **`forEach()`**: Executes a function for each element.
- **`join()`**: Joins all elements into a text string.
- **`includes()`**: Checks if a value exists in the array.

### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(n => n % 2 === 0); // [2, 4]
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
```