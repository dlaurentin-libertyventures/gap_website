import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { EditorialStatement } from "@/components/sections/EditorialStatement";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OpportunitySection } from "@/components/sections/OpportunitySection";
import { VisionSection } from "@/components/sections/VisionSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { ReportCTA } from "@/components/sections/ReportCTA";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <EditorialStatement />
        <ProblemSection />
        <ReportCTA />
        <OpportunitySection />
        <VisionSection />
        <AboutSection />
        {/* <RoadmapSection /> */}
        <LeadershipSection />
        <ClosingCTA />
      </main>
      <SiteFooter />
    </>
  );
}
