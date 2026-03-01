---
title: "Manipulación del DOM"
---

# Manipulación del DOM

El DOM (Document Object Model) es la representación en memoria del HTML. JavaScript puede leerlo, modificarlo y reaccionar a eventos del usuario.

## Seleccionar elementos

```javascript
// Por ID
const titulo = document.getElementById("titulo");

// Por selector CSS (uno)
const boton = document.querySelector(".btn-primary");

// Por selector CSS (todos)
const items = document.querySelectorAll(".lista-item");
```

## Modificar contenido

```javascript
const titulo = document.querySelector("h1");

// Cambiar texto
titulo.textContent = "Nuevo título";

// Cambiar HTML interno
titulo.innerHTML = "Título con <strong>énfasis</strong>";
```

## Modificar estilos y clases

```javascript
const caja = document.querySelector(".caja");

// Estilos inline (evitar cuando sea posible)
caja.style.backgroundColor = "blue";

// Clases (preferido)
caja.classList.add("activo");
caja.classList.remove("oculto");
caja.classList.toggle("visible");
```

## Eventos

```javascript
const boton = document.querySelector("#mi-boton");

boton.addEventListener("click", () => {
    console.log("¡Click!");
});

// Con el objeto evento
const input = document.querySelector("#nombre");

input.addEventListener("input", (evento) => {
    console.log(`Escribiste: ${evento.target.value}`);
});
```

## Crear y agregar elementos

```javascript
// Crear un elemento
const nuevoItem = document.createElement("li");
nuevoItem.textContent = "Nuevo elemento";

// Agregarlo al DOM
const lista = document.querySelector("ul");
lista.appendChild(nuevoItem);

// Eliminar un elemento
lista.removeChild(nuevoItem);
```

## Ejemplo práctico: Lista de tareas

```javascript
const formulario = document.querySelector("#form-tarea");
const inputTarea = document.querySelector("#input-tarea");
const listaTareas = document.querySelector("#lista-tareas");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const texto = inputTarea.value.trim();
    if (!texto) return;

    const li = document.createElement("li");
    li.textContent = texto;

    li.addEventListener("click", () => {
        li.classList.toggle("completada");
    });

    listaTareas.appendChild(li);
    inputTarea.value = "";
});
```
