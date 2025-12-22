import type { Metadata } from 'next';
import { getTranslations } from '@/lib/i18n';
import { DEFAULT_LANGUAGE, Language } from '@/lib/i18n/translations';
import { cookies } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = (cookieStore.get('preferred-language')?.value || DEFAULT_LANGUAGE) as Language;
  const t = getTranslations(lang);

  return {
    title: `${t.help.title} | 5Brothers Legacy Initiative`,
    description: t.help.subtitle,
    openGraph: {
      title: t.help.title,
      description: t.help.subtitle,
    },
  };
}

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

