export type Project = {
	slug: string
	company: string
	start_date: string
	tools: string[]
	title: string
	description: string
	images: string[]
	links: {
		type?: string
		url: string
	}[]
	caseStudy?: string
}
