import { Job as JobType } from "@/app/_utils/job.type"
import { getJobs } from "@/app/_utils/jobs"
import { formatDateToMonthYear } from "@/app/_utils/utils"

function Job({ job }: { job: JobType }) {
	const company = job.company
	const position = job.position
	const type = job.type
	const startDate = job?.dates?.start_date ? formatDateToMonthYear(job.dates.start_date) : ""
	const endDate = job?.dates?.end_date ? formatDateToMonthYear(job.dates.end_date) : ""
	const hasDates = (startDate || endDate)

	return (
		<li className="mb-4 ms-4">
			<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />

			<article>
				<header className="flex flex-col sm:flex-row items-start sm:justify-between gap-2">
					<h3 className="order-2 sm:order-1 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
						{company}
					</h3>
					{hasDates && (
						<time className="order-1 text-sm font-semibold text-gray-500 dark:text-gray-400"  aria-label={`Date worked at ${company}`}>
						{startDate} {endDate && `- ${endDate}`}
					</time>
					)}
				</header>

				<div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center">
					<h4 className="text-sm text-gray-900 dark:text-white">{position}</h4>
					{type && (
						<>
							<span className="hidden sm:inline text-gray-500 dark:text-gray-400">&bull;</span>
							<p className="text-sm text-gray-500 dark:text-gray-400">{type}</p>
						</>
					)}
				</div>
			</article>
		</li>
	)
}

export function Experience() {
	const jobs = getJobs()

	return (
		<section className="mb-8 w-full">
			<h2>Experience</h2>
			<ol className="relative border-s-2 border-gray-300 dark:border-gray-700 mb-4">
				{jobs.map((job, index) => (
					<Job key={index} job={job} />
				))}
			</ol>
		</section>
	)
}
