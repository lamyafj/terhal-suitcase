import type { Metadata } from "next";
import { LanguageProvider } from "./language";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terhal | ترحال",
  description: "made by Terhal for suitcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
           <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
