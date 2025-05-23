import { getEducation } from "@/app/utils/education"
import { ProfilePicture } from "../common/ProfilePicture"

export function Education() {
    const education = getEducation()
    
    return (
        <>
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
                        {school.minors && 
                        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">Minors: {school.minors}</p>}
                    </div>
                </div>
            ))}
        </>
    )
}