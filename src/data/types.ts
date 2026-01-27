// Type definitions for JSON data structures

export interface Author {
  name: string;
  also_known_as: string[];
  genres: string[];
  home_region: string;
  bio_short: string;
  notes: string[];
  as_of: string;
}

export interface BookSeries {
  name: string;
  index: number | null;
}

export interface BookRelease {
  ebook_date: string | null;
  print_date?: string | null;
  audiobook_date?: string | null;
}

export interface BookIdentifiers {
  amazon_asin_ebook?: string;
  isbn13_print?: string;
  isbn10_print?: string;
}

export interface BookCredits {
  co_author?: string;
  contributor?: string;
}

export interface RatingBreakdown {
  "5": number;
  "4": number;
  "3": number;
  "2": number;
  "1": number;
}

export interface LovelyBooksRating {
  stars: number;
  ratings_count: number;
  breakdown: RatingBreakdown;
  source_url: string;
  captured_on: string;
  notes?: string[];
}

export interface BookSocialProof {
  lovelybooks?: LovelyBooksRating;
}

export interface Book {
  id: string;
  title: string;
  type: "novel" | "short" | "anthology";
  series: BookSeries | null;
  release: BookRelease;
  identifiers: BookIdentifiers;
  credits?: BookCredits;
  notes: string[];
  social_proof?: BookSocialProof;
}

export interface BooksData {
  as_of: string;
  books: Book[];
}

export interface RecognitionItem {
  kind: string;
  title: string;
  date: string;
  details: string;
  source_key: string;
}

export interface RecognitionData {
  as_of: string;
  items: RecognitionItem[];
}

export interface PressItem {
  kind: "Interview" | "Feature" | "Press mention";
  outlet: string;
  title: string;
  published: string;
  highlights: string[];
  source_key: string;
}

export interface PressData {
  as_of: string;
  items: PressItem[];
}

export interface SocialProofData {
  as_of: string;
  principles: string[];
  platform_metrics: {
    lovelybooks: {
      author: {
        stars: number;
        ratings_count: number;
        source_url: string;
        captured_on: string;
      };
      books: Record<string, {
        stars: number;
        ratings_count: number;
        breakdown: RatingBreakdown;
        source_url: string;
        captured_on: string;
        notes?: string[];
      }>;
    };
  };
  recognition_highlights: RecognitionItem[];
  feature_links: PressItem[];
  implementation_notes: {
    recommended_display: string[];
    legal_and_tos_caveats: string[];
  };
}
