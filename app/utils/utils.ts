function getYear(dateRange: string): number {
	const normalized = dateRange.replace(/–/g, '-')
	const year = normalized.split('-')[0]
	return /^\d{4}$/.test(year) ? parseInt(year, 10) : 0
}

export function sortByYear<T extends { start_date: string }>(data: T[]): T[] {
	const sortedData = [...data].sort(
		(a, b) => getYear(b.start_date) - getYear(a.start_date)
	)
	return sortedData
}

