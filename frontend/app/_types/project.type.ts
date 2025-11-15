import { DateType, ImageType, LinkType, MetaType } from "."

export type CaseStudy = {
	project_description?: string
	problem: string
	cause?: string
	impact?: string
	solution: string
	alt_solution?: string
	challenges: string[]
	results?: string
}

export type Details = {
	company?: string
	tools: string[]
	images: ImageType[]
	links?: LinkType[]
}

export type Project = {
	meta: MetaType
	dates: DateType
	details: Details
	caseStudy?: CaseStudy
}
