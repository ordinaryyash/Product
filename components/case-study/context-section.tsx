import { Clock, ListChecks, Zap } from 'lucide-react'
import { Insight, Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const CARDS = [
  {
    icon: Clock,
    title: 'Fast delivery',
    text: 'A curated set of restaurants and dishes chosen specifically for their ability to meet a short, consistent delivery window.',
  },
  {
    icon: ListChecks,
    title: 'Curated meal selection',
    text: 'Rather than full restaurant catalogues, Bolt narrows choice to dishes that are reliably preparable within the promise.',
  },
  {
    icon: Zap,
    title: 'Reduced decision time',
    text: 'A smaller, more relevant choice set is intended to get users from open-app to order-placed faster.',
  },
]

export function ContextSection() {
  return (
    <Section id="context">
      <SectionHead
        number="01"
        label="Context"
        title="Product Overview"
        question="What is Bolt, and why does it need reviewing now?"
      />

      <Reveal className="max-w-2xl">
        <p className="text-[1.05rem] leading-relaxed text-ink-secondary">
          Bolt is Swiggy&apos;s quick food delivery experience, focused on reducing delivery time
          without compromising food quality. Instead of offering every restaurant and every menu
          item, Bolt curates restaurants and dishes that can consistently meet a short delivery
          promise.
        </p>
      </Reveal>

      <div className="mt-9 grid gap-4 sm:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 80}>
            <div className="h-full rounded-[var(--radius-m)] border border-line bg-background p-6">
              <div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-accent-tint text-accent-text">
                <card.icon className="size-[18px]" strokeWidth={2} />
              </div>
              <h3 className="mb-2 font-sans text-[0.98rem] font-semibold text-ink">{card.title}</h3>
              <p className="text-sm leading-relaxed text-ink-secondary">{card.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Insight>
        Bolt&apos;s competitive advantage is not just reducing delivery time — it also reduces
        decision time by curating choices. This makes speed a product experience rather than only a
        logistics outcome.
      </Insight>
    </Section>
  )
}
