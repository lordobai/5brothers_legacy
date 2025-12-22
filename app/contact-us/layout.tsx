import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - 5Brothers Legacy Initiative',
  description: 'Get in touch with 5Brothers Legacy Initiative. We\'d love to hear from you.',
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



