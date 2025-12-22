import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved - 5Brothers Legacy Initiative',
  description: 'Join us as a volunteer, partner, or advocate. Make a difference in communities across Africa.',
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



