import { Tools, IconLink, NavLink, Dates } from '..'
import { getProjects, LinkType, ProjectType } from '@/app/_utils'

function Links({ links }: { links: LinkType[] }) {
  if (!links?.length) return null

  return (
    <div className='flex flex-row gap-2'>
      {links.map((link, index) => (
        <IconLink key={index} link={link} />
      ))}
    </div>
  )
}

function Project({ project }: { project: ProjectType }) {
  const details = project.details

  return (
    <article className="flex flex-col sm:flex-row gap-1 sm:gap-6 items-start">
      <span className="font-semibold">
        <Dates start_date={project.dates.start_date}  end_date={project.dates?.end_date} />
      </span>
      
      <span>
        <header className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-1">
          {/* Title */}
          <h3 className="font-semibold"><NavLink item={{ name: project.meta.title, url: `/projects/${project.meta.slug}` }} /></h3>


          {/* Project Links */}
          {project.details.links && <Links links={details.links ? details.links : []} />}
        </header>

        <div className="text-gray-500 dark:text-gray-400">
          <p className="mb-1 text-sm">{project.meta.description}</p>
          <Tools tools={details.tools} />
        </div>
      </span>
    </article>
  )
}

export function RecentProjects() {
  return (
    <section className='justify-start text-start'>
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <Projects limit={5} />
      <NavLink item={{ name: "View All Projects", url: "/projects" }} />
    </section>
  )
}

export function Projects({ limit = -1 }: { limit: number }) {
	const projectData = limit == -1 ? getProjects() : getProjects(limit)

  return (
    <ol className="mb-4">
      {projectData.map((project) => (
        <li key={project.meta.slug} className="mb-6 ps-4">
          <Project project={project} />
        </li>
      ))}
    </ol>
  )
}
