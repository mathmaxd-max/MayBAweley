import type { Book } from '../data/types';

export function getAmazonUrl(book: Book): string | null {
  if (book.identifiers.amazon_url) {
    return book.identifiers.amazon_url;
  }
  if (book.identifiers.amazon_asin_ebook) {
    return `https://www.amazon.de/dp/${book.identifiers.amazon_asin_ebook}`;
  }
  if (book.identifiers.isbn13_print) {
    return `https://www.amazon.de/s?k=${book.identifiers.isbn13_print}`;
  }
  return null;
}

export function getAmazonLinkText(book: Book): string {
  return 'Auf Amazon';
}
