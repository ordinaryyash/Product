'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'context', label: 'Context' },
  { id: 'users', label: 'Users' },
  { id: 'problem', label: 'Problem' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'tradeoffs', label: 'Trade-offs' },
  { id: 'research', label: 'Research' },
  { id: 'competition', label: 'Competition' },
  { id: 'solution', label: 'Solution' },
  { id: 'impact', label: 'Success' },
  { id: 'priority', label: 'Priority' },
  { id: 'risks', label: 'Risks' },
  { id: 'assumptions', label: 'Assumptions' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'decision', label: 'Recommendation' },
  { id: 'learnings', label: 'Learnings' },
  { id: 'nextsteps', label: 'Next Steps' },
]

export function NavBar() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('context')

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setProgress(Number.isNaN(scrolled) ? 0 : scrolled)
    }
    onScroll()
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (s): s is HTMLElement => Boolean(s),
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[100] h-0.5 bg-accent transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
      <nav className="sticky top-0 z-90 border-b border-line bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-6 px-5 sm:px-7">
          <a
            href="#top"
            className="whitespace-nowrap font-mono text-[0.72rem] font-semibold tracking-[0.04em] text-ink"
          >
            SWIGGY <span className="text-accent-text">BOLT</span>
            <span className="hidden sm:inline"> · PRODUCT REVIEW</span>
          </a>
          <div className="no-scrollbar flex gap-5 overflow-x-auto">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`whitespace-nowrap border-b-2 pb-4 pt-1 font-mono text-[0.7rem] tracking-[0.03em] transition-colors ${
                  active === link.id
                    ? 'border-accent text-accent-text'
                    : 'border-transparent text-ink-tertiary hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
