import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Initiatives - 5Brothers Legacy Initiative',
  description: 'Explore our comprehensive programs in education, health, WASH, disaster response, youth empowerment, and advocacy.',
};

export default function OurInitiativesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



