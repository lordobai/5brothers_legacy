import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make a Gift - Donate to 5Brothers Legacy Initiative',
  description: 'Support our mission to empower communities across Africa. Your donation creates lasting change.',
};

export default function MakeAGiftLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



