import { Link } from "react-router-dom"
import { company } from "../company"
import { Icon } from "../components/Icon"
import { SectionHeader } from "../components/SectionHeader"
import { projects, services, siteImages } from "../data"

export function Home() {
  return (
    <main>
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-on-background pb-margin-desktop lg:min-h-[90vh] lg:items-center">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center lg:opacity-50"
            style={{ backgroundImage: `url('${siteImages.hero}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/50 to-transparent lg:bg-none" />
          <div className="pointer-events-none absolute inset-0 hidden grid-bg opacity-20 lg:block" />
        </div>

        <div className="page-shell relative z-10 w-full py-8 lg:py-20">
          <div className="mb-6 inline-flex w-fit items-center gap-2 border border-primary/30 bg-on-background/80 px-4 py-2 backdrop-blur-sm lg:mb-8 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
            <span className="h-2 w-2 bg-primary lg:hidden" />
            <div className="hidden border-l-4 border-primary py-2 pl-6 lg:block">
              <span className="font-label text-label-caps uppercase tracking-widest text-primary">
                STRUCTURAL FABRICATION — LEKKI
              </span>
            </div>
            <span className="font-label text-label-caps tracking-[0.2em] text-primary lg:hidden">
              PRECISION BUILT.
            </span>
          </div>

          <h1 className="max-w-4xl font-headline text-headline-lg-mobile uppercase leading-none text-on-primary lg:mb-8 lg:text-display-lg">
            <span className="lg:hidden">
              Expert, Passion
              <br />
              and Precise.
            </span>
            <span className="hidden lg:block">
              EXPERT,
              <br />
              PASSION AND
              <br />
              <span className="text-primary">PRECISE.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl border-l-2 border-primary pl-4 font-body text-body-lg text-surface-variant lg:mb-12 lg:mt-0 lg:max-w-2xl lg:border-0 lg:pl-0">
            <span className="lg:hidden">
              {company.about[1]}
            </span>
            <span className="hidden lg:inline">
              {company.about[1]} {company.about[3]}
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:gap-6">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center bg-primary px-8 py-4 font-label text-label-caps font-bold uppercase tracking-widest text-on-primary transition-colors hover:bg-surface-tint lg:block-shadow-black-hover"
            >
              GET A QUOTE
              <Icon name="arrow_forward" className="ml-2" filled />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center border-2 border-on-primary px-8 py-4 font-label text-label-caps font-bold uppercase tracking-widest text-on-primary transition-colors hover:bg-on-primary hover:text-on-background"
            >
              VIEW PROJECTS
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 right-margin-desktop hidden h-2 w-64 measuring-line-h md:block lg:hidden" />
        <div className="absolute bottom-12 left-margin-desktop z-10 hidden flex-col items-center gap-4 opacity-50 lg:flex">
          <span className="ml-4 origin-left rotate-90 font-label text-label-caps text-background">
            SCROLL
          </span>
          <div className="h-16 w-px bg-background" />
        </div>
      </section>

      <section
        id="services"
        className="relative bg-background py-16 md:py-[120px] lg:grid-bg lg:py-32"
      >
        <div className="page-shell relative z-10">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end lg:hidden">
            <div>
              <h2 className="font-headline text-headline-md uppercase">
                Our Services
              </h2>
              <div className="mt-4 h-1 w-24 bg-primary" />
            </div>
            <div className="flex items-center gap-2 font-tech text-technical-data text-on-surface-variant">
              <Icon name="manufacturing" className="text-[16px]" />
              FABRICATION CAPABILITIES
            </div>
          </div>
          <div className="hidden lg:block">
            <SectionHeader
              kicker="SECTION _01 : OUR SERVICES"
              title="OUR SERVICES"
            />
          </div>

          <div className="grid grid-cols-1 gap-[1px] border border-on-surface/10 bg-on-surface/10 md:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:bg-transparent">
            {services.map((service) => {
              if (service.featured) {
                return (
                  <div
                    key={service.id}
                    className="group relative flex min-h-[280px] flex-col overflow-hidden border-on-background/10 bg-surface p-8 lg:col-span-2 lg:min-h-[320px] lg:border lg:bg-on-background lg:text-background"
                  >
                    <div className="absolute inset-0 z-0 hidden opacity-20 lg:block">
                      <div
                        className="h-full w-full bg-cover bg-center mix-blend-luminosity"
                        style={{
                          backgroundImage: `url('${siteImages.warehouseFeature}')`,
                        }}
                      />
                    </div>
                    <div className="absolute top-0 right-0 p-4 font-label text-label-caps text-on-surface/30 group-hover:text-primary lg:hidden">
                      _{service.id}
                    </div>
                    <div className="relative z-10 mb-6 flex items-start justify-between lg:mb-12">
                      <span className="hidden font-tech text-technical-data text-tertiary-fixed-dim lg:block">
                        {service.id}.
                      </span>
                      <Icon
                        name={service.icon}
                        className="text-[40px] text-on-surface group-hover:text-primary lg:text-4xl lg:text-primary"
                      />
                    </div>
                    <div className="relative z-10 mt-auto lg:w-2/3">
                      <div className="mb-4 hidden bg-primary px-2 py-1 font-label text-label-caps text-on-primary lg:inline-block">
                        {service.tag}
                      </div>
                      <h3 className="mb-4 font-headline text-[24px] uppercase lg:text-headline-md lg:text-background">
                        {service.title}
                      </h3>
                      <p className="font-body text-body-md text-on-surface-variant lg:text-surface-variant">
                        <span className="lg:hidden">{service.summary}</span>
                        <span className="hidden lg:inline">{service.detail}</span>
                      </p>
                    </div>
                  </div>
                )
              }

              if (service.wide) {
                return (
                  <div
                    key={service.id}
                    className="group relative flex min-h-[280px] flex-col overflow-hidden bg-surface p-8 lg:col-span-3 lg:min-h-[320px] lg:border lg:border-on-background/10 lg:bg-surface-container-low"
                  >
                    <div className="absolute top-0 right-0 p-4 font-label text-label-caps text-on-surface/30 group-hover:text-primary lg:hidden">
                      _{service.id}
                    </div>
                    <div className="mb-6 flex items-start justify-between lg:mb-12">
                      <span className="hidden font-tech text-technical-data text-secondary lg:block">
                        {service.id}.
                      </span>
                      <Icon
                        name={service.icon}
                        className="text-[40px] text-on-surface transition-colors group-hover:text-primary lg:text-4xl lg:text-on-background"
                      />
                    </div>
                    <div className="mt-auto flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                      <div className="max-w-2xl">
                        <h3 className="mb-4 font-headline text-[24px] uppercase lg:text-headline-md">
                          {service.title}
                        </h3>
                        <p className="font-body text-body-md text-on-surface-variant">
                          <span className="lg:hidden">{service.summary}</span>
                          <span className="hidden lg:inline">
                            {service.detail}
                          </span>
                        </p>
                      </div>
                      <Link
                        to="/quote"
                        className="hidden shrink-0 items-center justify-center border-2 border-on-background px-6 py-3 font-label text-label-caps font-bold uppercase tracking-widest text-on-background transition-colors hover:bg-on-background hover:text-background lg:inline-flex"
                      >
                        DISCUSS A PROJECT
                      </Link>
                    </div>
                  </div>
                )
              }

              return (
                <div
                  key={service.id}
                  className="group relative flex min-h-[280px] flex-col overflow-hidden bg-surface p-8 transition-colors hover:bg-surface-container-low lg:min-h-[320px] lg:border lg:border-on-background/10 lg:hover:bg-surface-container"
                >
                  <div className="absolute top-0 right-0 p-4 font-label text-label-caps text-on-surface/30 transition-colors group-hover:text-primary lg:hidden">
                    _{service.id}
                  </div>
                  <div className="mb-6 flex items-start justify-between lg:mb-12">
                    <span className="hidden font-tech text-technical-data text-secondary lg:block">
                      {service.id}.
                    </span>
                    <Icon
                      name={service.icon}
                      className="text-[40px] text-on-surface transition-colors group-hover:text-primary lg:text-4xl lg:text-on-background"
                    />
                  </div>
                  <div className="mt-auto">
                    {service.tag ? (
                      <div className="mb-4 hidden bg-on-background px-2 py-1 font-label text-label-caps text-primary lg:inline-block">
                        {service.tag}
                      </div>
                    ) : null}
                    <h3 className="mb-4 font-headline text-[24px] uppercase lg:text-headline-md">
                      {service.title}
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      <span className="lg:hidden">{service.summary}</span>
                      <span className="hidden lg:inline">{service.detail}</span>
                    </p>
                  </div>
                  <div className="absolute right-0 bottom-0 m-4 hidden h-8 w-8 border-r-2 border-b-2 border-primary opacity-0 transition-opacity group-hover:opacity-100 lg:block" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="border-t border-on-background/10 bg-surface-container-low py-16 lg:bg-background lg:py-32 lg:grid-bg"
      >
        <div className="page-shell relative z-10">
          <div className="mb-12 flex flex-col gap-6 lg:hidden">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-8 bg-primary" />
              <span className="font-label text-label-caps uppercase tracking-widest text-primary">
                Portfolio
              </span>
            </div>
            <h2 className="font-headline text-headline-md uppercase">
              Previous Projects
            </h2>
          </div>
          <div className="hidden lg:block">
            <SectionHeader
              kicker="SECTION _02 : PORTFOLIO"
              title="PREVIOUS PROJECTS"
            />
          </div>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {projects.filter((project) => project.featured).map((project) => (
              <Link
                key={project.id}
                to="/projects"
                className="group relative overflow-hidden border border-on-background/10 bg-surface lg:block-shadow-hover"
              >
                <div className="aspect-video overflow-hidden bg-on-surface/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 lg:grayscale-0"
                  />
                </div>
                <div className="bg-surface p-6 lg:bg-surface-container-low lg:p-8">
                  <div className="mb-2 flex items-start justify-between lg:hidden">
                    <span className="font-tech text-technical-data text-primary">
                      [ {project.id} ]
                    </span>
                    <span className="font-label text-label-caps text-on-surface/30">
                      {project.year}
                    </span>
                  </div>
                  <span className="mb-2 hidden font-label text-label-caps uppercase tracking-widest text-primary lg:block">
                    {project.category}
                  </span>
                  <h3 className="mb-2 font-headline text-[20px] uppercase lg:mb-0 lg:text-headline-md">
                    {project.title}
                  </h3>
                  <p className="font-body text-body-md text-on-surface-variant lg:hidden">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/projects"
              className="border border-primary px-8 py-4 font-label text-label-caps uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-on-primary"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}