import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ways to Support - 5Brothers Legacy Initiative',
  description: 'Discover multiple ways to support our mission: donate, volunteer, partner, advocate, or shop our products.',
};

export default function WaysToSupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



