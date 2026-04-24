---
title: "Files"
---

So far you've mainly worked with data in memory. But when the program ends, that information disappears.

**Files** appear to preserve data between executions.

In this lesson you will learn:

- what a file is
- what `FILE*` is
- how to open, read, write, and close files
- common opening modes
- why it's always important to verify and close correctly

## What is a file?

A file is a way of storing information on disk so it continues to exist after the program ends.

That allows, for example:

- saving results
- loading previously saved data
- maintaining persistent information

## The `FILE*` type

In C, files are handled through the `FILE*` type.

That type represents an open file on which the program can operate.

## Opening a file

`fopen` is used.

```c
FILE* file = fopen("data.txt", "w");
```

## Common modes

- `"r"` → open for reading
- `"w"` → open for writing
- `"a"` → open for appending at the end

## Important: verify if it opened correctly

It's not enough to call `fopen`. You need to verify if the result is different from `NULL`.

```c
if (file != NULL) {
    /* use file */
}
```

## Writing to a file

```c
fprintf(file, "Hello World!\n");
```

## Reading from a file

### With `fscanf`

```c
fscanf(file, "%d", &number);
```

### With `fgets`

```c
fgets(line, 100, file);
```

## Closing the file

```c
fclose(file);
```

Closing the file is fundamental.

Why? Because it helps ensure data is saved correctly and frees the resource the program was using.

## Complete writing example

```c
#include <stdio.h>

int main() {
    FILE* file = fopen("greeting.txt", "w");

    if (file != NULL) {
        fprintf(file, "Hello World!\n");
        fclose(file);
    }

    return 0;
}
```

## Conceptual reading example

```c
#include <stdio.h>

int main() {
    FILE* file = fopen("data.txt", "r");
    int number;

    if (file != NULL) {
        fscanf(file, "%d", &number);
        printf("Read: %d\n", number);
        fclose(file);
    }

    return 0;
}
```

## Common mistakes when starting

### 1. Not verifying if `fopen` returned `NULL`

That can make the program try to use a file that actually didn't open.

### 2. Forgetting `fclose`

It's a very bad practice to leave files open.

### 3. Confusing reading with writing

It's not the same to open with `"r"` as with `"w"`.

## Summary

- a file allows storing information permanently
- in C it's handled with `FILE*`
- `fopen` opens the file
- `fprintf`, `fscanf`, and `fgets` allow operating on it
- `fclose` closes the file
- it's always worth verifying if the file opened correctly

## Final idea

Files make a program stop being something purely momentary.

Thanks to them, data can survive execution and software starts behaving in a much more realistic way.