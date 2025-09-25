import { Job } from "./job.type"
import { sortByYear } from "./utils"
import data from "../_lang/en.json"

export function getJobs(): Job[] {
	return sortByYear(data.jobs)
}
