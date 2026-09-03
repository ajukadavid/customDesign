import { Link } from "react-router-dom"
import { company } from "../company"
import { PageHero } from "../components/SectionHeader"
import { processSteps, siteImages } from "../data"

export function About() {
  return (
    <main>
      <PageHero
        kicker="SECTION _05 : ABOUT US"
        title="ABOUT US"
        copy="We don't simply build structures; we design and construct solutions that work."
      />
      <section className="relative py-16 md:py-24 lg:grid-bg">
        <div className="page-shell relative z-10">
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-7">
              {company.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="font-body text-body-lg text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="border border-on-background/10 bg-surface-container-low p-8 lg:col-span-5">
              <span className="mb-4 block font-tech text-technical-data text-primary">
                CAC REGISTRATION
              </span>
              <p className="mb-1 font-headline text-[22px] uppercase">
                {company.cacNumber}
              </p>
              <p className="mb-8 font-body text-body-md text-on-surface-variant">
                Registered with the Corporate Affairs Commission as a design
                and construction company.
              </p>
              <span className="mb-4 block font-tech text-technical-data text-primary">
                LEADERSHIP
              </span>
              <p className="mb-1 font-headline text-[20px] uppercase">
                {company.ceo.name}
              </p>
              <p className="mb-8 font-label text-label-caps text-secondary">
                {company.ceo.title}
              </p>
              <span className="mb-2 block font-tech text-technical-data text-primary">
                STUDIO
              </span>
              <p className="font-body text-body-md text-on-surface-variant">
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                className="mt-4 block font-tech text-technical-data text-on-background hover:text-primary"
                href={`tel:${company.phoneTel}`}
              >
                {company.phoneDisplay}
              </a>
              <a
                className="mt-2 block font-tech text-technical-data text-on-background hover:text-primary"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </div>
          </div>

          <div className="mb-16 overflow-hidden border border-on-background/10">
            <img
              src={siteImages.about}
              alt="White steel carport by Custom Design Constructs"
              className="max-h-[560px] w-full object-cover object-center"
            />
          </div>

          <div className="mb-12">
            <span className="mb-4 block font-tech text-technical-data text-secondary">
              OUR APPROACH
            </span>
            <h2 className="mb-4 font-headline text-headline-lg-mobile uppercase md:text-headline-md">
              Measure. Design. Construct.
            </h2>
            <p className="max-w-3xl font-body text-body-lg text-on-surface-variant">
              {company.approachIntro} {company.approachClose}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[1px] border border-on-background/10 bg-on-background/10 md:grid-cols-3">
            {processSteps.map((pillar) => (
              <article key={pillar.id} className="bg-surface">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="mb-6 block font-label text-label-caps text-on-surface/30">
                    _{pillar.id}
                  </span>
                  <h2 className="mb-4 font-headline text-[24px] uppercase">
                    {pillar.title}
                  </h2>
                  <p className="font-body text-body-md text-on-surface-variant">
                    {pillar.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              to="/process"
              className="inline-flex border-2 border-on-background px-8 py-4 font-label text-label-caps font-bold uppercase tracking-widest hover:bg-on-background hover:text-background"
            >
              SEE THE PROCESS
            </Link>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-on-background px-8 py-4 font-label text-label-caps font-bold uppercase tracking-widest text-background block-shadow-hover"
            >
              WHATSAPP THE STUDIO
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
