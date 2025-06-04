export {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} from "./client";

import { enUS, zhCN, zhHK } from "date-fns/locale";

export const LANGUAGES = ["en", "tc", "sc"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_LOCALE = {
  en: enUS,
  tc: zhHK,
  sc: zhCN,
} as const;

const DEFAULT_LANGUAGE = {
  en: ["en-US", "en-GB"],
  tc: ["zh-HK", "zh-TW"],
  sc: ["zh-CN", "zh-SG"],
};

export const LanguageDetector = (lang: string) => {
  const math = Object.entries(DEFAULT_LANGUAGE).find(([_, value]) =>
    value.includes(lang),
  );
  if (!math) return undefined;
  return math[0] as Language;
};
