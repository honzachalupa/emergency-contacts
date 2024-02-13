import { CssVarsProvider } from "@mui/joy";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { InitializeGoogleAdSense } from "../_components/GoogleAd";
import { LanguageType, i18n } from "../i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `sharedTranslations[defaultLanguage]["app.name"]`,
  description: `sharedTranslations[defaultLanguage]["app.description"]`,
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  params: { language },
  children,
}: {
  params: { language: LanguageType };
  children: React.ReactNode;
}) {
  console.log({ language });

  return (
    <html lang={language}>
      <InitializeGoogleAdSense />

      <body className={inter.className}>
        <CssVarsProvider defaultMode="light">{children}</CssVarsProvider>
      </body>
    </html>
  );
}
