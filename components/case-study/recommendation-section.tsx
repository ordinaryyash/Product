import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const PARAS = [
  'Swiggy Bolt successfully solves the needs of time-constrained users by prioritizing speed over variety. However, displaying unavailable items increases decision friction and weakens Bolt\u2019s value proposition.',
  'I recommend filtering unavailable items from the main browsing experience while presenting intelligent alternative suggestions whenever users search for or select unavailable dishes. This is a high-impact, low-effort UX improvement that reduces browsing time, improves conversion, and reinforces Bolt\u2019s promise of helping users receive food quickly with minimal effort.',
  'ETA reliability remains an important long-term problem, but closing that gap fully would require significant operational and logistics investment across the delivery network.',
  'The Decision Confidence System is recommended first because it is a high-confidence, low-effort opportunity that improves the user experience without requiring major infrastructure changes \u2014 making it the right initiative to prioritize before larger platform investments in delivery logistics.',
  'This proposal intentionally prioritizes a UX bottleneck that can be improved independently of logistics. By addressing decision friction first, Swiggy can deliver measurable customer experience improvements while larger investments in ETA prediction and delivery infrastructure continue in parallel.',
]

export function RecommendationSection() {
  return (
    <Section id="decision">
      <SectionHead
        number="14"
        label="Strategic Recommendation"
        title="Strategic Recommendation"
        question="What's the final call, and why should it come before bigger investments?"
      />

      <Reveal>
        <div className="max-w-3xl rounded-[var(--radius-l)] border border-line-strong bg-ink px-8 py-10 sm:px-11">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-accent">
            Recommendation
          </span>
          <div className="mt-4 flex flex-col gap-3.5">
            {PARAS.map((p) => (
              <p key={p.slice(0, 24)} className="font-serif text-lg leading-relaxed text-[#EDE9E2]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
