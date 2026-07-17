import { ArrowDown } from 'lucide-react'
import { Container } from './primitives'
import { Reveal } from './reveal'

const META = [
  { label: 'Document', value: 'Feature Review — Swiggy Bolt' },
  { label: 'Type', value: 'Independent Product Strategy Review' },
  { label: 'Frameworks', value: 'JTBD · North Star · RICE' },
  { label: 'Classification', value: 'PM Case Study' },
]

export function Hero() {
  return (
    <header id="top" className="border-b border-line pb-16 pt-14 sm:pb-24 sm:pt-16">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-5 rounded-[var(--radius-m)] border border-line-strong bg-paper px-6 py-5 sm:grid-cols-4">
            {META.map((m) => (
              <div key={m.label} className="flex flex-col gap-1.5">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ink-tertiary">
                  {m.label}
                </span>
                <span className="text-[0.82rem] font-semibold leading-snug text-ink">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-12 max-w-3xl text-balance text-[2.1rem] leading-[1.08] sm:text-[3rem] lg:text-[3.25rem]">
            Reducing Decision Friction in Swiggy Bolt
          </h1>
          <p className="mt-5 max-w-xl font-serif text-lg italic leading-relaxed text-ink-secondary">
            A product feature teardown of Bolt&apos;s speed-first value proposition — and a
            recommendation to fix an unavailability problem that quietly works against it.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 border-l-[3px] border-accent pl-6">
            <span className="mb-3 block font-mono text-[0.7rem] uppercase tracking-[0.08em] text-accent-text">
              Executive Summary
            </span>
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-secondary">
              Swiggy Bolt is a rapid food delivery feature that curates restaurants and menu items
              capable of being prepared and delivered consistently within a short time window. It is
              designed for time-constrained users such as working professionals, students, and
              others who prioritize speed over extensive menu variety.
            </p>
            <p className="mt-3.5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-secondary">
              This review examines Bolt&apos;s product strategy through its North Star, secondary,
              and guardrail metrics, operational trade-offs, competitor landscape, and user
              feedback. Based on the analysis, I identified a UX issue that increases decision
              friction and propose a lightweight improvement that aligns with Bolt&apos;s core value
              proposition of speed.
            </p>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#context"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Read the review
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <span className="font-mono text-[0.72rem] tracking-[0.03em] text-ink-tertiary">
              16 sections · ~10 min read
            </span>
          </div>
        </Reveal>
      </Container>
    </header>
  )
}
