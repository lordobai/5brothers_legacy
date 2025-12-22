import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Reports - 5Brothers Legacy Initiative',
  description: 'Access our annual reports, financial statements, and audit reports. Transparency and accountability in everything we do.',
};

export default function OurReportsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



