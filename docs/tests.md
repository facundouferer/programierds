# Sistema de tests Markdown

Los tests viven en [`src/content/tests/`](/Users/facundouferer/Devs/programierds/src/content/tests) y se publican automáticamente en:

- `/test`
- `/test/<slug>`

## Cómo crear un test nuevo

1. Crear un archivo Markdown en [`src/content/tests/`](/Users/facundouferer/Devs/programierds/src/content/tests).
2. Completar el frontmatter con el formato validado por la colección `tests`.
3. Guardar el archivo. La ruta y el listado se generan solos.

## Convención de nombres

- El nombre del archivo puede ser descriptivo: `arrays-js.md`, `python-basics.md`, `test01.md`.
- La URL pública la define el campo `slug`.
- El `slug` debe ser único dentro de toda la colección.

## Frontmatter completo

```md
---
title: "Test de Arrays en JavaScript"
description: "Preguntas sobre métodos comunes de arrays y comportamiento básico."
slug: "arrays-js-01"
category: "JavaScript"
difficulty: "beginner"
timeEstimate: 8
questions:
  - id: "q1"
    prompt: "¿Qué devuelve este código?"
    code: |
      const arr = [1, 2, 3];
      const result = arr.map(n => n * 2);
      console.log(result);
    language: "js"
    options:
      - "[1, 2, 3]"
      - "[2, 4, 6]"
      - "6"
      - "undefined"
    correctAnswer: 1
    explanation: "map transforma cada elemento y devuelve un nuevo array."

  - id: "q2"
    prompt: "¿Cuál de estos métodos modifica el array original?"
    options:
      - "filter"
      - "map"
      - "slice"
      - "push"
    correctAnswer: 3
    explanation: "push agrega elementos al array original."
---

Podés escribir una introducción opcional en el cuerpo del Markdown.
```

## Campos obligatorios y opcionales

- `title`: obligatorio.
- `description`: obligatorio.
- `slug`: obligatorio y único.
- `category`: obligatorio.
- `difficulty`: opcional. Valores permitidos: `beginner`, `intermediate`, `advanced`.
- `timeEstimate`: opcional. Número entero positivo en minutos.
- `questions`: obligatorio. Debe tener al menos una pregunta.

Cada pregunta acepta:

- `id`: obligatorio y único dentro del mismo test.
- `prompt`: obligatorio.
- `options`: obligatorio. Mínimo 2 opciones.
- `correctAnswer`: obligatorio. Índice base 0 de la opción correcta.
- `code`: opcional.
- `language`: opcional, recomendado si hay snippet.
- `explanation`: opcional, pero recomendable para el feedback final.

## Errores comunes

- `correctAnswer` apunta a un índice inexistente.
- Hay menos de 2 opciones.
- Se repite un `id` dentro del mismo test.
- Se repite un `slug` entre tests.
- La indentación YAML está mal y rompe el parseo.

## Buenas prácticas

- Escribir `prompt` concretos y sin ambigüedad.
- Mantener las opciones con longitud parecida.
- Usar snippets cortos y legibles.
- Agregar `explanation` cuando la respuesta tenga trampa o contexto.
- No mezclar demasiados temas distintos en un mismo test.

## Notas de UX

- `correctAnswer` forma parte del contenido fuente, pero no se muestra en la interfaz hasta que el usuario presiona `Revisar resultados`.
- Como la corrección ocurre en frontend, una persona técnica podría inspeccionar el payload. El objetivo actual es ocultarlo en la UI, no blindarlo criptográficamente.
