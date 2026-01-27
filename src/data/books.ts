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
    const aRating = a.social_proof?.lovelybooks?.stars || 0;
    const bRating = b.social_proof?.lovelybooks?.stars || 0;
    return bRating - aRating;
  });
}

export function getBooksSortedByRatingCount(): Book[] {
  return [...books.books].sort((a, b) => {
    const aCount = a.social_proof?.lovelybooks?.ratings_count || 0;
    const bCount = b.social_proof?.lovelybooks?.ratings_count || 0;
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

export function shouldShowRating(book: Book): boolean {
  const rating = book.social_proof?.lovelybooks;
  if (!rating) return false;
  
  // Only show if >= 4.0 stars AND >= 10 ratings
  // Also hide Schmetterlingsatem per notes (1.8 stars)
  return rating.stars >= 4.0 && rating.ratings_count >= 10;
}
