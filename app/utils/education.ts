import { Education } from "../type/education"
import education from "../data/education.json"
import { sortByYear } from "./utils"

export function getEducation(): Education[] {
	return sortByYear(education)
}
