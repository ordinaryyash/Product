import { Shield, Target, TrendingUp } from 'lucide-react'
import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const SECONDARY = ['Bolt Order Volume', 'Repeat Usage Rate', 'Average Delivery Partner Waiting Time']
const GUARDRAIL = ['Cancellation Rate', 'Customer Satisfaction', 'Delivery Partner Safety']

export function MetricsSection() {
  return (
    <Section id="metrics" tint>
      <SectionHead
        number="04"
        label="Metrics Framework"
        title="How We Know Bolt Is Winning"
        question="How do we measure success without masking a hidden cost?"
      />

      {/* North Star centerpiece */}
      <Reveal>
        <div className="relative overflow-hidden rounded-[var(--radius-l)] border border-line-strong bg-ink px-7 py-9 text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Target className="size-6" strokeWidth={1.75} />
          </div>
          <span className="mt-4 block font-mono text-[0.7rem] uppercase tracking-[0.1em] text-accent">
            North Star Metric
          </span>
          <p className="mx-auto mt-3 max-w-lg text-balance font-serif text-xl leading-snug text-background sm:text-2xl">
            Percentage of Bolt orders delivered within the promised delivery window.
          </p>
        </div>
      </Reveal>

      {/* connector */}
      <div className="mx-auto my-1 h-8 w-px bg-line-strong" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <Reveal>
          <MetricColumn
            icon={TrendingUp}
            title="Secondary Metrics"
            items={SECONDARY}
            accent="text-accent-text"
          />
        </Reveal>
        <Reveal delay={80}>
          <MetricColumn icon={Shield} title="Guardrail Metrics" items={GUARDRAIL} accent="text-good" />
        </Reveal>
      </div>
    </Section>
  )
}

function MetricColumn({
  icon: Icon,
  title,
  items,
  accent,
}: {
  icon: typeof Target
  title: string
  items: string[]
  accent: string
}) {
  return (
    <div className="h-full rounded-[var(--radius-m)] border border-line bg-background p-6">
      <div className="mb-3 flex items-center gap-2 border-b border-line pb-3 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-ink">
        <Icon className={`size-4 ${accent}`} />
        {title}
      </div>
      <ul>
        {items.map((item, i) => (
          <li
            key={item}
            className="flex items-center gap-3 border-b border-line py-3 text-sm text-ink-secondary last:border-none"
          >
            <span className="font-mono text-xs text-ink-tertiary">
              {String(i + 1).padStart(2, '0')}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
