import { DateType } from "./"

export type Job = {
	company: string
	position: string
	type: string
	description?: string
	dates: DateType
}
