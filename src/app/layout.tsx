import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
