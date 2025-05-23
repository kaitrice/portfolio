import { getProjects } from "@/app/utils/projects"
import { Link } from "../common/Link"
import { Projects } from "./Projects"

export function RecentProjects() {
  const recentProjects = getProjects(5)

  return (
    <section className='justify-start text-start'>
      <h2 className="text-4xl font-bold mb-4">Projects</h2>

      <Projects data={recentProjects} />

      <Link href="/projects" className="hover:text-pink-600">
        View All Projects
      </Link>
    </section>
  )
}
