import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import PhaseSection from "@/components/PhaseSection";
import MentorSection from "@/components/MentorSection";
import WhatYouGet from "@/components/WhatYouGet";
import BonusSection from "@/components/BonusSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import ScrollAnimateWrapper from "@/components/ScrollAnimateWrapper";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ScrollAnimateWrapper>
        <WhoIsThisFor />
      </ScrollAnimateWrapper>
      <ScrollAnimateWrapper delay={100}>
        <ProblemSection />
      </ScrollAnimateWrapper>
      <ScrollAnimateWrapper delay={100}>
        <PhaseSection />
      </ScrollAnimateWrapper>
      <ScrollAnimateWrapper delay={100}>
        <MentorSection />
      </ScrollAnimateWrapper>
      <ScrollAnimateWrapper delay={100}>
        <WhatYouGet />
      </ScrollAnimateWrapper>
      <ScrollAnimateWrapper delay={100}>
        <BonusSection />
      </ScrollAnimateWrapper>
      <ScrollAnimateWrapper delay={100}>
        <CTASection />
      </ScrollAnimateWrapper>
      <Footer />
      <StickyCtaBar />
    </main>
  );
};

export default Index;
