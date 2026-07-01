import { en } from "./locales/en";
import { ms } from "./locales/ms";
import { zh } from "./locales/zh";

const locales = { ms, en, zh };

export const supportedLocales = ["ms", "en", "zh"];
export const getCopy = (locale = "ms") => locales[locale] || ms;
