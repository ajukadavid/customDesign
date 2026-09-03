import { company } from "../company"
import { QuoteForm } from "../components/QuoteForm"
import { PageHero } from "../components/SectionHeader"
import { siteImages } from "../data"

export function Quote() {
  return (
    <main>
      <PageHero
        kicker="SECTION _07 : CONTACT US"
        title="GET A QUOTE"
        copy={company.contactHeadline}
      />
      <section className="relative py-16 md:py-24 lg:grid-bg">
        <div className="page-shell relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>
          <aside className="flex flex-col gap-8 border border-on-background/10 bg-surface-container-low lg:col-span-4">
            <div className="aspect-video overflow-hidden">
              <img
                src={siteImages.hero}
                alt="Finished Custom Design Constructs carport"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-8 p-8 pt-0">
              <div>
                <h2 className="mb-3 font-label text-label-caps uppercase tracking-widest text-primary">
                  What to include
                </h2>
                <ul className="space-y-3 font-body text-body-md text-on-surface-variant">
                  <li>Clear span, eave height, and bay spacing</li>
                  <li>Site location and wind / seismic notes</li>
                  <li>Finish: painted, galvanized, or specified coat</li>
                  <li>Target programme and access constraints</li>
                </ul>
              </div>
              <div className="border-t border-on-background/10 pt-8">
                <span className="mb-2 block font-tech text-technical-data text-secondary">
                  STUDIO — LEKKI
                </span>
                <p className="mb-4 font-body text-body-md text-on-surface-variant">
                  {company.contactIntro}
                </p>
                <p className="mb-4 font-body text-body-md text-on-surface-variant">
                  {company.addressOneLine}
                </p>
                <a
                  className="block font-body text-body-md text-on-background hover:text-primary"
                  href={`tel:${company.phoneTel}`}
                >
                  {company.phoneDisplay}
                </a>
                <a
                  className="mt-2 block font-body text-body-md text-on-background hover:text-primary"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
                <a
                  className="mt-2 block font-body text-body-md text-on-background hover:text-primary"
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
