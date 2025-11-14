import { Job } from "../_types/job.type"
import { sortByYear } from "./utils"
import jobs from "../_data/jobs.json"

export function getJobs(): Job[] {
	return sortByYear(jobs)
}
