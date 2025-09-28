// import dynamic from 'next/dynamic'
import { SortableItem } from './type'

export const iconMap = {
	html: 'logos:html-5',
	css: 'logos:css-3',
	javascript: 'logos:javascript',
	typescript: 'logos:typescript-icon',
	java: 'logos:java',
	python: 'logos:python',
	swift: 'logos:swift',

	tailwindcss: 'logos:tailwindcss-icon',
	react: 'logos:react',
	next: 'simple-icons:nextdotjs',
	node: 'logos:nodejs-icon',
	mysql: 'logos:mysql-icon',
	postgresql: 'logos:postgresql',
	express: 'simple-icons:express',
	flask: 'simple-icons:flask',
	django: 'simple-icons:django',
	tensorflow: 'simple-icons:tensorflow',
	pytorch: 'simple-icons:pytorch',
	pandas: 'simple-icons:pandas',
	numpy: 'simple-icons:numpy',
	
	firebase: 'logos:firebase-icon',
	vercel: 'simple-icons:vercel',
	expo: 'simple-icons:expo',
	figma: 'logos:figma',
	postman: 'logos:postman-icon',
	git: "logos:git-icon",
	docker: "logos:docker-icon",
	azure: "logos:azure-icon",
	aws: "logos:aws",

	github: "mdi:github",
	linkedin: "mdi:linkedin",
	email: "mdi:email-outline",
	preview: "mdi:arrow-top-right"
}

export const caseStudyMap = {
	// "diono-website": dynamic(() => import('@/content/diono-webiste.mdx')),
	// "diono": dynamic(() => import('@/content/diono-webiste.mdx')),
}

export type CaseStudyKey = keyof typeof caseStudyMap

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

export function sortByYear<T extends SortableItem>(data: T[]): T[] {
	return [...data].sort((a, b) => {
		const getDates = (item: SortableItem) => {
			const rawEnd = item.dates?.end_date ?? item.details?.dates?.end_date
			const rawStart = item.dates?.start_date ?? item.details?.dates?.start_date

			return {
				start: parseDate(rawStart),
				end: parseDate(rawEnd),
				hasPresentEnd:
					typeof rawEnd === "string" &&
					(rawEnd.toLowerCase() === "present" || rawEnd.toLowerCase() === "pause"),
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
		return bStart - aStart;
	})
}
