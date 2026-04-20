export const revalidate = 60

import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSnapshot } from '@/components/sections/AboutSnapshot';
import { ImpactMetrics } from '@/components/sections/ImpactMetrics';
import { InitiativesOverview } from '@/components/sections/InitiativesOverview';
import { LatestUpdates } from '@/components/sections/LatestUpdates';
import { GetInvolvedSection } from '@/components/sections/GetInvolvedSection';
import { SponsorLogos } from '@/components/sections/SponsorLogos';
import { client } from '@/lib/sanity/client';
import { partnersQuery, latestPostsQuery, activeProgramsQuery } from '@/lib/sanity/queries';

export default async function Home() {
  // Fetch data from Sanity CMS
  let partners = [];
  let posts = [];
  let programs = [];
  
  try {
    [partners, posts, programs] = await Promise.all([
      client.fetch(partnersQuery).catch(() => []),
      client.fetch(latestPostsQuery, { limit: 3 }).catch(() => []),
      client.fetch(activeProgramsQuery).catch(() => []),
    ]);
  } catch (error) {
    console.error('Error fetching CMS data:', error);
    // Continue with empty arrays - components will use fallbacks
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSnapshot />
      <ImpactMetrics />
      <InitiativesOverview programs={programs} />
      <LatestUpdates posts={posts} />
      <GetInvolvedSection />
      <SponsorLogos partners={partners} />
    </main>
  );
}

