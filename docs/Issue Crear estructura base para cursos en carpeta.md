
## 📚 Crear estructura base para cursos en carpeta `courses`

### 📝 Descripción

Definir y documentar la estructura estándar para los cursos dentro de la carpeta `courses`.  
Cada curso debe tener su propia carpeta, con capítulos en archivos Markdown y un archivo `index.md` que describa las características principales del curso, además de un logo en formato SVG.

Esta issue crea **un curso de ejemplo** para establecer el estándar.

---

### 📂 Estructura esperada

```
courses/
└── java/
    ├── index.md
    ├── 01-introduccion.md
    ├── 02-sintaxis-basica.md
    ├── 03-poo.md
    └── logo.svg
```

---

### 📄 Reglas del curso

#### 1️⃣ Carpeta del curso

- El nombre de la carpeta debe representar el curso (ej. `java`, `javascript`, `python`).
    

#### 2️⃣ `index.md`

Debe contener **exclusivamente** las siguientes propiedades:

```md
---
description: "Aprende Java desde cero con ejemplos prácticos y ejercicios guiados"
technology: "Java"
difficulty: "Beginner"
---
```

📌 Reglas:

- `description`: texto plano, **máximo 120 caracteres**
    
- `technology`: tecnología principal del curso
    
- `difficulty`: `Beginner | Intermediate | Advanced`
    

---

#### 3️⃣ Capítulos del curso

- Cada capítulo es un archivo `.md`
    
- El orden se define por prefijo numérico (`01-`, `02-`, etc.)
    
- Contenido libre (teoría, ejemplos, ejercicios)
    

Ejemplo:

```md
# Introducción a Java

Java es un lenguaje de programación orientado a objetos...
```

---

#### 4️⃣ Logo del curso

- Archivo obligatorio `logo.svg`
    
- Representa visualmente el curso
    
- Debe ser simple y legible (ideal para tarjetas o listados)
    

---

### ✅ Tareas

-  Crear carpeta `courses/java`
    
-  Crear archivo `index.md` con las propiedades definidas
    
-  Crear al menos 3 capítulos (`.md`)
    
-  Añadir `logo.svg` del curso
    
-  Verificar que la estructura sea consistente y reutilizable
    

---

### 🎯 Objetivo

Establecer un **estándar claro y escalable** para agregar nuevos cursos a la plataforma, facilitando su renderizado automático desde el frontend.