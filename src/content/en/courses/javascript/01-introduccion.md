---
title: "Introduction to JavaScript"
---

# What is JavaScript?

JavaScript is the interpreted programming language that brings the web to life. Unlike HTML (structure) and CSS (design), JavaScript makes pages interactive and dynamic.

## A bit of history
It was born in 1995, created by Brendan Eich in just 10 days. Even though it started as a “toy” for small tricks, today it is one of the most powerful and versatile languages in the world.

## What does "client-side" mean?
When we say JS runs on the client, it means it executes directly in the browser of the person visiting the website. This allows it to:
- Modify the page in real time.
- Validate forms instantly.
- Create visual effects and animations.
- Communicate with servers without reloading the page.

## And what about "server-side"?
Thanks to environments like **Node.js**, JavaScript can also be used to create the “brain” of applications that handles databases and files.

## Entering or displaying data

There are several ways to interact with the user:

1. **`console.log()`**: Displays messages in the browser console (F12).
2. **`alert()`**: Shows a pop-up warning window.
3. **`prompt()`**: Opens a box for the user to enter text.
4. **`document.write()`**: Writes content directly into the HTML body (use with caution).

### Example:
```javascript
const name = prompt("What's your name?");
console.log("Hello, " + name);
alert("Welcome to Programierds");
```
