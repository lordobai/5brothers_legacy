import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Partners - 5Brothers Legacy Initiative',
  description: 'Meet our trusted partners working together to create lasting impact in communities across Africa.',
};

export default function OurPartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



