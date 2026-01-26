import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Programs - 5Brothers Legacy Initiative',
  description: 'Explore our comprehensive programs designed to create sustainable impact in communities across Africa.',
};

export default function OurProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



