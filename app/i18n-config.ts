export const defaultLanguage: any = "cs";

export const i18n = {
  defaultLocale: defaultLanguage,
  locales: ["cs", "en"],
} as const;

export type LanguageType = (typeof i18n)["locales"][number];
