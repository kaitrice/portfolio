import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProject, getProjects } from '@/app/_utils'
import { CaseStudy, Details, Gallery } from '@/app/_components'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params
	const project = getProject(slug)

	if (!project) notFound()

	return {
		title: `Kaitlyn Rice | ${project.meta.title}`,
		description: project.meta.description,
	}
}

export async function generateStaticParams() {
	const projects = await getProjects()

	return projects.map((project) => ({
		slug: project.meta.slug,
	}))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const project = getProject(slug)
	if (!project) notFound()

	const details = project.details
	const hasGallery = (details.images?.length ?? 0) > 1

	return (
		<main className='my-4'>
			<header className="sticky top-0 z-10 bg-neutral-50 dark:bg-neutral-900 pt-6 pb-6">
				<h1 className="text-4xl font-bold mb-2">{project.meta.title}</h1>
				<p className="text-lg text-gray-500 dark:text-gray-400">{project.meta.description}</p>
			</header>

			<div className="flex flex-col md:grid md:grid-cols-4 gap-10 md:gap-16">
				<div className="order-2 md:order-0 md:col-span-3 space-y-10">
					<section className='px-2 md:px-10'>
						{details.images?.length > 0 && (
							<article className="relative w-full aspect-video rounded overflow-hidden">
								<Image
									src={details.images[0].url}
									alt={details.images[0].alt}
									fill
									className="object-cover"
								/>
							</article>
						)}
					</section>

					{project.caseStudy && <CaseStudy caseStudy={project.caseStudy} />}
					{hasGallery && <Gallery images={details.images} />}
				</div>

				<aside className="order-1 md:sticky md:top-30 md:self-start md:z-20">
					<Details details={details} />
				</aside>
			</div>
		</main>
	)
}

