import { sharedTranslations } from "@/hooks";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeRegistry } from "./ThemeRegistry";
import { InitializeGoogleAdSense } from "./_components/GoogleAd";

const inter = Inter({ subsets: ["latin"] });

const language = "cs";

export const metadata: Metadata = {
  title: sharedTranslations[language]["app.name"],
  description: sharedTranslations[language]["app.description"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={language}>
      <InitializeGoogleAdSense />

      <body className={inter.className}>
        <ThemeRegistry options={{ key: "joy" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
