import { DetailType, formatDateToMonthYear } from "@/app/_utils";
import { IconLink, Tools } from "..";

export function Details({ details }: { details: DetailType }) {
    return (
        <div className="flex-shrink-0">
            <h2>Overview</h2>

            <div className="flex flex-col gap-4 text-sm">
                {details.company && (
                    <div>
                        <h3 className="text-base font-bold">Company</h3>
                        <p>{details.company}</p>
                    </div>
                )}
                {details.dates && (
                    <div>
                        <h3 className="text-base font-bold">Timeline</h3>
                        <p>{formatDateToMonthYear(details.dates?.start_date)} {details.dates?.end_date && `– ${formatDateToMonthYear(details.dates.end_date)}`}</p>
                    </div>
                )}

                <div>
                    <h3 className="text-base font-bold">Tools</h3>
                    <Tools tools={details.tools} />
                </div>

                {details.links && (
                    <div className="flex flex-wrap items-start gap-2">
                        {details.links?.map((link, index) => (
                            <IconLink key={index} link={link} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}