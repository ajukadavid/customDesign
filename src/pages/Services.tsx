import { Link } from "react-router-dom"
import { company } from "../company"
import { Icon } from "../components/Icon"
import { PageHero } from "../components/SectionHeader"
import { services } from "../data"

export function Services() {
  return (
    <main>
      <PageHero
        kicker="SECTION _01 : OUR SERVICES"
        title="OUR SERVICES"
        copy={company.servicesIntro}
      />
      <section className="relative py-16 md:py-24 lg:grid-bg">
        <div className="page-shell relative z-10">
          <div className="grid grid-cols-1 gap-0 border border-on-background/10 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                className="group relative flex min-h-[280px] flex-col border border-on-background/10 transition-colors hover:bg-surface-container"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-10 flex items-start justify-between">
                    <span className="font-tech text-technical-data text-secondary">
                      {service.id}.
                    </span>
                    <Icon
                      name={service.icon}
                      className="text-4xl text-on-background transition-colors group-hover:text-primary"
                    />
                  </div>
                  <div className="mt-auto">
                    {service.tag ? (
                      <div className="mb-4 inline-block bg-on-background px-2 py-1 font-label text-label-caps text-primary">
                        {service.tag}
                      </div>
                    ) : null}
                    <h2 className="mb-4 font-headline text-[24px] uppercase md:text-headline-md">
                      {service.title}
                    </h2>
                    <p className="font-body text-body-md text-on-surface-variant">
                      {service.detail}
                    </p>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 m-4 h-8 w-8 border-r-2 border-b-2 border-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </article>
            ))}
          </div>
          <div className="mt-16 flex justify-start">
            <Link
              to="/quote"
              className="inline-flex items-center border-2 border-on-background px-8 py-4 font-label text-label-caps font-bold uppercase tracking-widest text-on-background transition-colors hover:bg-on-background hover:text-background"
            >
              DISCUSS A PROJECT
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
