import Image from "next/image";
import Link from "next/link";
import RecentProjects from "./components/projects";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-48 py-6">
      <div className="flex flex-col mb-8">
        <Link href="/about">
          <Image src="/images/Headshot_Kaitlyn.webp" alt="Portrait of Kaitlyn" width={90} height={90} className="mb-6 rounded-full shadow" />
        </Link>
        <h1 className="text-xl font-bold">Kaitlyn Rice</h1>
        <p>about</p>
      </div>

      <RecentProjects />
    </div> 
  )
}
