import { Container } from './primitives'

export function Footer() {
  return (
    <footer className="py-12 sm:py-16">
      <Container>
        <div className="max-w-2xl">
          <span className="mb-2.5 block font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink-tertiary">
            Disclaimer
          </span>
          <p className="text-[0.85rem] leading-relaxed text-ink-tertiary">
            This analysis is an independent product case study based on personal product usage,
            publicly available user feedback, and personal observations. It is not affiliated with
            or endorsed by Swiggy.
          </p>
        </div>
        <div className="mt-7 flex flex-wrap justify-between gap-3 border-t border-line pt-6 font-mono text-[0.72rem] text-ink-tertiary">
          <span>Swiggy Bolt — Feature Review</span>
          <span>Independent Product Strategy Review</span>
          <span>Internal · PM Case Study</span>
        </div>
      </Container>
    </footer>
  )
}
