// import dynamic from 'next/dynamic'
import { Education } from './education.type'
import { Project } from './project.type'
import { Job } from './job.type'

export const iconMap = {
	html: 'logos:html-5',
	css: 'logos:css-3',
	tailwindcss: 'logos:tailwindcss-icon',
	javascript: 'logos:javascript',
	typescript: 'logos:typescript-icon',
	java: 'logos:java',
	react: 'logos:react',
	next: 'simple-icons:nextdotjs',
	node: 'logos:nodejs-icon',
	express: 'simple-icons:express',
	mysql: 'logos:mysql-icon',
	postgresql: 'logos:postgresql',
	
	firebase: 'logos:firebase-icon',
	vercel: 'simple-icons:vercel',
	expo: 'simple-icons:expo',
	figma: 'logos:figma',
	postman: 'logos:postman-icon',
	git: "logos:git-icon",

	github: "mdi:github",
	linkedin: "mdi:linkedin",
	email: "mdi:email-outline",
	preview: "mdi:arrow-top-right"
}

export const caseStudyMap = {
	// "diono-website": dynamic(() => import('@/content/diono-webiste.mdx')),
}

export function findIcon(type: string) {
	const key = type.toLowerCase()
	return iconMap[key as keyof typeof iconMap]
}

export function parseDate(dateStr: string | undefined): Date | null {
	if (typeof dateStr !== "string" || dateStr.toLowerCase() === "present" || dateStr.toLowerCase() === "pause") return null

	const [yearStr, monthStr] = dateStr.split("-")
	const year = parseInt(yearStr, 10)
	const month = parseInt(monthStr, 10)

	if (isNaN(year) || isNaN(month)) return null

	return new Date(year, month - 1, 1)
}

export function formatDateToMonthYear(dateStr: string | undefined): string {
	if (typeof dateStr !== 'string') return "Invalid date"
	if (dateStr.toLowerCase() === "present") return "Present"
	if (dateStr.toLowerCase() === "pause") return "On Pause"

	const date = parseDate(dateStr)
	if (!date || isNaN(date.getTime())) return "Invalid date"

	return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
}

export function sortByYear(data: (Education | Job | Project)[]): (Education | Job | Project)[] {
	return [...data].sort((a, b) => {
		const getDates = (item: Education | Job | Project) => {
			const rawEnd = item.dates?.end_date ?? item.details?.dates?.end_date
			const rawStart = item.dates?.start_date ?? item.details?.dates?.start_date

			return {
				start: parseDate(rawStart),
				end: parseDate(rawEnd),
				hasPresentEnd: typeof rawEnd === "string" && (rawEnd.toLowerCase() === "present" || rawEnd.toLowerCase() === "pause"),
			}
		}

		const aDates = getDates(a)
		const bDates = getDates(b)

		if (aDates.hasPresentEnd && !bDates.hasPresentEnd) return -1
		if (!aDates.hasPresentEnd && bDates.hasPresentEnd) return 1

		if (aDates.end && bDates.end) {
			const endDiff = bDates.end.getTime() - aDates.end.getTime()
			if (endDiff !== 0) return endDiff
		}

		const aStart = aDates.start?.getTime() ?? Infinity
		const bStart = bDates.start?.getTime() ?? Infinity
		return bStart - aStart
	})
}




