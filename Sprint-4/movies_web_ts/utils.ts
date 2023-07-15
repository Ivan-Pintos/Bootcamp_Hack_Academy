export type Movie = {
  adult: number;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: LanguageCode;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres?: { id: number; name: string }[];
  revenue?: number;
  runtime?: number;
};
export type LanguageCode =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "ru"
  | "ja"
  | "zh"
  | "ar"
  | "hi"
  | "ko";

export enum sortvalue {
  votes,
  populars,
  news,
}

export const languageCodes: { [key in LanguageCode]?: string } = {
  en: "Inglés",
  es: "Español",
  fr: "Francés",
  de: "Alemán",
  it: "Italiano",
  pt: "Portugués",
  ru: "Ruso",
  ja: "Japonés",
  zh: "Chino",
  ar: "Árabe",
  hi: "Hindi",
  ko: "Coreano",
};
