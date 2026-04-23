import { describe, expect, it } from 'vitest';

import {
  assertUniqueTestSlugs,
  buildTestSummaries,
  calculateAnswerProgress,
  formatCountdownTime,
  getResultModalMessage,
  getTestOutcome,
  gradeCodeOrdering,
  gradeTest,
  isTestExpired,
  shuffleLinesSeeded,
  TEST_RESULT_THRESHOLDS,
  type TestCollectionEntryLike,
  type TestQuestion,
} from './tests';

const sampleQuestions: TestQuestion[] = [
  {
    id: 'q1',
    prompt: 'Pregunta 1',
    options: ['A', 'B', 'C'],
    correctAnswer: 1,
  },
  {
    id: 'q2',
    prompt: 'Pregunta 2',
    options: ['A', 'B', 'C'],
    correctAnswer: 0,
    explanation: 'La opcion A era correcta.',
  },
  {
    id: 'q3',
    prompt: 'Pregunta 3',
    options: ['A', 'B', 'C'],
    correctAnswer: 2,
  },
];

const makeEntry = (
  overrides: Partial<TestCollectionEntryLike['data']> & Pick<TestCollectionEntryLike['data'], 'title' | 'description' | 'slug' | 'category'>,
  id = `${overrides.slug}.md`,
): TestCollectionEntryLike => ({
  id,
  data: {
    title: overrides.title,
    description: overrides.description,
    slug: overrides.slug,
    category: overrides.category,
    kind: overrides.kind ?? 'multiple-choice',
    questions: overrides.questions,
    algorithm: overrides.algorithm,
    difficulty: overrides.difficulty,
    timeEstimate: overrides.timeEstimate,
  },
});

describe('gradeTest', () => {
  it('calcula aciertos, errores, sin responder y porcentaje', () => {
    const result = gradeTest(sampleQuestions, {
      q1: 1,
      q2: 2,
    });

    expect(result.totalQuestions).toBe(3);
    expect(result.correctCount).toBe(1);
    expect(result.incorrectCount).toBe(1);
    expect(result.unansweredCount).toBe(1);
    expect(result.scorePercentage).toBe(33);
    expect(result.questions).toEqual([
      expect.objectContaining({ id: 'q1', status: 'correct', selectedAnswer: 1, correctAnswer: 1 }),
      expect.objectContaining({ id: 'q2', status: 'incorrect', selectedAnswer: 2, correctAnswer: 0 }),
      expect.objectContaining({ id: 'q3', status: 'unanswered', selectedAnswer: null, correctAnswer: 2 }),
    ]);
  });
});

describe('assertUniqueTestSlugs', () => {
  it('lanza error si hay slugs duplicados', () => {
    const entries = [
      makeEntry({
        title: 'JavaScript',
        description: 'Intro',
        slug: 'test-js',
        category: 'JavaScript',
        questions: sampleQuestions,
      }),
      makeEntry({
        title: 'JavaScript avanzado',
        description: 'Otro',
        slug: 'test-js',
        category: 'JavaScript',
        questions: sampleQuestions,
      }, 'otro.md'),
    ];

    expect(() => assertUniqueTestSlugs(entries)).toThrow(/slug duplicado/i);
  });
});

describe('buildTestSummaries', () => {
  it('ordena los tests por titulo y calcula cantidad de preguntas', () => {
    const entries = [
      makeEntry({
        title: 'Zeta',
        description: 'Ultimo',
        slug: 'zeta',
        category: 'General',
        questions: sampleQuestions.slice(0, 2),
      }),
      makeEntry({
        title: 'Alpha',
        description: 'Primero',
        slug: 'alpha',
        category: 'General',
        questions: sampleQuestions,
        difficulty: 'beginner',
        timeEstimate: 10,
      }),
    ];

    expect(buildTestSummaries(entries)).toEqual([
      expect.objectContaining({
        title: 'Alpha',
        slug: 'alpha',
        kind: 'multiple-choice',
        questionCount: 3,
        difficulty: 'beginner',
        timeEstimate: 10,
      }),
      expect.objectContaining({
        title: 'Zeta',
        slug: 'zeta',
        kind: 'multiple-choice',
        questionCount: 2,
      }),
    ]);
  });

  it('cuenta las lineas de un test code-ordering en questionCount', () => {
    const entries = [
      makeEntry({
        title: 'Ordenar variables',
        description: 'Orden de un programa C',
        slug: 'ordenar-variables-c',
        category: 'Ordenar codigo',
        kind: 'code-ordering',
        algorithm: {
          prompt: 'Ordena las lineas del programa',
          language: 'c',
          lines: [
            '#include <stdio.h>',
            'int main() {',
            '    int edad = 18;',
            '    return 0;',
            '}',
          ],
        },
        timeEstimate: 5,
      }),
    ];

    expect(buildTestSummaries(entries)[0]).toEqual(
      expect.objectContaining({
        slug: 'ordenar-variables-c',
        kind: 'code-ordering',
        questionCount: 5,
      }),
    );
  });
});

describe('formatCountdownTime', () => {
  it('formatea milisegundos en MM:SS:CC', () => {
    expect(formatCountdownTime(125678)).toBe('02:05:67');
    expect(formatCountdownTime(9000)).toBe('00:09:00');
  });
});

describe('isTestExpired', () => {
  it('indica cuando el tiempo ya se agoto', () => {
    expect(isTestExpired(0)).toBe(true);
    expect(isTestExpired(-10)).toBe(true);
    expect(isTestExpired(1)).toBe(false);
  });
});

describe('calculateAnswerProgress', () => {
  it('calcula respondidas, total y porcentaje redondeado', () => {
    const progress = calculateAnswerProgress(sampleQuestions, {
      q1: 1,
      q2: null,
      q3: 2,
    });

    expect(progress.answeredCount).toBe(2);
    expect(progress.totalQuestions).toBe(3);
    expect(progress.percentage).toBe(67);
  });

  it('ignora respuestas para preguntas inexistentes y evita NaN con total cero', () => {
    const withUnknownAnswer = calculateAnswerProgress(sampleQuestions, {
      q1: null,
      q2: 0,
      q3: null,
      q4: 1,
    });
    const empty = calculateAnswerProgress([], { q1: 1 });

    expect(withUnknownAnswer.answeredCount).toBe(1);
    expect(withUnknownAnswer.totalQuestions).toBe(3);
    expect(withUnknownAnswer.percentage).toBe(33);
    expect(empty).toEqual({ answeredCount: 0, totalQuestions: 0, percentage: 0 });
  });
});

describe('getTestOutcome', () => {
  it('clasifica segun umbrales de resultado del proyecto', () => {
    expect(getTestOutcome(TEST_RESULT_THRESHOLDS.passed)).toBe('good');
    expect(getTestOutcome(TEST_RESULT_THRESHOLDS.passed - 1)).toBe('bad');
    expect(getTestOutcome(TEST_RESULT_THRESHOLDS.veryBad - 1)).toBe('very-bad');
  });
});

describe('getResultModalMessage', () => {
  it('muestra resultado positivo con emoji de exito cuando alcanza el minimo', () => {
    expect(getResultModalMessage(TEST_RESULT_THRESHOLDS.passed)).toEqual({
      title: 'Salio bien',
      emoji: '🙌',
    });
  });

  it('muestra resultado negativo con emoji de frustracion cuando no alcanza el minimo', () => {
    expect(getResultModalMessage(TEST_RESULT_THRESHOLDS.passed - 1)).toEqual({
      title: 'Salio mal',
      emoji: '🫠',
    });
  });
});

describe('gradeCodeOrdering', () => {
  const correctLines = [
    '#include <stdio.h>',
    'int main() {',
    '    int edad = 18;',
    '    return 0;',
    '}',
  ];

  it('da 100% cuando la lista del usuario coincide con la correcta', () => {
    const result = gradeCodeOrdering(correctLines, [...correctLines]);

    expect(result.totalLines).toBe(5);
    expect(result.correctCount).toBe(5);
    expect(result.incorrectCount).toBe(0);
    expect(result.scorePercentage).toBe(100);
    expect(result.positions).toHaveLength(5);
    expect(result.positions.every((position) => position.isCorrect)).toBe(true);
  });

  it('cuenta solo las posiciones exactas como correctas', () => {
    const userLines = [
      'int main() {',
      '#include <stdio.h>',
      '    int edad = 18;',
      '    return 0;',
      '}',
    ];

    const result = gradeCodeOrdering(correctLines, userLines);

    expect(result.correctCount).toBe(3);
    expect(result.incorrectCount).toBe(2);
    expect(result.scorePercentage).toBe(60);
    expect(result.positions[0]).toEqual(
      expect.objectContaining({
        index: 0,
        line: 'int main() {',
        expected: '#include <stdio.h>',
        isCorrect: false,
      }),
    );
    expect(result.positions[2]).toEqual(
      expect.objectContaining({ index: 2, isCorrect: true }),
    );
  });

  it('marca como incorrectas las posiciones faltantes si el usuario envia menos lineas', () => {
    const result = gradeCodeOrdering(correctLines, ['#include <stdio.h>', 'int main() {']);

    expect(result.totalLines).toBe(5);
    expect(result.correctCount).toBe(2);
    expect(result.incorrectCount).toBe(3);
    expect(result.scorePercentage).toBe(40);
  });
});

describe('shuffleLinesSeeded', () => {
  const sampleLines = [
    '#include <stdio.h>',
    'int main() {',
    '    int edad = 18;',
    '    return 0;',
    '}',
  ];

  it('devuelve la misma cantidad de lineas y conserva los elementos originales', () => {
    const shuffled = shuffleLinesSeeded(sampleLines, 42);

    expect(shuffled).toHaveLength(sampleLines.length);
    expect([...shuffled].sort()).toEqual([...sampleLines].sort());
  });

  it('no muta el array original', () => {
    const original = [...sampleLines];
    shuffleLinesSeeded(sampleLines, 7);

    expect(sampleLines).toEqual(original);
  });

  it('es deterministico para la misma semilla', () => {
    const first = shuffleLinesSeeded(sampleLines, 123);
    const second = shuffleLinesSeeded(sampleLines, 123);

    expect(first).toEqual(second);
  });

  it('nunca devuelve el orden original cuando hay mas de una linea', () => {
    for (let seed = 0; seed < 20; seed += 1) {
      const shuffled = shuffleLinesSeeded(sampleLines, seed);
      const isSameOrder = shuffled.every((line, index) => line === sampleLines[index]);

      expect(isSameOrder).toBe(false);
    }
  });

  it('devuelve el mismo array si solo hay una linea', () => {
    expect(shuffleLinesSeeded(['una sola'], 99)).toEqual(['una sola']);
  });
});
