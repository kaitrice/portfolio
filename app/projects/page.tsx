import { getProjects } from '../utils/projects'
import { Projects } from '../components/projects/Projects'
import { Link } from '../components/common/Link'

export default function ProjectsIndex() {
	const allProjects = getProjects()

	return (
		<div className='px-4 sm:px-6 lg:px-48 xl:px-100 2xl:px-150 py-6'>
			<h1 className='text-4xl font-bold mb-4'>All Projects</h1>
			<Projects data={allProjects} />
			<Link href="/" className="hover:text-pink-600">
				Go Home
			</Link>
		</div>
	)
}
