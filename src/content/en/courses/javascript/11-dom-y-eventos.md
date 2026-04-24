---
title: "The DOM and Events"
---

# The DOM and Events

The DOM (Document Object Model) is the tree of objects that represents your HTML page. JavaScript uses it to interact with what the user sees.

## Modifying the DOM

You can select elements by ID, class, or tag and change their properties:

```javascript
const title = document.getElementById("title");
title.innerText = "Changed by JS!";
title.style.color = "green";

const newDiv = document.createElement("div");
document.body.appendChild(newDiv);
```

## Events: The Response to Interaction

An event is an action that occurs in the browser (a click, a pressed key, form submission).

### How to Listen to Events
The modern and recommended way is `addEventListener`:

```javascript
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    console.log("You clicked on:", event.target);
});
```

### Common Event Types

1. **Mouse:** `click`, `mouseover`, `mouseout`, `mousedown`, `mouseup`.
2. **Keyboard:** `keydown`, `keyup`, `keypress`.
3. **Forms:**
   - `change`: When the value changes and focus is lost.
   - `input`: While the user types (in real time).
   - `submit`: When submitting the form (use `event.preventDefault()` to prevent the page from reloading).

### Real-time Input Example:
```javascript
const input = document.getElementById("name");
input.addEventListener("input", (e) => {
    console.log("Writing:", e.target.value);
});
```