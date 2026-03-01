---
title: "Introducción a JavaScript"
---

# Introducción a JavaScript

JavaScript es el lenguaje de la web. Es el único lenguaje que corre nativamente en todos los navegadores y, gracias a Node.js, también en servidores, herramientas CLI y hasta aplicaciones de escritorio.

## ¿Por qué aprender JavaScript?

- **Ubicuo**: Corre en el navegador, en el servidor, en mobile, en IoT.
- **Ecosistema gigante**: npm es el registro de paquetes más grande del mundo.
- **Demanda laboral**: Frontend, backend, fullstack — JavaScript está en todos lados.

## Tu primer script

Abrí la consola del navegador (F12 → Console) y escribí:

```javascript
console.log("¡Hola, Mundo!");
```

## Dónde ejecutar JavaScript

### En el navegador

Creá un archivo `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi primer JS</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

Y un archivo `app.js`:

```javascript
console.log("JavaScript cargado correctamente");
```

### Con Node.js

Instalá Node.js desde [nodejs.org](https://nodejs.org) y ejecutá:

```bash
node app.js
```

## Strict mode

Siempre usá strict mode para evitar errores silenciosos:

```javascript
"use strict";

// Esto tira error en strict mode (variable no declarada)
nombre = "Programierds"; // ReferenceError
```
