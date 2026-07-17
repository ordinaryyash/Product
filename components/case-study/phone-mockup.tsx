import { Clock, Search, Zap } from 'lucide-react'
import type { ReactNode } from 'react'

/* A lightweight, Swiggy-flavoured phone frame — original UI, no copyrighted assets. */
export function PhoneFrame({
  tone = 'neutral',
  caption,
  children,
}: {
  tone?: 'neutral' | 'good' | 'risk'
  caption: string
  children: ReactNode
}) {
  const accent =
    tone === 'good' ? 'text-good' : tone === 'risk' ? 'text-risk' : 'text-accent-text'
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full max-w-[248px] rounded-[2rem] border border-line-strong bg-background p-2 shadow-[0_24px_60px_-30px_rgba(24,20,15,0.35)]">
        <div className="overflow-hidden rounded-[1.6rem] border border-line bg-paper">
          {/* status bar */}
          <div className="flex items-center justify-between px-4 pt-3 text-[0.55rem] font-semibold text-ink-tertiary">
            <span>9:41</span>
            <span className="h-1 w-10 rounded-full bg-line-strong" />
            <span>5G</span>
          </div>
          {/* bolt header */}
          <div className="flex items-center gap-1.5 px-4 pb-3 pt-2">
            <Zap className="size-3.5 text-accent" fill="currentColor" strokeWidth={0} />
            <span className="font-mono text-[0.62rem] font-semibold tracking-wide text-ink">
              BOLT
            </span>
            <span className={`ml-auto flex items-center gap-1 text-[0.55rem] font-semibold ${accent}`}>
              <Clock className="size-2.5" /> 10 min
            </span>
          </div>
          {/* search bar */}
          <div className="mx-4 mb-3 flex items-center gap-1.5 rounded-lg border border-line bg-background px-2.5 py-1.5">
            <Search className="size-2.5 text-ink-tertiary" />
            <span className="text-[0.55rem] text-ink-tertiary">Search Bolt kitchens</span>
          </div>
          <div className="px-4 pb-5">{children}</div>
        </div>
      </div>
      <span className="text-center font-mono text-[0.68rem] tracking-[0.03em] text-ink-tertiary">
        {caption}
      </span>
    </div>
  )
}

export function DishRow({
  name,
  price,
  state = 'available',
}: {
  name: string
  price: string
  state?: 'available' | 'unavailable' | 'suggested'
}) {
  const styles =
    state === 'unavailable'
      ? 'border-line bg-background opacity-55'
      : state === 'suggested'
        ? 'border-accent/50 bg-accent-tint'
        : 'border-line bg-background'
  return (
    <div className={`mb-2 flex items-center gap-2 rounded-lg border px-2.5 py-2 ${styles}`}>
      <div
        className={`size-7 shrink-0 rounded-md ${
          state === 'suggested' ? 'bg-accent/25' : 'bg-paper-2'
        }`}
      />
      <div className="min-w-0 flex-1">
        <div
          className={`truncate text-[0.62rem] font-semibold ${
            state === 'unavailable' ? 'text-ink-tertiary line-through' : 'text-ink'
          }`}
        >
          {name}
        </div>
        <div className="text-[0.55rem] text-ink-tertiary">
          {state === 'unavailable' ? 'Unavailable now' : state === 'suggested' ? 'Ready in 10 min' : price}
        </div>
      </div>
      {state === 'suggested' ? (
        <span className="rounded-full bg-accent px-2 py-0.5 text-[0.5rem] font-semibold text-background">
          ADD
        </span>
      ) : state === 'available' ? (
        <span className="rounded-full border border-accent px-2 py-0.5 text-[0.5rem] font-semibold text-accent-text">
          ADD
        </span>
      ) : (
        <span className="text-[0.5rem] font-semibold text-ink-tertiary">—</span>
      )}
    </div>
  )
}
