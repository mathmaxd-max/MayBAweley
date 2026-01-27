export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}.${month}.${year}`;
}

export function formatGermanNumber(num: number): string {
  return num.toLocaleString('de-DE', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

export function formatRating(stars: number): string {
  return formatGermanNumber(stars);
}
