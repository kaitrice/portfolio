import type { Metadata } from "next"
import { NavLink, Projects } from "../_components"

export const metadata: Metadata = {
	title: "Kaitlyn Rice | Projects",
	description: "",
}

export default function ProjectsIndex() {
	return (
		<main className="my-4">
			<h1 className='text-4xl font-bold mb-4'>All Projects</h1>
			<section>
				<Projects limit={-1} />
			</section>
			<NavLink item={{ "name": "Go Home", "url": "/" }} />
		</main>
	)
}
