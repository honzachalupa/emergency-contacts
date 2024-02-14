import { CssVarsProvider } from "@mui/joy";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { locales } from "../i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nouzové kontakty",
  description: "Najděte nejbližší pohotovost, lékárnu nebo veterináře.",
};

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  unstable_setRequestLocale(locale);

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <CssVarsProvider defaultMode="light">
            {children}

            <Analytics />
          </CssVarsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
