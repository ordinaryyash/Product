import { Clock, Shield, TrendingUp } from 'lucide-react'
import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const CARDS = [
  {
    icon: Clock,
    kind: 'Primary',
    text: 'Reduce average browsing time before checkout.',
  },
  {
    icon: TrendingUp,
    kind: 'Secondary',
    text: 'Increase Bolt conversion rate. Reduce interactions with unavailable items.',
  },
  {
    icon: Shield,
    kind: 'Guardrail',
    text: 'Maintain customer satisfaction.',
  },
]

export function SuccessSection() {
  return (
    <Section id="impact">
      <SectionHead
        number="09"
        label="Success Metrics"
        title="How We'll Know It Worked"
        question="What does success look like for this specific fix?"
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {CARDS.map((c, i) => (
          <Reveal key={c.kind} delay={i * 80}>
            <div className="h-full rounded-[var(--radius-m)] border border-line bg-background p-6">
              <div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-accent-tint text-accent-text">
                <c.icon className="size-[18px]" strokeWidth={2} />
              </div>
              <h3 className="mb-2 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-ink-tertiary">
                {c.kind}
              </h3>
              <p className="text-sm leading-relaxed text-ink-secondary">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 max-w-2xl">
        <p className="text-[1.05rem] leading-relaxed text-ink-secondary">
          The proposed feature is expected to reduce browsing time before checkout and improve
          conversion by lowering decision friction, while preserving Bolt&apos;s North Star Metric
          of on-time deliveries. Customer satisfaction should be monitored as the primary guardrail
          to ensure the recommendation experience remains helpful.
        </p>
      </Reveal>
    </Section>
  )
}
