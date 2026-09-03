import { PageHero } from "../components/SectionHeader"

type LegalPageProps = {
  kicker: string
  title: string
  intro: string
  sections: { heading: string; body: string }[]
}

function LegalLayout({ kicker, title, intro, sections }: LegalPageProps) {
  return (
    <main>
      <PageHero kicker={kicker} title={title} copy={intro} />
      <section className="relative py-16 md:py-24">
        <div className="page-shell max-w-3xl">
          <div className="flex flex-col gap-12">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="mb-4 font-headline text-[24px] uppercase">
                  {section.heading}
                </h2>
                <p className="font-body text-body-lg text-on-surface-variant">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export function Safety() {
  return (
    <LegalLayout
      kicker="COMPLIANCE"
      title="SAFETY STANDARDS"
      intro="Shop and site work follow documented procedures. PPE, hot-work permits, and lifting plans are not optional extras."
      sections={[
        {
          heading: "Workshop",
          body: "Fabrication is carried out under controlled conditions with designated welding bays, fume extraction, and stored mill certificates. Equipment is inspected on a published cycle.",
        },
        {
          heading: "Site erection",
          body: "Erection sequences are issued with the drawings. Temporary bracing, exclusion zones, and crane studies are agreed before steel arrives on the pad.",
        },
        {
          heading: "Reporting",
          body: "Incidents and near misses are logged. Clients receive method statements and risk assessments with the contract pack on request.",
        },
      ]}
    />
  )
}

export function Iso() {
  return (
    <LegalLayout
      kicker="COMPLIANCE"
      title="ISO CERTIFICATION"
      intro="Quality and environmental controls are aligned to ISO practice. Certificates are available with tender submissions."
      sections={[
        {
          heading: "Quality",
          body: "Document control, inspection and test plans, and non-conformance close-out follow ISO 9001 principles from order to handover.",
        },
        {
          heading: "Traceability",
          body: "Steel is identified from mill to member. Weld maps and coating batches are retained for the defect-liability period.",
        },
        {
          heading: "Certificates",
          body: "Current certificates can be issued as PDF with any quotation. Ask the estimating desk when you submit a brief.",
        },
      ]}
    />
  )
}

export function Terms() {
  return (
    <LegalLayout
      kicker="COMPLIANCE"
      title="TERMS OF SERVICE"
      intro="Quotations, variations, and programme commitments are written. This page is a summary, not a substitute for the contract."
      sections={[
        {
          heading: "Quotations",
          body: "Prices are valid for the period stated on the quote. They assume the drawings and notes supplied at bid. Changes in scope, steel price, or programme are variations.",
        },
        {
          heading: "Payment",
          body: "Unless otherwise agreed, a deposit is due on order, with progress claims against fabrication and delivery milestones.",
        },
        {
          heading: "Liability",
          body: "Design responsibility sits with the named engineer of record. Fabrication is to the approved drawings. Site works are limited to the scope listed in the order.",
        },
      ]}
    />
  )
}
