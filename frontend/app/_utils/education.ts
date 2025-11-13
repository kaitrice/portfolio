import { Education } from "./education.type"
import { sortByYear } from "./utils"
import data from "../_lang/en.json"

export function getEducation(): Education[] {
	return sortByYear(data.education)
}
