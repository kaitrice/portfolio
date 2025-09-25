import type { Metadata } from "next"
import { getProjects } from '../_utils/projects'
import { Projects } from '../_components/projects/Projects'
import { NavLink } from "../_components/common/NavLink"
import data from "../_lang/en.json"

const content = data.projects

export const metadata: Metadata = {
	title: content.meta.title,
	description: content.meta.description,
}

export default function ProjectsIndex() {
	const projectData = getProjects()

	return (
		<main>
			<h1 className='text-4xl font-bold mb-4'>{content.title}</h1>
			<section>
				<Projects data={projectData} />
			</section>
			<NavLink item={{ "name": "Go Home", "url": "/" }} />
		</main>
	)
}
