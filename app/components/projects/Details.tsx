import { Project } from "@/app/type/project.type";
import { formatDateToMonthYear } from "@/app/utils/utils";
import { Link } from "../common/Link";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Details({ project }: { project: Project }) {
    return (
        <div className="flex-shrink-0">
            <div className="text-sm mb-4">
                {/* Date */}
                {project.start_date && 
                <p className='mb-2'>
                    <span className='font-semibold'>Timeline: </span>
                    <span>
                        {formatDateToMonthYear(project.start_date)} {project.end_date && `– ${formatDateToMonthYear(project.end_date)}`}
                    </span>
                </p>}

                {/* Company */}
                {project.company && 
                <p className='mb-2'>
                    <span className='font-semibold'>Company: </span>
                    <span>
                        {project.company}
                    </span>
                </p>}

                {/* Tools */}
                {project.tools?.length > 0 && (
                    <div className="flex flex-wrap gap-1 text-sm">
                        <span className="font-semibold">Tools:</span>
                        {project.tools.map((tool, index) => (
                            <span key={index} className="flex items-center">
                                <span>{tool}</span>
                                {index < project.tools.length - 1 && (
                                    <span className="ms-1">&bull;</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-start gap-2">
                {project.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        aria-label={link.type ?? 'external link'}
                        className="hover:text-pink-600"
                    >
                        {link.type === 'github' ? (
                            <Icon icon="akar-icons:github-fill" width={24} height={24} />
                        ) : (
                            <Icon icon="mdi:arrow-top-right" width={24} height={24} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    )
}