import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help - 5Brothers Legacy Initiative',
  description: 'Get help and support from 5Brothers Legacy Initiative',
}

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}



