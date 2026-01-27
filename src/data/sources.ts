import sourcesData from '../data/sources.json';

export interface Source {
  key: string;
  title: string;
  url: string;
  used_for: string[];
}

export interface SourcesData {
  as_of: string;
  sources: Source[];
}

export const sources: SourcesData = sourcesData as SourcesData;

export function getSourceByKey(key: string): Source | undefined {
  return sources.sources.find(s => s.key === key);
}
