import { RecentProjects } from "./_components/projects/Projects"
import { Highlight } from "./_components/about/Bio"

export default function Home() {
  return (
    <main className="my-4">
      <Highlight />
      <RecentProjects />
    </main>
  )
}
