/**
 * Maps book IDs to their corresponding cover image filenames.
 * Handles cases where filenames differ from book IDs (e.g., special characters, formatting).
 */
export function getCoverImagePath(bookId: string): string {
  const coverMap: Record<string, string> = {
    'angstheiler': 'der_angst_heiler',
    'erinnerung_aus_glas': 'erinnerungen_aus_glas',
    'erloese_uns': 'erlose_uns',
    'schmetterlingsatem': 'schmetterlings_atem',
    'kurze_geschichten_zwischendurch': 'kurze_geschichten_fur_zwischendurch',
  };

  const filename = coverMap[bookId] || bookId;
  return `/images/covers/${filename}.jpg`;
}
