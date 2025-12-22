import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguagePrompt } from "@/components/ui/LanguagePrompt";
import { DEFAULT_LANGUAGE, Language } from "@/lib/i18n";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "5Brothers Legacy Initiative - Empowering Communities, Changing Lives",
  description: "Advancing education, healthcare, and equality across underserved regions in Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get language from cookie on server side to match client
  const cookieStore = cookies();
  const preferredLang = cookieStore.get('preferred-language');
  const initialLanguage = (preferredLang?.value && ['en', 'es', 'fr', 'pt', 'ar', 'zh'].includes(preferredLang.value))
    ? preferredLang.value as Language
    : DEFAULT_LANGUAGE;

  return (
    <html lang={initialLanguage} dir={initialLanguage === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider initialLanguage={initialLanguage}>
          <LanguagePrompt />
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

