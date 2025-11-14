import { DetailType } from "@/app/_utils";
import { Dates, IconLink, Tools } from "..";

export function Details({ details }: { details: DetailType }) {
    return (
        <div className="flex-shrink-0">
            <h2 className="">Overview</h2>

            <div className="flex flex-col gap-4">
                {details.company && (
                    <div>
                        <h3 className="text-base font-bold">Company</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{details.company}</p>
                    </div>
                )}
                <div>
                    <h3 className="text-base font-bold">Timeline</h3>
                    <Dates start_date={details.dates.start_date} end_date={details.dates.end_date} />
                </div>

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