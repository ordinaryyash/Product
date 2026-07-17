import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const LEARNINGS = [
  'Product decisions require balancing user value, operational feasibility, and business goals.',
  'Small UX improvements can create meaningful business impact when they reduce friction in critical user journeys.',
  'Product recommendations should be supported by user research, measurable success metrics, and explicit trade-offs — rather than intuition alone.',
]

export function LearningsSection() {
  return (
    <Section id="learnings" tint>
      <SectionHead
        number="15"
        label="Key Learnings"
        title="Key Learnings"
        question="What did this review reinforce about doing product work well?"
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {LEARNINGS.map((l, i) => (
          <Reveal key={l} delay={i * 80}>
            <div className="h-full rounded-[var(--radius-m)] border border-line bg-background p-6">
              <span className="mb-3 block font-serif text-2xl text-accent-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed text-ink-secondary">{l}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
