import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const courseSchema = z.object({
  description: z.string().max(120),
  technology: z.string(),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
});

const chapterSchema = z.object({
  title: z.string(),
});

const testSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1).max(180),
    slug: z.string().min(1),
    category: z.string().min(1),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    timeEstimate: z.number().int().positive().optional(),
    kind: z.enum(["multiple-choice", "code-ordering"]).default("multiple-choice"),
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
      })
      .optional(),
    algorithm: z
      .object({
        prompt: z.string().min(1),
        language: z.string().min(1),
        lines: z.array(z.string().min(1)).min(2),
        explanation: z.string().optional(),
      })
      .optional(),
  })
  .superRefine((data, context) => {
    if (data.kind === "multiple-choice") {
      if (!data.questions || data.questions.length === 0) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'kind "multiple-choice" requiere al menos una pregunta en "questions".',
          path: ["questions"],
        });
      }
      if (data.algorithm) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'kind "multiple-choice" no debe definir "algorithm".',
          path: ["algorithm"],
        });
      }
    }

    if (data.kind === "code-ordering") {
      if (!data.algorithm) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'kind "code-ordering" requiere definir "algorithm" con sus lineas ordenadas.',
          path: ["algorithm"],
        });
      }
      if (data.questions && data.questions.length > 0) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'kind "code-ordering" no debe definir "questions".',
          path: ["questions"],
        });
      }
    }
  });

const coursesEs = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/es/courses" }),
  schema: courseSchema,
});

const coursesEn = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/en/courses" }),
  schema: courseSchema,
});

const chaptersEs = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/index.md"],
    base: "./src/content/es/courses",
  }),
  schema: chapterSchema,
});

const chaptersEn = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/index.md"],
    base: "./src/content/en/courses",
  }),
  schema: chapterSchema,
});

const testsEs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/es/tests" }),
  schema: testSchema,
});

const testsEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/en/tests" }),
  schema: testSchema,
});

export const collections = {
  courses_es: coursesEs,
  courses_en: coursesEn,
  chapters_es: chaptersEs,
  chapters_en: chaptersEn,
  tests_es: testsEs,
  tests_en: testsEn,
};
