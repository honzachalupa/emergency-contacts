import { CssVarsProvider } from "@mui/joy";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import { locales } from "../i18n";
import { InitializeGoogleAdSense } from "./_components/GoogleAd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `sharedTranslations[defaultLanguage]["app.name"]`,
  description: `sharedTranslations[defaultLanguage]["app.description"]`,
};

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <InitializeGoogleAdSense />

      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <CssVarsProvider defaultMode="light">{children}</CssVarsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
