import { createContext, useContext, useState, type ReactNode } from 'react';
import { en } from '../locales/en';
import type { Locale } from '../locales/en';

type LocaleCode = 'en' | 'hi';

interface LocaleContextValue {
  locale: LocaleCode;
  t: Locale;
  setLocale: (code: LocaleCode) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  t: en,
  setLocale: () => undefined,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleCode>('en');

  // For now, always return English. When Hindi translations are approved,
  // merge hi.ts over en as a full Locale object.
  const t = en;

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
