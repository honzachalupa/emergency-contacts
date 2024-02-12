import { sharedTranslations } from "@/hooks";
import { CssVarsProvider } from "@mui/joy";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { InitializeGoogleAdSense } from "./_components/GoogleAd";

const inter = Inter({ subsets: ["latin"] });

const language = "cs";

export const metadata: Metadata = {
  title: sharedTranslations[language]["app.name"],
  description: sharedTranslations[language]["app.description"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={language}>
      <InitializeGoogleAdSense />

      <body className={inter.className}>
        <CssVarsProvider defaultMode="light">{children}</CssVarsProvider>
      </body>
    </html>
  );
}
