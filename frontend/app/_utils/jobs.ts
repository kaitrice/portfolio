import { Job } from "./job.type"
import { sortByYear } from "./utils"
import jobs from "../_data/jobs.json"

export function getJobs(): Job[] {
	return sortByYear(jobs)
}
