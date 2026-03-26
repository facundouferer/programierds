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

const tests = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tests" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(180),
    slug: z.string().min(1),
    category: z.string().min(1),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    timeEstimate: z.number().int().positive().optional(),
    questions: z
      .array(
        z.object({
          id: z.string().min(1),
          prompt: z.string().min(1),
          code: z.string().optional(),
          language: z.string().optional(),
          options: z.array(z.string().min(1)).min(2),
          correctAnswer: z.number().int().min(0),
          explanation: z.string().optional(),
        }).superRefine((question, context) => {
          if (question.correctAnswer >= question.options.length) {
            context.addIssue({
              code: z.ZodIssueCode.custom,
              message: "correctAnswer debe apuntar a una opcion existente.",
              path: ["correctAnswer"],
            });
          }
        }),
      )
      .min(1)
      .superRefine((questions, context) => {
        const ids = new Set<string>();

        questions.forEach((question, index) => {
          if (ids.has(question.id)) {
            context.addIssue({
              code: z.ZodIssueCode.custom,
              message: `El id "${question.id}" esta repetido dentro del test.`,
              path: [index, "id"],
            });
          }

          ids.add(question.id);
        });
      }),
  }),
});

export const collections = { courses, chapters, tests };
