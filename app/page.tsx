import { AssumptionsSection } from '@/components/case-study/assumptions-section'
import { CompetitionSection } from '@/components/case-study/competition-section'
import { ContextSection } from '@/components/case-study/context-section'
import { Footer } from '@/components/case-study/footer'
import { Hero } from '@/components/case-study/hero'
import { LearningsSection } from '@/components/case-study/learnings-section'
import { MetricsSection } from '@/components/case-study/metrics-section'
import { NavBar } from '@/components/case-study/nav-bar'
import { NextStepsSection } from '@/components/case-study/nextsteps-section'
import { PrioritizationSection } from '@/components/case-study/prioritization-section'
import { ProblemSection } from '@/components/case-study/problem-section'
import { RecommendationSection } from '@/components/case-study/recommendation-section'
import { ResearchSection } from '@/components/case-study/research-section'
import { RisksSection } from '@/components/case-study/risks-section'
import { RoadmapSection } from '@/components/case-study/roadmap-section'
import { SolutionSection } from '@/components/case-study/solution-section'
import { SuccessSection } from '@/components/case-study/success-section'
import { TradeoffsSection } from '@/components/case-study/tradeoffs-section'
import { UsersSection } from '@/components/case-study/users-section'

export default function Page() {
  return (
    <main className="bg-background">
      <NavBar />
      <Hero />
      <ContextSection />
      <UsersSection />
      <ProblemSection />
      <MetricsSection />
      <TradeoffsSection />
      <ResearchSection />
      <CompetitionSection />
      <SolutionSection />
      <SuccessSection />
      <PrioritizationSection />
      <RisksSection />
      <AssumptionsSection />
      <RoadmapSection />
      <RecommendationSection />
      <LearningsSection />
      <NextStepsSection />
      <Footer />
    </main>
  )
}
