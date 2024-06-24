
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from 'next/script'

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pazabogados",
  description: "pazabogados is a laywer page for life applications",
  keywords: 'pazabogados'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <title>PAZ LAWYERS</title>
        <link rel="icon" href="/images/logos/favicon.ico" sizes="any" />
        <body className={outfit.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="root"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
