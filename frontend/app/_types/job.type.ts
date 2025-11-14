import { DateType } from "./"

export type Job = {
	company: string
	position: string
	details:  {
		type: string
		dates: DateType
		description?: string
	}
}
