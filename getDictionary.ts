import "server-only";
import type { Locale } from "./i18n";
import tr from "./dictionaries/tr.json";


const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  tr: () => import("./dictionaries/tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};

export type Dictionary = typeof tr;