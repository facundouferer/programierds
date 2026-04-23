export type TestDifficulty = 'beginner' | 'intermediate' | 'advanced';

export type TestKind = 'multiple-choice' | 'code-ordering';

export interface TestQuestion {
  id: string;
  prompt: string;
  code?: string;
  language?: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface CodeOrderingAlgorithm {
  prompt: string;
  language: string;
  lines: string[];
  explanation?: string;
}

export interface TestData {
  title: string;
  description: string;
  slug: string;
  category: string;
  difficulty?: TestDifficulty;
  timeEstimate?: number;
  kind: TestKind;
  questions?: TestQuestion[];
  algorithm?: CodeOrderingAlgorithm;
}

export interface TestCollectionEntryLike {
  id: string;
  data: TestData;
}

export interface TestSummary {
  title: string;
  description: string;
  slug: string;
  category: string;
  difficulty?: TestDifficulty;
  timeEstimate?: number;
  kind: TestKind;
  questionCount: number;
}

export interface QuestionResult {
  id: string;
  selectedAnswer: number | null;
  correctAnswer: number;
  status: 'correct' | 'incorrect' | 'unanswered';
}

export interface TestGrade {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  scorePercentage: number;
  questions: QuestionResult[];
}

export interface TestAnswerProgress {
  answeredCount: number;
  totalQuestions: number;
  percentage: number;
}

export interface CodeOrderingPosition {
  index: number;
  line: string;
  expected: string;
  isCorrect: boolean;
}

export interface CodeOrderingGrade {
  totalLines: number;
  correctCount: number;
  incorrectCount: number;
  scorePercentage: number;
  positions: CodeOrderingPosition[];
}

export interface TestResultModalMessage {
  title: 'Salio bien' | 'Salio mal';
  emoji: '🙌' | '🫠';
}

export const TEST_RESULT_THRESHOLDS = {
  passed: 60,
  veryBad: 40,
} as const;

export type TestOutcome = 'good' | 'bad' | 'very-bad';

export function assertUniqueTestSlugs(entries: TestCollectionEntryLike[]) {
  const seen = new Map<string, string>();

  for (const entry of entries) {
    const existing = seen.get(entry.data.slug);

    if (existing) {
      throw new Error(`Se encontro un slug duplicado: "${entry.data.slug}" en ${existing} y ${entry.id}.`);
    }

    seen.set(entry.data.slug, entry.id);
  }
}

export function buildTestSummaries(entries: TestCollectionEntryLike[]): TestSummary[] {
  return [...entries]
    .sort((a, b) => a.data.title.localeCompare(b.data.title, 'es'))
    .map((entry) => {
      const { data } = entry;
      const questionCount =
        data.kind === 'code-ordering'
          ? data.algorithm?.lines.length ?? 0
          : data.questions?.length ?? 0;

      return {
        title: data.title,
        description: data.description,
        slug: data.slug,
        category: data.category,
        difficulty: data.difficulty,
        timeEstimate: data.timeEstimate,
        kind: data.kind,
        questionCount,
      };
    });
}

export function gradeTest(
  questions: TestQuestion[],
  answers: Record<string, number | null | undefined>,
): TestGrade {
  const questionResults = questions.map((question) => {
    const selectedAnswer = answers[question.id] ?? null;

    if (selectedAnswer === null) {
      return {
        id: question.id,
        selectedAnswer: null,
        correctAnswer: question.correctAnswer,
        status: 'unanswered' as const,
      };
    }

    return {
      id: question.id,
      selectedAnswer,
      correctAnswer: question.correctAnswer,
      status: selectedAnswer === question.correctAnswer ? 'correct' as const : 'incorrect' as const,
    };
  });

  const correctCount = questionResults.filter((question) => question.status === 'correct').length;
  const unansweredCount = questionResults.filter((question) => question.status === 'unanswered').length;
  const incorrectCount = questions.length - correctCount - unansweredCount;

  return {
    totalQuestions: questions.length,
    correctCount,
    incorrectCount,
    unansweredCount,
    scorePercentage: questions.length === 0 ? 0 : Math.round((correctCount / questions.length) * 100),
    questions: questionResults,
  };
}

export function formatDifficultyLabel(difficulty?: TestDifficulty) {
  if (!difficulty) {
    return 'Libre';
  }

  return {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  }[difficulty];
}

export function formatCountdownTime(milliseconds: number) {
  const safeMs = Math.max(0, milliseconds);
  const minutes = Math.floor(safeMs / 60000);
  const seconds = Math.floor((safeMs % 60000) / 1000);
  const centiseconds = Math.floor((safeMs % 1000) / 10);

  return [minutes, seconds, centiseconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':');
}

export function isTestExpired(milliseconds: number) {
  return milliseconds <= 0;
}

export function calculateAnswerProgress(
  questions: TestQuestion[],
  answers: Record<string, number | null | undefined>,
): TestAnswerProgress {
  const answeredCount = questions.reduce((count, question) => {
    const selectedAnswer = answers[question.id];
    return selectedAnswer === null || selectedAnswer === undefined ? count : count + 1;
  }, 0);

  return {
    answeredCount,
    totalQuestions: questions.length,
    percentage: questions.length === 0 ? 0 : Math.round((answeredCount / questions.length) * 100),
  };
}

export function getTestOutcome(scorePercentage: number): TestOutcome {
  if (scorePercentage < TEST_RESULT_THRESHOLDS.veryBad) {
    return 'very-bad';
  }

  if (scorePercentage < TEST_RESULT_THRESHOLDS.passed) {
    return 'bad';
  }

  return 'good';
}

export function getResultModalMessage(scorePercentage: number): TestResultModalMessage {
  if (scorePercentage >= TEST_RESULT_THRESHOLDS.passed) {
    return {
      title: 'Salio bien',
      emoji: '🙌',
    };
  }

  return {
    title: 'Salio mal',
    emoji: '🫠',
  };
}

export function gradeCodeOrdering(correctLines: string[], userLines: string[]): CodeOrderingGrade {
  const totalLines = correctLines.length;
  const positions: CodeOrderingPosition[] = correctLines.map((expected, index) => {
    const line = userLines[index] ?? '';
    return {
      index,
      line,
      expected,
      isCorrect: line === expected,
    };
  });

  const correctCount = positions.filter((position) => position.isCorrect).length;
  const incorrectCount = totalLines - correctCount;
  const scorePercentage = totalLines === 0 ? 0 : Math.round((correctCount / totalLines) * 100);

  return {
    totalLines,
    correctCount,
    incorrectCount,
    scorePercentage,
    positions,
  };
}

export function shuffleLinesSeeded(lines: string[], seed: number): string[] {
  const result = [...lines];

  if (result.length <= 1) {
    return result;
  }

  let state = Math.abs(Math.trunc(seed)) + 1;

  const nextRandom = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(nextRandom() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  const matchesOriginal = result.every((line, index) => line === lines[index]);

  if (matchesOriginal) {
    [result[0], result[result.length - 1]] = [result[result.length - 1], result[0]];
  }

  return result;
}
