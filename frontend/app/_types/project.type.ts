import { DateType, ImageType, LinkType, MetaType } from "."

export type CaseStudy = {
	problem: string
	cause: string
	impact: string

	solution: string
	alt_solution: string
	challenges: string
	results: string
}

export type Details = {
	company?: string
	dates?: DateType
	tools: string[]
	images: ImageType[]
	links?: LinkType[]
}

export type Project = {
	meta: MetaType
	details: Details
	caseStudy?: CaseStudy
}
