import { Eyebrow, Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const PLAN = [
  'Interviewing 10–15 Bolt users.',
  'Measuring browsing time before checkout.',
  'Running an A/B experiment comparing the current experience against the Decision Confidence System.',
  'Estimating engineering effort with the product and engineering teams.',
  'Validating recommendation quality with restaurant partners.',
]

export function NextStepsSection() {
  return (
    <Section id="nextsteps">
      <SectionHead
        number="16"
        label="Next Steps"
        title="Next Steps"
        question="What would validating this proposal actually look like inside Swiggy?"
      />

      <Reveal className="max-w-2xl">
        <p className="text-[1.05rem] leading-relaxed text-ink-secondary">
          If this proposal were being developed inside Swiggy, the next phase would focus on
          validating assumptions before implementation.
        </p>
      </Reveal>

      <Reveal className="mt-8">
        <Eyebrow>Validation Plan</Eyebrow>
        <ul className="max-w-2xl">
          {PLAN.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3.5 border-b border-line py-3.5 text-[0.95rem] text-ink-secondary last:border-none"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-8">
        <div className="max-w-2xl rounded-[var(--radius-m)] border border-line-strong border-l-[3px] border-l-accent bg-paper px-8 py-7">
          <p className="font-serif text-lg leading-snug text-ink">
            Product recommendations become significantly stronger when validated through
            experimentation rather than intuition.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
