import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSnapshot } from '@/components/sections/AboutSnapshot';
import { ImpactMetrics } from '@/components/sections/ImpactMetrics';
import { InitiativesOverview } from '@/components/sections/InitiativesOverview';
import { LatestUpdates } from '@/components/sections/LatestUpdates';
import { GetInvolvedSection } from '@/components/sections/GetInvolvedSection';
import { SponsorLogos } from '@/components/sections/SponsorLogos';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSnapshot />
      <ImpactMetrics />
      <InitiativesOverview />
      <LatestUpdates />
      <GetInvolvedSection />
      <SponsorLogos />
    </main>
  );
}

