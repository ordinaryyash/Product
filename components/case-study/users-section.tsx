import { Check, User, X } from 'lucide-react'
import { Section, SectionHead } from './primitives'
import { Reveal } from './reveal'

const TAGS = ['Students', 'Working professionals', 'Busy parents', 'Anyone with limited time']

const PAINS = [
  'Limited time',
  'Hostel curfew',
  'Wants food before deadlines',
  "Doesn't want to spend time browsing",
]
const GOALS = ['Get food quickly', 'Continue studying', 'Reliable delivery']

const JTBD = [
  {
    num: 'JTBD 01',
    parts: [
      'When I have ',
      'limited time before a fixed deadline',
      ', I want to receive a meal quickly so I can continue with my planned activities without disruption.',
    ],
  },
  {
    num: 'JTBD 02',
    parts: [
      'When I ',
      'miss or skip my planned meal',
      ', I want a reliable way to get food quickly so I can return to work with minimal interruption.',
    ],
  },
  {
    num: 'JTBD 03',
    parts: [
      "When I'm ",
      'overwhelmed by too many food choices',
      ', I want a curated set of reliable options so I can make a quick decision without overthinking.',
    ],
  },
]

export function UsersSection() {
  return (
    <Section id="users" tint>
      <SectionHead
        number="02"
        label="Users"
        title="Target Users & Jobs To Be Done"
        question="Who exactly are we building for, and what are they hiring Bolt to do?"
      />

      <Reveal>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line-strong px-3.5 py-1.5 font-mono text-xs text-ink-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 grid gap-7 rounded-[var(--radius-m)] border border-line bg-background p-7 sm:grid-cols-[auto_1fr]">
          <div className="flex size-16 items-center justify-center rounded-full bg-ink text-background">
            <User className="size-6" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-xl">Time-Constrained Student</h3>
            <p className="mt-1 font-mono text-xs text-ink-tertiary">
              Representative Persona · Age 22
            </p>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <span className="mb-2.5 block font-mono text-[0.7rem] uppercase tracking-[0.07em] text-accent-text">
                  Pain Points
                </span>
                <ul className="flex flex-col gap-2">
                  {PAINS.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink-secondary">
                      <X className="mt-0.5 size-3.5 shrink-0 text-ink-tertiary" strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="mb-2.5 block font-mono text-[0.7rem] uppercase tracking-[0.07em] text-accent-text">
                  Goals
                </span>
                <ul className="flex flex-col gap-2">
                  {GOALS.map((g) => (
                    <li key={g} className="flex items-start gap-2 text-sm text-ink-secondary">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-good" strokeWidth={2.5} />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {JTBD.map((job, i) => (
          <Reveal key={job.num} delay={i * 80}>
            <div className="h-full rounded-[var(--radius-m)] border border-line bg-background p-6">
              <span className="mb-3 block font-mono text-[0.7rem] tracking-[0.06em] text-accent-text">
                {job.num}
              </span>
              <p className="text-sm leading-relaxed text-ink-secondary">
                {job.parts[0]}
                <b className="font-semibold text-ink">{job.parts[1]}</b>
                {job.parts[2]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
