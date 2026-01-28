import type { BooksData, Book } from './types';
import booksData from '../data/books.json';

export const books: BooksData = booksData as BooksData;

export function getBookById(id: string): Book | undefined {
  return books.books.find(book => book.id === id);
}

export function getBooksBySeries(seriesName: string): Book[] {
  return books.books.filter(book => book.series?.name === seriesName);
}

export function getNovels(): Book[] {
  return books.books.filter(book => book.type === 'novel');
}

export function getBooksSortedByRating(): Book[] {
  return [...books.books].sort((a, b) => {
    const aRating = getDisplayRating(a)?.stars ?? 0;
    const bRating = getDisplayRating(b)?.stars ?? 0;
    return bRating - aRating;
  });
}

export function getBooksSortedByRatingCount(): Book[] {
  return [...books.books].sort((a, b) => {
    const aCount = getDisplayRating(a)?.ratings_count ?? 0;
    const bCount = getDisplayRating(b)?.ratings_count ?? 0;
    return bCount - aCount;
  });
}

export function getBooksSortedByReleaseDate(): Book[] {
  return [...books.books].sort((a, b) => {
    const aDate = a.release.ebook_date || a.release.print_date || '';
    const bDate = b.release.ebook_date || b.release.print_date || '';
    return bDate.localeCompare(aDate);
  });
}

/** Prefer amazon when present; used by RatingBadge and sort helpers. */
export function getDisplayRating(book: Book): { stars: number; ratings_count: number; source_url?: string } | null {
  const amazon = book.social_proof?.amazon;
  const lovelybooks = book.social_proof?.lovelybooks;
  if (amazon) return { ...amazon, source_url: amazon.source_url };
  if (lovelybooks) return { stars: lovelybooks.stars, ratings_count: lovelybooks.ratings_count, source_url: lovelybooks.source_url };
  return null;
}

/** Only show rating when stars >= 4 (no minimum count). */
export function shouldShowRating(book: Book): boolean {
  const rating = getDisplayRating(book);
  return rating != null && rating.stars >= 4;
}
