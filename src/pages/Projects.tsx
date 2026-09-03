import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { company } from "../company"
import { PageHero } from "../components/SectionHeader"
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "../data"

export function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All")

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <main>
      <PageHero
        kicker="SECTION _02 : PORTFOLIO"
        title="PREVIOUS PROJECTS"
        copy={company.projectsIntro}
      />
      <section className="relative py-16 md:py-24 lg:grid-bg">
        <div className="page-shell relative z-10">
          <div className="mb-10 flex flex-wrap gap-2">
            {projectCategories.map((category) => {
              const active = filter === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={`border px-4 py-2 font-label text-label-caps uppercase tracking-widest transition-colors ${
                    active
                      ? "border-primary bg-primary text-on-primary"
                      : "border-on-background/15 bg-surface text-on-surface hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
          <p className="mb-8 font-tech text-technical-data text-on-surface-variant">
            {visible.length.toString().padStart(2, "0")} STRUCTURES
          </p>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {visible.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden border border-on-background/10 bg-surface lg:block-shadow-hover"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 lg:grayscale-0"
                  />
                </div>
                <div className="bg-surface-container-low p-6 md:p-8">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="font-tech text-technical-data text-primary">
                      [ {project.id} ]
                    </span>
                    <span className="font-label text-label-caps text-on-surface/30">
                      {project.year}
                    </span>
                  </div>
                  <span className="mb-2 block font-label text-label-caps uppercase tracking-widest text-primary">
                    {project.category}
                  </span>
                  <h2 className="mb-2 font-headline text-[20px] uppercase md:text-headline-md">
                    {project.title}
                  </h2>
                  <p className="font-body text-body-md text-on-surface-variant">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 border border-on-background/10 bg-on-background p-8 text-background md:p-12">
            <span className="mb-4 block font-tech text-technical-data text-primary">
              NEXT STRUCTURE
            </span>
            <h2 className="mb-4 font-headline text-headline-lg-mobile uppercase md:text-headline-md">
              Have a brief ready?
            </h2>
            <p className="mb-8 max-w-xl font-body text-body-md text-surface-variant">
              {company.contactHeadline} {company.contactIntro}
            </p>
            <Link
              to="/quote"
              className="inline-flex bg-primary px-8 py-4 font-label text-label-caps font-bold uppercase tracking-widest text-on-primary block-shadow-black-hover"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
