import { getJobs } from "@/app/utils/jobs"

export function Experience() {
    const jobs = getJobs()

    return (
        <ol className="relative border-s-2 border-gray-300 dark:border-gray-700">
            {jobs.map((job) => (
                <li className="mb-10 ms-4" key={job.company}>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                    <div className="flex items-start justify-between">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{job.company}</h3>
                        <time className="mb-1 text-sm font-semibold leading-none text-gray-400 dark:text-gray-500">
                            {job.start_date} {job.end_date && `- ${job.end_date}`}
                        </time>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-2">
                        <h3 className="text-sm text-gray-900 dark:text-white">{job.position}</h3>
                        <div className="hidden sm:block w-2 h-2 rounded-full mt-1.5 bg-gray-300 dark:bg-gray-500"></div>
                        <p className="mb-1 text-sm text-gray-400 dark:text-gray-500">{job.type}</p>
                    </div>
                    <p className="mb-4 text-gray-400 dark:text-gray-500">{job.description}</p>
                </li>
            ))}
        </ol>
    )
}