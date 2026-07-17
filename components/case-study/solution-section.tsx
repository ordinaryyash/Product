import { Check } from 'lucide-react'
import { DishRow, PhoneFrame } from './phone-mockup'
import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const FEATURES = [
  'Similar available dishes',
  'Availability-aware recommendations',
  'Same restaurant prioritization',
  'Similar price range',
  'Similar cuisine',
  'Similar protein preference',
]

const CURRENT = [
  { i: '1', text: 'User browses the Bolt menu.', tone: 'neutral' as const },
  { i: '2', text: 'User selects a dish.', tone: 'neutral' as const },
  { i: '3', text: 'Dish is unavailable — user is forced back to search.', tone: 'bad' as const },
  { i: '4', text: 'Cycle repeats, decision time increases.', tone: 'bad' as const },
]

const PROPOSED = [
  { i: '1', text: 'User browses the Bolt menu.', tone: 'neutral' as const },
  { i: '2', text: 'User selects a dish.', tone: 'neutral' as const },
  {
    i: '3',
    text: 'If unavailable, the Decision Confidence System surfaces alternatives instantly.',
    tone: 'neutral' as const,
  },
  { i: '4', text: 'User picks an alternative and checks out.', tone: 'good' as const },
]

export function SolutionSection() {
  return (
    <Section id="solution" tint>
      <SectionHead
        number="08"
        label="Opportunity & Proposed Solution"
        title="Decision Confidence System"
        question="What's the fix, and why this fix specifically?"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[var(--radius-m)] border border-line bg-background p-6">
            <h3 className="mb-2 font-sans text-[0.98rem] font-semibold text-ink">Problem</h3>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Users waste time clicking unavailable dishes.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="h-full rounded-[var(--radius-m)] border border-line bg-background p-6">
            <h3 className="mb-2 font-sans text-[0.98rem] font-semibold text-ink">Impact</h3>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Increased decision time. Reduced conversion. Poor experience.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8 max-w-2xl">
        <p className="text-[1.05rem] leading-relaxed text-ink-secondary">
          The objective is not simply to hide unavailable items — it is to reduce uncertainty at the
          exact moment it appears. Rather than forcing users to back out and search again, Bolt
          should surface confident, relevant alternatives immediately, preserving decision
          confidence throughout the ordering journey without compromising the promise of speed.
        </p>
      </Reveal>

      <Reveal className="mt-7">
        <div className="grid max-w-2xl gap-x-8 gap-y-0 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2.5 border-b border-line py-3.5 text-[0.9rem] font-medium text-ink"
            >
              <Check className="size-4 shrink-0 text-accent-text" strokeWidth={2.5} />
              {f}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Phone mockups: current vs proposed */}
      <Reveal className="mt-12">
        <div className="grid items-start gap-8 sm:grid-cols-2">
          <PhoneFrame tone="risk" caption="Current — dead ends on unavailable items">
            <DishRow name="Paneer Butter Masala" price="₹220" state="available" />
            <DishRow name="Chicken Biryani" price="₹260" state="unavailable" />
            <DishRow name="Veg Fried Rice" price="₹180" state="available" />
            <DishRow name="Masala Dosa" price="₹120" state="unavailable" />
          </PhoneFrame>
          <PhoneFrame tone="good" caption="Proposed — instant, confident alternatives">
            <DishRow name="Chicken Biryani" price="₹260" state="unavailable" />
            <div className="mb-2 mt-1 flex items-center gap-2 px-1 font-mono text-[0.5rem] uppercase tracking-wider text-accent-text">
              <span className="h-px flex-1 bg-line" />
              Similar & available
              <span className="h-px flex-1 bg-line" />
            </div>
            <DishRow name="Hyderabadi Dum Biryani" price="₹250" state="suggested" />
            <DishRow name="Chicken Pulao Bowl" price="₹240" state="suggested" />
          </PhoneFrame>
        </div>
      </Reveal>

      {/* Flow comparison */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        <Reveal>
          <FlowCard title="Current Experience" tone="before" steps={CURRENT} />
        </Reveal>
        <Reveal delay={80}>
          <FlowCard title="Proposed Experience" tone="after" steps={PROPOSED} />
        </Reveal>
      </div>
    </Section>
  )
}

function FlowCard({
  title,
  tone,
  steps,
}: {
  title: string
  tone: 'before' | 'after'
  steps: { i: string; text: string; tone: 'neutral' | 'bad' | 'good' }[]
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-m)] border border-line bg-background">
      <div
        className={`border-b border-line px-6 py-4 font-mono text-xs uppercase tracking-[0.05em] ${
          tone === 'after' ? 'bg-accent-tint text-accent-text' : 'bg-paper-2 text-ink-secondary'
        }`}
      >
        {title}
      </div>
      <div className="px-6 py-4">
        {steps.map((step) => {
          const color =
            step.tone === 'bad'
              ? 'text-risk'
              : step.tone === 'good'
                ? 'text-good'
                : 'text-ink-secondary'
          return (
            <div
              key={step.i}
              className="flex gap-3 border-b border-dashed border-line py-3 text-sm last:border-none"
            >
              <span className={`w-4 shrink-0 font-mono text-xs ${color}`}>{step.i}</span>
              <span className={color}>{step.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
