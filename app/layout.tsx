
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from 'next/script'

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hook Creatives",
  description: "Hook Creatives is a advertis page for buisness and ecommerce applications",
  keywords: 'Hook Creatives'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Script id='fb-pixel' strategy='afterInteractive'>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2697035570469919');
          fbq('track', 'PageView');`}
        </Script>
        <script src="/js/animaition.js"></script>
        <head />
        <title>PAZ LAWYERS</title>
        <link rel="icon" href="/images/logos/favicon.ico" sizes="any" />
        <body className={outfit.className}>
          <noscript><img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2697035570469919&ev=PageView&noscript=1"
          /></noscript>
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
