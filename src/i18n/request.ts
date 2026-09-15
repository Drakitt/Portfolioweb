import { getRequestConfig } from 'next-intl/server';
import { isAppLocale, routing, type AppLocale } from './routing';
import en from '../../messages/en.json';
import es from '../../messages/es.json';

const catalogs: Record<AppLocale, typeof en> = {
  en,
  es,
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: AppLocale =
    requested && isAppLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: catalogs[locale],
  };
});
