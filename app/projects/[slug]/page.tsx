import projects from '../../data/projects.json'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectPage({ params }: { params: { slug: string } }) {
	const project = projects.find((p) => p.slug === params.slug)

	if (!project) {
		notFound()
	}

	return (
		<div className="px-4 sm:px-6 lg:px-48 py-6">
			<h1 className="text-4xl font-bold mb-4">{project.title}</h1>

			{/* Metadata */}
			<div className="text-gray-600 text-sm mb-4">
				{project.timeline && <p><strong>Timeline:</strong> {project.timeline}</p>}
				{project.company && <p><strong>Company:</strong> {project.company}</p>}
				{project.tool && <p><strong>Tools:</strong> {project.tool}</p>}
			</div>

			{/* Description */}
			<p className="mb-6">{project.description}</p>

			{/* Image */}
			{project.image && (
				<Image src={project.image} alt={project.title} width={24} height={24} className="mb-6 rounded shadow" />
			)}

			{/* Links */}
			{project.links && project.links.length > 0 && (
				<div className="space-x-4">
					{project.links.map((linkObj, idx) => {
						const [label, url] = Object.entries(linkObj)[0]
						return (
							<Link
								key={idx}
								href={url}
								className="inline-block text-blue-600 hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								{label.charAt(0).toUpperCase() + label.slice(1)} ↗
							</Link>
						)
					})}
				</div>
			)}
		</div>
	)
}
