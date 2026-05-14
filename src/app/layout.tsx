import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Julia Hadja Kfouri Nunes | Desenvolvedora de Software",
  description: "Portfólio de Julia Hadja Kfouri Nunes - Desenvolvedora de Software",
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <script dangerouslySetInnerHTML={{ __html: `window.TalkConfig = { apiKey: '3fb5afff-7664-4a8e-8c0e-980fa9ada62a', talkUrl: 'http://localhost:3000' };` }} />
        <script src="https://talk-xi-five.vercel.app//widget.js" async></script>
      </body>
    </html>
  );
}
