import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are - 5Brothers Legacy Initiative',
  description: 'Learn about 5Brothers Legacy Initiative - our mission, vision, goals, and core values. Empowering vulnerable communities across Africa.',
};

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


