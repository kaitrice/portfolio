import { Project as ProjectType } from '../../_utils/project.type'
import { formatDateToMonthYear } from '@/app/_utils/utils'
import { getProjects } from '@/app/_utils/projects'
import { NavLink } from '../common/NavLink'
import { IconLink } from '../common/Icon'
import { Link } from '@/app/_utils/type'
import { Tools } from './Tools'

function Links({ links }: { links: Link[] }) {
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
  return (
    <article className="flex flex-col sm:flex-row gap-1 sm:gap-6 items-start">
      {/* Dates */}
      <time className='text-sm font-semibold text-gray-500 dark:text-gray-400'>
        {formatDateToMonthYear(project.details.dates?.start_date)} {project.details.dates?.end_date && `– ${formatDateToMonthYear(project.details.dates?.end_date)}`}
      </time>

      <span>
        <header className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-1">
          {/* Title */}
          <h3 className="font-semibold"><NavLink item={{ name: project.meta.title, url: `/projects/${project.meta.slug}` }} /></h3>


          {/* Project Links */}
          {project.details.links && <Links links={project.details.links} />}
        </header>

        <div className="text-gray-500 dark:text-gray-400">
          <p className="mb-1 text-sm">{project.meta.description}</p>
          <div className="text-xs"><Tools tools={project.details.tools} /></div>
        </div>
      </span>
    </article>
  )
}

export function RecentProjects() {
  const recentProjects = getProjects(5)

  return (
    <section className='justify-start text-start'>
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <Projects data={recentProjects} />
      <NavLink item={{ name: "View All Projects", url: "/projects" }} />
    </section>
  )
}

export function Projects({ data }: { data: ProjectType[] }) {
  return (
    // grid grid-cols-[max-content_1fr] gap-y-6 
    <ol className="mb-4">
      {data.map((project) => (
        <li key={project.meta.slug} className="mb-6 ps-4">
          <Project project={project} />
        </li>
      ))}
    </ol>
  )
}
