import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const ASSUMPTIONS = [
  'Restaurant inventory updates are sufficiently reliable.',
  'Recommendation latency is negligible.',
  'Users prefer relevant alternatives over restarting their search.',
  'Restaurants continue updating availability in near real time.',
]

export function AssumptionsSection() {
  return (
    <Section id="assumptions" tint>
      <SectionHead
        number="12"
        label="Assumptions"
        title="Assumptions"
        question="What are we taking as given for this recommendation to hold?"
      />

      <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
        {ASSUMPTIONS.map((a, i) => (
          <Reveal key={a} delay={(i % 2) * 70}>
            <div className="flex h-full items-start gap-3 rounded-[var(--radius-m)] border border-line bg-background p-5">
              <span className="font-mono text-[0.72rem] text-accent-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed text-ink-secondary">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
