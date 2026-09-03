export function MeasuringTape() {
  return (
    <div className="hidden gap-1 md:flex" aria-hidden="true">
      <div className="h-4 w-px bg-on-background/20" />
      <div className="mx-2 h-6 w-px bg-on-background/40" />
      <div className="h-4 w-px bg-on-background/20" />
      <div className="mx-2 h-8 w-px bg-primary" />
      <div className="h-4 w-px bg-on-background/20" />
    </div>
  )
}

type SectionHeaderProps = {
  kicker: string
  title: string
}

export function SectionHeader({ kicker, title }: SectionHeaderProps) {
  return (
    <div className="hairline-h mb-12 flex items-end justify-between pb-8 md:mb-20">
      <div>
        <span className="mb-4 block font-tech text-technical-data text-secondary">
          {kicker}
        </span>
        <h2 className="font-headline text-headline-lg-mobile uppercase text-on-background md:text-headline-lg">
          {title}
        </h2>
      </div>
      <MeasuringTape />
    </div>
  )
}

type PageHeroProps = {
  kicker: string
  title: string
  copy?: string
}

export function PageHero({ kicker, title, copy }: PageHeroProps) {
  return (
    <section className="relative border-b border-on-background/10 bg-on-background py-16 text-background md:py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="page-shell relative z-10">
        <div className="mb-6 border-l-4 border-primary py-2 pl-6">
          <span className="font-label text-label-caps uppercase tracking-widest text-primary">
            {kicker}
          </span>
        </div>
        <h1 className="max-w-4xl font-headline text-headline-lg-mobile uppercase leading-none text-background md:text-headline-lg lg:text-display-lg">
          {title}
        </h1>
        {copy ? (
          <p className="mt-8 max-w-2xl font-body text-body-lg text-surface-variant">
            {copy}
          </p>
        ) : null}
      </div>
    </section>
  )
}
