import { Education } from "./education.type"
import { sortByYear } from "./utils"
import education from "../_data/education.json"

export function getEducation(): Education[] {
	return sortByYear(education)
}
