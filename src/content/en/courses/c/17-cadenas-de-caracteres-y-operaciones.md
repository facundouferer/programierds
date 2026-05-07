---
title: "Strings"
---

In many programs it's not enough to work only with numbers. We also need to work with text: names, surnames, cities, messages, passwords, phrases, and much more.

In C, this text isn't handled with a special type called `string`, like in other languages. In C, a string is represented as a **character array**.

And this is KEY to understand from the beginning.

> A string in C isn't magic. It's an array of `char` with an end marker.

In this lesson you will learn:

- what a string is
- how it relates to arrays
- what `\0` means
- how to declare and initialize strings
- how to read strings from the keyboard
- how to traverse a string character by character
- common operations with strings
- useful functions from `<string.h>`

## What is a string?

A **string** is a sequence of characters stored in an array of type `char`.

For example:

```c
char name[] = "John";
```

Here it seems we store a single thing, but several characters are actually stored:

- `J`
- `o`
- `h`
- `n`
- and one more special character: `\0`

## What does `\0` mean?

`\0` is called the **null character**.

It's not a letter, it's not a visible number, it doesn't print as common text. Its function is to mark the end of the string.

That means a string like `"John"` in memory is represented like this:

```text
J o h n \0
```

## Why is `\0` so important?

Because many functions in C don't know how many characters you want to use. So they read character by character until they find `\0`.

If that end character isn't where it belongs, the program can read garbage or behave badly.

And that, my friend, is one of the things that confuses beginners the most.

## A string is an array of `char`

Since a string is an array, we can access its positions the same as with any other array.

```c
char name[] = "Ana";
```

So:

- `name[0]` is `'A'`
- `name[1]` is `'n'`
- `name[2]` is `'a'`
- `name[3]` is `\0`

Notice something important:

- `'A'` with single quotes represents a **character**
- `"Ana"` with double quotes represents a **string**

They're not the same.

## String declarations

### Declaration with fixed size

```c
char city[20];
```

This reserves space to store up to 19 visible characters and the final `\0`.

### Declaration with direct initialization

```c
char name[] = "Lucy";
```

In this case, the compiler automatically calculates the necessary size.

### Declaration indicating size and initialization

```c
char surname[10] = "Smith";
```

Here space for 10 characters is reserved, even though the word uses fewer.

## Example: displaying a string

```c
#include <stdio.h>

int main() {
    char name[] = "Martina";

    printf("Name: %s\n", name);

    return 0;
}
```

### What does `%s` mean?

`%s` is the format specifier used in `printf` to display strings.

## Accessing individual characters

Since the string is an array, we can read each character separately.

```c
#include <stdio.h>

int main() {
    char word[] = "Sun";

    printf("First character: %c\n", word[0]);
    printf("Second character: %c\n", word[1]);
    printf("Third character: %c\n", word[2]);

    return 0;
}
```

### Expected output

```text
First character: S
Second character: u
Third character: n
```

Notice we now use `%c`, because we're displaying a single character each time.

## Traversing a string character by character

We can also traverse a string with a loop.

```c
#include <stdio.h>

int main() {
    char word[] = "Hello";
    int i;

    for (i = 0; word[i] != '\0'; i = i + 1) {
        printf("Character %d: %c\n", i, word[i]);
    }

    return 0;
}
```

## Why is the condition `word[i] != '\0'`?

Because we don't always need to know the exact size of the complete array. What matters to us is traversing the string to its real end.

The real end of the string is marked by `\0`.

So the loop says:

> continue while the current character is not the null character.

Fantastic. That's the correct idea.

## String input

Reading text from the keyboard requires more care than reading a number.

## Reading a word with `scanf`

```c
#include <stdio.h>

int main() {
    char name[20];

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Hello, %s\n", name);

    return 0;
}
```

### What does this example do well?

- `name` has reserved space
- `scanf` stores the word there
- `%s` indicates we're going to read a string

### Important limitation of `scanf("%s", ...)`

It only reads up to the first space.

So:

- if you type `Anna`, it reads `Anna`
- if you type `Anna Maria`, it only reads `Anna`

## Reading a complete line with `fgets`

When we need to read text with spaces, we use `fgets`.

```c
#include <stdio.h>

int main() {
    char phrase[100];

    printf("Write a phrase: ");
    fgets(phrase, 100, stdin);

    printf("The entered phrase was: %s", phrase);

    return 0;
}
```

### What does `fgets` receive?

```c
fgets(phrase, 100, stdin);
```

- `phrase`: where the text is saved
- `100`: maximum number of characters to read
- `stdin`: standard input, that is, the keyboard

## Difference between `scanf` and `fgets`

### `scanf("%s", chain)`

- serves for a single word
- stops at the first space
- is simple, but limited

### `fgets(chain, size, stdin)`

- allows reading a complete line
- accepts spaces
- is usually more useful for phrases

## Common operations with strings

Since a string is an array, many operations could be done manually with loops. But C also offers functions in the `<string.h>` library.

## Length of a string: `strlen`

`strlen` returns the number of characters in the string, not counting the `\0`.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char word[] = "computer";

    printf("Length: %d\n", strlen(word));

    return 0;
}
```

### Result

The length is `11`, because the word has 11 letters. The `\0` isn't counted.

## Copying a string: `strcpy`

We can't copy strings with the `=` sign like they're numbers.

This is NOT correct for copying content:

```c
/* destination = source; */
```

To copy a string we use `strcpy`.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "Hello";
    char destination[20];

    strcpy(destination, source);

    printf("Destination: %s\n", destination);

    return 0;
}
```

### Important idea

- `source` contains the original text
- `destination` must have enough space
- `strcpy` copies character by character, including the `\0`

## Comparing strings: `strcmp`

To compare if two strings are equal we must not use `==`.

That would be a conceptual error.

To compare content we use `strcmp`.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char key1[] = "house";
    char key2[] = "house";

    if (strcmp(key1, key2) == 0) {
        printf("The strings are equal.\n");
    } else {
        printf("The strings are different.\n");
    }

    return 0;
}
```

### Why is it compared with `0`?

Because `strcmp`:

- returns `0` if the strings are equal
- returns another value if they're different

At this level, understanding that `0` means "they are equal" is perfect.

## Concatenating strings: `strcat`

**Concatenating** means joining one string with another.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char name[30] = "Anna";

    strcat(name, " Maria");

    printf("Full name: %s\n", name);

    return 0;
}
```

### Result

The variable `name` now contains:

```text
Anna Maria
```

### Be careful

The destination array must have enough space to store:

- its original content
- the chain we add
- the final `\0`

## Complete example with several operations

```c
#include <stdio.h>
#include <string.h>

int main() {
    char name[20] = "John";
    char surname[20] = "Smith";
    char full[50] = "";

    strcpy(full, name);
    strcat(full, " ");
    strcat(full, surname);

    printf("Full name: %s\n", full);
    printf("Length: %d\n", strlen(full));

    if (strcmp(name, "John") == 0) {
        printf("The stored name is John.\n");
    }

    return 0;
}
```

## Traversing a string to count vowels

Besides using library functions, we can also solve problems by traversing the string manually.

```c
#include <stdio.h>

int main() {
    char word[] = "bat";
    int i;
    int vowelCount = 0;

    for (i = 0; word[i] != '\0'; i = i + 1) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
            vowelCount = vowelCount + 1;
        }
    }

    printf("Number of vowels: %d\n", vowelCount);

    return 0;
}
```

This example is very valuable because it shows something key:

> a string can't just be printed or copied; it can also be processed character by character.

## Common mistakes when working with strings

### Confusing character with string

- `'A'` is a character
- `"A"` is a string

They're not the same.

### Not leaving enough space

```c
char name[4] = "John";
```

This is wrong, because `"John"` needs:

- `J`
- `o`
- `h`
- `n`
- `\0`

That is, it needs 5 positions.

### Comparing strings with `==`

To compare content, use `strcmp`.

### Forgetting that `scanf("%s", ...)` doesn't read spaces

If you need to read a complete phrase, use `fgets`.

## Summary

- a string in C is an array of `char`
- every string ends in `\0`
- `%s` is used to display complete strings
- `%c` is used to display a single character
- a string can be traversed with a loop like any array
- `strlen` measures length
- `strcpy` copies
- `strcmp` compares
- `strcat` concatenates

## Final idea

If you understand that a string in C is an array of characters with an end marked by `\0`, EVERYTHING becomes ordered.

And when that's truly understood, you stop memorizing loose functions and start understanding what's happening in memory and in the program.