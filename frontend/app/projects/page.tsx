import data from "../_lang/en.json"
import type { Metadata } from "next"
import { getProjects } from "../_utils"
import { NavLink, Projects } from "../_components"

const content = data.projects

export const metadata: Metadata = {
	title: content.meta.title,
	description: content.meta.description,
}

export default function ProjectsIndex() {
	const projectData = getProjects()

	return (
		<main className="my-4">
			<h1 className='text-4xl font-bold mb-4'>{content.title}</h1>
			<section>
				<Projects data={projectData} />
			</section>
			<NavLink item={{ "name": "Go Home", "url": "/" }} />
		</main>
	)
}
