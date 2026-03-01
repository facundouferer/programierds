import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const courses = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/courses" }),
  schema: z.object({
    description: z.string().max(120),
    technology: z.string(),
    difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  }),
});

const chapters = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/index.md"],
    base: "./src/content/courses",
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { courses, chapters };
