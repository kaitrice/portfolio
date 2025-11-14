import Link from "next/link"
import data from "../../_lang/en.json"
import { ProfilePicture, Location } from ".."

const content = data.about

export function Bio() {
    return (
        <header className="flex flex-col text-center items-center mb-12 gap-3 max-w-4xl">
            <div className="mb-8 flex justify-center">
                <ProfilePicture width={180} />
            </div>
            <h1 className='text-4xl font-bold'>{content.name}</h1>
            <span className="text-sm"><Location /></span>
            <p className='whitespace-pre-line'>{content.bio}</p>
        </header>
    )
}

export function Highlight() {
    return (
        <header className="flex flex-row gap-4 mb-8 items-center">

            <Link href="/about">
                <ProfilePicture width={100} />
            </Link>

            <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold">{content.name}</h1>
                <p className="text-sm font-bold text-gray-400 dark:text-gray-400">{content.position}</p>
                <span className="text-xs"><Location /></span>
            </div>
        </header>
    )
}