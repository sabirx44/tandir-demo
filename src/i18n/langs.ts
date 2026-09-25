export const langs = ['ru', 'uz', 'kk', 'en', 'ar'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'ru';

export const langMeta: Record<Lang, { label: string; name: string; dir: 'ltr' | 'rtl'; locale: string }> = {
  ru: { label: 'RU', name: 'Русский', dir: 'ltr', locale: 'ru-RU' },
  uz: { label: 'UZ', name: 'O‘zbekcha', dir: 'ltr', locale: 'uz-Latn-UZ' },
  kk: { label: 'KZ', name: 'Қазақша', dir: 'ltr', locale: 'kk-KZ' },
  en: { label: 'EN', name: 'English', dir: 'ltr', locale: 'en-GB' },
  ar: { label: 'AR', name: 'العربية', dir: 'rtl', locale: 'ar' },
};

/** URL prefix for a language: "" for the default, "/uz" etc. otherwise. */
export const prefix = (l: Lang) => (l === defaultLang ? '' : `/${l}`);
export const path = (l: Lang, p = '/') => `${prefix(l)}${p}`;

export const staticLangPaths = () => langs.map((l) => ({ params: { lang: l === defaultLang ? undefined : l }, props: { lang: l } }));
