import { AlertTriangle } from 'lucide-react'
import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const RISKS = [
  'Inventory may not update in real time.',
  'Poor recommendations may reduce trust.',
  'Hidden items may confuse users during search.',
]

export function RisksSection() {
  return (
    <Section id="risks">
      <SectionHead
        number="11"
        label="Risks"
        title="What Could Go Wrong"
        question="What are the honest downside scenarios of shipping this?"
      />

      <div className="max-w-2xl">
        {RISKS.map((risk, i) => (
          <Reveal key={risk} delay={i * 70}>
            <div className="flex items-start gap-4 border-b border-line py-5 last:border-none">
              <AlertTriangle className="mt-0.5 size-[18px] shrink-0 text-risk" strokeWidth={2} />
              <p className="text-[0.95rem] text-ink-secondary">{risk}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
