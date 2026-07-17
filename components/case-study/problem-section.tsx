import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

export function ProblemSection() {
  return (
    <Section id="problem">
      <SectionHead
        number="03"
        label="Problem"
        title="Problem Statement"
        question="What's broken, and why does it matter to the business?"
      />

      <Reveal>
        <div className="max-w-2xl rounded-[var(--radius-m)] border border-line-strong border-l-[3px] border-l-risk bg-paper px-8 py-7">
          <p className="font-serif text-lg leading-snug text-ink">
            Users choose Bolt to save time — not only in delivery, but in decision-making.
          </p>
          <p className="mt-3 font-serif text-lg leading-snug text-ink">
            Displaying unavailable menu items increases decision friction by forcing users to
            repeatedly search for alternatives. This directly contradicts Bolt&apos;s promise of
            speed.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
