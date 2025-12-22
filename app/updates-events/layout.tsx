import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Updates & Events - 5Brothers Legacy Initiative',
  description: 'Stay updated with our latest news, events, and impact stories from communities across Africa.',
};

export default function UpdatesEventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



