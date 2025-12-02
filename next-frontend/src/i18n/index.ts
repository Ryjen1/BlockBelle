// import { getRequestConfig } from 'next-intl/server'; // TODO: Enable when next-intl is installed
import { routing } from './routing';

// export default getRequestConfig(async ({ requestLocale }) => { // TODO: Enable when next-intl is installed
//   let locale = await requestLocale;

//   // Ensure that a valid locale is used
//   if (!locale || !routing.locales.includes(locale as any)) {
//     locale = routing.defaultLocale;
//   }

//   return {
//     locale,
//     messages: (await import(`./locales/${locale}.json`)).default
//   };
// });

// Temporary export for now
export default {
  messages: {}
};