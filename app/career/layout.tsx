import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Join 5Brothers Legacy Initiative',
  description: 'Explore career opportunities and join our mission-driven team working to empower communities across Africa.',
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



