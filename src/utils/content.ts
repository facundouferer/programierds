import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/types';

type LocalizedCollection<T extends 'courses' | 'chapters' | 'tests'> =
  T extends 'courses'
    ? CollectionEntry<'courses_es'> | CollectionEntry<'courses_en'>
    : T extends 'chapters'
      ? CollectionEntry<'chapters_es'> | CollectionEntry<'chapters_en'>
      : CollectionEntry<'tests_es'> | CollectionEntry<'tests_en'>;

export interface LocalizedEntry<T> {
  entry: T;
  fallbackUsed: boolean;
  localeResolved: Locale;
}

const COLLECTION_MAP = {
  courses: { es: 'courses_es', en: 'courses_en' },
  chapters: { es: 'chapters_es', en: 'chapters_en' },
  tests: { es: 'tests_es', en: 'tests_en' },
} as const;

async function loadBoth(kind: 'courses' | 'chapters' | 'tests') {
  const map = COLLECTION_MAP[kind];
  const [es, en] = await Promise.all([
    getCollection(map.es as 'courses_es'),
    getCollection(map.en as 'courses_en'),
  ]);
  return { es: es as LocalizedCollection<typeof kind>[], en: en as LocalizedCollection<typeof kind>[] };
}

export async function getCoursesForLocale(locale: Locale) {
  const { es, en } = await loadBoth('courses');
  const merged = new Map<string, { entry: CollectionEntry<'courses_es'>; fallbackUsed: boolean }>();
  for (const entry of es) {
    merged.set(entry.id, { entry: entry as CollectionEntry<'courses_es'>, fallbackUsed: locale !== 'es' });
  }
  if (locale === 'en') {
    for (const entry of en) {
      merged.set(entry.id, { entry: entry as CollectionEntry<'courses_es'>, fallbackUsed: false });
    }
  }
  return Array.from(merged.values());
}

export async function getChaptersForLocale(locale: Locale) {
  const { es, en } = await loadBoth('chapters');
  const merged = new Map<string, { entry: CollectionEntry<'chapters_es'>; fallbackUsed: boolean }>();
  for (const entry of es) {
    merged.set(entry.id, { entry: entry as CollectionEntry<'chapters_es'>, fallbackUsed: locale !== 'es' });
  }
  if (locale === 'en') {
    for (const entry of en) {
      merged.set(entry.id, { entry: entry as CollectionEntry<'chapters_es'>, fallbackUsed: false });
    }
  }
  return Array.from(merged.values());
}

export async function getTestsForLocale(locale: Locale) {
  const { es, en } = await loadBoth('tests');
  const merged = new Map<string, { entry: CollectionEntry<'tests_es'>; fallbackUsed: boolean }>();
  for (const entry of es) {
    merged.set(entry.id, { entry: entry as CollectionEntry<'tests_es'>, fallbackUsed: locale !== 'es' });
  }
  if (locale === 'en') {
    for (const entry of en) {
      merged.set(entry.id, { entry: entry as CollectionEntry<'tests_es'>, fallbackUsed: false });
    }
  }
  return Array.from(merged.values());
}

export async function getChaptersForCourse(courseId: string, locale: Locale) {
  const all = await getChaptersForLocale(locale);
  const prefix = `${courseId}/`;
  return all
    .filter(({ entry }) => entry.id.startsWith(prefix) && !entry.id.endsWith('/index'))
    .sort((a, b) => a.entry.id.localeCompare(b.entry.id));
}
