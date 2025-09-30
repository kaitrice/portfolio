import { Dates as DateProps } from "@/app/_utils/type"
import { formatDateToMonthYear } from "@/app/_utils/utils"

export function Dates({ start_date, end_date }: DateProps) {
    const startDate = formatDateToMonthYear(start_date)
    const endDate = formatDateToMonthYear(end_date)

    return (
        <time className="order-1 text-sm font-semibold text-gray-500 dark:text-gray-400" aria-label={`Start and end dates`}>
            {startDate} {endDate && ` – ${endDate}`}
        </time>

    )
}