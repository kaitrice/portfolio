import Link from "next/link"
import { ProfilePicture } from "./components/common/ProfilePicture"
import { RecentProjects } from "./components/projects/RecentProjects"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Home() {
  return (
    <div className="p-10">
      <div className="flex flex-row gap-4 mb-8 items-center">

        <Link href="/about">
          <ProfilePicture width={100} />
        </Link>

        {/* Bio Highlight */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">Kaitlyn Rice</h1>
          <p className="text-sm font-semibold text-gray-400 dark:text-gray-400">Software Developer</p>

          <div className="flex flex-row items-center">
            <Icon icon="mdi:map-marker-outline" width={16} height={16} />
            <p className="text-xs text-gray-500">Seattle, WA</p>
          </div>
        </div>
      </div>

      <RecentProjects />
    </div> 
  )
}
