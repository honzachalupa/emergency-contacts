import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./app/i18n";

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: ["/", "/(cs|en)/:path*"],
};
