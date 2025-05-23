import { getEducation } from "@/app/utils/education"
import { ProfilePicture } from "../common/ProfilePicture"

export function Education() {
    const education = getEducation()

    return (
        <section className="mb-8">
            <h2 className='text-2xl font-bold mb-4'>Education</h2>
            {education.map((school) => (
                <div key={school.name} className="flex flex-row gap-4 mb-8 items-center">
                    <ProfilePicture width={60} src={school.meta.src} alt={`${school.name} logo`} />

                    <div className="flex flex-col w-full">
                        <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2">
                            <h1 className="order-2 sm:order-1 flex-1 text-lg sm:text-xl font-bold">{school.name}</h1>
                            <time className="order-1 text-sm text-gray-500 dark:text-gray-400 font-bold">
                                {school.start_date}{school.end_date && ` – ${school.end_date}`}
                            </time>
                        </div>
                        <h2 className="text-sm text-gray-900 dark:text-white">{school.degree}</h2>

                        <div className="my-1 text-sm text-gray-500 dark:text-gray-400">
                            {/* Minors */}
                            {school.minors && school.minors.length > 0 && (
                                <div className="mb-1 flex flex-wrap items-center gap-1">
                                    <span className="font-bold mr-1">Minors:</span>
                                    {school.minors.map((item, index) => (
                                        <span key={index} className="flex items-center">
                                            {item}
                                            {index < school.minors.length - 1 && (
                                                <span className="mx-1">&bull;</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {/* Research */}
                            {school.research && school.research.length > 0 && (
                                <div className="mb-1 flex flex-wrap items-center gap-1">
                                    <span className="font-bold mr-1">Research:</span>
                                    {school.research.map((item, index) => (
                                        <span key={index} className="flex items-center">
                                            {item}
                                            {index < school.research.length - 1 && (
                                                <span className="mx-1">&bull;</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            ))}
        </section>
    )
}