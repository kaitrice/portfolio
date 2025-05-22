import Link from "next/link"
import { ProfilePicture } from "./components/common/ProfilePicture"
import { RecentProjects } from "./components/projects/RecentProjects"
import { MapPinSimple } from "@phosphor-icons/react/dist/ssr"

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-48 xl:px-100 2xl:px-150 py-6">
      <div className="flex flex-row gap-4 mb-8 items-center">

        <Link href="/about">
          <ProfilePicture width={100} />
        </Link>

        {/* Bio Highlight */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">Kaitlyn Rice</h1>
          <p className="text-sm font-semibold text-gray-400 dark:text-gray-500">Software Developer</p>

          <div className="flex flex-row items-center">
            <MapPinSimple size={16} weight="regular" />
            <p className="text-xs text-gray-500">Seattle, WA</p>
          </div>
        </div>
      </div>

      <RecentProjects />
    </div> 
  )
}
