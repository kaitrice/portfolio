export function parseDate(dateStr: string): Date | null {
	if (typeof dateStr !== "string") return null
	if (dateStr.toLowerCase() === "present") return null

	const [yearStr, monthStr] = dateStr.split("-")
	const year = parseInt(yearStr, 10)
	const month = parseInt(monthStr, 10)

	if (isNaN(year) || isNaN(month)) return null

	return new Date(year, month - 1, 1)
}

export function formatDateToMonthYear(dateStr: string): string {
	if (dateStr.toLowerCase() === "present") return "Present"
	const date = parseDate(dateStr)
	if (!date || isNaN(date.getTime())) return "Invalid date"
	return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
}

export function sortByYear<T extends { start_date: string }>(data: T[]): T[] {
	return [...data].sort((a, b) => {
		const aDate = parseDate(a.start_date)
		const bDate = parseDate(b.start_date)

		const aTime = aDate ? aDate.getTime() : 0
		const bTime = bDate ? bDate.getTime() : 0

		return bTime - aTime
	})
}
