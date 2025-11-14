export const iconMap = {
	github: "mdi:github",
	linkedin: "mdi:linkedin",
	email: "mdi:email-outline",
	preview: "mdi:arrow-top-right"
}

export function findIcon(type: string) {
	const key = type.toLowerCase()
	return iconMap[key as keyof typeof iconMap]
}

export function parseDate(dateStr?: string): Date | null {
	if (!dateStr) return null;

	const lower = dateStr.toLowerCase();
	if (lower === "present" || lower === "pause") return null;

	const [year, month] = dateStr.split("-").map(Number);
	if (!year || !month) return null;

	return new Date(year, month - 1, 1);
}

export function sortByYear<T extends { details?: any }>(data: T[]): T[] {
	const extract = (item: T) => {
		const dates = item.details?.dates || {};
		const start = parseDate(dates.start_date);
		const end = parseDate(dates.end_date);
		const hasPresentEnd =
			typeof dates.end_date === "string" &&
			["present", "pause"].includes(dates.end_date.toLowerCase());

		return { start, end, hasPresentEnd };
	};

	return [...data].sort((a, b) => {
		const A = extract(a);
		const B = extract(b);

		if (A.hasPresentEnd !== B.hasPresentEnd) {
			return A.hasPresentEnd ? -1 : 1;
		}

		if (A.end && B.end) {
            const diff = B.end.getTime() - A.end.getTime();
            if (diff !== 0) return diff;
        }

		const aStart = A.start?.getTime() ?? -Infinity;
		const bStart = B.start?.getTime() ?? -Infinity;
		return bStart - aStart;
	});
}

export function formatDateToMonthYear(dateStr: string | undefined): string {
	if (typeof dateStr !== 'string') return "Invalid date"
	if (dateStr.toLowerCase() === "present") return "Present"
	if (dateStr.toLowerCase() === "pause") return "On Pause"

	const date = parseDate(dateStr)
	if (!date || isNaN(date.getTime())) return "Invalid date"

	return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
}

