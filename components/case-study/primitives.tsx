import { Lightbulb } from 'lucide-react'
import type { ReactNode } from 'react'
import { Reveal } from './reveal'

/* Centered editorial container */
export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-4xl px-5 sm:px-7 ${className ?? ''}`}>{children}</div>
  )
}

/* Full-bleed section shell with optional tinted background */
export function Section({
  id,
  tint = false,
  children,
}: {
  id: string
  tint?: boolean
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-line py-16 sm:py-24 ${tint ? 'bg-paper' : 'bg-background'}`}
    >
      <Container>{children}</Container>
    </section>
  )
}

/* Section number / title / guiding question header */
export function SectionHead({
  number,
  label,
  title,
  question,
  lede,
}: {
  number: string
  label: string
  title: string
  question: string
  lede?: string
}) {
  return (
    <Reveal className="mb-11 max-w-2xl">
      <span className="font-mono text-xs font-semibold tracking-[0.06em] text-accent-text">
        {number} — {label}
      </span>
      <h2 className="mt-3.5 text-pretty text-[1.7rem] leading-[1.2] sm:text-[2.1rem]">{title}</h2>
      <p className="mt-3 max-w-xl font-mono text-[0.78rem] leading-relaxed text-ink-tertiary">
        <span className="text-accent-text">Q — </span>
        {question}
      </p>
      {lede ? (
        <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-secondary">{lede}</p>
      ) : null}
    </Reveal>
  )
}

/* Highlighted "Key Product Insight" anchor card */
export function Insight({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mt-8">
      <div className="flex max-w-2xl items-start gap-4 rounded-[var(--radius-m)] border border-line-strong bg-accent-tint px-6 py-6">
        <Lightbulb className="mt-0.5 size-5 shrink-0 text-accent-text" strokeWidth={2} />
        <div>
          <span className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.08em] text-accent-text">
            Key Product Insight
          </span>
          <p className="font-serif text-[1.05rem] leading-relaxed text-ink">{children}</p>
        </div>
      </div>
    </Reveal>
  )
}

/* Small utility: eyebrow label */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 block font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink-tertiary">
      {children}
    </span>
  )
}
