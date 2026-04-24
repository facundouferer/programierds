---
title: "File Handling"
---

# File Handling in Java

Java provides classes in `java.io` and `java.nio.file` to read and write data in files persistently.

## Writing to a file

We use `FileWriter` and `BufferedWriter` for better efficiency.

```java
try (BufferedWriter writer = new BufferedWriter(new FileWriter("archivo.txt"))) {
    writer.write("Hello, this is a line of text.");
    writer.newLine();
    writer.write("Learning Java!");
} catch (IOException e) {
    e.printStackTrace();
}
```

## Reading from a file

We use `FileReader` and `BufferedReader`.

```java
try (BufferedReader reader = new BufferedReader(new FileReader("archivo.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

## The `try-with-resources` block

Notice that in the previous examples we used `try (...)`. This is an excellent practice in Java that ensures the file is closed automatically at the end, even if an error occurs, avoiding memory leaks.
