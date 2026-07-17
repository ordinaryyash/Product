import { Coffee, GraduationCap, Package, ShoppingBasket, UtensilsCrossed } from 'lucide-react'
import { Insight, Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const COMPETITORS = [
  {
    icon: Coffee,
    name: 'Zepto Cafe',
    strength: 'Beverages and quick snacks',
    win: 'Restaurant-prepared meals inside the Swiggy ecosystem.',
    short: 'Excellent beverage catalogue.',
  },
  {
    icon: ShoppingBasket,
    name: 'Blinkit Bistro',
    strength: 'Grocery + food',
    win: 'Lower switching friction for existing Swiggy users.',
    short: 'Convenient grocery bundling.',
  },
  {
    icon: UtensilsCrossed,
    name: 'Zomato Quick',
    strength: 'Existing Zomato users and coupons',
    win: 'Better feature visibility and ecosystem integration.',
    short: 'Existing user base and coupon incentives.',
  },
  {
    icon: GraduationCap,
    name: 'Campus Canteen',
    strength: 'Low prices',
    win: 'Delivery convenience and broader cuisine options.',
    short: 'Lower prices.',
  },
  {
    icon: Package,
    name: 'Instamart',
    strength: 'Instant packaged snacks',
    win: 'Freshly prepared meals.',
    short: 'Instant snack availability.',
  },
]

export function CompetitionSection() {
  return (
    <Section id="competition">
      <SectionHead
        number="07"
        label="Competitive Landscape"
        title="Why Bolt Wins Against Alternatives"
        question="Where does Bolt hold ground against adjacent players?"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {COMPETITORS.map((c, i) => (
          <Reveal key={c.name} delay={(i % 2) * 80}>
            <div className="flex h-full flex-col rounded-[var(--radius-m)] border border-line bg-background p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-paper-2 text-ink">
                  <c.icon className="size-[18px]" strokeWidth={2} />
                </div>
                <h3 className="font-sans text-[1.02rem] font-semibold text-ink">{c.name}</h3>
              </div>
              <dl className="flex flex-col gap-3.5">
                <Row label="Their strength" tone="neutral">
                  {c.strength}
                </Row>
                <Row label="Where Bolt wins" tone="good">
                  {c.win}
                </Row>
                <Row label="Where Bolt falls short" tone="risk">
                  {c.short}
                </Row>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>

      <Insight>
        Bolt competes on total time-to-food — decision time plus preparation time plus delivery
        time — whereas competitors primarily optimize only one part of that journey.
      </Insight>
    </Section>
  )
}

function Row({
  label,
  tone,
  children,
}: {
  label: string
  tone: 'neutral' | 'good' | 'risk'
  children: React.ReactNode
}) {
  const dot =
    tone === 'good' ? 'bg-good' : tone === 'risk' ? 'bg-risk' : 'bg-ink-tertiary'
  return (
    <div className="border-t border-line pt-3 first:border-none first:pt-0">
      <dt className="mb-1 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-ink-tertiary">
        <span className={`size-1.5 rounded-full ${dot}`} />
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-ink-secondary">{children}</dd>
    </div>
  )
}
