import Link from 'next/link'
import projects from '../data/projects.json'
import { Project } from '../type/Project'

export default function ProjectsIndex() {
	// Group projects by type
	const grouped: Record<string, Project[]> = {
		website: [],
		app: [],
		game: [],
		software: []
	}

	for (const project of projects as Project[]) {
		grouped[project.type].push(project)
	}

	// Sort each group by year (decending)
	for (const type in grouped) {
		grouped[type].sort((a, b) => {
			const getYear = (timeline: string) =>
				parseInt(timeline.split('–')[0] || timeline.split('-')[0] || '0', 10)
			return getYear(b.timeline) - getYear(a.timeline)
		})
	}

	return (
		<div className='px-4 sm:px-6 lg:px-48 py-6'>
			<h1 className='text-4xl font-bold mb-4'>All Projects</h1>
			{Object.entries(grouped).map(([type, projects]) =>
				projects.length > 0 ? (
					<div key={type} className='mb-8'>
						<h2 className='text-2xl font-semibold mb-2 capitalize'>{type}</h2>
						<ul>
							{projects.map((project) => (
								<li key={project.slug} className='mb-1 ps-4'>
									<Link href={`/projects/${project.slug}`} className='hover:underline hover:underline-offset-6'>
										{project.title} ({project.timeline})
									</Link>
								</li>
							))}
						</ul>
					</div>
				) : null
			)}
		</div>
	)
}
