import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const BARS = [
  {
    label: 'Reach',
    score: '9 / 10',
    pct: 90,
    note: 'Most Bolt users browse multiple items before ordering, making this issue broadly relevant.',
  },
  {
    label: 'Impact',
    score: '8 / 10',
    pct: 80,
    note: 'Reducing decision friction improves conversion without changing core logistics.',
  },
  {
    label: 'Confidence',
    score: '9 / 10',
    pct: 90,
    note: 'Supported by direct observation and external user feedback.',
  },
  {
    label: 'Effort',
    score: '2 / 10',
    pct: 20,
    note: 'Requires comparatively low engineering effort relative to logistics optimization.',
  },
]

export function PrioritizationSection() {
  return (
    <Section id="priority" tint>
      <SectionHead
        number="10"
        label="Prioritization"
        title="RICE Scoring"
        question="Why should this get built now, relative to everything else in the backlog?"
      />

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <div>
          {BARS.map((bar, i) => (
            <Reveal key={bar.label} delay={i * 70}>
              <div className="mb-5">
                <div className="mb-1.5 flex items-center justify-between text-[0.82rem]">
                  <span className="font-semibold text-ink">{bar.label}</span>
                  <span className="font-mono text-ink-tertiary">{bar.score}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-paper-2">
                  <div
                    className={`h-full rounded-full ${bar.label === 'Effort' ? 'bg-ink-tertiary' : 'bg-accent'}`}
                    style={{ width: `${bar.pct}%` }}
                  />
                </div>
                <p className="mt-2 max-w-md text-[0.82rem] leading-relaxed text-ink-secondary">
                  {bar.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="rounded-[var(--radius-m)] border border-line-strong bg-background p-8 text-center">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.06em] text-ink-tertiary">
              RICE Score
            </span>
            <div className="mt-2 font-serif text-5xl text-ink">324</div>
            <div className="mt-2 font-mono text-xs text-ink-tertiary">(9 × 8 × 9) ÷ 2</div>
            <p className="mt-4 border-t border-line pt-4 text-[0.85rem] font-semibold text-accent-text">
              This makes the feature a high-priority initiative.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
