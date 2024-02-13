import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["cs", "en"];
export const defaultLocale = "cs";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../translations/${locale}.json`)).default,
  };
});
