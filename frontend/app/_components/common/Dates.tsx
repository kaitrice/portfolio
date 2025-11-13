import { DateType, formatDateToMonthYear } from "@/app/_utils"

export function Dates({ start_date, end_date }: DateType) {
    const startDate = formatDateToMonthYear(start_date)
    const endDate = formatDateToMonthYear(end_date)

    return (
        <time className="order-1 text-sm font-semibold text-gray-500 dark:text-gray-400" aria-label={`Start and end dates`}>
            {startDate} {endDate && ` – ${endDate}`}
        </time>

    )
}