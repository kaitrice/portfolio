
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { IconLink } from '@/app/_components/common/Icon'
import { Gallery } from '@/app/_components/projects/Gallery'
import { Tools } from '@/app/_components/projects/Tools'
import { formatDateToMonthYear, getProject, getProjects, ProjectType } from '@/app/_utils'

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

function Details({ project }: { project: ProjectType }) {
    return (
        <div className="flex-shrink-0">
            <h2>Overview</h2>

            <div className="flex flex-col gap-4 text-sm">
                {project.details.company && (
                    <div>
                        <h3 className="text-base font-bold">Company</h3>
                        <p>{project.details.company}</p>
                    </div>
                )}
                {project.details.dates && (
                    <div>
                        <h3 className="text-base font-bold">Timeline</h3>
                        <p>{formatDateToMonthYear(project.details.dates?.start_date)} {project.details.dates?.end_date && `– ${formatDateToMonthYear(project.details.dates.end_date)}`}</p>
                    </div>
                )}

                <div>
                    <h3 className="text-base font-bold">Tools</h3>
                    <Tools tools={project.details.tools} />
                </div>

                {project.details.links && (
                    <div className="flex flex-wrap items-start gap-2">
                        {project.details.links?.map((link, index) => (
                            <IconLink key={index} link={link} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const project = getProject(slug)

	if (!project) notFound()

	const hasCaseStudy = project.details.hasCaseStudy && project.meta.slug
	const hasGallery = (project.details.images?.length ?? 0) > 1

	return (
		<main className='my-4'>
			<header className="md:sticky md:top-0 md:z-10 bg-neutral-50 dark:bg-neutral-900 md:pt-6 md:pb-6">
				<h1 className="text-4xl font-bold mb-2">{project.meta.title}</h1>
				<p className="text-lg text-neutral-700 dark:text-neutral-300">{project.meta.description}</p>
			</header>

			<div className="flex flex-col md:grid md:grid-cols-4 gap-10 md:gap-16 mt-10">
				<section className="order-2 md:order-0 md:col-span-3 space-y-10">
					{project.details.images?.length > 0 && (
						<div className="relative w-full aspect-video rounded overflow-hidden">
							<Image
								src={project.details.images[0].url}
								alt={project.details.images[0].alt}
								fill
								className="object-cover"
							/>
						</div>
					)}
					{hasCaseStudy && (
						<p></p>
					)}
					{hasGallery && <Gallery images={project.details.images} />}
				</section>

				<aside className="order-1 md:sticky md:top-30 md:self-start md:z-20">
					<Details project={project} />
				</aside>
			</div>
		</main>
	)
}

