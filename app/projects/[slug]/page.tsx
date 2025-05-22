import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProject, getProjects } from '@/app/utils/projects'
import { Project } from '@/app/type/project'
import { Link } from '@/app/components/common/Link'
import { ArrowCircleUpRight, GithubLogo } from '@phosphor-icons/react/dist/ssr'

function Details({ project }: { project: Project }) {
	return (
		<div className="sm:w-64 flex-shrink-0">
			<div className="font-semibold text-gray-600 text-sm mb-4">
				{project.start_date && <p>Timeline: {project.start_date}</p>}
				{project.company && <p>Company: {project.company}</p>}
				{project.tools?.length > 0 && (
					<div className="flex flex-wrap gap-1">
						<span>Tools:</span>
						{project.tools.map((tool, index) => (
							<span key={index}>
								{tool}
								{index < project.tools.length - 1 && <span className="px-1">|</span>}
							</span>
						))}
					</div>
				)}
			</div>

			<div className="flex flex-wrap items-start gap-2">
				{project.links.map((link, index) => (
					<Link
						key={index}
						href={link.url}
						aria-label={link.type ?? 'external link'}
						className="hover:text-pink-600"
					>
						{link.type === 'github' ? (
							<GithubLogo size={20} weight="regular" />
						) : (
							<ArrowCircleUpRight size={20} weight="regular" />
						)}
					</Link>
				))}
			</div>
		</div>
	)
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
	const project: Project | undefined = getProject(slug)

	if (!project) notFound()

	const hasCaseStudyOrImages = !!project.caseStudy || (project.images?.length ?? 0) > 1

	return (
		<div className="px-4 sm:px-6 lg:px-48 py-6">
			<h1 className="text-4xl font-bold mb-1">{project.title}</h1>
			<p className="mb-6">{project.description}</p>

			{project.images && (
				<div className="relative w-full aspect-video mb-6 rounded overflow-hidden">
					<Image
						src={project.images[0]}
						alt={`${project.title} thumbnail`}
						fill
						className="object-cover"
					/>
				</div>
			)}

			<div className={`flex ${hasCaseStudyOrImages ? 'flex-col sm:flex-row gap-6' : 'block'}`}>
				{hasCaseStudyOrImages && (
					<div className="flex-1">
						{project.caseStudy && (
							<div>
								<h2 className="text-2xl font-bold mb-1">Case Study</h2>
								<div
									className="prose prose-sm max-w-none"
									dangerouslySetInnerHTML={{ __html: project.caseStudy }}
								/>
							</div>
						)}

						{project.images?.length > 1 && (
							<div className="mt-6">
								<h2 className="text-2xl font-bold">Images</h2>
								<div className="flex flex-wrap gap-1 items-center text-xs text-gray-500 mb-4">
									{project.images.slice(1).map((image, index) => (
										<Image
											key={index}
											src={image}
											alt={`${project.title} image ${index + 2}`}
											width={24}
											height={24}
											className="rounded shadow"
											loading="lazy"
										/>
									))}
								</div>
							</div>
						)}
					</div>
				)}

				<Details project={project} />
			</div>
		</div>
	)
}

export async function generateStaticParams() {
	const projects = await getProjects()
	
	return projects.map((project) => ({
		slug: project.slug,
	}))
}

