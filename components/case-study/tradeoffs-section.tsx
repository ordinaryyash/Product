import { ArrowLeftRight } from 'lucide-react'
import { Insight, Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const TRADEOFFS = [
  {
    tradeoff: 'Speed vs. Restaurant Availability',
    reason: 'Only nearby restaurants can consistently meet the SLA.',
  },
  {
    tradeoff: 'Speed vs. Menu Variety',
    reason: 'Limited menus reduce preparation variability.',
  },
  {
    tradeoff: 'Operational Efficiency vs. Restaurant Flexibility',
    reason: 'Restaurants cannot list every dish.',
  },
  {
    tradeoff: 'Delivery Reliability vs. Geographic Coverage',
    reason: 'A smaller delivery radius ensures consistency.',
  },
  {
    tradeoff: 'Convenience vs. Personalization',
    reason: 'Users sacrifice customization for speed.',
  },
]

export function TradeoffsSection() {
  return (
    <Section id="tradeoffs">
      <SectionHead
        number="05"
        label="Trade-offs"
        title="What We're Deliberately Not Doing"
        question="What are we sacrificing to protect the speed promise, and why is that the right call?"
      />

      <div className="flex flex-col gap-3">
        {TRADEOFFS.map((row, i) => (
          <Reveal key={row.tradeoff} delay={i * 60}>
            <div className="grid items-center gap-3 rounded-[var(--radius-m)] border border-line bg-background px-5 py-4 sm:grid-cols-[1.1fr_auto_1fr]">
              <span className="text-[0.95rem] font-semibold text-ink">{row.tradeoff}</span>
              <ArrowLeftRight className="hidden size-4 text-accent-text sm:block" />
              <span className="text-sm leading-relaxed text-ink-secondary">{row.reason}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Insight>
        The restricted menu is not a weakness but a deliberate operational decision that enables
        Bolt&apos;s service-level agreement.
      </Insight>
    </Section>
  )
}
