import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team - 5Brothers Legacy Initiative',
  description: 'Meet the dedicated team members of 5Brothers Legacy Initiative working to empower communities across Africa.',
};

export default function OurTeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



