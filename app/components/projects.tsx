import Link from 'next/link'
import projects from '../data/projects.json'
import { Project } from '../type/Project'

export default function RecentProjects() {
  const getYear = (timeline: string) =>
    parseInt(timeline.split('–')[0] || timeline.split('-')[0] || '0', 10)

  const recentProjects = [...(projects as Project[])]
    .sort((a, b) => getYear(b.timeline) - getYear(a.timeline))
    .slice(0, 5)

  return (
    <div className="">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>

      <ul className="mb-4">
        {recentProjects.map((project) => (
          <li key={project.slug} className="mb-1 ps-4">
            <Link href={`/projects/${project.slug}`} className="hover:underline hover:underline-offset-6">
              {project.title} ({project.timeline})
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/projects" className="text-blue-600 hover:underline hover:underline-offset-4">
        View All Projects
      </Link>
    </div>
  )
}
