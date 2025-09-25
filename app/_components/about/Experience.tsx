import { Job as JobType } from "@/app/_utils/job.type"
import { getJobs } from "@/app/_utils/jobs"
import { formatDateToMonthYear } from "@/app/_utils/utils"

function Job({ job }: { job: JobType }) {
	return (
		<li className="mb-4 ms-4">
			<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />

			<article>
				<header className="flex flex-col sm:flex-row items-start sm:justify-between gap-2">
					<h3 className="order-2 sm:order-1 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
						{job.company}
					</h3>
					<time className="order-1 text-sm font-semibold text-gray-500 dark:text-gray-400"  aria-label={`Date worked at ${job.company}`}>
						{job.dates?.start_date && `${formatDateToMonthYear(job.dates.start_date)}`}
						{job.dates?.end_date && ` – ${formatDateToMonthYear(job.dates.end_date)}`}
					</time>
				</header>

				<div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center">
					<h4 className="text-sm text-gray-900 dark:text-white">{job.position}</h4>
					{job.type && (
						<>
							<span className="hidden sm:inline text-gray-500 dark:text-gray-400">&bull;</span>
							<p className="text-sm text-gray-500 dark:text-gray-400">{job.type}</p>
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
