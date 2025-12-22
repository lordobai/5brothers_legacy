import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find Support - 5Brothers Legacy Initiative',
  description: 'Access resources, services, and support for you and your community. Emergency help available.',
};

export default function FindSupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



