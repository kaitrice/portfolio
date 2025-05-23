import { Job as JobType } from "@/app/type/job.type"
import { getJobs } from "@/app/utils/jobs"
import { formatDateToMonthYear } from "@/app/utils/utils"
import { Link } from "../common/Link"

function Job({ job }: { job: JobType }) {
    return (
        <li className="mb-4 ms-4" key={job.company}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{job.company}</h3>
                <time className="mb-1 text-sm font-semibold leading-none text-gray-500 dark:text-gray-400">
                    {formatDateToMonthYear(job.start_date)} {job.end_date && `– ${formatDateToMonthYear(job.end_date)}`}
                </time>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <h3 className="text-sm text-gray-900 dark:text-white">{job.position}</h3>
                <p className=" hidden sm:block leading-none text-xl text-gray-500 dark:text-gray-400">&bull;</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{job.type}</p>
            </div>

        </li>
    )
}

export function Experience() {
    const jobs = getJobs()

    return (
        <div>
            <ol className="relative border-s-2 border-gray-300 dark:border-gray-700">
                {jobs.map((job, index) => (
                    <Job key={index} job={job} />
                ))}
            </ol>
            <Link href="/KaitlynRice-Resume.pdf" className="hover:text-pink-600">
                View Resume
            </Link>
        </div>
    )
}
