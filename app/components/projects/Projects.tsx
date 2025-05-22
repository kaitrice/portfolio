import { Project as ProjectType } from '../../type/project'
import { Project } from "./Project"

export function Projects({ data }: { data: ProjectType[] }) {
  return (
    <ul className="mb-4">
      {data.map((project) => (
        <Project key={project.slug} project={project} />
      ))}
    </ul>
  )
}

