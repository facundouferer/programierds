export type TestDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface TestQuestion {
  id: string;
  prompt: string;
  code?: string;
  language?: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface TestData {
  title: string;
  description: string;
  slug: string;
  category: string;
  difficulty?: TestDifficulty;
  timeEstimate?: number;
  questions: TestQuestion[];
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
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      slug: entry.data.slug,
      category: entry.data.category,
      difficulty: entry.data.difficulty,
      timeEstimate: entry.data.timeEstimate,
      questionCount: entry.data.questions.length,
    }));
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
