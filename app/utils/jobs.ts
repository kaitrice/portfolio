import { Job } from "../type/job.type"
import jobs from "../data/jobs.json"
import { sortByYear } from "./utils"

export function getJobs(): Job[] {
	return sortByYear(jobs)
}
