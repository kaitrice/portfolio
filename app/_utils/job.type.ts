import { Dates } from "./type"

export type Job = {
	company: string
	position: string
	type: string
	dates?: Dates
	description?: string
}
