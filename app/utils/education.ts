import { Education } from "../type/Education"
import education from "../data/education.json"
import { sortByYear } from "./utils"

export function getEducation(): Education[] {
	return sortByYear(education)
}
