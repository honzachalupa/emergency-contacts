import { LanguageType, defaultLanguage } from "./i18n-config";

const dictionaries: { [key: string]: any } = {
  cs: () => import("../dictionaries/cs.json").then((module) => module.default),
  en: () => import("../dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (language: LanguageType) =>
  dictionaries[language]?.() ?? dictionaries[defaultLanguage]();
