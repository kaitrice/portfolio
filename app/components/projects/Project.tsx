import { Project as ProjectType } from '../../type/project.type'
import { Link } from '../common/Link'
import { formatDateToMonthYear } from '@/app/utils/utils'
import { Tools } from './Tools'
import { Links } from './Links'

export function Project({ project }: { project: ProjectType }) {
  return (
    <li className="mb-6 ps-4">
      <section className="grid sm:grid-cols-[auto_1fr] gap-1 sm:gap-4 items-start">
        <time className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          {formatDateToMonthYear(project.start_date)} {project.end_date && `– ${formatDateToMonthYear(project.end_date)}`}
        </time>

        <div>
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-1">
            {/* Title */}
            <Link href={`/projects/${project.slug}`} className="hover:text-pink-600">
              <h3 className="font-semibold">{project.title}</h3>
            </Link>

            {/* Project Links */}
            <Links links={project.links} />
          </div>

          <div className="text-gray-500 dark:text-gray-400">
            <p className="mb-1 text-sm">{project.description}</p>
            <Tools tools={project.tools} />
          </div>
        </div>
      </section>
    </li>
  )
}
