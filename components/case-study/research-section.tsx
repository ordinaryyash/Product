import { Eyebrow, Insight, Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const STATS = [
  { value: '8', label: 'Bolt restaurants explored' },
  { value: '5', label: 'Personal ordering sessions' },
  { value: '50+', label: 'Reddit discussions reviewed' },
  { value: '30+', label: 'Google Play reviews examined' },
]

const METHODOLOGY = [
  'Personal usability testing using Swiggy Bolt.',
  'Review of approximately 50+ Reddit discussions and public user comments.',
  'Google Play Store reviews.',
  'Comparative benchmarking with competing quick-food delivery products.',
]

const FINDINGS = [
  'Delivery delays are the biggest complaint.',
  'ETA changes reduce user trust.',
  'Users perceive timer changes as misleading.',
  'Limited menus are acceptable if delivery is truly fast.',
  'Showing unavailable items increases frustration.',
]

export function ResearchSection() {
  return (
    <Section id="research" tint>
      <SectionHead
        number="06"
        label="Research"
        title="User Research"
        question="What evidence supports this diagnosis?"
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[var(--radius-m)] border border-line bg-background p-6">
            <h3 className="mb-5 font-sans text-[0.98rem] font-semibold text-ink">
              Research Summary
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5">
                  <span className="font-serif text-3xl leading-none text-ink">{s.value}</span>
                  <span className="font-mono text-[0.62rem] leading-snug text-ink-tertiary">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="h-full rounded-[var(--radius-m)] border border-line bg-background p-6">
            <h3 className="mb-3 font-sans text-[0.98rem] font-semibold text-ink">Methodology</h3>
            <ul>
              {METHODOLOGY.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-3 border-b border-line py-3 text-sm text-ink-secondary last:border-none"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-9">
        <Eyebrow>Key Findings</Eyebrow>
        <ul className="max-w-2xl">
          {FINDINGS.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3.5 border-b border-line py-3.5 text-[0.95rem] text-ink-secondary last:border-none"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      </Reveal>

      <Insight>
        User feedback indicates that customers are more tolerant of a limited menu than an
        unreliable delivery promise. Reliability appears to drive trust more than menu breadth.
      </Insight>
    </Section>
  )
}
