import { Project as ProjectType } from '../../type/project.type'
import { Link } from '../common/Link'
import { formatDateToMonthYear } from '@/app/utils/utils'
import { Icon } from '@iconify/react/dist/iconify.js'

export function Project({ project }: { project: ProjectType }) {
  return (
    <li className="mb-6 ps-4">
      <div className="grid sm:grid-cols-[auto_1fr] gap-1 sm:gap-4 items-start">
        <time className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          {formatDateToMonthYear(project.start_date)} {project.end_date && `– ${formatDateToMonthYear(project.end_date)}`}
        </time>

        <div>
          <div className="flex flex-wrap items-start gap-2 sm:gap-4 mb-1">
            {/* Title */}
            <Link href={`/projects/${project.slug}`} className="hover:text-pink-600">
              <h3 className="font-semibold">{project.title}</h3>
            </Link>

            {/* Project Links */}
            {project.links.map((link, index) => (
              <Link key={index} href={link.url} aria-label={link.type ?? "external link"} className="hover:text-pink-600" >
                {link.type === 'github' ? (
                  <Icon icon="akar-icons:github-fill" width={24} height={24} />
                ) : (
                  <Icon icon="mdi:arrow-top-right" width={24} height={24} />
                )}
              </Link>
            ))}
          </div>

          <div className="text-gray-500 dark:text-gray-400">
            <p className="mb-1 text-sm">{project.description}</p>
            {/* Tool */}
            {project.tools?.length > 0 && (
              <div className="flex flex-wrap gap-1 text-xs text-gray-400 dark:text-gray-500">
                {project.tools.map((tool, index) => (
                  <span key={index}>
                    {tool}
                    {index < project.tools.length - 1 &&
                    <span className="leading-none px-1">&bull;</span>
                    }
                    
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}
