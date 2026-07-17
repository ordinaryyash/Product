import { Fragment } from 'react'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const PHASES = [
  {
    tag: 'Phase 1',
    title: 'Availability-aware catalogue',
    text: 'Hide unavailable dishes before browsing whenever possible.',
  },
  {
    tag: 'Phase 2',
    title: 'Alternative Recommendation Engine',
    text: 'Surface similar available meals instantly whenever a selected item becomes unavailable.',
  },
  {
    tag: 'Phase 3',
    title: 'Personalized Decision Confidence',
    text: 'Rank recommendations using cuisine preference, ordering history, dietary preference, and price sensitivity.',
  },
]

export function RoadmapSection() {
  return (
    <Section id="roadmap">
      <SectionHead
        number="13"
        label="Roadmap"
        title="Sequencing"
        question="How should this be staged to de-risk delivery?"
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {PHASES.map((phase, i) => (
          <Fragment key={phase.tag}>
            <Reveal delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-[var(--radius-m)] border border-line bg-background p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full border border-accent font-mono text-xs text-accent-text">
                    {i + 1}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.06em] text-accent-text">
                    {phase.tag}
                  </span>
                </div>
                <h3 className="mb-2 font-sans text-[1rem] font-semibold text-ink">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-ink-secondary">{phase.text}</p>
              </div>
            </Reveal>
            {i < PHASES.length - 1 ? (
              <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden>
                <ArrowRight className="size-5 rotate-90 text-line-strong lg:rotate-0" />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </Section>
  )
}
