import { Link } from "react-router-dom"
import { company } from "../company"
import { PageHero } from "../components/SectionHeader"
import { processSteps } from "../data"

export function Process() {
  return (
    <main>
      <PageHero
        kicker="SECTION _06 : OUR APPROACH"
        title="MEASURE. DESIGN. CONSTRUCT."
        copy={`${company.approachIntro} ${company.approachClose}`}
      />
      <section className="relative py-16 md:py-24 lg:grid-bg">
        <div className="page-shell relative z-10">
          <ol className="border border-on-background/10">
            {processSteps.map((step) => (
              <li
                key={step.id}
                className="grid grid-cols-1 border-b border-on-background/10 last:border-b-0 md:grid-cols-12"
              >
                <div className="flex items-start justify-between border-b border-on-background/10 p-8 md:col-span-3 md:border-r md:border-b-0">
                  <span className="font-tech text-technical-data text-secondary">
                    {step.id}.
                  </span>
                  <span className="h-8 w-8 border-r-2 border-b-2 border-primary" />
                </div>
                <div className="grid grid-cols-1 gap-8 p-8 md:col-span-9 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <h2 className="mb-4 font-headline text-[24px] uppercase md:text-headline-md">
                      {step.title}
                    </h2>
                    <p className="max-w-2xl font-body text-body-md text-on-surface-variant">
                      {step.copy}
                    </p>
                  </div>
                  <div className="overflow-hidden border border-on-background/10 lg:col-span-5">
                    <img
                      src={step.image}
                      alt={`${step.title} at Custom Design Constructs`}
                      className="aspect-[4/3] h-full w-full object-cover"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-12 font-headline text-[24px] uppercase text-on-background">
            {company.approachClose}
          </p>
          <div className="mt-16">
            <Link
              to="/quote"
              className="inline-flex bg-on-background px-8 py-4 font-label text-label-caps font-bold uppercase tracking-widest text-background block-shadow-hover"
            >
              START A BRIEF
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
