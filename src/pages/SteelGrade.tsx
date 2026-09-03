import { PageHero } from "../components/SectionHeader"
import { siteImages, steelGrades } from "../data"

export function SteelGrade() {
  return (
    <main>
      <PageHero
        kicker="SECTION _04 : MATERIAL"
        title="STEEL GRADE"
        copy="Specified grades, not generic stock. Primary frames, solar arrays, and coastal work each get the certificate that matches the load case."
      />
      <section className="relative py-16 md:py-24 lg:grid-bg">
        <div className="page-shell relative z-10">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="max-w-3xl lg:col-span-7">
              <p className="font-body text-body-lg text-on-surface-variant">
                Mill certificates travel with the job. Coatings are specified
                against environment: painted shop primer, full paint systems, or
                hot-dip galvanizing for solar-ready and exposed structures.
              </p>
            </div>
            <div className="overflow-hidden border border-on-background/10 lg:col-span-5">
              <img
                src={siteImages.steelGrade}
                alt="Steel column base plate being aligned and anchored on site"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
          <div className="overflow-x-auto border border-on-background/10">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="bg-on-background text-background">
                <tr>
                  <th className="px-6 py-4 font-label text-label-caps uppercase tracking-widest">
                    Grade
                  </th>
                  <th className="px-6 py-4 font-label text-label-caps uppercase tracking-widest">
                    Typical use
                  </th>
                  <th className="px-6 py-4 font-label text-label-caps uppercase tracking-widest">
                    Yield
                  </th>
                  <th className="px-6 py-4 font-label text-label-caps uppercase tracking-widest">
                    Tag
                  </th>
                </tr>
              </thead>
              <tbody>
                {steelGrades.map((row) => (
                  <tr
                    key={row.grade}
                    className="border-t border-on-background/10 bg-surface"
                  >
                    <td className="px-6 py-5 font-tech text-technical-data text-on-background">
                      {row.grade}
                    </td>
                    <td className="px-6 py-5 font-body text-body-md text-on-surface-variant">
                      {row.use}
                    </td>
                    <td className="px-6 py-5 font-tech text-technical-data">
                      {row.yield}
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-block bg-on-background px-2 py-1 font-label text-label-caps text-primary">
                        {row.tag}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
