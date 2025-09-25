import { Dates, Image, Link, Meta } from "./type"

export type Details = {
	company?: string
	dates?: Dates
	tools: string[]
	images: Image[]
	links?: Link[]
	hasCaseStudy?: boolean
}

export type Project = {
	meta: Meta
	details: Details
}

