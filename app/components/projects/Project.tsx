import { ArrowCircleUpRight, GithubLogo } from '@phosphor-icons/react/dist/ssr'
import { Project as ProjectType } from '../../type/project'
import { Link } from '../common/Link'

export function Project({ project }: { project: ProjectType }) {
  return (
    <li className="mb-6 ps-4">
      <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
        <time className="text-sm font-semibold text-gray-400 dark:text-gray-500">
          {project.start_date}
        </time>

        <div>
          <div className="flex flex-wrap items-start gap-2">
            {/* Title */}
            <Link href={`/projects/${project.slug}`} className="hover:text-pink-600">
              <h3 className="font-semibold">{project.title}</h3>
            </Link>

            {/* Project Links */}
            {project.links.map((link, index) => (
              <Link key={index} href={link.url} aria-label={link.type ?? "external link"} className="hover:text-pink-600" >
                {link.type === "github" ? (
                  <GithubLogo size={24} weight="regular" />
                ) : (
                  <ArrowCircleUpRight size={24} weight="regular" />
                )}
              </Link>
            ))}
          </div>

          <div className="text-gray-400 dark:text-gray-500">
            <p className="mb-2 text-sm">{project.description}</p>
            {/* Tool */}
            {project.tools?.length > 0 && (
              <div className="flex flex-wrap gap-1 text-xs text-gray-500">
                {project.tools.map((tool, index) => (
                  <span key={index}>
                    {tool}
                    {index < project.tools.length - 1 && <span className="px-1">|</span>}
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
